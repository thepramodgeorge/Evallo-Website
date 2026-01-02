// This module should ONLY be imported in server contexts (API routes, Server Components)
// The 'server-only' package ensures this module cannot be imported in client components
import 'server-only';

import { createClient, SupabaseClient } from '@supabase/supabase-js';

let serverSupabase: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient {
  if (serverSupabase) return serverSupabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables for server Supabase client'
    );
  }

  // Create client with service role key for server-side operations
  // This bypasses Row Level Security - use with caution
  serverSupabase = createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
  
  return serverSupabase;
}

export default getSupabaseServerClient;
