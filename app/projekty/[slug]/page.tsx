import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BrowserMockup } from "@/components/project/BrowserMockup";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import { testimonials } from "@/lib/data/testimonials";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const testimonial = testimonials.find((t) => t.slug === project.testimonialSlug);

  return (
    <article className="pb-24 pt-36 lg:pb-32 lg:pt-44">
      <div className="container">
        <Reveal>
          <Link
            href="/projekty"
            className="underline-signature inline-flex items-center gap-2 text-sm font-medium text-fg-secondary hover:text-fg-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Všechny projekty
          </Link>
        </Reveal>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal delay={0.05} className="flex flex-wrap items-center gap-3">
              <Badge>{project.category}</Badge>
              <Badge>{project.type}</Badge>
              {project.year && <Badge>{project.year}</Badge>}
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 text-display-md font-extrabold text-fg-primary">{project.title}</h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-fg-secondary">{project.description}</p>
            </Reveal>
          </div>

          {project.url && (
            <Reveal delay={0.2}>
              <Button href={project.url} variant="secondary" size="md">
                Navštívit web
              </Button>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.2} className="mt-14">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Ukázka webu — ${project.title}`}
              width={1600}
              height={1000}
              priority
              className="w-full rounded-lg border border-line object-cover"
            />
          ) : (
            <BrowserMockup className="mx-auto max-w-3xl" />
          )}
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {project.challenge && (
            <Reveal>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-dark">Zadání</h2>
              <p className="mt-4 text-lg leading-relaxed text-fg-secondary">{project.challenge}</p>
            </Reveal>
          )}
          {project.solution && (
            <Reveal delay={0.1}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-dark">Řešení</h2>
              <p className="mt-4 text-lg leading-relaxed text-fg-secondary">{project.solution}</p>
            </Reveal>
          )}
        </div>

        {project.result && (
          <Reveal className="mt-16 border-t border-line-subtle pt-16">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-dark">Výsledek</h2>
            <p className="mt-4 max-w-2xl text-xl font-medium leading-relaxed text-fg-primary">{project.result}</p>
          </Reveal>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16 border-t border-line-subtle pt-16">
            <Reveal>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-aqua-dark">Galerie</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {project.gallery.map((image, i) => (
                <Reveal key={image.src} delay={i * 0.06} className={image.device === "desktop" ? "sm:col-span-2" : undefined}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.device === "desktop" ? 1600 : 600}
                    height={image.device === "desktop" ? 1000 : 1200}
                    className="w-full rounded-lg border border-line object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {testimonial && (
          <Reveal className="mt-16 border-t border-line-subtle pt-16">
            <blockquote className="max-w-2xl text-2xl font-medium leading-relaxed text-fg-primary">
              “{testimonial.quote}”
            </blockquote>
            <p className="mt-5 text-sm text-fg-muted">
              <span className="font-semibold text-fg-secondary">{testimonial.name}</span> — {testimonial.role}
            </p>
          </Reveal>
        )}

        <Reveal className="mt-20 flex flex-col items-start gap-6 rounded-lg border border-line bg-bg-surface p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-fg-primary">Máte podobný projekt?</h2>
            <p className="mt-2 text-fg-secondary">Pojďme ho probrat.</p>
          </div>
          <Button href="/#kontakt" size="lg">
            Probrat projekt
          </Button>
        </Reveal>
      </div>
    </article>
  );
}
