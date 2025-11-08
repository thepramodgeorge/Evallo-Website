import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

function makeStubClient() {
  // Minimal auth stub implementing the methods used in the app.
  const stub = {
    auth: {
      async getSession() {
        return { data: { session: null } };
      },
      async getUser() {
        return { data: { user: null } };
      },
      async signOut() {
        return { error: null };
      },
          onAuthStateChange(_callback: (event: string, session: unknown | null) => void) {
            // Return an object shaped like the real supabase subscription so unsubscribe is safe.
            const noop = () => {}
            // Optionally, we could invoke the callback with a 'SIGNED_OUT' event, but keep it silent.
            return { data: { subscription: { unsubscribe: noop } } };
          },
    },
  } as unknown as SupabaseClient;

  return stub;
}

export function getSupabaseClient(): SupabaseClient {
  if (supabase) return supabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // Avoid throwing in environments where the env vars are not set (e.g., local dev without .env).
    // Log a helpful message and return a stub client so components that call into the client
    // don't crash the whole app. This keeps the UI functional for non-authenticated flows.
    console.warn(
      'Warning: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY not set — returning stub supabase client.'
    );
    supabase = makeStubClient();
    return supabase;
  }

  supabase = createClient(url, anonKey);
  return supabase;
}

export default getSupabaseClient;
