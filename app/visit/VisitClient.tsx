"use client";

import { useT } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { ShopBlock } from "@/components/shops/ShopBlock";
import { SHOP_LIST } from "@/data/shops";

export function VisitClient() {
  const t = useT();

  return (
    <>
      <Section className="pb-8 sm:pb-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold text-melting-red sm:text-5xl">{t.visit.heading}</h1>
          <p className="mt-4 text-lg text-ink/80">{t.visit.subtitle}</p>
        </Reveal>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          {SHOP_LIST.map((shop, i) => (
            <Reveal key={shop.id} delay={i * 0.1} className="flex flex-col gap-4">
              <ShopBlock shop={shop} showAddress />
              <div className="overflow-hidden rounded-[2rem] border-2 border-soft-pink/60">
                <iframe
                  title={`Map to ${shop.fullName}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(shop.mapsQuery)}&output=embed`}
                  className="h-[300px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
