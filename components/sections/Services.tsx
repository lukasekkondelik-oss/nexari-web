import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  const primary = services.filter((s) => s.primary);
  const secondary = services.filter((s) => !s.primary);

  return (
    <section id="sluzby" className="scroll-mt-24 border-t border-line-subtle py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Služby"
          title="Co konkrétně vytvářím"
          description="Dva hlavní směry — a AI jako doplněk tam, kde dává reálný smysl, ne jako nálepka."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {primary.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.1}>
              <div className="h-full rounded-lg border border-line bg-bg-surface p-8 transition-colors duration-300 hover:border-line-strong lg:p-10">
                <span className="text-sm font-semibold text-fg-muted">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-bold text-fg-primary">{service.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-fg-secondary">{service.summary}</p>
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-fg-secondary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua-dark" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {secondary.map((service) => (
          <Reveal key={service.id} delay={0.2} className="mt-6">
            <div
              className={cn(
                "rounded-lg border border-line-subtle bg-transparent p-8 lg:flex lg:items-start lg:justify-between lg:gap-10 lg:p-10"
              )}
            >
              <div className="lg:max-w-md">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">
                  Sekundární služba
                </span>
                <h3 className="mt-3 text-xl font-bold text-fg-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-secondary">{service.summary}</p>
              </div>
              <ul className="mt-6 space-y-3 lg:mt-0 lg:min-w-[240px]">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-fg-secondary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-fg-muted" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
