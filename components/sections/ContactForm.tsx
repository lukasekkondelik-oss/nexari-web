"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-line bg-bg-elevated px-4 py-3 text-sm text-fg-primary placeholder:text-fg-muted transition-colors focus-visible:border-dodger focus-visible:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Odeslání se nezdařilo");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-lg border border-line bg-bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-aqua" aria-hidden="true" />
        <p className="mt-4 text-lg font-semibold text-fg-primary">Zpráva odeslána.</p>
        <p className="mt-2 max-w-xs text-sm text-fg-secondary">Ozvu se vám co nejdřív, obvykle do jednoho pracovního dne.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-bg-surface p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg-secondary">
            Jméno
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg-secondary">
            E-mail
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-fg-secondary">
            Firma <span className="text-fg-muted">(nepovinné)</span>
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-fg-secondary">
            Orientační rozpočet <span className="text-fg-muted">(nepovinné)</span>
          </label>
          <input id="budget" name="budget" type="text" placeholder="např. 50–100 tis. Kč" className={inputClasses} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="need" className="mb-2 block text-sm font-medium text-fg-secondary">
          Co potřebujete
        </label>
        <select id="need" name="need" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Vyberte typ projektu
          </option>
          <option value="web">Nový web</option>
          <option value="redesign">Redesign stávajícího webu</option>
          <option value="app">Webová aplikace</option>
          <option value="ai">AI řešení</option>
          <option value="nevim">Ještě nevím</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-fg-secondary">
          Zpráva
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Pár vět o projektu stačí."
          className={inputClasses}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-aqua-dark">
          Odeslání se nepovedlo. Napište mi prosím rovnou na{" "}
          <a href={`mailto:${site.email}`} className="underline-signature">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-dodger px-6 py-3.5 text-sm font-semibold text-prussian-dark shadow-glow transition-all duration-300 ease-signature hover:bg-dodger-light disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Odeslat zprávu
      </button>

      <p className="mt-4 text-xs leading-relaxed text-fg-muted">
        Odesláním formuláře berete na vědomí{" "}
        <Link href="/ochrana-osobnich-udaju" className="underline-signature text-fg-secondary hover:text-fg-primary">
          zpracování osobních údajů
        </Link>{" "}
        za účelem vyřízení vaší poptávky.
      </p>
    </form>
  );
}
