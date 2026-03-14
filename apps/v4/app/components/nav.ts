export type NavItem = {
  title: string
  href: string
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

export const nav: NavGroup[] = [
  {
    label: "Getting Started",
    items: [{ title: "Introduction", href: "/components/introduction" }],
  },
  {
    label: "Foundations",
    items: [
      { title: "Colors", href: "/components/colors" },
      { title: "Typography", href: "/components/typography" },
    ],
  },
  {
    label: "Inputs",
    items: [
      { title: "Button", href: "/components/button" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Input", href: "/components/input" },
      { title: "Input OTP", href: "/components/input-otp" },
      { title: "Radio Group", href: "/components/radio-group" },
      { title: "Select", href: "/components/select" },
      { title: "Slider", href: "/components/slider" },
      { title: "Switch", href: "/components/switch" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Toggle", href: "/components/toggle" },
    ],
  },
  {
    label: "Display",
    items: [
      { title: "Accordion", href: "/components/accordion" },
      { title: "Alert", href: "/components/alert" },
      { title: "Avatar", href: "/components/avatar" },
      { title: "Badge", href: "/components/badge" },
      { title: "Calendar", href: "/components/calendar" },
      { title: "Card", href: "/components/card" },
      { title: "Progress", href: "/components/progress" },
      { title: "Separator", href: "/components/separator" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Table", href: "/components/table" },
      { title: "Tabs", href: "/components/tabs" },
    ],
  },
  {
    label: "Overlays",
    items: [
      { title: "Command", href: "/components/command" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Popover", href: "/components/popover" },
      { title: "Sheet", href: "/components/sheet" },
      { title: "Toast", href: "/components/toast" },
      { title: "Tooltip", href: "/components/tooltip" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { title: "Breadcrumb", href: "/components/breadcrumb" },
      { title: "Navigation Menu", href: "/components/navigation-menu" },
      { title: "Pagination", href: "/components/pagination" },
    ],
  },
  {
    label: "Layout",
    items: [
      { title: "Resizable", href: "/components/resizable" },
      { title: "Scroll Area", href: "/components/scroll-area" },
    ],
  },
]
