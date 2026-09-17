import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="border-t border-[var(--border)] py-24 md:py-32 lg:py-40">
      <div className="container">
        {/* Main story */}
        <div className="grid gap-12 md:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Designer → Developer
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="space-y-8 text-base leading-8 text-[var(--text-muted)] md:text-lg md:leading-9">
              <p>
                I&apos;ve always believed that great digital
                products require both empathy and logic.
              </p>

              <p>
                UX design taught me to understand human
                behavior. UI design gave me a way to give
                those insights form. Frontend development
                gave me the power to bring the experience to
                life.
              </p>

              <p>
                Over the past few years, I&apos;ve worked with
                startups, agencies, and founders to turn
                complex problems into intuitive digital
                products.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20 border-t border-[var(--border)] pt-10 md:mt-28 md:pt-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                How I think
              </p>
            </div>

            <div className="lg:col-span-9">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <span className="mb-5 block text-xs font-bold text-[var(--accent)]">
                    01
                  </span>

                  <h3 className="text-xl font-medium tracking-[-0.03em]">
                    Start with people
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    Understand the people, problems, and
                    context before deciding what to build.
                  </p>
                </div>

                <div>
                  <span className="mb-5 block text-xs font-bold text-[var(--accent)]">
                    02
                  </span>

                  <h3 className="text-xl font-medium tracking-[-0.03em]">
                    Make complexity clear
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    Turn complicated requirements into
                    interfaces that feel simple and natural.
                  </p>
                </div>

                <div>
                  <span className="mb-5 block text-xs font-bold text-[var(--accent)]">
                    03
                  </span>

                  <h3 className="text-xl font-medium tracking-[-0.03em]">
                    Build what I design
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    Stay close to the implementation so the
                    final product reflects the original idea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 border-t border-[var(--border)] pt-10 md:mt-28 md:pt-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 lg:col-start-5">
              <p className="max-w-4xl text-[clamp(1.75rem,4vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                Whether I&apos;m mapping a design system,
                prototyping an interaction, or optimizing
                frontend code, the goal is the same:
                <span className="display-font">
                  {" "}
                  make the experience feel effortless.
                </span>
              </p>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border-b border-[var(--text)] pb-2 text-xs font-bold uppercase tracking-[0.08em]"
              >
                Work with Julie

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}