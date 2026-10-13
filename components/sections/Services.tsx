import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="sluzby" className="scroll-mt-24 border-t border-line-subtle py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Služby"
          title="Co konkrétně vytvářím"
          description="Dva hlavní směry. Žádné odbočky navíc."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
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
      </div>
    </section>
  );
}
