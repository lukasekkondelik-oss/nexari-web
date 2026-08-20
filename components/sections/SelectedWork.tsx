import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/project/ProjectCard";
import { getFeaturedProjects } from "@/lib/data/projects";

export function SelectedWork() {
  const featured = getFeaturedProjects();

  return (
    <section id="projekty" className="scroll-mt-24 border-t border-line-subtle py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Portfolio"
            title="Vybrané projekty"
            description="Každý projekt řeším jako svůj vlastní produkt — od struktury přes design až po poslední detail."
          />
          <Reveal delay={0.2}>
            <Button href="/projekty" variant="secondary" size="md">
              Všechny projekty
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1} className={i === 0 ? "sm:col-span-2" : undefined}>
              <ProjectCard project={project} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
