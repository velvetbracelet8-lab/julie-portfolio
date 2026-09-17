import PageHeader from "@/components/ui/PageHeader";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main>
      {/* Page header */}
      <PageHeader
        number="01"
        eyebrow="Selected Work"
        title="Selected work."
        description="A collection of digital experiences where strategy, design, development, and problem-solving come together."
      />

      {/* Projects */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="mb-12 flex items-end justify-between border-b border-[var(--border)] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em]">
              Selected projects
            </p>

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
              {String(projects.length).padStart(2, "0")} project
              {projects.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {projects.map((project, index) => (
              <div key={project.slug}>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    {project.category}
                  </span>
                </div>

                <ProjectCard
                  project={project}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="border-t border-[var(--border)] py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="section-label">More to come</p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <p className="text-[clamp(2rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                Every project starts with a problem worth{" "}
                <span className="display-font">solving.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}