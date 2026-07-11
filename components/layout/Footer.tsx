"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useT } from "@/lib/i18n/LocaleProvider";
import { PatternBand } from "@/components/ui/PatternBand";
import { LineIcon } from "@/components/icons/LineIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

const NAV_KEYS = ["home", "cookies", "story", "visit", "wholesale", "contact"] as const;
const NAV_HREFS: Record<(typeof NAV_KEYS)[number], string> = {
  home: "/",
  cookies: "/cookies",
  story: "/story",
  visit: "/visit",
  wholesale: "/wholesale",
  contact: "/contact",
};

export function Footer() {
  const t = useT();

  return (
    <PatternBand pattern={7} rounded="top" as="footer" contentClassName="text-cream">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Image
            src="/brand/logos/logo-white.png"
            alt="Melting Bites — hand-drawn wordmark with a melting drip on the G"
            width={283}
            height={200}
            className="h-14 w-auto"
          />
          <p className="max-w-xs font-display text-lg font-semibold text-soft-pink">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-soft-pink">
            {t.footer.navLabel}
          </h3>
          <ul className="flex flex-col gap-2">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <Link href={NAV_HREFS[key]} className="text-cream/90 transition-colors hover:text-soft-pink">
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-soft-pink">
            {t.footer.followLabel}
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://line.me/ti/p/@bitescookies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/90 transition-colors hover:text-soft-pink"
              >
                <LineIcon size={18} /> {t.common.line}: @bitescookies
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/meltingbitesdesserts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/90 transition-colors hover:text-soft-pink"
              >
                <InstagramIcon size={18} /> {t.common.instagram}: @meltingbitesdesserts
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 text-cream/90 transition-colors hover:text-soft-pink"
              >
                <Mail size={18} /> {"[EMAIL]"}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-soft-pink">
            {t.footer.addressLabel}
          </h3>
          <p className="flex items-start gap-2 text-cream/90">
            <MapPin size={18} className="mt-0.5 shrink-0" />
            <span>{t.footer.address}</span>
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/20 pt-6 text-sm text-cream/70 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
        <p className="font-display italic text-soft-pink">Bite me, please.</p>
      </div>
    </PatternBand>
  );
}
