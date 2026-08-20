"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StaggerText } from "@/components/ui/StaggerText";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserMockup } from "@/components/project/BrowserMockup";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-20 pt-40 lg:pb-32 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[560px] w-[560px] rounded-full bg-dodger/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-aqua/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
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

          <Reveal delay={0.5} className="mt-7 max-w-lg">
            <p className="text-lg leading-relaxed text-fg-secondary">
              Navrhuji a vyvíjím moderní webové stránky a webové aplikace pro podnikatele a firmy, kteří chtějí
              kvalitní digitální produkt — ne další šablonu.
            </p>
          </Reveal>

          <Reveal delay={0.6} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/#kontakt" size="lg">
              Probrat projekt
            </Button>
            <Button href="/#projekty" variant="secondary" size="lg" showArrow={false}>
              Moje práce
            </Button>
          </Reveal>
        </div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.94, rotate: 2 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-xl bg-signature-ray-soft opacity-20 blur-3xl" aria-hidden="true" />
          <BrowserMockup className="rotate-[-2.5deg] shadow-[0_40px_80px_-30px_rgba(0,10,20,0.7)]" />
          <div className="absolute -bottom-8 -left-8 hidden w-2/3 rotate-[3deg] sm:block">
            <BrowserMockup compact className="scale-90 opacity-90 shadow-[0_30px_60px_-24px_rgba(0,10,20,0.7)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
