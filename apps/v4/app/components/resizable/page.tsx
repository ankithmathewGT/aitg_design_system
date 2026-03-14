import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/registry/new-york-v4/ui/resizable"

export default function ResizablePage() {
  return (
    <>
      <PageHeader
        title="Resizable"
        description="Resizable panel groups for building flexible layouts. Built on react-resizable-panels."
        label="Layout"
      />

      <Section
        title="Horizontal"
        description="A horizontal resizable panel group with two panels."
      >
        <Preview variant="flush">
          <ResizablePanelGroup
            orientation="horizontal"
            className="h-[300px] w-full rounded-[var(--radius-lg)] border border-[rgb(var(--border)/0.1)]"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-medium">Panel One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-medium">Panel Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Preview>
        <CodeBlock
          code={`import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/registry/new-york-v4/ui/resizable"

<ResizablePanelGroup orientation="horizontal" className="h-[300px] rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="text-sm font-medium">Panel One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="text-sm font-medium">Panel Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        />
      </Section>

      <Section
        title="Vertical"
        description="A vertical resizable panel group with two panels."
      >
        <Preview variant="flush">
          <ResizablePanelGroup
            orientation="vertical"
            className="h-[300px] w-full rounded-[var(--radius-lg)] border border-[rgb(var(--border)/0.1)]"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-medium">Panel One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm font-medium">Panel Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Preview>
        <CodeBlock
          code={`<ResizablePanelGroup orientation="vertical" className="h-[300px] rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="text-sm font-medium">Panel One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="text-sm font-medium">Panel Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "orientation",
              type: '"horizontal" | "vertical"',
              description:
                "The direction of the panel group layout.",
            },
          ]}
        />
      </Section>
    </>
  )
}
