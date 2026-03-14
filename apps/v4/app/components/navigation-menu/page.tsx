import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/registry/new-york-v4/ui/navigation-menu"
import Link from "next/link"

export default function NavigationMenuPage() {
  return (
    <>
      <PageHeader
        title="Navigation Menu"
        description="A collection of links for navigating websites. Supports horizontal layouts with accessible keyboard navigation."
        label="Navigation"
      />

      <Section title="Default" description="A horizontal navigation menu with simple link items.">
        <Preview>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#">Getting Started</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Preview>
        <CodeBlock
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href="#">Getting Started</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href="#">Components</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href="#">Documentation</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "value",
              type: "string",
              description: "The controlled value of the menu item to activate.",
            },
            {
              name: "onValueChange",
              type: "(value: string) => void",
              description: "Event handler called when the value changes.",
            },
          ]}
        />
      </Section>
    </>
  )
}
