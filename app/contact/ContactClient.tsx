"use client";

import { CheckCircle2, AlertCircle, MapPin } from "lucide-react";
import { useT } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/ui/Stamp";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { useFormSubmit } from "@/components/forms/useFormSubmit";
import { fieldClass, labelClass } from "@/components/forms/fieldStyles";
import { FORM_ENDPOINTS, formReady } from "@/lib/forms";
import { InstagramFallback } from "@/components/forms/InstagramFallback";
import { INSTAGRAM, SHOP_LIST } from "@/data/shops";

export function ContactClient() {
  const t = useT();
  const { status, handleSubmit } = useFormSubmit(FORM_ENDPOINTS.contact);

  return (
    <>
      <Section className="pb-8 sm:pb-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold text-melting-red sm:text-5xl">{t.contact.heading}</h1>
          <p className="mt-4 text-lg text-ink/80">{t.contact.subtitle}</p>
        </Reveal>
      </Section>

      <Section className="pt-0 sm:pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-[2.5rem] border-2 border-soft-pink/60 bg-cream p-6 sm:p-10">
            {!formReady(FORM_ENDPOINTS.contact) ? (
              <InstagramFallback heading={t.contact.form.heading} body="The quickest way to reach us is a message on Instagram, or come and see us at either shop." />
            ) : status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle2 className="text-olive" size={48} />
                <h2 className="font-display text-2xl font-bold text-melting-red">
                  {t.contact.form.successHeading}
                </h2>
                <p className="text-ink/80">{t.contact.form.successBody}</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-melting-red">{t.contact.form.heading}</h2>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                  <div>
                    <label className={labelClass} htmlFor="c-name">
                      {t.contact.form.name}
                    </label>
                    <input id="c-name" name="name" type="text" required className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="c-email">
                      {t.contact.form.email}
                    </label>
                    <input id="c-email" name="email" type="email" required className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="c-message">
                      {t.contact.form.message}
                    </label>
                    <textarea id="c-message" name="message" rows={5} required className={fieldClass} />
                  </div>
                  <Button type="submit" variant="primary" className="w-full sm:w-fit">
                    {status === "submitting" ? "…" : t.contact.form.submit}
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

          <Reveal delay={0.1} className="relative flex flex-col gap-6 rounded-[2.5rem] border-2 border-soft-pink/60 bg-butter/20 p-6 sm:p-10">
            <div className="absolute -right-4 -top-4 rotate-6">
              <Stamp name="made-with-love" color="red" size={84} rotate={8} />
            </div>
            <div className="flex items-start gap-3">
              <InstagramIcon size={22} className="mt-1 shrink-0 text-melting-red" />
              <div>
                <p className="font-display font-semibold text-melting-red">{t.contact.details.igLabel}</p>
                <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className="text-ink/80 underline-offset-2 hover:underline">
                  {INSTAGRAM.handle}
                </a>
              </div>
            </div>
            {SHOP_LIST.map((shop) => (
              <div key={shop.id} className="flex items-start gap-3">
                <MapPin size={22} className="mt-1 shrink-0 text-melting-red" />
                <div>
                  <p className="font-display font-semibold text-melting-red">{shop.fullName}</p>
                  <p className="text-ink/80">{shop.address}</p>
                  <p className="text-ink/80">{shop.hoursLabel}</p>
                </div>
              </div>
            ))}
            <p className="mt-2 font-display text-lg font-semibold italic text-melting-red">{t.contact.signoff}</p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
