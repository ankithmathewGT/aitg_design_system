import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"
import { Label } from "@/registry/new-york-v4/ui/label"

export default function TextareaPage() {
  return (
    <>
      <PageHeader
        label="Input"
        title="Textarea"
        description="A multi-line text field for longer form content."
      />

      <Section title="Default">
        <Preview>
          <Textarea placeholder="Type your message here..." className="max-w-sm" />
        </Preview>
        <CodeBlock code={`<Textarea placeholder="Type your message here..." />`} />
      </Section>

      <Section title="With Label and Description">
        <Preview>
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Write your message..." rows={4} />
            <p className="text-xs text-[rgb(var(--foreground-muted))]">
              Your message will be sent to the support team.
            </p>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Write your message..." rows={4} />
  <p className="text-xs text-muted">
    Your message will be sent to the support team.
  </p>
</div>`}
        />
      </Section>

      <Section title="States">
        <Preview>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Textarea placeholder="Default" />
            <Textarea placeholder="Disabled" disabled />
            <div className="grid gap-1.5">
              <Textarea
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
          code={`<Textarea placeholder="Default" />
<Textarea placeholder="Disabled" disabled />
<Textarea
  placeholder="Error"
  className="border-[rgb(var(--destructive))]"
/>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "placeholder",
              type: "string",
              description:
                "Placeholder text displayed when the textarea is empty.",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Whether the textarea is disabled.",
            },
            {
              name: "rows",
              type: "number",
              description: "The number of visible text lines.",
            },
          ]}
        />
      </Section>
    </>
  )
}
