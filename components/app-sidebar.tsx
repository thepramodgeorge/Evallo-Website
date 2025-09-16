"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { useEffect, useState } from "react"
import getSupabaseClient from "@/lib/supabaseClient"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = useState(data.user)

  useEffect(() => {
    const supabase = getSupabaseClient()

    const getProfileFrom = (u: any) => {
      const metadata: any = u?.user_metadata || {}
      const identityAvatar =
        u?.identities?.[0]?.identity_data?.avatar_url ||
        u?.identities?.[0]?.identity_data?.picture
      const name =
        metadata.name ||
        metadata.full_name ||
        metadata.given_name ||
        metadata.preferred_username ||
        u?.email ||
        data.user.name
      const email = u?.email || data.user.email
      let avatar =
        identityAvatar ||
        metadata.picture ||
        metadata.avatar_url ||
        metadata.picture_url ||
        metadata.photo ||
        data.user.avatar

      // Add a cache-buster for external avatars so updates show immediately
      if (typeof avatar === "string" && avatar.startsWith("http")) {
        try {
          const url = new URL(avatar)
          url.searchParams.set("cb", String(Date.now()))
          avatar = url.toString()
        } catch (e) {
          // ignore invalid URL
        }
      }

      return { name, email, avatar }
    }

    const setFromSession = async () => {
      try {
        const { data: sessionData } = await supabase.auth.getSession()
        const session = sessionData?.session
        if (session?.user) {
          const u = session.user
          const profile = getProfileFrom(u)
          // console.debug('sidebar session user', u, profile)
          setUser(profile)
          return
        }

        // fallback: try getUser()
        const { data: userData } = await supabase.auth.getUser()
        const u2 = userData?.user
        if (u2) {
          const profile = getProfileFrom(u2)
          // console.debug('sidebar getUser', u2, profile)
          setUser(profile)
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Error fetching session/user for sidebar:', err)
      }
    }

    setFromSession()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const u = session.user
        const profile = getProfileFrom(u)
        setUser(profile)
      } else {
        // signed out
        setUser(data.user)
      }
    })

    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
