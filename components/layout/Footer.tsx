import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerNav, legal, site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line-subtle bg-bg-surface">
      <div className="container py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <Link href="/" aria-label="Nexari — domů">
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              Tvořím weby a webové aplikace pro firmy a podnikatele, kteří chtějí digitální produkt s hlavou a patou.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">Navigace</p>
              <ul className="mt-4 space-y-3">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="underline-signature text-sm text-fg-secondary hover:text-fg-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">Kontakt</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="underline-signature text-sm text-fg-secondary hover:text-fg-primary"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="underline-signature text-sm text-fg-secondary hover:text-fg-primary"
                  >
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">Sociální sítě</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-signature text-sm text-fg-secondary hover:text-fg-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-signature text-sm text-fg-secondary hover:text-fg-primary"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-fg-muted">
            © {new Date().getFullYear()} {legal.ownerName} · IČO: {legal.ico}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/ochrana-osobnich-udaju"
              className="underline-signature text-xs text-fg-muted hover:text-fg-secondary"
            >
              Ochrana osobních údajů
            </Link>
            <Link href="/cookies" className="underline-signature text-xs text-fg-muted hover:text-fg-secondary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
