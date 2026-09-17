import PageHeader from "@/components/ui/PageHeader";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the people, goals, constraints, and context before deciding what to build.",
    details: [
      "User research",
      "Stakeholder conversations",
      "Competitive research",
      "Problem definition",
    ],
  },
  {
    number: "02",
    title: "Define",
    description:
      "Turn research into a clear direction, information structure, and product strategy.",
    details: [
      "User flows",
      "Information architecture",
      "Content structure",
      "Product requirements",
    ],
  },
  {
    number: "03",
    title: "Design",
    description:
      "Shape the experience through wireframes, interfaces, systems, and purposeful interaction.",
    details: [
      "Wireframing",
      "UI design",
      "Design systems",
      "Prototyping",
    ],
  },
  {
    number: "04",
    title: "Build",
    description:
      "Translate the design into responsive, accessible, and production-ready frontend code.",
    details: [
      "React / Next.js",
      "Responsive development",
      "Accessibility",
      "Performance",
    ],
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Test, measure, iterate, and remove anything that gets in the way of a better experience.",
    details: [
      "Usability testing",
      "Performance review",
      "Visual refinement",
      "Launch optimization",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main>
      <PageHeader
        number="03"
        eyebrow="Process"
        title="From uncertainty to something real."
        description="Good work doesn't begin with pixels. It begins with understanding."
      />

      {/* Principle */}
      <section className="border-b border-[var(--border)] py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="section-label">The Principle</p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <p className="max-w-4xl text-[clamp(2rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                Good work doesn&apos;t begin with pixels.{" "}
                <span className="display-font">
                  It begins with understanding.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="mb-12 border-b border-[var(--border)] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em]">
              The workflow
            </p>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-8 py-10 md:py-14 lg:grid-cols-12"
              >
                <div className="lg:col-span-2">
                  <span className="text-xs font-bold text-[var(--accent)]">
                    {step.number}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                    {step.title}
                  </h2>
                </div>

                <div className="lg:col-span-6">
                  <p className="max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
                    {step.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="border-t border-[var(--border)] py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="section-label">Design + Code</p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <p className="text-[clamp(2rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                The best part is closing the gap between{" "}
                <span className="display-font">
                  the idea and the final product.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}