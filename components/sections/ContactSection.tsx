"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { BookingCalendar } from "@/components/sections/BookingCalendar";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "message" as const, label: "Napsat zprávu" },
  { id: "booking" as const, label: "Rezervovat schůzku" },
];

export function ContactSection() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("message");

  return (
    <section id="kontakt" className="scroll-mt-24 border-t border-line-subtle py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Kontakt"
          title="Pojďme probrat váš projekt"
          description="Napište pár vět o tom, co potřebujete, nebo si rovnou vyberte termín krátkého hovoru."
        />

        <Reveal delay={0.15} className="mt-12">
          <div className="mb-6 inline-flex rounded-md border border-line p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "rounded-sm px-4 py-2 text-sm font-semibold transition-colors duration-300 ease-signature",
                  tab === t.id ? "bg-dodger text-prussian-dark" : "text-fg-secondary hover:text-fg-primary"
                )}
                aria-pressed={tab === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="max-w-2xl">{tab === "message" ? <ContactForm /> : <BookingCalendar />}</div>
        </Reveal>
      </div>
    </section>
  );
}
