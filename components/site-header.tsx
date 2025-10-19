"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import getSupabaseClient from "@/lib/supabaseClient"

interface SiteHeaderProps {
  children?: React.ReactNode
  actions?: React.ReactNode
  left?: React.ReactNode
}

export function SiteHeader({ children, actions, left }: SiteHeaderProps) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const supabase = getSupabaseClient()
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push("/")
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Logout error:", err)
      // fallback navigation
      router.push("/")
    }
  }

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="grid w-full grid-cols-[auto_1fr_auto] items-center px-4 lg:px-6 gap-2">
        {/* Left: sidebar trigger + separator + optional left content or title */}
        <div className="flex items-center gap-1">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
          {left ?? (!children ? <h1 className="text-base font-medium">Evallo</h1> : null)}
        </div>

        {/* Center: children (absolutely centered) */}
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {children}
          </div>
        </div>

        {/* Right: actions (or GitHub fallback) */}
        <div className="flex items-center justify-end gap-2">
          {actions ? (
            actions
          ) : (
            <>
              <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={handleLogout}>
                Logout
              </Button>
              <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
                <a
                  href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="dark:text-foreground"
                >
                  GitHub
                </a>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
