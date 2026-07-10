import Image from "next/image";
import type { Cookie } from "@/data/cookies";
import { categoryLabels } from "@/data/cookies";
import { Stamp } from "./Stamp";

export function CookieCard({ cookie, index = 0 }: { cookie: Cookie; index?: number }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border-2 border-soft-pink/60 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {cookie.featured && (
        <div className="absolute -right-3 -top-3 z-10 rotate-6">
          <Stamp name="bite-me" color="red" size={72} rotate={8} />
        </div>
      )}

      <div className="relative aspect-square overflow-hidden">
        <Image
          src={cookie.image}
          alt={cookie.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={index < 3}
        />
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
