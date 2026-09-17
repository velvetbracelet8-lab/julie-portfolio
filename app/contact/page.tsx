import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";

const links = [
  {
    label: "Email",
    value: "hello@julielupex.com",
    href: "mailto:hello@julielupex.com",
    icon: Mail,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        number="05"
        eyebrow="Contact"
        title="Let's make something real."
        description="Have a product, website, or digital experience in mind? Let's turn the idea into something thoughtful, useful, and real."
      />

      {/* Availability */}
      <section className="border-b border-[var(--border)] py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Availability
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <div className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 flex-none rounded-full bg-[var(--accent)]" />

                <div>
                  <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                    Open to selected opportunities
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
                    Available for full-time or contract
                    opportunities, freelance projects, and
                    selected consulting work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to work */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="mb-12 border-b border-[var(--border)] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em]">
              Ways to work together
            </p>
          </div>

          <div className="grid gap-px border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
            <div className="bg-[var(--bg)] p-8 md:p-10">
              <span className="text-xs font-bold text-[var(--accent)]">
                01
              </span>

              <h2 className="mt-12 text-2xl font-medium tracking-[-0.03em]">
                Full-time / Contract
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                UI/UX design, frontend development,
                product design, or hybrid design-engineering
                roles.
              </p>
            </div>

            <div className="bg-[var(--bg)] p-8 md:p-10">
              <span className="text-xs font-bold text-[var(--accent)]">
                02
              </span>

              <h2 className="mt-12 text-2xl font-medium tracking-[-0.03em]">
                Freelance
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                MVP design and development, website
                redesigns, design systems, and UX or
                performance audits.
              </p>
            </div>

            <div className="bg-[var(--bg)] p-8 md:p-10">
              <span className="text-xs font-bold text-[var(--accent)]">
                03
              </span>

              <h2 className="mt-12 text-2xl font-medium tracking-[-0.03em]">
                Advisory
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                Design-to-development workflows, handoff
                optimization, strategy calls, and sprint
                reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact links */}
      <section className="border-t border-[var(--border)] py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="section-label">Get in touch</p>
            </div>

            <div className="lg:col-span-9">
              <div className="border-t border-[var(--border)]">
                {links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group flex items-center justify-between border-b border-[var(--border)] py-6 md:py-8"
                    >
                      <div className="flex items-center gap-5">
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-[var(--text-muted)]"
                        />

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                            {link.label}
                          </p>

                          <p className="mt-1 text-base font-medium md:text-lg">
                            {link.value}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[var(--border)] py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="section-label">Start a conversation</p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                Have an idea?
                <br />
                <span className="display-font">
                  Let&apos;s talk.
                </span>
              </h2>

              <a
                href="mailto:hello@julielupex.com"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--text)] px-7 py-4 text-xs font-bold uppercase tracking-[0.08em] text-[var(--bg)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent)]"
              >
                Send an email

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}