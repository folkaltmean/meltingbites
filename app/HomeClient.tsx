"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { PatternBand } from "@/components/ui/PatternBand";
import { Stamp } from "@/components/ui/Stamp";
import { ShopBlock } from "@/components/shops/ShopBlock";
import { SHOP_LIST } from "@/data/shops";
import { CookieCard } from "@/components/ui/CookieCard";
import type { Cookie } from "@/data/cookies";
import { MENU } from "@/data/menu";

const STAMP_NAMES = ["freshly-baked", "made-with-love", "bite-me"] as const;

export function HomeClient() {
  const t = useT();
  // Best sellers from the live menu (data/menu.ts), shown in the existing card style.
  const featured: Cookie[] = MENU.flatMap((s) => s.items)
    .filter((i) => i.bestSeller)
    .map((i) => ({
      id: i.id,
      name: i.name,
      description: i.description,
      price: `${i.price}฿`,
      category: "classic",
      image: i.image,
      featured: true,
    }));

  return (
    <>
      {/* First screen (owner's brief, step 1): one line, one photo, both shops with Grab + Directions */}
      <section className="mx-auto max-w-6xl px-4 pt-4 pb-10 sm:px-6 sm:pt-8 sm:pb-16">
        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-6">
          <h1 className="font-display text-[26px] font-bold leading-tight text-melting-red sm:text-4xl lg:self-end lg:text-5xl">
            {t.home.hero.title}
          </h1>
          <div className="relative aspect-[16/7] overflow-hidden rounded-3xl bg-soft-pink/30 sm:aspect-[16/8] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:min-h-[420px]">
            <Image
              src="/brand/hero-cookie.jpg"
              alt="A Melting Bites chocolate chip cookie broken in half"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4 lg:self-start">
            {SHOP_LIST.map((shop) => (
              <ShopBlock key={shop.id} shop={shop} />
            ))}
          </div>
        </div>
      </section>

      {/* Signature strip: the three stamps */}
      <PatternBand pattern={3} contentClassName="py-14 sm:py-16">
        <Reveal className="mx-auto max-w-4xl rounded-[2.5rem] bg-cream px-6 py-10 text-center shadow-lg sm:px-12 sm:py-14">
          <h2 className="font-display text-2xl font-bold text-melting-red sm:text-3xl">
            {t.home.signature.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/80">{t.home.signature.subtitle}</p>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {STAMP_NAMES.map((name, i) => (
              <div key={name} className="flex flex-col items-center gap-4">
                <Stamp name={name} color="red" size={160} rotate={i % 2 === 0 ? -6 : 6} />
                <p className="max-w-[14rem] font-display text-sm font-semibold text-ink/80">
                  {t.home.signature.items[i].caption}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </PatternBand>

      {/* Featured cookies */}
      <Section id="cookies">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-melting-red sm:text-4xl">
            {t.home.featured.heading}
          </h2>
          <p className="mt-3 text-ink/80">{t.home.featured.subtitle}</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cookie, i) => (
            <Reveal key={cookie.id} delay={i * 0.08}>
              <CookieCard cookie={cookie} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Button href="/menu" variant="primary">
            {t.home.featured.cta}
          </Button>
        </Reveal>
      </Section>

      {/* Open plate concept */}
      <Section id="open-plate" className="bg-butter/25">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-md">
            <div className="absolute inset-6 -z-10 rounded-full bg-butter/60" aria-hidden />
            <Image
              src="/brand/illustrations/baker-girl-hands-tray.png"
              alt="Hand-drawn illustration of two hands presenting an open tray of cookies"
              width={800}
              height={664}
              className="relative h-auto w-full"
            />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-melting-red">
              {t.home.openPlate.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold text-melting-red sm:text-4xl">
              {t.home.openPlate.heading}
            </h2>
            <p className="mt-5 text-lg text-ink/80">{t.home.openPlate.body}</p>
            <div className="mt-8">
              <Button href="/menu" variant="primary">
                {t.home.openPlate.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Story teaser */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-6 -z-10 rounded-full bg-olive/20" aria-hidden />
            <Image
              src="/brand/illustrations/baker-girl-portrait.png"
              alt="Hand-drawn portrait illustration of the Melting Bites baker, mid-laugh, wearing an apron"
              width={800}
              height={903}
              className="relative h-auto w-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold text-melting-red sm:text-4xl">
              {t.home.story.heading}
            </h2>
            <p className="mt-5 text-lg text-ink/80">{t.home.story.body}</p>
            <div className="mt-8">
              <Button href="/story" variant="secondary">
                {t.home.story.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Wholesale teaser */}
      <PatternBand pattern={2} contentClassName="py-14 sm:py-16">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2.5rem] bg-cream px-6 py-10 text-center shadow-lg sm:px-12 sm:py-12">
          <h2 className="font-display text-2xl font-bold text-melting-red sm:text-3xl">
            {t.home.wholesale.heading}
          </h2>
          <p className="max-w-xl text-ink/80">{t.home.wholesale.body}</p>
          <Button href="/wholesale" variant="primary">
            {t.home.wholesale.cta}
          </Button>
        </Reveal>
      </PatternBand>

      {/* Follow us */}
      <Section id="follow">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-melting-red sm:text-4xl">
            {t.home.follow.heading}
          </h2>
          <p className="mt-3 text-ink/80">{t.home.follow.subtitle}</p>
        </Reveal>
        <Reveal className="flex justify-center">
          <a
            href="https://www.instagram.com/meltingbitesdesserts"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-lg font-semibold text-melting-red transition-colors hover:text-soft-pink"
          >
            {t.home.follow.handle}
          </a>
        </Reveal>
      </Section>
    </>
  );
}
