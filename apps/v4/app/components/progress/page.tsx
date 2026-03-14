import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Progress } from "@/registry/new-york-v4/ui/progress"

export default function ProgressPage() {
  return (
    <>
      <PageHeader
        title="Progress"
        description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
        label="Display"
      />

      <Section
        title="Default"
        description="A standard progress bar with a fixed value."
      >
        <Preview>
          <Progress value={60} className="w-[300px]" />
        </Preview>
        <CodeBlock
          code={`import { Progress } from "@/registry/new-york-v4/ui/progress"

<Progress value={60} className="w-[300px]" />`}
        />
      </Section>

      <Section
        title="Animated"
        description="Progress can be animated by updating the value prop over time using useEffect and setInterval in a client component."
      >
        <Preview>
          <Progress value={60} className="w-[300px]" />
        </Preview>
        <CodeBlock
          code={`"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/registry/new-york-v4/ui/progress"

export function AnimatedProgress() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) return 0
        return prev + 10
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return <Progress value={value} className="w-[300px]" />
}`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "value",
              type: "number",
              default: "0",
              description:
                "The current progress value, between 0 and the max value.",
            },
            {
              name: "max",
              type: "number",
              default: "100",
              description: "The maximum value of the progress bar.",
            },
            {
              name: "className",
              type: "string",
              description:
                "Additional CSS classes to apply to the progress bar.",
            },
          ]}
        />
      </Section>
    </>
  )
}
