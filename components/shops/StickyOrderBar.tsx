"use client";

import { useEffect, useState } from "react";
import { Navigation, ShoppingBag, X } from "lucide-react";
import { SHOP_LIST } from "@/data/shops";
import { track } from "./ShopBlock";

type Kind = "grab" | "directions";

// Phones only: stays at the bottom while scrolling. Each button asks "Chalong or Rawai?" first.
export function StickyOrderBar() {
  const [ask, setAsk] = useState<Kind | null>(null);

  useEffect(() => {
    if (!ask) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAsk(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ask]);

  return (
    <>
      {/* Keeps the footer clear of the bar */}
      <div className="h-[76px] md:hidden" aria-hidden />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-melting-red/10 bg-cream/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setAsk("grab")}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-grab font-display text-base font-semibold text-white"
          >
            <ShoppingBag size={18} aria-hidden /> Order on Grab
          </button>
          <button
            type="button"
            onClick={() => setAsk("directions")}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-ink/80 bg-cream font-display text-base font-semibold text-ink"
          >
            <Navigation size={18} aria-hidden /> Directions
          </button>
        </div>
      </div>

      {ask && (
        <div className="fixed inset-0 z-[60] flex items-end bg-ink/40 md:hidden" onClick={() => setAsk(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Chalong or Rawai?"
            className="w-full rounded-t-[2rem] bg-cream px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-xl font-bold text-melting-red">Chalong or Rawai?</p>
              <button type="button" onClick={() => setAsk(null)} aria-label="Close" className="-mr-2 p-2 text-ink/70">
                <X size={22} />
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {SHOP_LIST.map((shop) => (
                <a
                  key={shop.id}
                  href={ask === "grab" ? shop.grab : shop.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    track(ask, shop);
                    setAsk(null);
                  }}
                  className={`flex min-h-14 items-center justify-between rounded-2xl px-5 font-display text-lg font-semibold ${
                    ask === "grab" ? "bg-grab text-white" : "border-2 border-ink/80 text-ink"
                  }`}
                >
                  <span>{shop.name}</span>
                  <span className="text-sm font-medium opacity-85">{shop.hoursLabel.replace("Every day, ", "")}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
