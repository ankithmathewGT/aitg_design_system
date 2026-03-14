import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/registry/new-york-v4/ui/alert"

export default function AlertPage() {
  return (
    <div>
      <PageHeader
        title="Alert"
        description="Displays a callout message to the user, with support for multiple semantic variants to convey different levels of importance."
        label="Display"
      />

      <Section
        title="Variants"
        description="Alerts come in five variants to communicate different types of information."
      >
        <Preview variant="flush" className="p-6">
          <div className="w-full max-w-lg space-y-4">
            <Alert variant="default">
              <AlertTitle>Default</AlertTitle>
              <AlertDescription>
                This is a default alert for general information.
              </AlertDescription>
            </Alert>

            <Alert variant="info">
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>
                This is an informational alert with helpful context.
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Please review the details before proceeding.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
          </div>
        </Preview>
        <CodeBlock
          code={`import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/registry/new-york-v4/ui/alert"

<Alert variant="default">
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>
    This is a default alert for general information.
  </AlertDescription>
</Alert>

<Alert variant="info">
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>
    This is an informational alert with helpful context.
  </AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Please review the details before proceeding.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again later.
  </AlertDescription>
</Alert>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "variant",
              type: '"default" | "info" | "success" | "warning" | "destructive"',
              default: '"default"',
              description:
                "The visual style of the alert, indicating its semantic meaning.",
            },
          ]}
        />
      </Section>
    </div>
  )
}
