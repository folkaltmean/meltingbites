import { Cookie as CookieIcon } from "lucide-react";
import type { Cookie } from "@/data/cookies";
import { categoryLabels } from "@/data/cookies";
import { Stamp } from "./Stamp";

const CARD_PATTERNS = ["1", "3", "4", "5"] as const;

export function CookieCard({ cookie, index = 0 }: { cookie: Cookie; index?: number }) {
  const patternNum = CARD_PATTERNS[index % CARD_PATTERNS.length];

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border-2 border-soft-pink/60 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {cookie.featured && (
        <div className="absolute -right-3 -top-3 z-10 rotate-6">
          <Stamp name="bite-me" color="red" size={72} rotate={8} />
        </div>
      )}

      <div
        className="relative flex aspect-square items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(/brand/patterns/pattern-0${patternNum}.jpg)`,
          backgroundSize: "260px auto",
        }}
      >
        <div className="flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full bg-cream/90 text-melting-red shadow-inner">
          <CookieIcon size={40} strokeWidth={1.5} aria-hidden />
          <span className="px-2 text-center text-[0.6rem] font-semibold leading-tight text-ink/60">
            Photo coming soon
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="w-fit rounded-full bg-butter/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70">
          {categoryLabels[cookie.category]}
        </span>
        <h3 className="font-display text-xl font-semibold text-melting-red">{cookie.name}</h3>
        <p className="flex-1 text-sm text-ink/80">{cookie.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-melting-red">{cookie.price}</span>
          <span className="rounded-full border-2 border-melting-red px-4 py-1.5 text-sm font-semibold text-melting-red transition-colors group-hover:bg-melting-red group-hover:text-cream">
            Add to plate
          </span>
        </div>
      </div>
    </div>
  );
}
