import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"
import { CodeBlock } from "@/components/gallery/code-block"
import { PropTable } from "@/components/gallery/prop-table"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from "@/registry/new-york-v4/ui/table"

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
]

export default function TablePage() {
  return (
    <div>
      <PageHeader
        title="Table"
        description="A structured data display for organizing information into rows and columns. Supports headers, footers, and custom styling."
        label="Display"
      />

      <Section
        title="Default"
        description="A basic table with column headers, data rows, and a footer."
      >
        <Preview variant="flush" className="p-6">
          <div className="w-full max-w-2xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((row) => (
                  <TableRow key={row.invoice}>
                    <TableCell className="font-medium">{row.invoice}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.method}</TableCell>
                    <TableCell className="text-right">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$1,750.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </Preview>
        <CodeBlock
          code={`import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from "@/registry/new-york-v4/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[120px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((row) => (
      <TableRow key={row.invoice}>
        <TableCell className="font-medium">{row.invoice}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.method}</TableCell>
        <TableCell className="text-right">{row.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$1,750.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
        />
      </Section>

      <Section title="Props">
        <PropTable
          props={[
            {
              name: "className",
              type: "string",
              description:
                "Additional CSS classes to apply to the table element for custom styling.",
            },
          ]}
        />
      </Section>
    </div>
  )
}
