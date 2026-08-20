export const site = {
  name: "Nexari",
  legalName: "Nexari",
  tagline: "Weby a webové aplikace, které mají důvod existovat.",
  description:
    "Navrhuji a vyvíjím moderní webové stránky a webové aplikace pro podnikatele a firmy, které chtějí kvalitní digitální produkt, ne další šablonu.",
  url: "https://nexari.cz",
  email: "lukaskondelik@nexari.cz",
  phone: "+420 601 505 713",
  phoneHref: "+420601505713",
  founder: "Lukáš",
  locale: "cs_CZ",
  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/lukyno0.0/",
  },
  /**
   * Cal.com (or any iframe-embeddable scheduler) event URL, e.g.
   * "https://cal.com/nexari/uvodni-hovor". Leave empty to hide the
   * embedded calendar and fall back to a plain email/contact CTA.
   */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
};

/**
 * Real identification details of the sole trader (OSVČ) operating this site,
 * per Czech legal requirements (§ 435 NOZ, informační povinnosti). Used in
 * the footer and on /ochrana-osobnich-udaju — nothing here is invented.
 */
export const legal = {
  ownerName: "Lukáš Kondelík",
  ico: "24868027",
  addressLine1: "Uralská 689/7",
  addressLine2: "160 00 Praha 6 – Bubeneč",
  country: "Česká republika",
  registration:
    "Fyzická osoba podnikající dle živnostenského zákona, zapsaná v živnostenském rejstříku.",
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
