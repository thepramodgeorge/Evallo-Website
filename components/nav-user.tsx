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

function getInitials(name?: string | null) {
  if (!name) return ""
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
  if (parts.length === 0) return ""
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

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
  const [imgError, setImgError] = useState(false)

  const handleLogout = async () => {
    try {
      const supabase = getSupabaseClient()
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push("/")
    } catch (err) {
      console.error("Logout error:", err)
      router.push("/")
    }
  }

  useEffect(() => {
    // reset image error when avatar changes
    setImgError(false)

    const supabase = getSupabaseClient()

    type SupabaseUserMinimal = {
      raw_user_meta_data?: Record<string, unknown>
      user_metadata?: Record<string, unknown>
      identities?: Array<{ identity_data?: Record<string, unknown> }>
      email?: string
    }

    const getProfileFrom = (u?: SupabaseUserMinimal | null) => {
      // If auth.raw_user_meta_data exists, use only its fields
      const raw = u?.raw_user_meta_data
      if (raw && Object.keys(raw).length > 0) {
        // Strict: populate user card only from raw_user_meta_data
        const name = (raw["name"] as string | undefined) ?? (raw["full_name"] as string | undefined) ?? ""
        const email = (raw["email"] as string | undefined) ?? ""
        let avatar = (raw["avatar_url"] as string | undefined) ?? (raw["picture"] as string | undefined) ?? ""

        if (typeof avatar === "string" && avatar.startsWith("http")) {
          try {
              const url = new URL(avatar)
              url.searchParams.set("cb", String(Date.now()))
              avatar = url.toString()
            } catch {
              // ignore invalid URL
            }
        }

        return { name, email, avatar }
      }

      // Fallback to original logic when raw_user_meta_data is not present
      const metadata = u?.user_metadata ?? {}
      const identityData = u?.identities?.[0]?.identity_data ?? {}
      const identityAvatar =
        (identityData["avatar_url"] as string | undefined) ||
        (identityData["picture"] as string | undefined)

      const name =
        (metadata["name"] as string | undefined) ||
        (metadata["full_name"] as string | undefined) ||
        (metadata["given_name"] as string | undefined) ||
        u?.email ||
        user.name

      const email = u?.email || user.email

      let avatar = identityAvatar || (metadata["picture"] as string | undefined) || (metadata["avatar_url"] as string | undefined) || user.avatar

      if (typeof avatar === "string" && avatar.startsWith("http")) {
        try {
          const url = new URL(avatar)
          url.searchParams.set("cb", String(Date.now()))
          avatar = url.toString()
        } catch {
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
                {localUser.avatar && !imgError ? (
                  <AvatarImage
                    src={localUser.avatar}
                    alt={localUser.name}
                    crossOrigin="anonymous"
                    onLoad={() => {
                      console.debug("Avatar image loaded:", localUser.avatar)
                      setImgError(false)
                    }}
                    onError={() => {
                      // If the external avatar fails to load, fall back to initials
                      console.debug("Avatar image failed to load:", localUser.avatar)
                      setImgError(true)
                    }}
                  />
                ) : null}
                <AvatarFallback className="rounded-lg">{getInitials(localUser.name)}</AvatarFallback>
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
                  {localUser.avatar && !imgError ? (
                    <AvatarImage
                      src={localUser.avatar}
                      alt={localUser.name}
                      crossOrigin="anonymous"
                      onLoad={() => {
                        console.debug("Avatar image loaded:", localUser.avatar)
                        setImgError(false)
                      }}
                      onError={() => {
                        console.debug("Avatar image failed to load:", localUser.avatar)
                        setImgError(true)
                      }}
                    />
                  ) : null}
                  <AvatarFallback className="rounded-lg">{getInitials(localUser.name)}</AvatarFallback>
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
