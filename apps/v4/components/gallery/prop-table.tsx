import { cn } from "@/lib/utils"

type Prop = {
  name: string
  type: string
  default?: string
  description: string
}

type Props = {
  props: Prop[]
}

export function PropTable({ props }: Props) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--border)/0.1)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[rgb(var(--border)/0.1)] bg-[rgb(var(--background-subtle))]">
            <th className="w-[160px] px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-subtle))]">
              Prop
            </th>
            <th className="w-[180px] px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-subtle))]">
              Type
            </th>
            <th className="w-[100px] px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-subtle))]">
              Default
            </th>
            <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-subtle))]">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr
              key={prop.name}
              className={cn(
                "border-b border-[rgb(var(--border)/0.08)] last:border-0",
                i % 2 === 1 && "bg-[rgb(var(--background-subtle)/0.5)]"
              )}
            >
              <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--primary))]">
                {prop.name}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--foreground-muted))]">
                {prop.type}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--foreground-subtle))]">
                {prop.default ?? "—"}
              </td>
              <td className="px-4 py-3 leading-relaxed text-[rgb(var(--foreground-muted))]">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
