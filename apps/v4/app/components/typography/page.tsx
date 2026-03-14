import { PageHeader } from "@/components/gallery/page-header"
import { Section } from "@/components/gallery/section"
import { Preview } from "@/components/gallery/preview"

type TypeSpecimen = {
  name: string
  tag: string
  sampleText: string
  size: string
  weight: string
  tracking: string
  lineHeight: string
  extra?: string
}

const specimens: TypeSpecimen[] = [
  {
    name: "Heading 1",
    tag: "h1",
    sampleText: "The quick brown fox",
    size: "30px",
    weight: "600 (Semibold)",
    tracking: "-0.032em",
    lineHeight: "1.15",
  },
  {
    name: "Heading 2",
    tag: "h2",
    sampleText: "The quick brown fox",
    size: "24px",
    weight: "600 (Semibold)",
    tracking: "-0.026em",
    lineHeight: "1.2",
  },
  {
    name: "Heading 3",
    tag: "h3",
    sampleText: "The quick brown fox",
    size: "20px",
    weight: "500 (Medium)",
    tracking: "-0.022em",
    lineHeight: "1.25",
  },
  {
    name: "Heading 4",
    tag: "h4",
    sampleText: "The quick brown fox jumps over the lazy dog",
    size: "16px",
    weight: "500 (Medium)",
    tracking: "-0.016em",
    lineHeight: "1.35",
  },
  {
    name: "Heading 5",
    tag: "h5",
    sampleText: "The quick brown fox jumps over the lazy dog",
    size: "14px",
    weight: "500 (Medium)",
    tracking: "-0.012em",
    lineHeight: "1.4",
  },
  {
    name: "Heading 6",
    tag: "h6",
    sampleText: "The quick brown fox",
    size: "12px",
    weight: "500 (Medium)",
    tracking: "0.01em",
    lineHeight: "1.4",
    extra: "uppercase",
  },
  {
    name: "Body",
    tag: "p",
    sampleText:
      "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump.",
    size: "14px",
    weight: "400 (Regular)",
    tracking: "-0.011em",
    lineHeight: "1.65",
  },
  {
    name: "Small",
    tag: "small",
    sampleText:
      "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",
    size: "12px",
    weight: "400 (Regular)",
    tracking: "inherit",
    lineHeight: "1.5",
    extra: "foreground-muted",
  },
  {
    name: "Code",
    tag: "code",
    sampleText: "const design = system.tokens()",
    size: "12px",
    weight: "400 (Regular)",
    tracking: "inherit",
    lineHeight: "inherit",
    extra: "font-mono",
  },
]

function SpecimenRow({ specimen }: { specimen: TypeSpecimen }) {
  const Tag = specimen.tag as keyof React.JSX.IntrinsicElements

  return (
    <Preview variant="flush">
      <div className="flex w-full flex-col gap-6 p-8 md:flex-row md:items-center md:gap-10">
        {/* Rendered specimen */}
        <div className="min-w-0 flex-1">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[rgb(var(--foreground-subtle))]">
            {specimen.name}{" "}
            <span className="text-[rgb(var(--foreground-subtle)/0.6)]">
              {"<"}{specimen.tag}{">"}
            </span>
          </p>
          <Tag className="max-w-[520px]">{specimen.sampleText}</Tag>
        </div>

        {/* Specs */}
        <div className="shrink-0 space-y-1 border-t border-[rgb(var(--border)/0.08)] pt-4 md:w-[200px] md:border-t-0 md:border-l md:border-[rgb(var(--border)/0.08)] md:pt-0 md:pl-8">
          <SpecRow label="Size" value={specimen.size} />
          <SpecRow label="Weight" value={specimen.weight} />
          <SpecRow label="Tracking" value={specimen.tracking} />
          <SpecRow label="Line height" value={specimen.lineHeight} />
          {specimen.extra && (
            <SpecRow label="Note" value={specimen.extra} />
          )}
        </div>
      </div>
    </Preview>
  )
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 text-xs">
      <span className="text-[rgb(var(--foreground-subtle))]">{label}</span>
      <span className="font-mono text-[rgb(var(--foreground-muted))]">
        {value}
      </span>
    </div>
  )
}

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        label="Foundations"
        title="Typography"
        description="Type scale specimens using the Geist typeface. Each style is shown with its specifications."
      />

      <Section title="Type Scale" description="Every level of the typographic hierarchy.">
        {specimens.map((specimen) => (
          <SpecimenRow key={specimen.tag} specimen={specimen} />
        ))}
      </Section>
    </>
  )
}
