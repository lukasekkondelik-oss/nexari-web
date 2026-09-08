"use client";

import { Button } from "@/components/ui/Button";
import { StaggerText } from "@/components/ui/StaggerText";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
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
        </Reveal>
      </div>
    </section>
  );
}
