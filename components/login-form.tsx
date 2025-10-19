"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import getSupabaseClient from "@/lib/supabaseClient"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// removed unused imports (Input, Label) — login is Google-only

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const handleGoogleSignIn = async () => {
    try {
      const supabase = getSupabaseClient()
      const redirectTo = `${window.location.origin}/agent`
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo },
      })
      if (error) throw error
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Google sign-in error:", err)
      alert("Failed to sign in with Google. Check console for details.")
    }
  }

  const router = useRouter()

  useEffect(() => {
    const supabase = getSupabaseClient()

    // If there is already a session, redirect to agent
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session) router.push("/agent")
    })

    // Subscribe to auth state changes and redirect on sign in
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        router.push("/agent")
      }
    })

    return () => {
      // clean up subscription
      listener?.subscription.unsubscribe()
    }
  }, [router])

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Continue with your Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button onClick={handleGoogleSignIn} className="w-full">
              Sign in with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
