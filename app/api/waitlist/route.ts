import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get Supabase client
    const supabase = getSupabaseClient();

    // Insert into waitlist table
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { name, email }
      ]);

    if (error) {
      console.error("Error inserting into waitlist:", error);
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
    console.error("Error saving to waitlist:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
