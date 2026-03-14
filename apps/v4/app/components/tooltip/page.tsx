import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/registry/new-york-v4/ui/tooltip"

export default function TooltipPage() {
  return (
    <>
      <PageHeader
        title="Tooltip"
        description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
        label="Overlay"
      />

      <Section
        title="Default"
        description="Hover over the button to see the tooltip."
      >
        <Preview>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover Me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </Preview>
        <CodeBlock
          code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover Me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>`}
        />
      </Section>

      <Section
        title="Positions"
        description="Tooltips can be positioned on any side of the trigger element."
      >
        <Preview>
          <div className="grid grid-cols-2 gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="w-full">
                  Top
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="w-full">
                  Right
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="w-full">
                  Bottom
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="w-full">
                  Left
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="grid grid-cols-2 gap-4">
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>Tooltip on top</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Right</Button>
    </TooltipTrigger>
    <TooltipContent side="right">
      <p>Tooltip on right</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      <p>Tooltip on bottom</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Left</Button>
    </TooltipTrigger>
    <TooltipContent side="left">
      <p>Tooltip on left</p>
    </TooltipContent>
  </Tooltip>
</div>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "content",
              type: "ReactNode",
              description:
                "The content displayed inside the tooltip.",
            },
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"top"',
              description:
                "The preferred side of the trigger to render the tooltip.",
            },
            {
              name: "delayDuration",
              type: "number",
              default: "700",
              description:
                "The duration in milliseconds from when the mouse enters the trigger until the tooltip opens.",
            },
          ]}
        />
      </Section>
    </>
  )
}
