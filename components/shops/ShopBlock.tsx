"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Navigation, ShoppingBag } from "lucide-react";
import { isOpenNow, type Shop } from "@/data/shops";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Event names from the owner's brief: grab_chalong, grab_rawai, directions_chalong, directions_rawai.
export function track(kind: "grab" | "directions", shop: Shop) {
  window.gtag?.("event", `${kind}_${shop.id}`, { shop: shop.id });
}

const btn =
  "inline-flex min-h-12 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 font-display text-[15px] font-semibold transition-colors sm:text-base";

export function ShopButtons({ shop, className = "" }: { shop: Shop; className?: string }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <a
        href={shop.grab}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("grab", shop)}
        className={`${btn} bg-grab text-white hover:bg-grab-dark`}
      >
        <ShoppingBag size={18} aria-hidden /> Order on Grab
      </a>
      <a
        href={shop.maps}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("directions", shop)}
        className={`${btn} border-2 border-ink/80 bg-cream text-ink hover:bg-butter/50`}
      >
        <Navigation size={18} aria-hidden /> Directions
      </a>
    </div>
  );
}

export function OpenBadge({ shop }: { shop: Shop }) {
  // Worked out in the browser, so the static page never shows a stale label.
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const tick = () => setOpen(isOpenNow(shop));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [shop]);

  if (open === null) return null;
  return (
    <span
      className={`inline-flex h-6 items-center rounded-full px-2.5 text-[11px] font-extrabold uppercase leading-none tracking-wide ${
        open ? "bg-grab text-white" : "bg-ink/10 text-ink/70"
      }`}
    >
      {open ? "Open now" : "Closed"}
    </span>
  );
}

// Compact block for the first screen: name, hours, Grab + Directions.
export function ShopBlock({ shop, showAddress = false }: { shop: Shop; showAddress?: boolean }) {
  return (
    <div className="rounded-3xl border-2 border-melting-red/15 bg-cream p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <Link href={`/${shop.id}`} className="group min-w-0">
          <h2 className="flex items-center gap-1.5 font-display text-xl font-bold leading-6 text-melting-red">
            {shop.name}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
          </h2>
          <p className="mt-1 flex items-center gap-1.5 text-[15px] leading-5 text-ink/85">
            <Clock size={15} className="shrink-0" aria-hidden /> {shop.hoursLabel}
          </p>
        </Link>
        <OpenBadge shop={shop} />
      </div>
      {showAddress && (
        <p className="mt-2 flex items-start gap-1.5 text-[15px] leading-5 text-ink/80">
          <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden /> {shop.address}
        </p>
      )}
      <ShopButtons shop={shop} className="mt-3" />
    </div>
  );
}
