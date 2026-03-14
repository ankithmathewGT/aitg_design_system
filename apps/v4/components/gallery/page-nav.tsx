"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { nav } from "@/app/components/nav"

export function PageNav() {
  const pathname = usePathname()
  const allItems = nav.flatMap((g) => g.items)
  const idx = allItems.findIndex((i) => i.href === pathname)
  const prev = allItems[idx - 1]
  const next = allItems[idx + 1]

  return (
    <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--border)/0.1)] pt-8">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 text-sm text-[rgb(var(--foreground-muted))] transition-colors duration-[100ms] hover:text-[rgb(var(--foreground))]"
        >
          <ChevronLeft className="h-4 w-4" />
          {prev.title}
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 text-sm text-[rgb(var(--foreground-muted))] transition-colors duration-[100ms] hover:text-[rgb(var(--foreground))]"
        >
          {next.title}
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
