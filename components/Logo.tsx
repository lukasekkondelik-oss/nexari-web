import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
  title?: string;
}

/**
 * Nexari wordmark. The crossing diagonal bars standing in for the "X" are the
 * site's recurring visual signature — the same shape reappears as the
 * "signature ray" divider/accent used throughout the page.
 */
export function Logo({ className, variant = "full", title = "Nexari" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 88 88"
        className={cn("h-8 w-8", className)}
        role="img"
        aria-label={title}
      >
        <title>{title}</title>
        <defs>
          <linearGradient id="nexari-mark-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E96FC" />
            <stop offset="55%" stopColor="#5FD9B8" />
            <stop offset="100%" stopColor="#95F2D9" />
          </linearGradient>
        </defs>
        <rect
          x="8"
          y="36"
          width="72"
          height="16"
          rx="8"
          fill="url(#nexari-mark-grad)"
          transform="rotate(45 44 44)"
        />
        <rect
          x="8"
          y="36"
          width="72"
          height="16"
          rx="8"
          fill="url(#nexari-mark-grad)"
          transform="rotate(-45 44 44)"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 460 120"
      className={cn("h-9 w-auto", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="nexari-ne-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0F6FCC" />
          <stop offset="100%" stopColor="#5CB3FD" />
        </linearGradient>
        <linearGradient id="nexari-x-grad" x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0%" stopColor="#9FF5E0" />
          <stop offset="55%" stopColor="#5FD9B8" />
          <stop offset="100%" stopColor="#3FBFA0" />
        </linearGradient>
        <linearGradient id="nexari-ari-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5FD9B8" />
          <stop offset="100%" stopColor="#95F2D9" />
        </linearGradient>
      </defs>

      <text
        x="0"
        y="86"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontWeight={800}
        fontSize="70"
        letterSpacing="-1.5"
        fill="url(#nexari-ne-grad)"
      >
        NE
      </text>

      <text
        x="128"
        y="98"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontWeight={900}
        fontSize="120"
        fill="url(#nexari-x-grad)"
      >
        X
      </text>

      <text
        x="247"
        y="86"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontWeight={800}
        fontSize="70"
        letterSpacing="-1.5"
        fill="url(#nexari-ari-grad)"
      >
        ARI
      </text>
    </svg>
  );
}
