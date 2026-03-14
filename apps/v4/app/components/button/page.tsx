import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Loader2, Plus } from "lucide-react"

export default function ButtonPage() {
  return (
    <>
      <PageHeader
        label="Input"
        title="Button"
        description="A clickable element that triggers an action or event."
      />

      <Section title="Default">
        <Preview>
          <Button>Button</Button>
        </Preview>
        <CodeBlock code={`<Button>Button</Button>`} />
      </Section>

      <Section title="Variants">
        <Preview>
          <div className="flex flex-row flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
        />
      </Section>

      <Section title="Sizes">
        <Preview>
          <div className="flex flex-row flex-wrap items-center gap-3">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
            <Button size="icon">
              <Plus />
            </Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon"><Plus /></Button>`}
        />
      </Section>

      <Section title="Loading">
        <Preview>
          <Button disabled>
            <Loader2 className="animate-spin" />
            Loading...
          </Button>
        </Preview>
        <CodeBlock
          code={`<Button disabled>
  <Loader2 className="animate-spin" />
  Loading...
</Button>`}
        />
      </Section>

      <Section title="Icon">
        <Preview>
          <div className="flex flex-row flex-wrap items-center gap-3">
            <Button size="icon-xs">
              <Plus />
            </Button>
            <Button size="icon-sm">
              <Plus />
            </Button>
            <Button size="icon">
              <Plus />
            </Button>
            <Button size="icon-lg">
              <Plus />
            </Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<Button size="icon-xs"><Plus /></Button>
<Button size="icon-sm"><Plus /></Button>
<Button size="icon"><Plus /></Button>
<Button size="icon-lg"><Plus /></Button>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "variant",
              type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
              default: '"default"',
              description: "The visual style variant of the button.",
            },
            {
              name: "size",
              type: '"default" | "xs" | "sm" | "lg" | "xl" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
              default: '"default"',
              description: "The size of the button.",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Whether the button is disabled.",
            },
            {
              name: "asChild",
              type: "boolean",
              default: "false",
              description:
                "Render as a child element using Radix Slot for composition.",
            },
          ]}
        />
      </Section>
    </>
  )
}
