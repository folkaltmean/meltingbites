"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useT } from "@/lib/i18n/LocaleProvider";
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

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-2 border-melting-red/10 bg-cream/95 px-4 py-2 shadow-md backdrop-blur sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Melting Bites home">
          <Image
            src="/brand/logos/logo-red.png"
            alt="Melting Bites — hand-drawn wordmark with a melting drip on the G"
            width={1200}
            height={573}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={NAV_HREFS[key]}
              className="font-display text-sm font-semibold text-ink transition-colors hover:text-melting-red"
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://line.me/ti/p/@bitescookies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-melting-red transition-colors hover:text-soft-pink"
            aria-label="Chat with us on LINE"
          >
            <LineIcon size={22} />
          </a>
          <a
            href="https://www.instagram.com/meltingbitesdesserts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-melting-red transition-colors hover:text-soft-pink"
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon size={22} />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-melting-red lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-4 rounded-3xl border-2 border-melting-red/10 bg-cream p-6 shadow-lg lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Primary">
            {NAV_KEYS.map((key) => (
              <Link
                key={key}
                href={NAV_HREFS[key]}
                onClick={() => setOpen(false)}
                className="font-display text-lg font-semibold text-ink transition-colors hover:text-melting-red"
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 border-t-2 border-soft-pink/40 pt-4">
            <a
              href="https://line.me/ti/p/@bitescookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-melting-red"
              aria-label="Chat with us on LINE"
            >
              <LineIcon size={24} />
            </a>
            <a
              href="https://www.instagram.com/meltingbitesdesserts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-melting-red"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
