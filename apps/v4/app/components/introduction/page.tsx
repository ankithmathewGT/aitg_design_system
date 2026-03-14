import Link from "next/link"

import { PageHeader } from "@/components/gallery/page-header"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/registry/new-york-v4/ui/card"

const sections = [
  {
    title: "Colors",
    description:
      "Token-based palette with warm neutrals and a single blue accent.",
    href: "/components/colors",
  },
  {
    title: "Typography",
    description:
      "Type scale specimens built on the Geist typeface family.",
    href: "/components/typography",
  },
  {
    title: "Button",
    description:
      "Primary actions, secondary options, destructive confirms and more.",
    href: "/components/button",
  },
  {
    title: "Card",
    description:
      "Surface container with header, content, and footer slots.",
    href: "/components/card",
  },
  {
    title: "Input",
    description:
      "Text fields, textareas, and other form primitives.",
    href: "/components/input",
  },
  {
    title: "Dialog",
    description:
      "Modal overlays for confirmations, forms, and focused tasks.",
    href: "/components/dialog",
  },
]

export default function IntroductionPage() {
  return (
    <>
      <PageHeader
        title="Design System"
        description="A comprehensive component library built on warm neutral tones, a single blue accent, and the Geist typeface. Every component respects light and dark modes through a shared token system."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className="group">
            <Card className="h-full transition-colors hover:bg-[rgb(var(--background-subtle))]">
              <CardHeader>
                <CardTitle className="group-hover:text-[rgb(var(--primary))] transition-colors">
                  {section.title}
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
