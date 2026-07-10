"use client";

import Image from "next/image";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useT } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PatternBand } from "@/components/ui/PatternBand";
import { useFormSubmit } from "@/components/forms/useFormSubmit";
import { fieldClass, labelClass } from "@/components/forms/fieldStyles";
import { FORM_ENDPOINTS } from "@/lib/forms";

export function WholesaleClient() {
  const t = useT();
  const { status, handleSubmit } = useFormSubmit(FORM_ENDPOINTS.wholesale);

  return (
    <>
      <Section className="pb-8 sm:pb-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold text-melting-red sm:text-5xl">{t.wholesale.heading}</h1>
          <p className="mt-4 text-lg text-ink/80">{t.wholesale.subtitle}</p>
        </Reveal>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-6 -z-10 rounded-full bg-soft-pink/40" aria-hidden />
            <Image
              src="/brand/illustrations/baker-girl-hands-tray.png"
              alt="Hand-drawn illustration of two hands presenting an open tray of cookies, ready for a co-branded wrap"
              width={800}
              height={664}
              className="relative h-auto w-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold text-melting-red sm:text-3xl">
              {t.wholesale.wrap.heading}
            </h2>
            <p className="mt-4 text-lg text-ink/80">{t.wholesale.wrap.body}</p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <Reveal className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold text-melting-red sm:text-3xl">
            {t.wholesale.benefitsHeading}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.wholesale.benefits.map((benefit, i) => (
            <Reveal key={benefit.heading} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-2 rounded-[2rem] border-2 border-soft-pink/60 bg-cream p-6">
                <h3 className="font-display text-lg font-semibold text-melting-red">{benefit.heading}</h3>
                <p className="text-sm text-ink/80">{benefit.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <PatternBand pattern={4} rounded="both" contentClassName="py-14 sm:py-16">
        <Reveal className="mx-auto max-w-2xl rounded-[2.5rem] bg-cream p-6 shadow-lg sm:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <CheckCircle2 className="text-olive" size={48} />
              <h2 className="font-display text-2xl font-bold text-melting-red">
                {t.wholesale.form.successHeading}
              </h2>
              <p className="text-ink/80">{t.wholesale.form.successBody}</p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-2xl font-bold text-melting-red">{t.wholesale.form.heading}</h2>
              <p className="mt-2 text-ink/80">{t.wholesale.form.intro}</p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="ws-name">
                      {t.wholesale.form.name}
                    </label>
                    <input id="ws-name" name="name" type="text" required className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="ws-business">
                      {t.wholesale.form.business}
                    </label>
                    <input id="ws-business" name="business" type="text" required className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="ws-email">
                      {t.wholesale.form.email}
                    </label>
                    <input id="ws-email" name="email" type="email" required className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="ws-phone">
                      {t.wholesale.form.phone}
                    </label>
                    <input id="ws-phone" name="phone" type="tel" className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="ws-type">
                    {t.wholesale.form.partnershipType}
                  </label>
                  <select id="ws-type" name="partnershipType" required className={fieldClass}>
                    {t.wholesale.form.partnershipOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="ws-message">
                    {t.wholesale.form.message}
                  </label>
                  <textarea id="ws-message" name="message" rows={4} required className={fieldClass} />
                </div>

                <Button type="submit" variant="primary" className="w-full sm:w-fit">
                  {status === "submitting" ? "…" : t.wholesale.form.submit}
                </Button>

                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-melting-red">
                    <AlertCircle size={16} />
                    Almost there — connect a real form endpoint in{" "}
                    <code className="rounded bg-soft-pink/30 px-1">lib/forms.ts</code> to start receiving these.
                  </p>
                )}
              </form>
            </>
          )}
        </Reveal>
      </PatternBand>
    </>
  );
}
