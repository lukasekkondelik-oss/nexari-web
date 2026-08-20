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
    category: "Reality",
    type: "Prezentační web",
    services: ["Webové stránky", "UX / UI design"],
    description:
      "Vlastní web pro realitní makléřku — prezentace, aktuální nabídka nemovitostí a přehledná cesta ke kontaktu.",
    challenge:
      "Klientka potřebovala vlastní profesionální web místo spoléhání se na realitní portály — místo, které bude reprezentovat její osobní značku a bude prvním kontaktním bodem pro nové klienty.",
    solution:
      "Navrhl a vytvořil jsem web postavený kolem důvěry a přehlednosti: jasná prezentace makléřky, srozumitelný přehled nabízených nemovitostí a jednoduchá cesta ke kontaktu bez zbytečných kroků navíc.",
    image: "",
    url: "https://webforclients.vercel.app/",
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
