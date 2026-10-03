import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="o-mne" className="scroll-mt-24 border-t border-line-subtle py-24 lg:py-32">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-line">
            <Image
              src="/people/lukas.webp"
              alt="Lukáš — zakladatel Nexari"
              width={800}
              height={800}
              sizes="(min-width: 1024px) 380px, 90vw"
              className="h-full w-full object-cover"
            />
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
