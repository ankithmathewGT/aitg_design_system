import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/new-york-v4/ui/card"

export default function CardPage() {
  return (
    <>
      <PageHeader
        label="Display"
        title="Card"
        description="A container for grouping related content and actions."
      />

      <Section title="Default">
        <Preview>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                Card description with supporting text.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here. This is the main body of the card.</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">Card footer</p>
            </CardFooter>
          </Card>
        </Preview>
        <CodeBlock
          code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      Card description with supporting text.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here. This is the main body of the card.</p>
  </CardContent>
  <CardFooter>
    <p className="text-sm text-muted-foreground">Card footer</p>
  </CardFooter>
</Card>`}
        />
      </Section>

      <Section title="Simple">
        <Preview>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>A simple card with just a title and body text.</p>
            </CardContent>
          </Card>
        </Preview>
        <CodeBlock
          code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Simple Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>A simple card with just a title and body text.</p>
  </CardContent>
</Card>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "className",
              type: "string",
              description:
                "Additional CSS classes to apply to the card container.",
            },
          ]}
        />
      </Section>
    </>
  )
}
