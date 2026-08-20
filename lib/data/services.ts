export interface Service {
  id: string;
  title: string;
  summary: string;
  items: string[];
  primary: boolean;
}

export const services: Service[] = [
  {
    id: "weby",
    title: "Webové stránky",
    summary:
      "Web není brožura navíc — je to první dojem, který o firmě udělá. Stavím weby, které vypadají důvěryhodně, jasně vysvětlují nabídku a vedou návštěvníka ke kontaktu.",
    items: [
      "Firemní a prezentační weby",
      "Osobní weby a osobní značky",
      "Landing pages pro konkrétní nabídku",
      "Redesign zastaralého webu",
    ],
    primary: true,
  },
  {
    id: "aplikace",
    title: "Webové aplikace",
    summary:
      "Někdy prezentace nestačí a firma potřebuje nástroj postavený přesně na míru svému procesu — klientský portál, interní systém nebo MVP, který lze dál rozvíjet.",
    items: [
      "Klientské portály a přístupy pro zákazníky",
      "Interní firemní systémy",
      "MVP pro nový produkt nebo nápad",
      "Rezervační systémy a dashboardy",
    ],
    primary: true,
  },
  {
    id: "ai",
    title: "AI řešení",
    summary:
      "Tam, kde dává smysl, doplním web nebo aplikaci o AI funkcionalitu — asistenta, který pracuje s daty firmy, nebo automatizaci konkrétního procesu. Vždy jako součást produktu, ne jako samoúčelná nálepka.",
    items: [
      "AI asistenti napojení na firemní data",
      "AI funkcionalita uvnitř webové aplikace",
      "Automatizace vybraných procesů",
    ],
    primary: false,
  },
];
