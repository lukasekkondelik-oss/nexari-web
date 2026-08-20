import { CalendarClock } from "lucide-react";
import { site } from "@/lib/data/site";

/**
 * Embeds a scheduling page (Cal.com, Calendly, ...) so clients can pick a
 * meeting slot directly. Configure via NEXT_PUBLIC_BOOKING_URL — until set,
 * a graceful fallback card is shown instead of a broken embed.
 */
export function BookingCalendar() {
  if (!site.bookingUrl) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-lg border border-dashed border-line bg-bg-elevated p-10 text-center">
        <CalendarClock className="h-8 w-8 text-fg-muted" aria-hidden="true" />
        <p className="mt-4 text-base font-semibold text-fg-primary">Rezervace termínu</p>
        <p className="mt-2 max-w-xs text-sm text-fg-secondary">
          Kalendář pro výběr termínu schůzky bude brzy k dispozici. Mezitím se ozvěte přes formulář nebo e-mailem na{" "}
          <a href={`mailto:${site.email}`} className="underline-signature">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[560px] overflow-hidden rounded-lg border border-line bg-bg-elevated">
      <iframe
        src={site.bookingUrl}
        title="Rezervace schůzky"
        className="h-full min-h-[560px] w-full"
        loading="lazy"
      />
    </div>
  );
}
