import Image from "next/image";
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

  // Original supplied artwork (public/logo/nexari-wordmark.png), cropped to
  // content and keyed to transparent — used as-is, unmodified.
  return (
    <Image
      src="/logo/nexari-wordmark.png"
      alt={title}
      width={657}
      height={172}
      priority
      className={cn("h-9 w-auto", className)}
    />
  );
}
