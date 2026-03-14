import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Calendar } from "@/registry/new-york-v4/ui/calendar"

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        title="Calendar"
        description="A date picker calendar component built on react-day-picker."
        label="Display"
      />

      <Section title="Default" description="A basic single-mode calendar.">
        <Preview>
          <Calendar mode="single" />
        </Preview>
        <CodeBlock
          code={`import { Calendar } from "@/registry/new-york-v4/ui/calendar"

<Calendar mode="single" />`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "mode",
              type: '"single" | "multiple" | "range"',
              default: '"single"',
              description: "The selection mode of the calendar.",
            },
            {
              name: "selected",
              type: "Date | Date[] | DateRange",
              description: "The currently selected date(s).",
            },
            {
              name: "onSelect",
              type: "(date: Date | undefined) => void",
              description:
                "Callback fired when a date is selected.",
            },
          ]}
        />
      </Section>
    </>
  )
}
