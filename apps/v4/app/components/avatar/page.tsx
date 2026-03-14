import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/registry/new-york-v4/ui/avatar"

export default function AvatarPage() {
  return (
    <>
      <PageHeader
        label="Display"
        title="Avatar"
        description="An image element with a fallback for representing a user."
      />

      <Section title="With Image">
        <Preview>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Preview>
        <CodeBlock
          code={`<Avatar>
  <AvatarImage
    src="https://github.com/shadcn.png"
    alt="@shadcn"
  />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
        />
      </Section>

      <Section title="Fallback">
        <Preview>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Preview>
        <CodeBlock
          code={`<Avatar>
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
        />
      </Section>

      <Section title="Sizes">
        <Preview>
          <div className="flex flex-row items-center gap-4">
            <Avatar size="sm">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex flex-row items-center gap-4">
  <Avatar size="sm">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar size="default">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar size="lg">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</div>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "className",
              type: "string",
              description:
                "Additional CSS classes to apply to the avatar container.",
            },
            {
              name: "src",
              type: "string",
              description:
                "The image source URL for the avatar (passed to AvatarImage).",
            },
            {
              name: "alt",
              type: "string",
              description:
                "Alt text for the avatar image (passed to AvatarImage).",
            },
          ]}
        />
      </Section>
    </>
  )
}
