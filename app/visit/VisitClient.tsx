"use client";

import { Camera, Clock, MapPin, ParkingCircle } from "lucide-react";
import { useT } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LineIcon } from "@/components/icons/LineIcon";

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
          <Reveal className="flex flex-col gap-6 rounded-[2rem] border-2 border-soft-pink/60 bg-cream p-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-melting-red" size={26} />
              <div>
                <h2 className="font-display text-lg font-semibold text-melting-red">{t.visit.addressLabel}</h2>
                <p className="mt-1 text-ink/80">{t.visit.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 shrink-0 text-melting-red" size={26} />
              <div>
                <h2 className="font-display text-lg font-semibold text-melting-red">{t.visit.hoursLabel}</h2>
                <p className="mt-1 whitespace-pre-line text-ink/80">{t.visit.hours}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ParkingCircle className="mt-1 shrink-0 text-melting-red" size={26} />
              <div>
                <h2 className="font-display text-lg font-semibold text-melting-red">{t.visit.findUs.heading}</h2>
                <p className="mt-1 text-ink/80">{t.visit.findUs.body}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4 rounded-[2rem] border-2 border-soft-pink/60 bg-butter/20 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream text-melting-red">
              <LineIcon size={30} />
            </div>
            <h2 className="font-display text-lg font-semibold text-melting-red">{t.visit.preorder.heading}</h2>
            <p className="text-ink/80">{t.visit.preorder.body}</p>
            <p className="font-display font-semibold text-melting-red">{t.visit.lineHandle}</p>
            <div className="mt-2">
              <Button href="https://line.me/ti/p/@bitescookies" variant="primary">
                {t.visit.preorder.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <Reveal>
          <h2 className="mb-4 text-center font-display text-2xl font-bold text-melting-red">
            {t.visit.mapHeading}
          </h2>
          <div className="overflow-hidden rounded-[2rem] border-2 border-soft-pink/60">
            <iframe
              title="Melting Bites location map"
              src="https://www.google.com/maps?q=Rawai+Beach,+Phuket,+Thailand&output=embed"
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-center text-sm text-ink/60">{t.common.placeholderMap}</p>
        </Reveal>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <Reveal>
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-melting-red">
            {t.visit.photosHeading}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-3xl border-2 border-dashed border-soft-pink/70 bg-soft-pink/10 text-soft-pink"
              >
                <Camera size={28} aria-hidden />
                <span className="sr-only">Store photo placeholder</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
