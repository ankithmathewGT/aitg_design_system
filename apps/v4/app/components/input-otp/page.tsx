import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/registry/new-york-v4/ui/input-otp"

export default function InputOtpPage() {
  return (
    <>
      <PageHeader
        title="Input OTP"
        description="A one-time password input component for verification codes. Built on input-otp."
        label="Input"
      />

      <Section
        title="Default"
        description="A 6-digit OTP input in a single group."
      >
        <Preview>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Preview>
        <CodeBlock
          code={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/new-york-v4/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
        />
      </Section>

      <Section
        title="With Separator"
        description="Groups of 3 digits separated by a visual separator."
      >
        <Preview>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Preview>
        <CodeBlock
          code={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/registry/new-york-v4/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "maxLength",
              type: "number",
              description:
                "The maximum number of characters allowed in the OTP input.",
            },
            {
              name: "value",
              type: "string",
              description:
                "The controlled value of the OTP input.",
            },
            {
              name: "onChange",
              type: "(value: string) => void",
              description:
                "Callback fired when the OTP value changes.",
            },
          ]}
        />
      </Section>
    </>
  )
}
