import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projekty",
  description: "Webové stránky a webové aplikace, které jsem navrhl a vyvinul pro firmy a podnikatele.",
};

export default function ProjectsPage() {
  return (
    <div className="pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Všechny projekty"
          description="Portfolio roste s každým dalším projektem. Tady je vše, na čem jsem pracoval."
        />

        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 4) * 0.08}>
              <ProjectCard project={project} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
