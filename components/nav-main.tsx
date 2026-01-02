"use client"

import * as React from "react"
import { type Icon } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

function Spinner() {
  return (
    <svg className="animate-spin mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
      <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const pathname = usePathname()
  const [loadingRoute, setLoadingRoute] = React.useState<string | null>(null)

  // Start loading state when a link is clicked (client-side nav)
  function handleNavigate(url: string) {
    // Don't show loading if the user clicked the current page (or a parent path)
    if (!url || url === "#") return
    if (pathname && (pathname === url || pathname.startsWith(url))) return
    setLoadingRoute(url)
  }

  // Optionally, we could listen to router events; Next.js app router doesn't expose events here, so we clear
  // loading state once a small delay (assuming navigation completes). This is a best-effort UX improvement.
  React.useEffect(() => {
    if (!loadingRoute) return
    const timeout = setTimeout(() => setLoadingRoute(null), 1500)
    return () => clearTimeout(timeout)
  }, [loadingRoute])

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.url !== "#" ? (
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link
                    href={item.url}
                    onClick={() => handleNavigate(item.url)}
                    aria-disabled={loadingRoute === item.url}
                  >
                    {loadingRoute === item.url ? (
                      <>
                        <Spinner />
                        <span>Loading</span>
                      </>
                    ) : (
                      <>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </>
                    )}
                  </Link>
                </SidebarMenuButton>
              ) : (
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
