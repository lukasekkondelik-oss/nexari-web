export interface GalleryImage {
  src: string;
  alt: string;
  device: "desktop" | "mobile";
}

export interface Project {
  slug: string;
  title: string;
  client?: string;
  category: string;
  type: string;
  year?: number;
  services: string[];
  /** Short card description used in listing grids. */
  description: string;
  /** Case study — what the client needed. */
  challenge?: string;
  /** Case study — how it was approached. */
  solution?: string;
  /** Case study — what it resulted in. Only set once a real outcome is known. */
  result?: string;
  /** Path to a real screenshot/mockup image. Leave empty to use the abstract placeholder visual. */
  image: string;
  gallery?: GalleryImage[];
  url?: string;
  testimonialSlug?: string;
  featured?: boolean;
}

/**
 * Portfolio data, kept separate from presentation so new case studies are a
 * matter of appending an object here. Real screenshots, the live URL and a
 * measured result will replace the placeholders below once supplied.
 */
export const projects: Project[] = [
  {
    slug: "realitni-makelka",
    title: "Web pro realitní makléřku",
    client: "Romana Reality",
    category: "Reality",
    type: "Prezentační web",
    services: ["Webové stránky", "UX / UI design"],
    description:
      "Vlastní web pro realitní makléřku — prezentace, aktuální nabídka nemovitostí a přehledná cesta ke kontaktu.",
    challenge:
      "Klientka potřebovala vlastní profesionální web místo spoléhání se na realitní portály — místo, které bude reprezentovat její osobní značku a bude prvním kontaktním bodem pro nové klienty.",
    solution:
      "Navrhl a vytvořil jsem web postavený kolem důvěry a přehlednosti: jasná prezentace makléřky s reálnými referencemi, srozumitelný přehled aktuálně nabízených nemovitostí, přehledný osmikrokový popis průběhu prodeje a jednoduchá cesta ke kontaktu — od telefonu a e-mailu až po online odhad ceny nemovitosti. Nabídku nemovitostí jsem napojil na realitní systém Urbium — klientka novou nemovitost přidá jen tam a na webu se nabídka sama aktualizuje, bez ručního přepisování na dvou místech.",
    image: "/projects/realitni-makelka/hero.webp",
    gallery: [
      { src: "/projects/realitni-makelka/sluzby.webp", alt: "Přehled služeb — co klient právě řeší", device: "desktop" },
      { src: "/projects/realitni-makelka/proc-romana.webp", alt: "Sekce Proč Romana se čtyřmi pilíři důvěry", device: "desktop" },
      { src: "/projects/realitni-makelka/o-mne.webp", alt: "Sekce O mně s fotografií makléřky", device: "desktop" },
      { src: "/projects/realitni-makelka/proces.webp", alt: "Osm kroků průběhu prodeje nemovitosti", device: "desktop" },
      { src: "/projects/realitni-makelka/nemovitosti.webp", alt: "Aktuální nabídka nemovitostí", device: "desktop" },
      { src: "/projects/realitni-makelka/reference.webp", alt: "Reference klientů", device: "desktop" },
    ],
    url: "https://www.romanareality.cz/",
    featured: true,
  },
  {
    slug: "alfa-estate-odhad-nemovitosti",
    title: "Web pro odhad ceny nemovitosti",
    client: "ALFA ESTATE V&S Partners",
    category: "Reality",
    type: "Landing page",
    year: 2026,
    services: ["Webové stránky", "SEO", "Automatizace poptávek"],
    description:
      "Samostatný web realitní kanceláře ALFA ESTATE zaměřený na jednu službu — odhad ceny nemovitosti, s formulářem, který poptávku hned posílá makléřům k provolání.",
    challenge:
      "Realitní kancelář ALFA ESTATE V&S Partners potřebovala samostatný web pro jednu konkrétní službu — odhad ceny nemovitosti. Měl přesně odpovídat jejich značce, dobře se umísťovat ve vyhledávačích a poptávky z formuláře posílat makléřům rovnou k provolání.",
    solution:
      "Postavil jsem responzivní web věrný vizuální identitě klienta — barvy, písmo, logo i styl tlačítek převzaté z hlavního webu — se samostatnými stránkami pro odhad bytu, domu a pozemku, dědické řízení, znalecký posudek a lokální podstránky pro jednotlivé regiony. Formulář se na stránkách služeb sám předvolí podle typu odhadu, po odeslání pošle makléřům e-mail s tlačítkem k zavolání (odesílání přes Resend z vlastní ověřené domény) a web obsahuje kompletní GDPR a cookie řešení včetně možnosti schovat ho před vyhledávači, dokud nebyl spuštěný.",
    image: "/projects/alfa-estate/hero.webp",
    gallery: [
      { src: "/projects/alfa-estate/formular.webp", alt: "Formulář pro odhad ceny nemovitosti", device: "desktop" },
      { src: "/projects/alfa-estate/cisla-a-proces.webp", alt: "Čísla kanceláře a průběh odhadu ve třech krocích", device: "desktop" },
      { src: "/projects/alfa-estate/sluzby.webp", alt: "Přehled odhadů a posudků nemovitostí podle typu a lokality", device: "desktop" },
      { src: "/projects/alfa-estate/o-nas.webp", alt: "Sekce O nás s fotografií makléřů", device: "desktop" },
    ],
    url: "https://www.odhadnemovitostialfa.cz/",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  const featured = projects.filter((project) => project.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
}
