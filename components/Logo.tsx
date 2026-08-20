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
      viewBox="0 0 400 88"
      className={cn("h-7 w-auto", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="nexari-ne-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0F6FCC" />
          <stop offset="100%" stopColor="#5CB3FD" />
        </linearGradient>
        <linearGradient id="nexari-x-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E96FC" />
          <stop offset="55%" stopColor="#5FD9B8" />
          <stop offset="100%" stopColor="#95F2D9" />
        </linearGradient>
        <linearGradient id="nexari-ari-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5FD9B8" />
          <stop offset="100%" stopColor="#C3F9E9" />
        </linearGradient>
      </defs>

      <text
        x="0"
        y="66"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontWeight={800}
        fontSize="64"
        letterSpacing="-1.5"
        fill="url(#nexari-ne-grad)"
      >
        NE
      </text>

      <g>
        <rect x="168" y="6" width="76" height="15" rx="7.5" fill="url(#nexari-x-grad)" transform="rotate(45 206 44)" />
        <rect x="168" y="6" width="76" height="15" rx="7.5" fill="url(#nexari-x-grad)" transform="rotate(-45 206 44)" />
      </g>

      <text
        x="252"
        y="66"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontWeight={800}
        fontSize="64"
        letterSpacing="-1.5"
        fill="url(#nexari-ari-grad)"
      >
        ARI
      </text>
    </svg>
  );
}
