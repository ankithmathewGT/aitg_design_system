import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function SkeletonPage() {
  return (
    <>
      <PageHeader
        title="Skeleton"
        description="A placeholder loading state that mimics the shape of content before it loads."
        label="Display"
      />

      <Section
        title="Default"
        description="Basic skeleton lines of varying widths to represent text content."
      >
        <Preview>
          <div className="w-[300px] space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </Preview>
        <CodeBlock
          code={`import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

<div className="space-y-3">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>`}
        />
      </Section>

      <Section
        title="Card Skeleton"
        description="A card-shaped skeleton with an image placeholder and text lines."
      >
        <Preview>
          <div className="w-[300px] rounded-[var(--radius-lg)] border border-[rgb(var(--border)/0.1)] p-4">
            <Skeleton className="h-[200px] w-full rounded-[var(--radius-md)]" />
            <div className="mt-4 space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

<div className="w-[300px] rounded-lg border p-4">
  <Skeleton className="h-[200px] w-full rounded-md" />
  <div className="mt-4 space-y-3">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-1/2" />
  </div>
</div>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "className",
              type: "string",
              description:
                "CSS classes to control the size and shape of the skeleton element.",
            },
          ]}
        />
      </Section>
    </>
  )
}
