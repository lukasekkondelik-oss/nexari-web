import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="scroll-mt-24 border-t border-line-subtle py-24 lg:py-32">
      <div className="container">
        <SectionHeader eyebrow="Reference" title="Co říkají klienti" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.slug} delay={i * 0.1}>
              <figure className="h-full rounded-lg border border-line bg-bg-surface p-8 lg:p-10">
                <Quote className="h-6 w-6 text-aqua-dark" aria-hidden="true" />
                <blockquote className="mt-5 text-lg leading-relaxed text-fg-primary">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-fg-primary">{testimonial.name}</span>
                  <span className="text-fg-muted"> — {testimonial.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
