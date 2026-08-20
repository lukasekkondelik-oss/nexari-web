import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <Logo variant="mark" className="h-10 w-10 opacity-70" />
      <p className="text-gradient-signature mt-8 text-7xl font-extrabold sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-fg-primary sm:text-3xl">Tahle stránka neexistuje</h1>
      <p className="mt-3 max-w-sm text-fg-secondary">
        Možná byla přesunuta, nebo jste zabloudili. Vraťme se na začátek.
      </p>
      <div className="mt-8">
        <Button href="/" size="md">
          Zpět na homepage
        </Button>
      </div>
    </div>
  );
}
