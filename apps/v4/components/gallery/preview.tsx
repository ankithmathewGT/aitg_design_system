import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  variant?: "padded" | "flush"
}

export function Preview({ children, className, variant = "padded" }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-xl)] border border-[rgb(var(--border)/0.1)]",
        "bg-[rgb(var(--background-subtle))]",
        "[background-image:radial-gradient(rgb(var(--border)/0.25)_1px,transparent_1px)]",
        "[background-size:20px_20px]",
        variant === "padded" &&
          "flex min-h-[240px] items-center justify-center p-10",
        variant === "flush" && "p-0",
        className
      )}
    >
      {children}
    </div>
  )
}
