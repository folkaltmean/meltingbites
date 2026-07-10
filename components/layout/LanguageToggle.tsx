"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

export function LanguageToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { locale, setLocale } = useLocale();

  const base =
    "rounded-full px-2.5 py-1 text-xs font-display font-semibold transition-colors";
  const activeClasses =
    tone === "light" ? "bg-melting-red text-cream" : "bg-cream text-melting-red";
  const inactiveClasses =
    tone === "light" ? "text-melting-red hover:bg-melting-red/10" : "text-cream hover:bg-cream/15";

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border-2 p-0.5 ${
        tone === "light" ? "border-melting-red" : "border-cream"
      }`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`${base} ${locale === "en" ? activeClasses : inactiveClasses}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("th")}
        className={`${base} ${locale === "th" ? activeClasses : inactiveClasses}`}
        aria-pressed={locale === "th"}
      >
        TH
      </button>
    </div>
  );
}
