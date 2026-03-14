import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/new-york-v4/ui/command"

export default function CommandPage() {
  return (
    <>
      <PageHeader
        title="Command"
        description="A command palette for searching, filtering, and selecting items from a list."
        label="Overlay"
      />

      <Section
        title="Default"
        description="A command palette with grouped items, search input, and keyboard shortcuts."
      >
        <Preview>
          <Command className="w-[350px] rounded-[var(--radius-lg)] border border-[rgb(var(--border)/0.1)]">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <span>Calendar</span>
                  <CommandShortcut>⌘K</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Search</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Settings</span>
                  <CommandShortcut>⌘,</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem>
                  <span>Create New</span>
                </CommandItem>
                <CommandItem>
                  <span>Import</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Preview>
        <CodeBlock
          code={`import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/new-york-v4/ui/command"

<Command className="w-[350px] rounded-lg border">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <span>Calendar</span>
        <CommandShortcut>⌘K</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <span>Search</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <span>Settings</span>
        <CommandShortcut>⌘,</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Actions">
      <CommandItem>
        <span>Create New</span>
      </CommandItem>
      <CommandItem>
        <span>Import</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "open",
              type: "boolean",
              description:
                "Controlled open state for use with CommandDialog.",
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              description:
                "Callback fired when the open state of the dialog changes.",
            },
            {
              name: "value",
              type: "string",
              description: "The controlled value of the selected item.",
            },
            {
              name: "onValueChange",
              type: "(value: string) => void",
              description:
                "Callback fired when the selected item value changes.",
            },
          ]}
        />
      </Section>
    </>
  )
}
