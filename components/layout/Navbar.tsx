"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-signature",
        scrolled ? "bg-bg-base/80 backdrop-blur-md border-b border-line-subtle" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between transition-all duration-300 ease-signature",
          scrolled ? "py-3.5" : "py-6"
        )}
      >
        <Link href="/" className="relative z-10 shrink-0" aria-label="Nexari — domů">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavní navigace">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-signature text-sm font-medium text-fg-secondary transition-colors hover:text-fg-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#kontakt" size="md">
            Probrat projekt
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center text-fg-primary lg:hidden"
          aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-0 flex flex-col justify-center bg-bg-base px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobilní navigace">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-3xl font-semibold text-fg-primary"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <Button href="/#kontakt" size="lg" onClick={() => setMenuOpen(false)}>
                Probrat projekt
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
