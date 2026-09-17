import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className="group">
      <Link
        href={`/work/${project.slug}`}
        className="block"
        aria-label={`View ${project.title} case study`}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-[var(--surface)]">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

          <div className="absolute right-5 top-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-[var(--bg)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </Link>

      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              {project.category}
            </span>

            <span className="h-1 w-1 rounded-full bg-[var(--border)]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
              {project.year}
            </span>
          </div>

          <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
            {project.title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--text-muted)] md:text-base">
            {project.description}
          </p>
        </div>

        <div className="md:text-right">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
            Role
          </p>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {project.role.map((role) => (
              <span
                key={role}
                className="text-xs text-[var(--text-muted)]"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}