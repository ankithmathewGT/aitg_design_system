"use client"

import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const options = ["system", "light", "dark"] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-0.5 rounded-[var(--radius-md)] border border-[rgb(var(--border)/0.15)] p-0.5">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setTheme(option)}
          className={cn(
            "h-7 rounded-[var(--radius-sm)] px-2.5 text-xs font-medium capitalize",
            "transition-all duration-[100ms]",
            theme === option
              ? "bg-[rgb(var(--foreground)/0.08)] text-[rgb(var(--foreground))]"
              : "text-[rgb(var(--foreground-muted))] hover:text-[rgb(var(--foreground))]"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
