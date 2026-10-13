import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StaggerText } from "@/components/ui/StaggerText";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedProjects } from "@/lib/data/projects";

export function Hero() {
  const [featuredProject] = getFeaturedProjects();

  return (
    <section className="relative overflow-hidden pb-20 pt-40 lg:pb-32 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-1/4 top-1/4 h-[320px] w-[320px] rounded-full bg-aqua/10 blur-[90px]"
        aria-hidden="true"
      />

      <div className="container relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-8">
        <div>
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-aqua-dark">
              <span aria-hidden="true" className="h-px w-6 bg-signature-ray" />
              Weby &amp; webové aplikace
            </span>
          </Reveal>

          <h1 className="text-display-lg font-extrabold text-fg-primary">
            <StaggerText lines={["Weby a aplikace,", "které mají důvod", "existovat."]} />
          </h1>

          <Reveal delay={0.5} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/#kontakt" size="lg">
              Probrat projekt
            </Button>
            <Button href="/#projekty" variant="secondary" size="lg" showArrow={false}>
              Moje práce
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="lg:pb-2">
          <div className="border-l border-line pl-5">
            <p className="text-lg leading-relaxed text-fg-secondary">
              Navrhuji a vyvíjím moderní webové stránky a webové aplikace pro podnikatele a firmy, kteří chtějí
              kvalitní digitální produkt — ne další šablonu.
            </p>
          </div>

          {featuredProject && (
            <Link href={`/projekty/${featuredProject.slug}`} className="group mt-8 block pl-5">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">
                Poslední realizace
              </span>
              <div className="mt-3 overflow-hidden rounded-lg border border-line transition-colors duration-300 ease-signature group-hover:border-dodger/50">
                <Image
                  src={featuredProject.image}
                  alt={`Náhled webu — ${featuredProject.title}`}
                  width={1200}
                  height={750}
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-signature group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-fg-secondary transition-colors group-hover:text-fg-primary">
                  {featuredProject.title}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-fg-muted transition-all duration-300 ease-signature group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aqua"
                  aria-hidden="true"
                />
              </div>
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
