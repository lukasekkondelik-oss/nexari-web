import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/Logo";

export function About() {
  return (
    <section id="o-mne" className="scroll-mt-24 border-t border-line-subtle py-24 lg:py-32">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-line bg-bg-elevated">
            <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
            <div className="flex h-full items-center justify-center">
              <Logo variant="mark" className="h-16 w-16 opacity-60" />
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            eyebrow="O mně"
            title="Za projektem stojí konkrétní člověk"
            className="max-w-xl"
          />
          <Reveal delay={0.15} className="mt-6 space-y-5 max-w-xl text-base leading-relaxed text-fg-secondary md:text-lg">
            <p>
              Jsem Lukáš — navrhuji a stavím weby a webové aplikace pod značkou Nexari. Nechci stavět weby jen proto,
              aby existovaly. Chci vytvářet digitální produkty, které dávají firmě smysl a které může s hrdostí
              ukázat svým zákazníkům.
            </p>
            <p>
              Ke každému projektu přistupuji osobně — od prvního rozhovoru až po nasazení a další rozvoj. Žádný
              anonymní tým, žádné šablony. Jen jasný proces a produkt, za kterým si stojím.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
