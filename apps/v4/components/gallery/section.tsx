type Props = {
  title: string
  description?: string
  children: React.ReactNode
}

export function Section({ title, description, children }: Props) {
  return (
    <section className="mb-14">
      <div className="mb-5">
        <h2 className="mb-1 text-lg font-medium tracking-tight">{title}</h2>
        {description && (
          <p className="text-sm leading-relaxed text-[rgb(var(--foreground-muted))]">
            {description}
          </p>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  )
}
