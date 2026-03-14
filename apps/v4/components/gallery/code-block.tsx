import { codeToHtml } from "shiki"

type Props = {
  code: string
  lang?: string
}

export async function CodeBlock({ code, lang = "tsx" }: Props) {
  const html = await codeToHtml(code.trim(), {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
  })

  return (
    <div
      className="not-prose relative overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--border)/0.12)] text-[13px] leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
