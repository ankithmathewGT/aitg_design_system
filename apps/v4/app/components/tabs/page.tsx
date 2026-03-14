import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/new-york-v4/ui/tabs"

export default function TabsPage() {
  return (
    <>
      <PageHeader
        label="Display"
        title="Tabs"
        description="A set of layered sections of content, known as tab panels, that are displayed one at a time."
      />

      <Section title="Default">
        <Preview>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Account</TabsTrigger>
              <TabsTrigger value="tab2">Password</TabsTrigger>
              <TabsTrigger value="tab3">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Manage your account settings and preferences.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Change your password and security options.</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Configure your application settings.</p>
            </TabsContent>
          </Tabs>
        </Preview>
        <CodeBlock
          code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Account</TabsTrigger>
    <TabsTrigger value="tab2">Password</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Manage your account settings and preferences.</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Change your password and security options.</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Configure your application settings.</p>
  </TabsContent>
</Tabs>`}
        />
      </Section>

      <Section title="Line Variant">
        <Preview>
          <Tabs defaultValue="tab1">
            <TabsList variant="line">
              <TabsTrigger value="tab1">Overview</TabsTrigger>
              <TabsTrigger value="tab2">Analytics</TabsTrigger>
              <TabsTrigger value="tab3">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Overview content goes here.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Analytics content goes here.</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Reports content goes here.</p>
            </TabsContent>
          </Tabs>
        </Preview>
        <CodeBlock
          code={`<Tabs defaultValue="tab1">
  <TabsList variant="line">
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
    <TabsTrigger value="tab3">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Overview content goes here.</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Analytics content goes here.</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Reports content goes here.</p>
  </TabsContent>
</Tabs>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "defaultValue",
              type: "string",
              description:
                "The value of the tab that should be active when initially rendered.",
            },
            {
              name: "onValueChange",
              type: "(value: string) => void",
              description:
                "Callback fired when the active tab changes.",
            },
          ]}
        />
      </Section>
    </>
  )
}
