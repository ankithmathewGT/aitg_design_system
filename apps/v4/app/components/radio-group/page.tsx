import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { RadioGroup, RadioGroupItem } from "@/registry/new-york-v4/ui/radio-group"
import { Label } from "@/registry/new-york-v4/ui/label"

export default function RadioGroupPage() {
  return (
    <>
      <PageHeader
        label="Input"
        title="Radio Group"
        description="A set of mutually exclusive options where only one can be selected at a time."
      />

      <Section title="Default">
        <Preview>
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="option-1" />
              <Label htmlFor="option-1">Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="option-2" />
              <Label htmlFor="option-2">Option 2</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="option-3" />
              <Label htmlFor="option-3">Option 3</Label>
            </div>
          </RadioGroup>
        </Preview>
        <CodeBlock
          code={`<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-3" id="option-3" />
    <Label htmlFor="option-3">Option 3</Label>
  </div>
</RadioGroup>`}
        />
      </Section>

      <Section title="With Labels and Descriptions">
        <Preview>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-start gap-2">
              <RadioGroupItem value="compact" id="compact" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label htmlFor="compact">Compact</Label>
                <p className="text-sm text-[rgb(var(--foreground-muted))]">
                  Reduced spacing for dense layouts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RadioGroupItem value="comfortable" id="comfortable" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label htmlFor="comfortable">Comfortable</Label>
                <p className="text-sm text-[rgb(var(--foreground-muted))]">
                  Default spacing for most use cases.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RadioGroupItem value="spacious" id="spacious" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label htmlFor="spacious">Spacious</Label>
                <p className="text-sm text-[rgb(var(--foreground-muted))]">
                  Extra breathing room between elements.
                </p>
              </div>
            </div>
          </RadioGroup>
        </Preview>
        <CodeBlock
          code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-start gap-2">
    <RadioGroupItem value="compact" id="compact" className="mt-0.5" />
    <div className="grid gap-0.5">
      <Label htmlFor="compact">Compact</Label>
      <p className="text-sm text-muted">
        Reduced spacing for dense layouts.
      </p>
    </div>
  </div>
  <div className="flex items-start gap-2">
    <RadioGroupItem value="comfortable" id="comfortable" className="mt-0.5" />
    <div className="grid gap-0.5">
      <Label htmlFor="comfortable">Comfortable</Label>
      <p className="text-sm text-muted">
        Default spacing for most use cases.
      </p>
    </div>
  </div>
  <div className="flex items-start gap-2">
    <RadioGroupItem value="spacious" id="spacious" className="mt-0.5" />
    <div className="grid gap-0.5">
      <Label htmlFor="spacious">Spacious</Label>
      <p className="text-sm text-muted">
        Extra breathing room between elements.
      </p>
    </div>
  </div>
</RadioGroup>`}
        />
      </Section>

      <Section title="Disabled">
        <Preview>
          <RadioGroup defaultValue="option-1" disabled>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="disabled-1" />
              <Label htmlFor="disabled-1">Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="disabled-2" />
              <Label htmlFor="disabled-2">Option 2</Label>
            </div>
          </RadioGroup>
        </Preview>
        <CodeBlock
          code={`<RadioGroup defaultValue="option-1" disabled>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="disabled-1" />
    <Label htmlFor="disabled-1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="disabled-2" />
    <Label htmlFor="disabled-2">Option 2</Label>
  </div>
</RadioGroup>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "defaultValue",
              type: "string",
              description:
                "The value of the radio item that should be selected by default.",
            },
            {
              name: "onValueChange",
              type: "(value: string) => void",
              description:
                "Callback fired when the selected value changes.",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Whether the entire radio group is disabled.",
            },
          ]}
        />
      </Section>
    </>
  )
}
