import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Intro() {
  return (
 <section
  id="introduction"
  className="border-t border-[var(--border)] py-24 md:py-32 lg:py-40"
>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Section label */}
          <div className="lg:col-span-3">
            <p className="section-label">
              01 — Introduction
            </p>
          </div>

          {/* Main statement */}
          <div className="lg:col-span-9">
            <h2 className="max-w-5xl text-[clamp(2.75rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.045em]">
              Good digital experiences start with{" "}
              <span className="display-font">
                good questions.
              </span>
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
              <p className="text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
                I started my journey purely in design—obsessed
                with clean grids, thoughtful typography, and
                solving user friction on paper. But every time
                I handed off a design file, something felt
                missing.
              </p>

              <p className="text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
                So I opened a code editor and learned to build
                what I designed. Today, I live comfortably at
                the intersection of Figma and VS Code.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 border-b border-[var(--text)] pb-1 text-xs font-bold uppercase tracking-[0.08em]"
              >
                More about Julie

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Design → code bridge */}
        <div
          id="about-details"
          className="mt-24 border-t border-[var(--border)] pt-10 md:mt-32 md:pt-12"
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                The difference
              </p>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[clamp(1.4rem,3vw,2.5rem)] font-medium tracking-[-0.03em]">
                {[
                  "Research",
                  "UX",
                  "UI",
                  "System",
                  "Code",
                  "Product",
                ].map((item, index) => (
                  <span key={item} className="flex items-center gap-3">
                    <span
                      className={
                        item === "Code"
                          ? "display-font"
                          : ""
                      }
                    >
                      {item}
                    </span>

                    {index < 5 && (
                      <span className="text-[var(--accent)]">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text-muted)] md:text-xl md:leading-9">
                No translation loss. No broken layouts. Just
                seamless digital experiences from concept to
                launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}