"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/ui/Stamp";

const SECTION_ART = [
  {
    src: "/brand/illustrations/baker-girl-portrait.png",
    alt: "Hand-drawn portrait illustration of the Melting Bites baker, mid-laugh, wearing an apron",
    tint: "bg-soft-pink/40",
  },
  {
    src: "/brand/illustrations/baker-girl-running.png",
    alt: "Hand-drawn illustration of the Melting Bites baker running with a mixing bowl and spoon",
    tint: "bg-butter/40",
  },
  {
    src: "/brand/illustrations/baker-girl-hands-tray.png",
    alt: "Hand-drawn illustration of two hands presenting an open tray of cookies",
    tint: "bg-olive/20",
  },
];

export function StoryClient() {
  const t = useT();

  return (
    <>
      <Section className="pb-8 sm:pb-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold text-melting-red sm:text-5xl">{t.story.heading}</h1>
          <p className="mt-6 text-lg text-ink/80">{t.story.lead}</p>
        </Reveal>
      </Section>

      {t.story.sections.map((section, i) => {
        const art = SECTION_ART[i % SECTION_ART.length];
        const imageFirst = i % 2 === 1;
        return (
          <Section key={section.heading} className="pt-0 sm:pt-0">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal
                className={`relative mx-auto w-full max-w-xs ${imageFirst ? "order-1" : "order-2 lg:order-1"}`}
              >
                <div className={`absolute inset-6 -z-10 rounded-full ${art.tint}`} aria-hidden />
                <Image src={art.src} alt={art.alt} width={700} height={790} className="relative h-auto w-full" />
              </Reveal>
              <Reveal
                delay={0.1}
                className={imageFirst ? "order-2" : "order-1 lg:order-2"}
              >
                <h2 className="font-display text-2xl font-bold text-melting-red sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="mt-4 text-lg text-ink/80">{section.body}</p>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <Section className="pt-0 sm:pt-0">
        <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2.5rem] border-2 border-soft-pink/60 bg-cream px-6 py-12 text-center shadow-sm sm:px-16">
          <div className="absolute -left-6 -top-6 -rotate-6">
            <Stamp name="bite-me" color="red" size={90} rotate={-10} />
          </div>
          <p className="max-w-xl font-display text-xl font-semibold text-melting-red">{t.story.closing}</p>
          <Button href="/visit" variant="primary">
            {t.home.hero.ctaPrimary}
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
