"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york-v4/ui/command"

import { nav } from "@/app/components/nav"

export function Search() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-8 w-full items-center gap-2 rounded-[var(--radius-md)] border border-[rgb(var(--border)/0.18)] px-2 text-sm text-[rgb(var(--foreground-subtle))] transition-colors duration-[100ms] hover:border-[rgb(var(--border)/0.32)]"
      >
        <span className="flex-1 text-left">Search…</span>
        <kbd className="rounded-[var(--radius-sm)] bg-[rgb(var(--muted))] px-1.5 py-0.5 font-mono text-xs">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search components…" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          {nav.map((group) => (
            <CommandGroup key={group.label} heading={group.label}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => {
                    router.push(item.href)
                    setOpen(false)
                  }}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
