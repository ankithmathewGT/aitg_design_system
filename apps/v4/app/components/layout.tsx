import { MobileNav } from "@/components/gallery/mobile-nav"
import { PageNav } from "@/components/gallery/page-nav"
import { Search } from "@/components/gallery/search"
import { SidebarLink } from "@/components/gallery/sidebar-link"
import { ThemeToggle } from "@/components/gallery/theme-toggle"

import { nav } from "./nav"

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* ── Mobile Nav ── */}
      <MobileNav />

      {/* ── Sidebar ── */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[240px] flex-col overflow-y-auto border-r border-[rgb(var(--border)/0.1)] bg-[rgb(var(--sidebar))] md:flex">
        {/* Logo */}
        <div className="flex h-14 shrink-0 items-center gap-2.5 border-b border-[rgb(var(--border)/0.1)] px-5">
          <div className="h-5 w-5 rounded-full bg-[rgb(var(--primary))]" />
          <span className="text-sm font-semibold tracking-tight">
            Components
          </span>
        </div>

        {/* Search */}
        <div className="px-3 pt-4 pb-2">
          <Search />
        </div>

        {/* Nav groups */}
        <nav className="flex-1 px-3 py-2">
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

        {/* Theme toggle */}
        <div className="shrink-0 border-t border-[rgb(var(--border)/0.1)] px-3 py-4">
          <ThemeToggle />
        </div>
      </aside>

      {/* ── Content ── */}
      <main className="min-h-screen flex-1 md:ml-[240px]">
        <div className="mx-auto max-w-[860px] px-6 py-14 md:px-12">
          {children}
          <PageNav />
        </div>
      </main>
    </div>
  )
}
