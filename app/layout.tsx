import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { legal, site } from "@/lib/data/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nexari — Tvorba webových stránek a webových aplikací",
    template: "%s — Nexari",
  },
  description: site.description,
  keywords: [
    "tvorba webových stránek",
    "tvorba webových aplikací",
    "vývoj webů",
    "vývoj webových aplikací",
    "webdesign",
    "firemní web na míru",
  ],
  authors: [{ name: site.founder }],
  creator: site.founder,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Nexari — Tvorba webových stránek a webových aplikací",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexari — Tvorba webových stránek a webových aplikací",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    areaServed: "CZ",
    address: {
      "@type": "PostalAddress",
      streetAddress: legal.addressLine1,
      addressLocality: legal.addressLine2,
      addressCountry: "CZ",
    },
    founder: {
      "@type": "Person",
      name: legal.ownerName,
    },
    serviceType: ["Tvorba webových stránek", "Vývoj webových aplikací", "AI řešení"],
  };

  return (
    <html lang="cs" className={montserrat.variable}>
      <body className="bg-grid bg-bg-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-dodger px-4 py-2 text-sm font-semibold text-prussian-dark transition-transform focus:translate-y-0"
        >
          Přeskočit na obsah
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
