export const site = {
  name: "Nexari",
  legalName: "Nexari",
  tagline: "Weby a webové aplikace, které mají důvod existovat.",
  description:
    "Navrhuji a vyvíjím moderní webové stránky a webové aplikace pro podnikatele a firmy, které chtějí kvalitní digitální produkt, ne další šablonu.",
  url: "https://nexari.cz",
  email: "hello@nexari.cz",
  founder: "Lukáš",
  locale: "cs_CZ",
  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
  /**
   * Cal.com (or any iframe-embeddable scheduler) event URL, e.g.
   * "https://cal.com/nexari/uvodni-hovor". Leave empty to hide the
   * embedded calendar and fall back to a plain email/contact CTA.
   */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
};

export const nav = [
  { label: "Projekty", href: "/#projekty" },
  { label: "Služby", href: "/#sluzby" },
  { label: "Proces", href: "/#proces" },
  { label: "O mně", href: "/#o-mne" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const footerNav = [
  { label: "Projekty", href: "/projekty" },
  { label: "Služby", href: "/#sluzby" },
  { label: "Proces", href: "/#proces" },
  { label: "O mně", href: "/#o-mne" },
  { label: "Kontakt", href: "/#kontakt" },
];
