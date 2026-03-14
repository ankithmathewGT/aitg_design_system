"use client"

import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { PropTable } from "@/components/gallery/prop-table"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"

export default function SelectPage() {
  return (
    <>
      <PageHeader
        label="Input"
        title="Select"
        description="A dropdown menu for selecting a single value from a list of options."
      />

      <Section title="Default">
        <Preview>
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="cherry">Cherry</SelectItem>
              <SelectItem value="dragonfruit">Dragonfruit</SelectItem>
            </SelectContent>
          </Select>
        </Preview>
      </Section>

      <Section title="With Label">
        <Preview>
          <div className="grid w-full max-w-[220px] gap-1.5">
            <Label htmlFor="fruit">Favorite Fruit</Label>
            <Select>
              <SelectTrigger id="fruit">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="cherry">Cherry</SelectItem>
                <SelectItem value="dragonfruit">Dragonfruit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Preview>
      </Section>

      <Section title="Disabled">
        <Preview>
          <Select disabled>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="cherry">Cherry</SelectItem>
              <SelectItem value="dragonfruit">Dragonfruit</SelectItem>
            </SelectContent>
          </Select>
        </Preview>
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Whether the select is disabled.",
            },
            {
              name: "defaultValue",
              type: "string",
              description:
                "The value of the select when initially rendered. Use when you do not need to control the state.",
            },
          ]}
        />
      </Section>
    </>
  )
}
