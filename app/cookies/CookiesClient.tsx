"use client";

import { useMemo, useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CookieCard } from "@/components/ui/CookieCard";
import { Stamp } from "@/components/ui/Stamp";
import { cookies, categoryLabels, type CookieCategory } from "@/data/cookies";

const CATEGORIES: CookieCategory[] = ["classic", "seasonal", "treats"];

export function CookiesClient() {
  const t = useT();
  const [active, setActive] = useState<CookieCategory | "all">("all");

  const visible = useMemo(
    () => (active === "all" ? cookies : cookies.filter((c) => c.category === active)),
    [active]
  );

  return (
    <>
      <Section className="pb-8 sm:pb-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold text-melting-red sm:text-5xl">{t.cookies.heading}</h1>
          <p className="mt-4 text-lg text-ink/80">{t.cookies.subtitle}</p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setActive("all")}
            className={`rounded-full px-5 py-2 font-display text-sm font-semibold transition-colors ${
              active === "all"
                ? "bg-melting-red text-cream"
                : "border-2 border-melting-red/30 text-melting-red hover:border-melting-red"
            }`}
            aria-pressed={active === "all"}
          >
            {t.cookies.filterAll}
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 font-display text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-melting-red text-cream"
                  : "border-2 border-melting-red/30 text-melting-red hover:border-melting-red"
              }`}
              aria-pressed={active === cat}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </Reveal>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cookie, i) => (
            <Reveal key={cookie.id} delay={(i % 3) * 0.08}>
              <CookieCard cookie={cookie} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 overflow-hidden rounded-[2.5rem] border-2 border-soft-pink/60 bg-butter/25 px-6 py-12 text-center sm:px-16">
          <div className="absolute -right-6 -top-6 rotate-6 opacity-90">
            <Stamp name="made-with-love" color="pink" size={100} rotate={10} />
          </div>
          <h2 className="font-display text-2xl font-bold text-melting-red sm:text-3xl">{t.cookies.custom.heading}</h2>
          <p className="max-w-xl text-ink/80">{t.cookies.custom.body}</p>
          <Button href="/contact" variant="primary">
            {t.cookies.custom.cta}
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
