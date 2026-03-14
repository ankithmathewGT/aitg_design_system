import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Slider } from "@/registry/new-york-v4/ui/slider"

export default function SliderPage() {
  return (
    <>
      <PageHeader
        label="Input"
        title="Slider"
        description="A draggable control for selecting a value or range within a given span."
      />

      <Section title="Default">
        <Preview>
          <Slider defaultValue={[50]} max={100} step={1} className="w-60" />
        </Preview>
        <CodeBlock
          code={`<Slider defaultValue={[50]} max={100} step={1} />`}
        />
      </Section>

      <Section title="Range">
        <Preview>
          <Slider defaultValue={[25, 75]} max={100} step={1} className="w-60" />
        </Preview>
        <CodeBlock
          code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}
        />
      </Section>

      <Section title="Disabled">
        <Preview>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            disabled
            className="w-60"
          />
        </Preview>
        <CodeBlock
          code={`<Slider defaultValue={[50]} max={100} step={1} disabled />`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "defaultValue",
              type: "number[]",
              description:
                "The default value(s) of the slider. Pass a single-element array for a single thumb, or two elements for a range.",
            },
            {
              name: "min",
              type: "number",
              default: "0",
              description: "The minimum value of the slider.",
            },
            {
              name: "max",
              type: "number",
              default: "100",
              description: "The maximum value of the slider.",
            },
            {
              name: "step",
              type: "number",
              default: "1",
              description: "The step increment between values.",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Whether the slider is disabled.",
            },
          ]}
        />
      </Section>
    </>
  )
}
