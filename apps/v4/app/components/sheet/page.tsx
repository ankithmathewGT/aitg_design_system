import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/registry/new-york-v4/ui/sheet"

export default function SheetPage() {
  return (
    <>
      <PageHeader
        title="Sheet"
        description="A panel that slides out from the edge of the screen, typically used for navigation or forms."
        label="Overlay"
      />

      <Section
        title="Right (Default)"
        description="A sheet that slides in from the right side of the screen."
      >
        <Preview>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you are
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 text-sm text-[rgb(var(--foreground-muted))]">
                Sheet content goes here.
              </div>
            </SheetContent>
          </Sheet>
        </Preview>
        <CodeBlock
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you are done.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">Sheet content goes here.</div>
  </SheetContent>
</Sheet>`}
        />
      </Section>

      <Section
        title="Left"
        description="A sheet that slides in from the left side of the screen."
      >
        <Preview>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Left Sheet</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Browse through the application sections.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 text-sm text-[rgb(var(--foreground-muted))]">
                Navigation content goes here.
              </div>
            </SheetContent>
          </Sheet>
        </Preview>
        <CodeBlock
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Left Sheet</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
      <SheetDescription>
        Browse through the application sections.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">Navigation content goes here.</div>
  </SheetContent>
</Sheet>`}
        />
      </Section>

      <Section
        title="Bottom"
        description="A sheet that slides up from the bottom of the screen."
      >
        <Preview>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Bottom Sheet</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Actions</SheetTitle>
                <SheetDescription>
                  Choose an action to perform.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 text-sm text-[rgb(var(--foreground-muted))]">
                Bottom sheet content goes here.
              </div>
            </SheetContent>
          </Sheet>
        </Preview>
        <CodeBlock
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Bottom Sheet</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Actions</SheetTitle>
      <SheetDescription>
        Choose an action to perform.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">Bottom sheet content goes here.</div>
  </SheetContent>
</Sheet>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"right"',
              description:
                "The edge of the screen the sheet slides in from.",
            },
            {
              name: "open",
              type: "boolean",
              description:
                "The controlled open state of the sheet.",
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              description:
                "Event handler called when the open state changes.",
            },
          ]}
        />
      </Section>
    </>
  )
}
