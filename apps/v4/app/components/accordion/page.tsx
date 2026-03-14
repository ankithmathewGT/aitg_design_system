import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export default function AccordionPage() {
  return (
    <>
      <PageHeader
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
        label="Display"
      />

      <Section
        title="Single"
        description="Only one item can be expanded at a time. Set collapsible to allow closing all items."
      >
        <Preview>
          <Accordion
            type="single"
            collapsible
            className="w-[400px]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern for accordions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match your design system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It uses CSS animations for smooth open and close
                transitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Preview>
        <CodeBlock
          code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match your design system.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It uses CSS animations for smooth transitions.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        />
      </Section>

      <Section
        title="Multiple"
        description="Multiple items can be expanded simultaneously."
      >
        <Preview>
          <Accordion
            type="multiple"
            className="w-[400px]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What frameworks are supported?</AccordionTrigger>
              <AccordionContent>
                The component works with React and any framework that supports
                React components, including Next.js and Remix.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
              <AccordionContent>
                Absolutely. All components accept a className prop and can be
                styled with Tailwind CSS utilities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is keyboard navigation supported?</AccordionTrigger>
              <AccordionContent>
                Yes. You can use arrow keys, Home, End, and Enter or Space to
                navigate and toggle items.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Preview>
        <CodeBlock
          code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>What frameworks are supported?</AccordionTrigger>
    <AccordionContent>
      The component works with React and any framework that supports
      React components, including Next.js and Remix.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
    <AccordionContent>
      Absolutely. All components accept a className prop and can be
      styled with Tailwind CSS utilities.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is keyboard navigation supported?</AccordionTrigger>
    <AccordionContent>
      Yes. You can use arrow keys, Home, End, and Enter or Space to
      navigate and toggle items.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "type",
              type: '"single" | "multiple"',
              description:
                "Determines whether one or multiple items can be opened at the same time.",
            },
            {
              name: "defaultValue",
              type: "string | string[]",
              description:
                "The value of the item(s) to expand by default. Use a string for single type and an array for multiple.",
            },
            {
              name: "collapsible",
              type: "boolean",
              default: "false",
              description:
                'When type is "single", allows closing all items by clicking an open item.',
            },
          ]}
        />
      </Section>
    </>
  )
}
