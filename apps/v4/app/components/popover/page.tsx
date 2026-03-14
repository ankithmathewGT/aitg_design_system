import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/new-york-v4/ui/popover"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Input } from "@/registry/new-york-v4/ui/input"

export default function PopoverPage() {
  return (
    <div>
      <PageHeader
        title="Popover"
        description="A floating panel that appears on click, anchored to a trigger element. Useful for displaying additional content or forms without navigating away."
        label="Overlay"
      />

      <Section
        title="Default"
        description="A popover triggered by a button, containing a small form."
      >
        <Preview>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-[rgb(var(--foreground-muted))]">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2"
                    />
                  </div>
                </div>
                <Button size="sm">Save</Button>
              </div>
            </PopoverContent>
          </Popover>
        </Preview>
        <CodeBlock
          code={`import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/new-york-v4/ui/popover"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Input } from "@/registry/new-york-v4/ui/input"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="grid gap-3">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" className="col-span-2" />
        </div>
      </div>
      <Button size="sm">Save</Button>
    </div>
  </PopoverContent>
</Popover>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "open",
              type: "boolean",
              description:
                "Controlled open state of the popover.",
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              description:
                "Callback fired when the open state changes.",
            },
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"bottom"',
              description:
                "The preferred side of the trigger to render the popover content.",
            },
          ]}
        />
      </Section>
    </div>
  )
}
