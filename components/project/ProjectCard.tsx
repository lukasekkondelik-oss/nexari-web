import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/lib/data/projects";
import { BrowserMockup } from "@/components/project/BrowserMockup";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/projekty/${project.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dodger"
    >
      <div className="relative overflow-hidden rounded-lg border border-line transition-colors duration-300 ease-signature group-hover:border-dodger/50">
        <div className="overflow-hidden">
          <div className="transition-transform duration-500 ease-signature group-hover:scale-[1.03]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`Náhled webu — ${project.title}`}
                width={1200}
                height={800}
                priority={priority}
                className="aspect-[4/3] w-full object-cover"
              />
            ) : (
              <BrowserMockup className="aspect-[4/3] rounded-none border-0" />
            )}
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-signature group-hover:opacity-100"
          style={{ boxShadow: "inset 0 0 0 1px rgba(30,150,252,0.4)" }}
          aria-hidden="true"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-fg-muted">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.type}</span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-fg-primary">{project.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-fg-secondary">{project.description}</p>
        </div>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-fg-muted transition-all duration-300 ease-signature group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aqua"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
