"use client";

import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { useT } from "@/lib/i18n/LocaleProvider";
import { PatternBand } from "@/components/ui/PatternBand";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { SHOP_LIST } from "@/data/shops";

const NAV_KEYS = ["home", "cookies", "story", "visit", "wholesale", "contact"] as const;
const NAV_HREFS: Record<(typeof NAV_KEYS)[number], string> = {
  home: "/",
  cookies: "/menu",
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
                href="https://www.instagram.com/meltingbitesdesserts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/90 transition-colors hover:text-soft-pink"
              >
                <InstagramIcon size={18} /> {t.common.instagram}: @meltingbitesdesserts
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-soft-pink">
            {t.footer.addressLabel}
          </h3>
          <ul className="flex flex-col gap-4">
            {SHOP_LIST.map((shop) => (
              <li key={shop.id} className="text-cream/90">
                <Link href={`/${shop.id}`} className="font-display font-semibold text-cream hover:text-soft-pink">
                  {shop.name}
                </Link>
                <p className="mt-1 flex items-start gap-2 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
                  <a href={shop.maps} target="_blank" rel="noopener noreferrer" className="hover:text-soft-pink">
                    {shop.address}
                  </a>
                </p>
                <p className="mt-1 flex items-start gap-2 text-sm">
                  <Clock size={16} className="mt-0.5 shrink-0" aria-hidden /> {shop.hoursLabel}
                </p>
              </li>
            ))}
          </ul>
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
