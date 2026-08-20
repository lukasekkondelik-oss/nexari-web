export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Pochopení projektu",
    description: "Probereme cíl, zákazníky, potřebné funkce a směr, kterým se má projekt vydat.",
  },
  {
    number: "02",
    title: "Návrh",
    description: "Postavím strukturu webu, UX a vizuální směr, na kterém se shodneme ještě před vývojem.",
  },
  {
    number: "03",
    title: "Vývoj",
    description: "Implementace webu nebo aplikace v moderním, rychlém a udržovatelném kódu.",
  },
  {
    number: "04",
    title: "Spuštění",
    description: "Testování napříč zařízeními, nasazení a předání kompletního projektu.",
  },
  {
    number: "05",
    title: "Další rozvoj",
    description: "Web nekončí spuštěním — pomůžu ho dál upravovat, rozšiřovat a zlepšovat.",
  },
];
