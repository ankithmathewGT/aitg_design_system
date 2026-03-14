import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { Label } from "@/registry/new-york-v4/ui/label"

export default function SwitchPage() {
  return (
    <>
      <PageHeader
        label="Input"
        title="Switch"
        description="A toggle control that allows the user to switch between on and off states."
      />

      <Section title="Default">
        <Preview>
          <Switch />
        </Preview>
        <CodeBlock code={`<Switch />`} />
      </Section>

      <Section title="With Label">
        <Preview>
          <div className="flex items-center gap-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane mode</Label>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane mode</Label>
</div>`}
        />
      </Section>

      <Section title="Disabled">
        <Preview>
          <div className="flex items-center gap-2">
            <Switch id="disabled" disabled />
            <Label htmlFor="disabled">Disabled</Label>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex items-center gap-2">
  <Switch id="disabled" disabled />
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
                "The controlled checked state of the switch.",
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
              description: "Whether the switch is disabled.",
            },
          ]}
        />
      </Section>
    </>
  )
}
