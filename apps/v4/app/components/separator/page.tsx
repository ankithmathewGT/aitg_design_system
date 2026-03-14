import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export default function SeparatorPage() {
  return (
    <>
      <PageHeader
        title="Separator"
        description="Visually or semantically separates content. Supports horizontal and vertical orientations."
        label="Display"
      />

      <Section title="Horizontal" description="The default horizontal separator spans the full width of its container.">
        <Preview>
          <div className="w-full max-w-sm space-y-4">
            <div>
              <h4 className="text-sm font-medium leading-none">Design System</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                An open-source UI component library.
              </p>
            </div>
            <Separator />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <span>Blog</span>
              <span>Docs</span>
              <span>Source</span>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<div>
  <h4 className="text-sm font-medium leading-none">Design System</h4>
  <p className="mt-1 text-sm text-muted-foreground">
    An open-source UI component library.
  </p>
</div>
<Separator />
<div className="flex h-5 items-center space-x-4 text-sm">
  <span>Blog</span>
  <span>Docs</span>
  <span>Source</span>
</div>`}
        />
      </Section>

      <Section title="Vertical" description="A vertical separator placed between inline items inside a flex container.">
        <Preview>
          <div className="flex h-5 items-center space-x-4 text-sm">
            <span>Blog</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>Source</span>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex h-5 items-center space-x-4 text-sm">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Source</span>
</div>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: "The orientation of the separator.",
            },
            {
              name: "decorative",
              type: "boolean",
              default: "true",
              description:
                "When true, signifies that it is purely visual with no semantic meaning. When false, the separator is exposed to assistive technology as a role=separator element.",
            },
          ]}
        />
      </Section>
    </>
  )
}
