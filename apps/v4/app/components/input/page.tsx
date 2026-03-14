import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Search } from "lucide-react"

export default function InputPage() {
  return (
    <>
      <PageHeader
        label="Input"
        title="Input"
        description="A single-line text field for collecting user input."
      />

      <Section title="Default">
        <Preview>
          <Input placeholder="Enter your email" className="max-w-sm" />
        </Preview>
        <CodeBlock code={`<Input placeholder="Enter your email" />`} />
      </Section>

      <Section title="With Label">
        <Preview>
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
        />
      </Section>

      <Section title="States">
        <Preview>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input placeholder="Default" />
            <Input placeholder="Disabled" disabled />
            <div className="grid gap-1.5">
              <Input
                placeholder="Error"
                className="border-[rgb(var(--destructive))]"
              />
              <p className="text-xs text-[rgb(var(--destructive))]">
                This field is required.
              </p>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<Input placeholder="Default" />
<Input placeholder="Disabled" disabled />
<Input
  placeholder="Error"
  className="border-[rgb(var(--destructive))]"
/>`}
        />
      </Section>

      <Section title="With Icon">
        <Preview>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[rgb(var(--foreground-muted))]" />
            <Input placeholder="Search..." className="pl-9" />
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="relative">
  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
  <Input placeholder="Search..." className="pl-9" />
</div>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "type",
              type: "string",
              default: '"text"',
              description:
                "The type of the input (text, email, password, etc.).",
            },
            {
              name: "placeholder",
              type: "string",
              description: "Placeholder text displayed when the input is empty.",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Whether the input is disabled.",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes to apply to the input.",
            },
          ]}
        />
      </Section>
    </>
  )
}
