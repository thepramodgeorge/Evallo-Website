"use client"

import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconUserCircle,
} from "@tabler/icons-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"
import getSupabaseClient from "@/lib/supabaseClient"
import { useEffect, useState } from "react"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const [localUser, setLocalUser] = useState(user)
  const { isMobile } = useSidebar()
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
      router.push("/")
    }
  }

  useEffect(() => {
    const supabase = getSupabaseClient()

    const getProfileFrom = (u: any) => {
      const metadata: any = u?.user_metadata || {}
      const identityAvatar =
        u?.identities?.[0]?.identity_data?.avatar_url ||
        u?.identities?.[0]?.identity_data?.picture
      const name = metadata.name || metadata.full_name || u?.email || user.name
      const email = u?.email || user.email
      let avatar = identityAvatar || metadata.picture || metadata.avatar_url || user.avatar

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

    const fetchUser = async () => {
      try {
        const { data: sessionData } = await supabase.auth.getSession()
        const session = sessionData?.session
        if (session?.user) {
          setLocalUser(getProfileFrom(session.user))
          return
        }

        const { data: userData } = await supabase.auth.getUser()
        if (userData?.user) {
          setLocalUser(getProfileFrom(userData.user))
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("NavUser fetch error:", err)
      }
    }

    // If the passed user looks like the placeholder, fetch the real user
    if (!user || user.email === "m@example.com" || user.name === "shadcn") {
      fetchUser()
    }

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) setLocalUser(getProfileFrom(session.user))
      else setLocalUser(user)
    })

    return () => listener?.subscription.unsubscribe()
  }, [user])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              tooltip={user.name}
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={localUser.avatar} alt={localUser.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{localUser.name}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {localUser.email}
                </span>
              </div>
              <IconDotsVertical className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={localUser.avatar} alt={localUser.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{localUser.name}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {localUser.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconUserCircle />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconNotification />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={handleLogout} asChild>
              <button className="w-full text-left">
                <IconLogout />
                Log out
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
