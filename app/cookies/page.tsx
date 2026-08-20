import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Informace o používání cookies na webu Nexari.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <div className="pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div className="container">
        <SectionHeader
          eyebrow="Právní informace"
          title="Cookies"
          description="Přehled toho, jak web Nexari pracuje s cookies a podobnými technologiemi."
        />

        <Reveal className="mt-14 max-w-3xl space-y-6 text-base leading-relaxed text-fg-secondary">
          <p>
            Tento web aktuálně{" "}
            <strong className="text-fg-primary">nepoužívá žádné analytické ani marketingové cookies</strong> a
            neobsahuje žádné sledovací nástroje (např. Google Analytics, Meta Pixel, Google Tag Manager, Hotjar,
            Microsoft Clarity apod.). Nesbírám tak žádná data o vašem chování na webu pro účely měření návštěvnosti
            ani cílení reklamy.
          </p>
          <p>
            Vzhledem k tomu web v tuto chvíli nepotřebuje zobrazovat souhlas s cookies (cookie lištu) — protože žádné
            cookies vyžadující souhlas neukládá.
          </p>
          <p>
            Poskytovatel hostingové infrastruktury, na které web běží, může v rámci běžného provozu ukládat základní
            technické záznamy nezbytné pro fungování a zabezpečení webu (např. IP adresu v serverovém logu). Nejedná
            se o sledovací cookies ve vašem prohlížeči.
          </p>
          <p>
            Pokud v budoucnu na web doplním analytické nebo marketingové nástroje, tato stránka bude aktualizována a
            před uložením jakýchkoliv nepotřebných cookies vás nejprve požádám o souhlas prostřednictvím cookie
            lišty, kterou budete moci stejně snadno odmítnout jako přijmout a své rozhodnutí kdykoliv později změnit.
          </p>
          <p>
            Více o tom, jak nakládám s osobními údaji zaslanými např. přes kontaktní formulář, najdete v{" "}
            <Link href="/ochrana-osobnich-udaju" className="underline-signature text-fg-primary">
              zásadách ochrany osobních údajů
            </Link>
            . V případě dotazů mě můžete kontaktovat na{" "}
            <a href={`mailto:${site.email}`} className="underline-signature text-fg-primary">
              {site.email}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </div>
  );
}
