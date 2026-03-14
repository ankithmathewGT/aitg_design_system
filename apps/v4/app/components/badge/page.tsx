import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Badge } from "@/registry/new-york-v4/ui/badge"

export default function BadgePage() {
  return (
    <>
      <PageHeader
        label="Display"
        title="Badge"
        description="A small status indicator for labeling and categorization."
      />

      <Section title="Variants">
        <Preview>
          <div className="flex flex-row flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex flex-row flex-wrap gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="primary">Primary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "variant",
              type: '"default" | "primary" | "success" | "warning" | "destructive" | "secondary" | "outline" | "ghost" | "link"',
              description:
                "The visual style variant of the badge.",
            },
          ]}
        />
      </Section>
    </>
  )
}
