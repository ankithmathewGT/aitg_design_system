type Props = {
  title: string
  description: string
  label?: string
}

export function PageHeader({ title, description, label }: Props) {
  return (
    <div className="mb-10 border-b border-[rgb(var(--border)/0.1)] pb-8">
      {label && (
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-subtle))]">
          {label}
        </p>
      )}
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter">{title}</h1>
      <p className="max-w-[560px] text-base leading-relaxed text-[rgb(var(--foreground-muted))]">
        {description}
      </p>
    </div>
  )
}
