import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  ScrollArea,
  ScrollBar,
} from "@/registry/new-york-v4/ui/scroll-area"

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`)

const artworks = [
  "Sunset Over Mountains",
  "City at Night",
  "Ocean Waves",
  "Forest Path",
  "Desert Dunes",
  "Starry Sky",
  "Autumn Leaves",
  "Frozen Lake",
  "Rolling Hills",
  "Wildflower Meadow",
  "Coral Reef",
  "Northern Lights",
]

export default function ScrollAreaPage() {
  return (
    <>
      <PageHeader
        title="ScrollArea"
        description="A scrollable area with custom styled scrollbars. Built on Radix UI ScrollArea."
        label="Layout"
      />

      <Section
        title="Vertical"
        description="A fixed-height scroll area with vertical scrolling."
      >
        <Preview>
          <ScrollArea className="h-[300px] w-[300px] rounded-[var(--radius-lg)] border border-[rgb(var(--border)/0.1)]">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Tags
              </h4>
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="border-b border-[rgb(var(--border)/0.08)] py-2 text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        </Preview>
        <CodeBlock
          code={`import { ScrollArea } from "@/registry/new-york-v4/ui/scroll-area"

const tags = Array.from({ length: 50 }, (_, i) => \`Tag \${i + 1}\`)

<ScrollArea className="h-[300px] w-[300px] rounded-lg border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag} className="border-b py-2 text-sm">
        {tag}
      </div>
    ))}
  </div>
</ScrollArea>`}
        />
      </Section>

      <Section
        title="Horizontal"
        description="A scroll area with horizontal scrolling."
      >
        <Preview>
          <ScrollArea className="w-[400px] whitespace-nowrap rounded-[var(--radius-lg)] border border-[rgb(var(--border)/0.1)]">
            <div className="flex gap-4 p-4">
              {artworks.map((artwork) => (
                <div
                  key={artwork}
                  className="flex h-[150px] w-[200px] shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[rgb(var(--foreground)/0.04)] p-4 text-center text-sm"
                >
                  {artwork}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Preview>
        <CodeBlock
          code={`import { ScrollArea, ScrollBar } from "@/registry/new-york-v4/ui/scroll-area"

<ScrollArea className="w-[400px] whitespace-nowrap rounded-lg border">
  <div className="flex gap-4 p-4">
    {artworks.map((artwork) => (
      <div
        key={artwork}
        className="flex h-[150px] w-[200px] shrink-0 items-center justify-center rounded-md bg-muted p-4 text-center text-sm"
      >
        {artwork}
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "className",
              type: "string",
              description:
                "Additional CSS classes applied to the scroll area root.",
            },
            {
              name: "type",
              type: '"auto" | "always" | "scroll" | "hover"',
              default: '"auto"',
              description:
                "Controls when the scrollbar is visible.",
            },
          ]}
        />
      </Section>
    </>
  )
}
