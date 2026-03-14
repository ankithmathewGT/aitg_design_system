import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/registry/new-york-v4/ui/dialog"

export default function DialogPage() {
  return (
    <>
      <PageHeader
        title="Dialog"
        description="A modal dialog that interrupts the user with important content and expects a response."
        label="Overlay"
      />

      <Section
        title="Default"
        description="A basic confirmation dialog with cancel and continue actions."
      >
        <Preview>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Please confirm that you want to
                  proceed with this operation.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button>Continue</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
        <CodeBlock
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. Please confirm that you want to
        proceed with this operation.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <DialogClose asChild>
        <Button>Continue</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        />
      </Section>

      <Section
        title="Destructive"
        description="A dialog with a destructive confirmation action."
      >
        <Preview>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Account</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete your account? All of your data
                  will be permanently removed. This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="destructive">Delete Account</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
        <CodeBlock
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete Account</DialogTitle>
      <DialogDescription>
        Are you sure you want to delete your account? All of your data
        will be permanently removed. This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <DialogClose asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "open",
              type: "boolean",
              description:
                "The controlled open state of the dialog.",
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              description:
                "Event handler called when the open state changes.",
            },
          ]}
        />
      </Section>
    </>
  )
}
