"use client"

import React, { useState } from "react"
import {
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar"
import { SignInDialog } from "@/components/signin-dialog"

export default function NavbarWrapper() {
  const [isOpen, setIsOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const items = [
    { name: "Home", link: "/" },
    { name: "Pricing", link: "/pricing" },
  ]

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={items} onItemClick={() => setIsOpen(false)} />

        {/* Desktop sign in button (hidden on small screens) */}
        <div className="ml-auto hidden lg:block relative z-50">
          <button 
            onClick={() => {
              console.log('Sign in button clicked');
              setDialogOpen(true);
            }}
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium cursor-pointer relative z-50"
          >
            Sign in
          </button>
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

            <div className="w-full pt-2 relative z-50">
              <button
                onClick={() => {
                  console.log('Mobile sign in button clicked');
                  setIsOpen(false);
                  setDialogOpen(true);
                }}
                className="w-full px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium cursor-pointer relative z-50"
              >
                Sign in
              </button>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>

      <SignInDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </Navbar>
  )
}
