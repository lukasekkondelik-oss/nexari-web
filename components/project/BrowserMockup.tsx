import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  className?: string;
  compact?: boolean;
}

/**
 * Abstract representation of a website in a browser frame — used wherever a
 * real screenshot isn't available yet. Deliberately generic layout blocks,
 * never fake data or fabricated metrics.
 */
export function BrowserMockup({ className, compact = false }: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-line bg-bg-elevated shadow-elevated",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-line-subtle bg-bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-fg-primary/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg-primary/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg-primary/15" />
        {!compact && (
          <span className="ml-3 h-5 flex-1 max-w-[220px] rounded-sm bg-fg-primary/[0.06]" />
        )}
      </div>

      <div className="relative p-5">
        <div className="mb-6 flex items-center justify-between">
          <span className="h-3 w-20 rounded-full bg-fg-primary/15" />
          <div className="flex gap-2">
            <span className="h-3 w-10 rounded-full bg-fg-primary/10" />
            <span className="h-3 w-10 rounded-full bg-fg-primary/10" />
            <span className="h-6 w-16 rounded-sm bg-signature-ray" />
          </div>
        </div>

        <div className="relative mb-5 overflow-hidden rounded-md bg-gradient-to-br from-prussian-light via-bg-elevated-2 to-bg-surface p-6">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-dodger/20 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-aqua/10 blur-2xl" aria-hidden="true" />
          <span className="relative block h-4 w-2/3 rounded-full bg-fg-primary/25" />
          <span className="relative mt-3 block h-4 w-1/2 rounded-full bg-fg-primary/25" />
          <span className="relative mt-5 block h-3 w-1/3 rounded-full bg-fg-primary/10" />
          <span className="relative mt-6 inline-block h-8 w-28 rounded-sm bg-dodger/90" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-md border border-line-subtle bg-bg-surface p-3">
            <span className="block h-14 rounded-sm bg-fg-primary/[0.05]" />
            <span className="mt-3 block h-2.5 w-3/4 rounded-full bg-fg-primary/15" />
            <span className="mt-2 block h-2.5 w-1/2 rounded-full bg-fg-primary/10" />
          </div>
          <div className="rounded-md border border-line-subtle bg-bg-surface p-3">
            <span className="block h-14 rounded-sm bg-fg-primary/[0.05]" />
            <span className="mt-3 block h-2.5 w-3/4 rounded-full bg-fg-primary/15" />
            <span className="mt-2 block h-2.5 w-1/2 rounded-full bg-fg-primary/10" />
          </div>
          <div className="rounded-md border border-line-subtle bg-bg-surface p-3">
            <span className="block h-14 rounded-sm bg-fg-primary/[0.05]" />
            <span className="mt-3 block h-2.5 w-3/4 rounded-full bg-fg-primary/15" />
            <span className="mt-2 block h-2.5 w-1/2 rounded-full bg-fg-primary/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
