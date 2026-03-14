"use client"

import { toast } from "sonner"
import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { Button } from "@/registry/new-york-v4/ui/button"

export default function ToastPage() {
  return (
    <div>
      <PageHeader
        title="Toast"
        description="A brief, non-intrusive notification that appears temporarily to provide feedback about an action. Powered by Sonner."
        label="Overlay"
      />

      <Section
        title="Default"
        description="Trigger a simple toast notification with a message."
      >
        <Preview>
          <Button
            variant="outline"
            onClick={() => toast("Event has been created.")}
          >
            Show Toast
          </Button>
        </Preview>
      </Section>

      <Section
        title="Variants"
        description="Toasts support multiple semantic variants to convey different types of feedback."
      >
        <Preview>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast.success("Event has been created.")}
            >
              Success
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("Event could not be created.")}
            >
              Error
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning("Please review before submitting.")}
            >
              Warning
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("A new version is available.")}
            >
              Info
            </Button>
          </div>
        </Preview>
      </Section>
    </div>
  )
}
