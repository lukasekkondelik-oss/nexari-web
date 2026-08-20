import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-fg-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
