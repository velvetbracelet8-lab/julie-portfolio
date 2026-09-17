import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Header */}
      <header className="border-b border-[var(--border)]">
        <div className="container flex min-h-20 items-center justify-between">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em]"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to work
          </Link>

          <span className="text-sm font-bold tracking-[-0.02em]">
            JULIE LUPEX
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {project.category}
                </span>

                <span className="h-1 w-1 rounded-full bg-[var(--border)]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {project.year}
                </span>
              </div>

              <h1 className="text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.055em]">
                {project.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-muted)] md:text-xl md:leading-9">
                General, Cosmetic &amp; Restorative Dentistry.
              </p>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm leading-7 text-[var(--text-muted)]">
                A digital experience designed to translate
                clinical expertise into an inviting, accessible,
                and conversion-focused patient journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="container">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[12px] bg-[var(--surface)]">
          <Image
            src={project.image}
            alt={`${project.title} website project`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Project information */}
      <section className="container py-20 md:py-28 lg:py-36">
        <div className="grid gap-12 border-b border-[var(--border)] pb-20 md:pb-28 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="section-label">
              Project Details
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Role
              </p>

              <div className="space-y-1">
                {project.role.map((role) => (
                  <p key={role} className="text-sm">
                    {role}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Category
              </p>

              <p className="text-sm">
                {project.category}
              </p>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Year
              </p>

              <p className="text-sm">
                {project.year}
              </p>
            </div>
          </div>
        </div>

        {/* Challenge */}
        <div className="grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="section-label">
              The Challenge
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="text-[clamp(2.25rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
              Turning clinical expertise into an experience
              people can feel comfortable using.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
              Above Dental needed a digital experience that
              could communicate professional dental expertise
              while making the patient journey feel clear,
              approachable, and easy to navigate.
            </p>
          </div>
        </div>

        {/* Approach */}
        <div className="grid gap-10 border-t border-[var(--border)] py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="section-label">
              The Approach
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="text-[clamp(2.25rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
              Strategy, design, marketing, and development
              working as one system.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
              Julie approached the project across multiple
              disciplines—translating clinical information into
              a clear visual hierarchy, designing the user
              journey, and building the experience with
              discoverability and patient conversion in mind.
            </p>
          </div>
        </div>

        {/* Development */}
        <div className="grid gap-10 border-t border-[var(--border)] py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="section-label">
              Development
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="text-[clamp(2.25rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
              Built for real users, real devices, and real
              business needs.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
              The project combines a content-managed website
              with responsive frontend development,
              analytics, conversion tracking, forms,
              click-to-call interactions, maps, booking
              integration, and search-oriented content
              structure.
            </p>
          </div>
        </div>

        {/* Visit */}
        {project.url && (
          <div className="border-t border-[var(--border)] pt-10">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--text)] px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-[var(--bg)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent)]"
            >
              Visit Above Dental
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        )}
      </section>
    </main>
  );
}

