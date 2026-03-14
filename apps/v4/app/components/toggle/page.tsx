import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Toggle } from "@/registry/new-york-v4/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

export default function TogglePage() {
  return (
    <>
      <PageHeader
        title="Toggle"
        description="A two-state button that can be either on or off. Built on Radix UI Toggle."
        label="Input"
      />

      <Section title="Default" description="A basic toggle button.">
        <Preview>
          <Toggle aria-label="Toggle bold">
            <Bold />
          </Toggle>
        </Preview>
        <CodeBlock
          code={`import { Toggle } from "@/registry/new-york-v4/ui/toggle"
import { Bold } from "lucide-react"

<Toggle aria-label="Toggle bold">
  <Bold />
</Toggle>`}
        />
      </Section>

      <Section
        title="Variants"
        description="The toggle supports default and outline variants."
      >
        <Preview>
          <div className="flex items-center gap-4">
            <Toggle variant="default" aria-label="Default variant">
              <Bold />
            </Toggle>
            <Toggle variant="outline" aria-label="Outline variant">
              <Bold />
            </Toggle>
          </div>
        </Preview>
        <CodeBlock
          code={`<Toggle variant="default">
  <Bold />
</Toggle>

<Toggle variant="outline">
  <Bold />
</Toggle>`}
        />
      </Section>

      <Section
        title="With Icon"
        description="Toggles with different icons for text formatting."
      >
        <Preview>
          <div className="flex items-center gap-2">
            <Toggle aria-label="Toggle bold">
              <Bold />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline />
            </Toggle>
          </div>
        </Preview>
        <CodeBlock
          code={`import { Toggle } from "@/registry/new-york-v4/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

<div className="flex items-center gap-2">
  <Toggle aria-label="Toggle bold">
    <Bold />
  </Toggle>
  <Toggle aria-label="Toggle italic">
    <Italic />
  </Toggle>
  <Toggle aria-label="Toggle underline">
    <Underline />
  </Toggle>
</div>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "variant",
              type: '"default" | "outline"',
              default: '"default"',
              description: "The visual style of the toggle.",
            },
            {
              name: "size",
              type: '"default" | "sm" | "lg"',
              default: '"default"',
              description: "The size of the toggle.",
            },
            {
              name: "pressed",
              type: "boolean",
              description:
                "The controlled pressed state of the toggle.",
            },
          ]}
        />
      </Section>
    </>
  )
}
