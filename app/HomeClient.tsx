"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/LocaleProvider";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { PatternBand } from "@/components/ui/PatternBand";
import { Stamp } from "@/components/ui/Stamp";
import { CookieCard } from "@/components/ui/CookieCard";
import { cookies } from "@/data/cookies";

const STAMP_NAMES = ["freshly-baked", "made-with-love", "bite-me"] as const;

export function HomeClient() {
  const t = useT();
  const featured = cookies.filter((c) => c.featured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-8 sm:pt-12">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 sm:pb-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-4 inline-block rounded-full bg-butter/70 px-4 py-1.5 font-display text-sm font-semibold text-ink">
              {t.home.hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-melting-red sm:text-5xl lg:text-6xl">
              {t.home.hero.title}
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink/80">{t.home.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/visit" variant="primary">
                {t.home.hero.ctaPrimary}
              </Button>
              <Button href="#cookies" variant="secondary">
                {t.home.hero.ctaSecondary}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute inset-6 -z-10 rounded-full bg-soft-pink/50" aria-hidden />
            <Image
              src="/brand/illustrations/baker-girl-tray-front.png"
              alt="Hand-drawn illustration of the Melting Bites baker holding out a tray of six warm cookies"
              width={800}
              height={903}
              priority
              className="relative h-auto w-full"
            />
            <div className="animate-drip absolute -left-4 -top-2 sm:-left-8">
              <Stamp name="freshly-baked" color="red" size={92} rotate={-12} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature strip: the three stamps */}
      <PatternBand pattern={3} contentClassName="py-14 sm:py-16">
        <Reveal className="mx-auto max-w-3xl rounded-[2.5rem] bg-cream px-6 py-10 text-center shadow-lg sm:px-12 sm:py-12">
          <h2 className="font-display text-2xl font-bold text-melting-red sm:text-3xl">
            {t.home.signature.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/80">{t.home.signature.subtitle}</p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STAMP_NAMES.map((name, i) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <Stamp name={name} color="red" size={110} rotate={i % 2 === 0 ? -6 : 6} />
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cookie, i) => (
            <Reveal key={cookie.id} delay={i * 0.08}>
              <CookieCard cookie={cookie} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Button href="/cookies" variant="primary">
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
            <ul className="mt-6 flex flex-col gap-3">
              {t.home.openPlate.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-soft-pink" aria-hidden />
                  <span className="text-ink/85">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/cookies" variant="primary">
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex aspect-square items-center justify-center rounded-3xl border-2 border-dashed border-soft-pink/70 bg-soft-pink/10 text-soft-pink">
                <InstagramIcon size={28} />
                <span className="sr-only">Instagram post placeholder</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex justify-center">
          <a
            href="#"
            className="font-display text-lg font-semibold text-melting-red transition-colors hover:text-soft-pink"
          >
            {t.home.follow.handle}
          </a>
        </Reveal>
      </Section>
    </>
  );
}
