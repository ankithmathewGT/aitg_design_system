"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type Props = {
  href: string
  children: React.ReactNode
}

export function SidebarLink({ href, children }: Props) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "flex h-8 items-center px-2 rounded-[var(--radius-sm)]",
        "text-sm transition-colors duration-[100ms]",
        active
          ? "bg-[rgb(var(--primary)/0.1)] font-medium text-[rgb(var(--primary))]"
          : "text-[rgb(var(--foreground-muted))] hover:bg-[rgb(var(--foreground)/0.05)] hover:text-[rgb(var(--foreground))]"
      )}
    >
      {children}
    </Link>
  )
}
