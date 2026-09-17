import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";

const experiments = [
  {
    number: "01",
    title: "Motion",
    description:
      "Exploring how movement can guide attention, communicate hierarchy, and make interfaces feel more responsive.",
    tags: ["GSAP", "Framer Motion", "CSS"],
  },
  {
    number: "02",
    title: "Interaction",
    description:
      "Small interactions, transitions, and micro-behaviors designed to make digital products feel more intentional.",
    tags: ["UX", "Interaction", "Prototyping"],
  },
  {
    number: "03",
    title: "Generative",
    description:
      "Experiments with code, geometry, typography, and systems that produce unexpected visual outcomes.",
    tags: ["Creative Code", "SVG", "Three.js"],
  },
  {
    number: "04",
    title: "Interfaces",
    description:
      "Testing unconventional layouts, navigation patterns, visual systems, and new ways of presenting information.",
    tags: ["UI", "Design Systems", "Layouts"],
  },
];

export default function PlaygroundPage() {
  return (
    <main>
      {/* Page header */}
      <PageHeader
        number="04"
        eyebrow="Playground"
        title="Where design meets experimentation."
        description="A space for exploring motion, interaction, interfaces, and ideas outside client work."
      />

      {/* Intro statement */}
      <section className="border-b border-[var(--border)] py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Why it exists
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <p className="text-[clamp(2rem,4.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em]">
                Not everything needs to become a product.
                <span className="display-font">
                  {" "}
                  Some things just need to be explored.
                </span>
              </p>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
                The Playground is where i test ideas
                without the constraints of a client brief. It
                is a place to learn, experiment, break things,
                and occasionally discover something worth
                shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="mb-12 flex items-end justify-between border-b border-[var(--border)] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em]">
              Experiments
            </p>

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Selected explorations
            </p>
          </div>

          <div>
            {experiments.map((experiment) => (
              <article
                key={experiment.number}
                className="group border-b border-[var(--border)] py-10 md:py-14"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-2">
                    <span className="text-xs font-bold tracking-[0.12em] text-[var(--accent)]">
                      {experiment.number}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <h2 className="text-[clamp(2.75rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-2">
                      {experiment.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-sm leading-7 text-[var(--text-muted)] md:text-base">
                      {experiment.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                      {experiment.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2 lg:flex lg:justify-end">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--text)] group-hover:bg-[var(--text)] group-hover:text-[var(--bg)]">
                      <MoveUpRight
                        size={18}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experimental visual */}
      <section className="border-t border-[var(--border)] py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="relative min-h-[420px] overflow-hidden rounded-[12px] bg-[var(--text)] md:min-h-[560px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-[var(--bg)]/20 md:h-72 md:w-72">
                <div className="absolute h-40 w-40 rounded-full border border-[var(--bg)]/30 md:h-52 md:w-52" />

                <div className="absolute h-24 w-24 rounded-full bg-[var(--accent)] md:h-32 md:w-32" />

                <div className="absolute h-[140%] w-px rotate-45 bg-[var(--bg)]/20" />

                <div className="absolute h-[140%] w-px -rotate-45 bg-[var(--bg)]/20" />
              </div>
            </div>

            <div className="absolute left-6 top-6 md:left-10 md:top-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--bg)]/60">
                Visual experiment / 001
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between md:bottom-10 md:left-10 md:right-10">
              <p className="max-w-xs text-sm leading-6 text-[var(--bg)]/70">
                A small study in geometry, scale, movement,
                and visual rhythm.
              </p>

              <span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--bg)]/50 sm:block">
                Creative code
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-[var(--border)] py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="section-label">Keep exploring</p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <p className="text-[clamp(2rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                Curiosity is part of the{" "}
                <span className="display-font">process.</span>
              </p>

              <Link
                href="/work"
                className="group mt-8 inline-flex items-center gap-2 border-b border-[var(--text)] pb-2 text-xs font-bold uppercase tracking-[0.08em]"
              >
                Explore the work

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}