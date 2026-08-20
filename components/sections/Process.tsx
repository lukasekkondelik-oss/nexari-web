import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <section id="proces" className="scroll-mt-24 border-t border-line-subtle py-24 lg:py-32">
      <div className="container">
        <SectionHeader eyebrow="Proces" title="Jak spolupráce probíhá" description="Jednoduše, bez zbytečných kroků navíc." />

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="relative pl-0">
                <span className="text-gradient-signature text-3xl font-extrabold">{step.number}</span>
                <h3 className="mt-4 text-lg font-bold text-fg-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-4 hidden h-px w-full max-w-[40px] -translate-x-[calc(100%+16px)] bg-line-strong lg:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
