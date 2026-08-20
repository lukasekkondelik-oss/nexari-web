import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line-subtle py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-signature-ray opacity-[0.08]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-dodger/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-display-sm font-extrabold text-fg-primary">
            Máte v hlavě projekt?
            <br />
            Pojďme z něj udělat něco skutečného.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="mt-10">
          <Button href="/#kontakt" size="lg">
            Probrat projekt
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
