import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { legal, site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Zásady ochrany osobních údajů webu Nexari.",
  alternates: { canonical: "/ochrana-osobnich-udaju" },
  robots: { index: true, follow: true },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-line-subtle py-10 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold text-fg-primary">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-fg-secondary">{children}</div>
    </Reveal>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div className="container">
        <SectionHeader
          eyebrow="Právní informace"
          title="Ochrana osobních údajů"
          description="Jak a proč zpracovávám osobní údaje návštěvníků a klientů webu Nexari."
        />

        <div className="mt-14 max-w-3xl">
          <Section title="1. Správce osobních údajů">
            <p>Správcem osobních údajů zpracovávaných v souvislosti s tímto webem je:</p>
            <p className="font-medium text-fg-primary">
              {legal.ownerName}
              <br />
              IČO: {legal.ico}
              <br />
              Sídlo: {legal.addressLine1}, {legal.addressLine2}, {legal.country}
              <br />
              {legal.registration}
            </p>
            <p>
              Kontakt:{" "}
              <a href={`mailto:${site.email}`} className="underline-signature text-fg-primary">
                {site.email}
              </a>
              ,{" "}
              <a href={`tel:${site.phoneHref}`} className="underline-signature text-fg-primary">
                {site.phone}
              </a>
              .
            </p>
          </Section>

          <Section title="2. O jaký web se jedná">
            <p>
              Tento web slouží jako prezentace služeb tvorby webových stránek, webových aplikací a souvisejících
              digitálních služeb poskytovaných výše uvedenou osobou podnikající na základě živnostenského oprávnění.
              Web není e-shop — nejsou přes něj přímo uzavírány ani placeny žádné objednávky. Slouží k prezentaci
              portfolia a referencí a ke sběru poptávek od zájemců o spolupráci. Konkrétní zakázky jsou vždy sjednávány
              individuálně po vzájemném kontaktování.
            </p>
          </Section>

          <Section title="3. Jaké osobní údaje zpracovávám">
            <p>
              <strong className="text-fg-primary">Kontaktní / poptávkový formulář.</strong> Při odeslání formuláře
              zpracovávám údaje, které do něj sám/sama vyplníte: jméno, e-mail, případně název firmy, typ poptávaného
              projektu, orientační rozpočet (nepovinné) a obsah zprávy.
            </p>
            <p>
              <strong className="text-fg-primary">Rezervace schůzky.</strong> Pokud web v danou chvíli nabízí i
              rezervaci konzultace přes vložený kalendář, jsou údaje zadané přímo v tomto kalendáři (např. jméno,
              e-mail, zvolený termín) zpracovávány provozovatelem dané rezervační platformy podle jejích vlastních
              zásad ochrany osobních údajů; vůči mně v takovém případě vystupuje jako zpracovatel na základě smluvního
              vztahu.
            </p>
            <p>
              <strong className="text-fg-primary">Technické provozní údaje.</strong> Poskytovatel hostingové
              infrastruktury, na které web běží, může standardně ukládat základní provozní záznamy (např. IP adresu,
              typ prohlížeče, čas požadavku) po dobu nezbytnou pro zajištění bezpečnosti a provozu webu.
            </p>
            <p>Žádné jiné osobní údaje (např. z analytických nebo marketingových nástrojů) tento web nezískává — viz stránka <Link href="/cookies" className="underline-signature text-fg-primary">Cookies</Link>.</p>
          </Section>

          <Section title="4. Účel a právní titul zpracování">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Vyřízení vaší poptávky a komunikace o možné spolupráci — na základě jednání o uzavření smlouvy a
                oprávněného zájmu správce reagovat na došlé dotazy (čl. 6 odst. 1 písm. b) a f) GDPR).
              </li>
              <li>
                V případě uzavření spolupráce plnění smlouvy a souvisejících zákonných povinností, zejména účetních a
                daňových (čl. 6 odst. 1 písm. b) a c) GDPR).
              </li>
            </ul>
            <p>
              Vyplnění a odeslání formuláře je pro tyto účely nezbytné a nevyžaduje samostatný souhlas. Pokud by
              některá budoucí funkce webu zahrnovala i zasílání marketingových sdělení, bude k tomu vždy vyžádán
              samostatný, dobrovolný a nepředvyplněný souhlas.
            </p>
          </Section>

          <Section title="5. Doba uchování">
            <p>
              Údaje z poptávky, ze které nevzejde spolupráce, uchovávám nejdéle po dobu 12 měsíců od posledního
              kontaktu, poté je maži. Údaje související s uzavřenou zakázkou uchovávám po dobu trvání spolupráce a
              následně po dobu vyžadovanou právními předpisy (např. zákon o účetnictví, zákon o dani z přidané
              hodnoty).
            </p>
          </Section>

          <Section title="6. Zpracovatelé a příjemci údajů">
            <p>
              Ke zpracování osobních údajů využívám tyto zpracovatele a poskytovatele služeb, a to výhradně v rozsahu
              nezbytném pro provoz webu a vyřízení poptávek:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>poskytovatel e-mailové doručovací služby použité pro přeposlání zprávy z kontaktního formuláře na můj e-mail,</li>
              <li>poskytovatel hostingové infrastruktury, na které web běží,</li>
              <li>
                případný provozovatel rezervační platformy pro sjednání schůzky, je-li tato funkce na webu aktivní.
              </li>
            </ul>
            <p>Osobní údaje nepředávám žádným dalším třetím stranám ani je nezpracovávám mimo výše uvedený rozsah.</p>
          </Section>

          <Section title="7. Vaše práva">
            <p>V souladu s GDPR máte právo:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>na přístup ke svým osobním údajům,</li>
              <li>na opravu nepřesných nebo neúplných údajů,</li>
              <li>na výmaz osobních údajů, pokud pominul důvod jejich zpracování,</li>
              <li>na omezení zpracování,</li>
              <li>na přenositelnost údajů,</li>
              <li>vznést námitku proti zpracování založenému na oprávněném zájmu.</li>
            </ul>
            <p>
              Kterékoliv z těchto práv můžete uplatnit napsáním na{" "}
              <a href={`mailto:${site.email}`} className="underline-signature text-fg-primary">
                {site.email}
              </a>
              .
            </p>
          </Section>

          <Section title="8. Právo podat stížnost">
            <p>
              Pokud se domníváte, že vaše osobní údaje zpracovávám v rozporu s právními předpisy, máte právo podat
              stížnost u dozorového úřadu — Úřadu pro ochranu osobních údajů, se sídlem Pplk. Sochora 27, 170 00 Praha
              7, www.uoou.cz.
            </p>
          </Section>

          <Section title="9. Aktualizace zásad">
            <p>
              Tyto zásady mohu čas od času upravit, zejména v souvislosti se změnou funkcí webu nebo právních
              předpisů. Aktuální znění je vždy dostupné na této stránce.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
