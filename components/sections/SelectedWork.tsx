import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/work/ProjectCard";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="border-t border-[var(--border)] py-24 md:py-32 lg:py-40"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="section-label">
              02 — Selected Work
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-4xl text-[clamp(2.75rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.045em]">
                Things I&apos;ve designed{" "}
                <span className="display-font">
                  &amp; built.
                </span>
              </h2>

              <p className="max-w-xs text-sm leading-6 text-[var(--text-muted)]">
                A selection of digital experiences where
                strategy, design, and development meet.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href="/work/above-dental"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em]"
          >
            View case study

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}