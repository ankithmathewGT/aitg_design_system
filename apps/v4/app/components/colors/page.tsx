import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"

type Token = {
  name: string
  light: string
  dark: string
}

type TokenGroup = {
  title: string
  description?: string
  tokens: Token[]
}

const tokenGroups: TokenGroup[] = [
  {
    title: "Backgrounds",
    description: "Surface layers from base canvas to overlay.",
    tokens: [
      { name: "background", light: "250 250 248", dark: "17 16 14" },
      { name: "background-subtle", light: "246 245 242", dark: "22 21 18" },
      { name: "background-raised", light: "253 253 251", dark: "27 26 23" },
      { name: "background-overlay", light: "244 243 240", dark: "32 31 28" },
    ],
  },
  {
    title: "Foregrounds",
    description: "Text and icon colors at varying emphasis levels.",
    tokens: [
      { name: "foreground", light: "16 15 12", dark: "242 241 237" },
      { name: "foreground-muted", light: "88 86 80", dark: "158 156 150" },
      { name: "foreground-subtle", light: "148 146 139", dark: "96 94 88" },
    ],
  },
  {
    title: "Primary",
    description: "The single chromatic accent and its interaction states.",
    tokens: [
      { name: "primary", light: "59 111 232", dark: "91 135 240" },
      { name: "primary-foreground", light: "255 255 255", dark: "255 255 255" },
      { name: "primary-hover", light: "43 94 214", dark: "111 152 245" },
      { name: "primary-active", light: "31 79 196", dark: "59 111 232" },
    ],
  },
  {
    title: "Secondary",
    tokens: [
      { name: "secondary", light: "238 237 233", dark: "32 31 28" },
      { name: "secondary-foreground", light: "16 15 12", dark: "242 241 237" },
    ],
  },
  {
    title: "Status",
    description: "Semantic colors for success, warning, destructive, and info states.",
    tokens: [
      { name: "success", light: "30 138 80", dark: "46 160 98" },
      { name: "success-foreground", light: "255 255 255", dark: "255 255 255" },
      { name: "warning", light: "188 124 18", dark: "214 148 36" },
      { name: "warning-foreground", light: "255 255 255", dark: "255 255 255" },
      { name: "destructive", light: "204 58 52", dark: "218 76 70" },
      { name: "destructive-foreground", light: "255 255 255", dark: "255 255 255" },
      { name: "info", light: "59 111 232", dark: "91 135 240" },
      { name: "info-foreground", light: "255 255 255", dark: "255 255 255" },
    ],
  },
  {
    title: "Card / Popover",
    tokens: [
      { name: "card", light: "253 253 251", dark: "27 26 23" },
      { name: "card-foreground", light: "16 15 12", dark: "242 241 237" },
      { name: "popover", light: "244 243 240", dark: "32 31 28" },
      { name: "popover-foreground", light: "16 15 12", dark: "242 241 237" },
    ],
  },
  {
    title: "Other",
    tokens: [
      { name: "muted", light: "242 241 237", dark: "27 26 23" },
      { name: "muted-foreground", light: "118 116 110", dark: "118 116 110" },
      { name: "accent", light: "232 238 253", dark: "20 32 68" },
      { name: "accent-foreground", light: "59 111 232", dark: "91 135 240" },
      { name: "border", light: "16 15 12", dark: "242 241 237" },
      { name: "ring", light: "59 111 232", dark: "91 135 240" },
      { name: "input", light: "16 15 12", dark: "242 241 237" },
      { name: "sidebar", light: "246 245 242", dark: "14 13 11" },
      { name: "sidebar-foreground", light: "16 15 12", dark: "242 241 237" },
      { name: "sidebar-primary", light: "59 111 232", dark: "91 135 240" },
      { name: "sidebar-primary-foreground", light: "255 255 255", dark: "255 255 255" },
      { name: "sidebar-accent", light: "232 238 253", dark: "20 32 68" },
      { name: "sidebar-accent-foreground", light: "59 111 232", dark: "91 135 240" },
      { name: "sidebar-border", light: "16 15 12", dark: "242 241 237" },
      { name: "sidebar-ring", light: "59 111 232", dark: "91 135 240" },
    ],
  },
]

function rgbToHex(rgb: string): string {
  const parts = rgb.trim().split(/\s+/).map(Number)
  return (
    "#" +
    parts
      .map((v) => v.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  )
}

function ColorSwatch({ token }: { token: Token }) {
  return (
    <div className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-[rgb(var(--border)/0.1)] bg-[rgb(var(--background-raised))] p-3">
      {/* Swatch */}
      <div className="flex shrink-0 flex-col gap-1">
        <div
          className="h-10 w-10 rounded-[var(--radius-md)] border border-[rgb(var(--border)/0.12)]"
          style={{ backgroundColor: `rgb(${token.light})` }}
          title={`Light: rgb(${token.light})`}
        />
        <div
          className="h-10 w-10 rounded-[var(--radius-md)] border border-[rgb(var(--border)/0.12)]"
          style={{ backgroundColor: `rgb(${token.dark})` }}
          title={`Dark: rgb(${token.dark})`}
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1 space-y-1.5 pt-0.5">
        <p className="truncate text-sm font-medium leading-none">
          --{token.name}
        </p>
        <div className="space-y-0.5 text-xs text-[rgb(var(--foreground-muted))]">
          <p>
            <span className="inline-block w-10 text-[rgb(var(--foreground-subtle))]">
              Light
            </span>{" "}
            rgb({token.light}){" "}
            <span className="text-[rgb(var(--foreground-subtle))]">
              {rgbToHex(token.light)}
            </span>
          </p>
          <p>
            <span className="inline-block w-10 text-[rgb(var(--foreground-subtle))]">
              Dark
            </span>{" "}
            rgb({token.dark}){" "}
            <span className="text-[rgb(var(--foreground-subtle))]">
              {rgbToHex(token.dark)}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        label="Foundations"
        title="Colors"
        description="The design system's color tokens, defined as space-separated RGB values and used throughout every component."
      />

      {tokenGroups.map((group) => (
        <Section
          key={group.title}
          title={group.title}
          description={group.description}
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.tokens.map((token) => (
              <ColorSwatch key={token.name} token={token} />
            ))}
          </div>
        </Section>
      ))}
    </>
  )
}
