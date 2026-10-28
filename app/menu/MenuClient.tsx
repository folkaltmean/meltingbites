"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Nut } from "lucide-react";
import {
  BRANCHES,
  HALLOWEEN,
  MENU,
  ROLL_OF_THE_MONTH_FALLBACK,
  SUNDAE_OPTIONS,
  type Branch,
  type MenuItem,
} from "@/data/menu";

type Filter = Branch | "all";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Both shops" },
  { id: "rawai", label: "Rawai" },
  { id: "chalong", label: "Chalong" },
];

const isBranch = (v: string | null): v is Branch => v === "rawai" || v === "chalong";
const baht = (n: number) => `${n}฿`;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function MenuClient() {
  const [branch, setBranch] = useState<Filter>("all");
  const [halloweenOn, setHalloweenOn] = useState(HALLOWEEN.enabled);

  // Read ?branch= once on load (the page is a static export, so this happens in the browser).
  useEffect(() => {
    const b = new URLSearchParams(window.location.search).get("branch");
    if (isBranch(b)) setBranch(b);
    setHalloweenOn(HALLOWEEN.enabled && Date.now() < Date.parse(HALLOWEEN.endsAt));
  }, []);

  const choose = (next: Filter) => {
    setBranch(next);
    const url = next === "all" ? window.location.pathname : `${window.location.pathname}?branch=${next}`;
    window.history.replaceState(null, "", url);
    window.gtag?.("event", "menu_branch", { branch: next });
  };

  const sections = useMemo(
    () =>
      MENU.filter((s) => !s.halloween || halloweenOn)
        .map((s) => ({
          ...s,
          items: s.items.filter(
            (i) => (!i.halloween || halloweenOn) && (branch === "all" || i.branches.includes(branch))
          ),
        }))
        .filter((s) => s.items.length > 0),
    [branch, halloweenOn]
  );

  const grabLinks = (branch === "all" ? (["rawai", "chalong"] as Branch[]) : [branch]).filter(
    (b) => BRANCHES[b].grabUrl
  );

  return (
    <div className={grabLinks.length ? "pb-24" : ""}>
      <header className="mx-auto max-w-5xl px-5 pt-10 sm:px-8 sm:pt-14">
        <h1 className="font-display text-4xl font-bold leading-tight text-melting-red sm:text-5xl">Menu</h1>
        <p className="mt-2 text-base text-ink/75">Handmade daily in Rawai and Chalong, Phuket.</p>
      </header>

      {/* Sticky controls: shop filter + jump links */}
      <div className="sticky top-[76px] z-40 mt-6 border-y-2 border-melting-red/10 bg-cream/95 backdrop-blur sm:top-[92px]">
        <div className="mx-auto max-w-5xl px-5 py-3 sm:px-8">
          <div role="radiogroup" aria-label="Choose a shop" className="grid grid-cols-3 rounded-full bg-melting-red/8 p-1">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="radio"
                aria-checked={branch === f.id}
                onClick={() => choose(f.id)}
                className={`h-10 rounded-full font-display text-[15px] font-semibold transition-colors ${
                  branch === f.id ? "bg-melting-red text-cream shadow-sm" : "text-melting-red"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <nav aria-label="Menu sections" className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 rounded-full border-2 border-melting-red/15 px-3.5 py-1 font-display text-sm font-semibold text-melting-red"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-[200px] pt-10 sm:scroll-mt-[220px]">
            <div className="flex items-end justify-between gap-4 border-b-2 border-melting-red pb-2">
              <h2 className="font-display text-[28px] font-bold leading-none text-melting-red">{s.title}</h2>
              {s.halloween && <Tag tone="butter">{HALLOWEEN.label}</Tag>}
              {s.id === "sundaes" && branch === "all" && <Tag tone="pink">Rawai only</Tag>}
              {s.id === "creamies" && branch === "all" && <Tag tone="pink">Chalong only</Tag>}
            </div>
            {s.intro && <p className="mt-3 text-[15px] leading-6 text-ink/75">{s.intro}</p>}

            <ul className="mt-2 grid md:grid-cols-2 md:gap-x-10">
              {s.items.map((item) => (
                <Row key={item.id} item={item} branch={branch} sectionId={s.id} />
              ))}
            </ul>

            {s.id === "rolls" && !s.items.some((i) => i.halloween) && (
              <p className="mt-4 text-[15px] leading-6 text-ink/75">{ROLL_OF_THE_MONTH_FALLBACK}</p>
            )}
            {s.id === "sundaes" && <SundaeOptions />}
          </section>
        ))}

        <footer className="mt-12 mb-16 flex flex-col gap-2 border-t-2 border-melting-red/15 pt-5 text-sm leading-5 text-ink/70">
          <p className="flex items-center gap-2">
            <Nut size={16} className="text-melting-red" aria-hidden /> Contains nuts
          </p>
          <p className="flex items-start gap-2">
            <span className="mt-px"><Tag tone="olive">GF</Tag></span>
            <span>Made without gluten, baked in a kitchen that uses wheat.</span>
          </p>
          <p>Prices in Thai baht.</p>
        </footer>
      </div>

      {grabLinks.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-melting-red/10 bg-cream/95 px-5 py-3 backdrop-blur">
          <div className="mx-auto flex max-w-5xl gap-3">
            {grabLinks.map((b) => (
              <a
                key={b}
                href={BRANCHES[b].grabUrl!}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.gtag?.("event", "grab_click", { branch: b })}
                className="flex h-12 flex-1 items-center justify-center rounded-full bg-melting-red font-display text-base font-semibold text-cream"
              >
                Order on Grab{grabLinks.length > 1 || branch === "all" ? ` · ${BRANCHES[b].name}` : ""}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ item, branch, sectionId }: { item: MenuItem; branch: Filter; sectionId: string }) {
  const onlyAt = item.branches.length === 1 ? BRANCHES[item.branches[0]].name : null;
  // Section-level tags already say "Rawai only" / "Chalong only" for sundaes and creamies.
  const showOnly = branch === "all" && onlyAt && sectionId !== "sundaes" && sectionId !== "creamies";
  const hasTags = item.bestSeller || item.note || item.glutenFree || showOnly;

  return (
    <li className="grid grid-cols-[88px_1fr] gap-4 border-b border-melting-red/12 py-4 sm:grid-cols-[96px_1fr]">
      <div className="relative size-[88px] overflow-hidden rounded-2xl bg-soft-pink/30 sm:size-24">
        <Image src={item.image} alt={item.name} fill sizes="96px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <div className="grid grid-cols-[1fr_auto] items-baseline gap-3">
          <h3 className="flex min-w-0 items-center gap-1.5 font-display text-lg font-semibold leading-6 text-melting-red">
            <span>{item.name}</span>
            {item.nuts && <Nut size={15} className="shrink-0 text-melting-red/80" aria-label="Contains nuts" />}
          </h3>
          <span className="w-14 text-right font-display text-lg font-semibold leading-6 tabular-nums text-melting-red">
            {baht(item.price)}
          </span>
        </div>
        <p className="mt-1 text-[14px] leading-5 text-ink/75 [text-wrap:pretty]">{item.description}</p>
        {hasTags && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.bestSeller && <Tag tone="red">Best seller</Tag>}
            {item.note && <Tag tone="butter">{item.note}</Tag>}
            {item.glutenFree && <Tag tone="olive">GF</Tag>}
            {showOnly && <Tag tone="pink">{onlyAt} only</Tag>}
          </div>
        )}
      </div>
    </li>
  );
}

function SundaeOptions() {
  return (
    <div className="mt-6 grid gap-6 rounded-3xl bg-butter/35 p-5 sm:grid-cols-2 sm:p-6">
      <OptionGroup title="Sauce" note="1 included" choices={SUNDAE_OPTIONS.sauces} extras={SUNDAE_OPTIONS.extraSauce} />
      <OptionGroup title="Crunch" note="1 included" choices={SUNDAE_OPTIONS.crunches} extras={SUNDAE_OPTIONS.extraCrunch} />
    </div>
  );
}

function OptionGroup({
  title,
  note,
  choices,
  extras,
}: {
  title: string;
  note: string;
  choices: string[];
  extras: { label: string; price: number }[];
}) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold leading-6 text-melting-red">
        {title} <span className="font-body text-sm font-normal text-ink/70">({note})</span>
      </h3>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {choices.map((c) => (
          <span key={c} className="rounded-full border-2 border-melting-red/25 px-3 py-0.5 text-sm font-semibold text-melting-red">
            {c}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-ink/60">Extra {title.toLowerCase()}</p>
      <ul className="mt-1">
        {extras.map((e) => (
          <li key={e.label} className="flex items-baseline gap-2 text-[14px] leading-6">
            <span>{e.label}</span>
            <span className="flex-1 translate-y-[-3px] border-b-2 border-dotted border-melting-red/25" aria-hidden />
            <span className="w-12 text-right font-semibold tabular-nums text-melting-red">+{baht(e.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tag({ children, tone }: { children: React.ReactNode; tone: "red" | "pink" | "butter" | "olive" }) {
  const tones = {
    red: "bg-melting-red text-cream",
    pink: "bg-soft-pink/60 text-melting-red",
    butter: "bg-butter text-melting-red",
    olive: "border border-olive text-olive",
  } as const;
  return (
    <span className={`inline-flex h-6 items-center rounded-full px-2.5 text-[11px] font-extrabold uppercase leading-none tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  );
}
