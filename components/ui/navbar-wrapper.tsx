"use client"

import { usePathname } from "next/navigation"
import React, { useState } from "react"
import {
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar"

export default function NavbarWrapper() {
  const pathname = usePathname() || "/"
  const [isOpen, setIsOpen] = useState(false)

  // Hide the navbar for app routes (logged-in pages)
  const appRoutes = ["/dashboard", "/agent", "/login"]
  if (appRoutes.some(route => pathname.startsWith(route))) return null

  const items = [
    { name: "Home", link: "/" },
    { name: "Pricing", link: "/pricing" },
    { name: "Dashboard", link: "/dashboard" },
  ]

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={items} onItemClick={() => setIsOpen(false)} />

        {/* Desktop sign in button (hidden on small screens) */}
        <div className="ml-auto hidden lg:block">
          <NavbarButton href="/login" variant="primary">
            Sign in
          </NavbarButton>
        </div>

        {/* Mobile toggle (visible only on small screens) */}
        <div className="ml-auto lg:hidden">
          <MobileNavHeader>
            <div />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen((s) => !s)}
            />
          </MobileNavHeader>
        </div>
      </NavBody>

      {/* Mobile nav and menu */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen((s) => !s)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex w-full flex-col items-start gap-2">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="w-full px-2 py-3 text-left text-sm text-neutral-700 dark:text-neutral-200"
              >
                {item.name}
              </a>
            ))}

            <div className="w-full pt-2">
              <NavbarButton
                href="/login"
                variant="primary"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
