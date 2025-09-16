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

  serverSupabase = createClient(url, serviceRoleKey);
  return serverSupabase;
}

export default getSupabaseServerClient;
