"use client"

import { Menu } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york-v4/ui/sheet"

import { nav } from "@/app/components/nav"

import { SidebarLink } from "./sidebar-link"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="fixed left-3 top-3 z-50 md:hidden"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] p-0">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <nav className="px-3 py-4">
          {nav.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="mb-1.5 px-2 text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-subtle))]">
                {group.label}
              </p>
              {group.items.map((item) => (
                <SidebarLink key={item.href} href={item.href}>
                  {item.title}
                </SidebarLink>
              ))}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
