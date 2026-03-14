import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import { Label } from "@/registry/new-york-v4/ui/label"

export default function CheckboxPage() {
  return (
    <>
      <PageHeader
        label="Input"
        title="Checkbox"
        description="A control that allows the user to toggle between checked and unchecked states."
      />

      <Section title="Default">
        <Preview>
          <Checkbox />
        </Preview>
        <CodeBlock code={`<Checkbox />`} />
      </Section>

      <Section title="Checked">
        <Preview>
          <Checkbox defaultChecked />
        </Preview>
        <CodeBlock code={`<Checkbox defaultChecked />`} />
      </Section>

      <Section title="With Label">
        <Preview>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
        />
      </Section>

      <Section title="Disabled">
        <Preview>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled</Label>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex items-center gap-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled">Disabled</Label>
</div>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "checked",
              type: "boolean",
              description:
                "The controlled checked state of the checkbox.",
            },
            {
              name: "onCheckedChange",
              type: "(checked: boolean) => void",
              description:
                "Callback fired when the checked state changes.",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Whether the checkbox is disabled.",
            },
          ]}
        />
      </Section>
    </>
  )
}
