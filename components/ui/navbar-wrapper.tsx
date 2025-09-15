"use client"

import { usePathname } from "next/navigation"
import {
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
  NavbarButton,
} from "@/components/ui/resizable-navbar"

export default function NavbarWrapper() {
  const pathname = usePathname() || "/"

  // Hide the navbar for app routes (logged-in pages)
  const appRoutes = ["/dashboard", "/agent", "/login"]
  if (appRoutes.some(route => pathname.startsWith(route))) return null

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems
          items={[
            { name: "Home", link: "/" },
            { name: "Pricing", link: "/pricing" },
            { name: "Dashboard", link: "/dashboard" },
          ]}
        />
        <div className="ml-auto">
          <NavbarButton href="/login" variant="primary">
            Sign in
          </NavbarButton>
        </div>
      </NavBody>
    </Navbar>
  )
}
