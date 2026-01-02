import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { z } from "zod";

// Request body size limit (in characters, roughly bytes for ASCII)
const MAX_BODY_SIZE = 1024; // 1KB max

// Strict validation schema
const WaitlistSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s\-'\.]+$/, "Name contains invalid characters")
    .transform((val) => val.trim()),
  email: z
    .string()
    .min(1, "Email is required")
    .max(254, "Email must be less than 254 characters")
    .email("Invalid email format")
    .transform((val) => val.toLowerCase().trim()),
  // Honeypot field - should always be empty
  website: z.string().max(0, "Invalid submission").optional(),
});

// Sanitize string to prevent XSS
function sanitizeString(str: string): string {
  return str
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

export async function POST(request: Request) {
  try {
    // Check content-type
    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 415 }
      );
    }

    // Get raw body text to check size
    const bodyText = await request.text();
    
    // Check body size
    if (bodyText.length > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: "Request body too large" },
        { status: 413 }
      );
    }

    // Parse JSON
    let body: unknown;
    try {
      body = JSON.parse(bodyText);
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON" },
        { status: 400 }
      );
    }

    // Validate with Zod schema
    const validationResult = WaitlistSchema.safeParse(body);
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message);
      return NextResponse.json(
        { error: errors[0] || "Validation failed" },
        { status: 400 }
      );
    }

    const { name, email, website } = validationResult.data;

    // Honeypot check - if website field has value, it's a bot
    if (website && website.length > 0) {
      // Silently reject but return success to fool bots
      return NextResponse.json(
        { message: "Successfully added to waitlist" },
        { status: 200 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeString(name);
    const sanitizedEmail = sanitizeString(email);

    // Get server Supabase client (with service role key)
    let supabase;
    try {
      supabase = getSupabaseServerClient();
    } catch {
      // If Supabase is not configured, log and return error
      // Don't expose internal details
      return NextResponse.json(
        { error: "Service temporarily unavailable" },
        { status: 503 }
      );
    }

    // Check for duplicate email
    const { data: existingEntry } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', sanitizedEmail)
      .single();

    if (existingEntry) {
      // Return success even for duplicates to avoid email enumeration
      return NextResponse.json(
        { message: "Successfully added to waitlist" },
        { status: 200 }
      );
    }

    // Insert into waitlist table
    const { error } = await supabase
      .from('waitlist')
      .insert([
        { 
          name: sanitizedName, 
          email: sanitizedEmail,
          created_at: new Date().toISOString(),
        }
      ]);

    if (error) {
      // Log error securely (don't log PII)
      console.error("Waitlist insert error:", {
        code: error.code,
        hint: error.hint,
        // Don't log the actual data
      });
      
      return NextResponse.json(
        { error: "Failed to save to waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully added to waitlist" },
      { status: 200 }
    );
  } catch (error) {
    // Log error without exposing details
    console.error("Waitlist API error:", error instanceof Error ? error.name : 'Unknown error');
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Explicitly handle other methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
