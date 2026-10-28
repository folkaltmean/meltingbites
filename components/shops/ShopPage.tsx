import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { SHOP_LIST, type Shop } from "@/data/shops";
import { siteUrl } from "@/lib/seo";
import { OpenBadge, ShopButtons } from "./ShopBlock";

const pad = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

// LocalBusiness schema for Google. No phone yet: the shop has not given one.
function schema(shop: Shop) {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: shop.fullName,
    url: `${siteUrl}/${shop.id}/`,
    image: `${siteUrl}/brand/og-cookie.jpg`,
    servesCuisine: "Desserts",
    priceRange: "฿",
    hasMap: shop.maps,
    address: {
      "@type": "PostalAddress",
      streetAddress: shop.address.split(", ").slice(0, -2).join(", "),
      addressLocality: shop.name,
      addressRegion: "Phuket",
      postalCode: "83130",
      addressCountry: "TH",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: pad(shop.opens),
        closes: pad(shop.closes),
      },
    ],
    sameAs: [shop.grab],
  };
}

export function ShopPage({ shop }: { shop: Shop }) {
  const other = SHOP_LIST.find((s) => s.id !== shop.id)!;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(shop)) }} />

      <section className="mx-auto max-w-5xl px-5 pt-6 sm:px-8 sm:pt-10">
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-10">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink/70">{shop.blurb}</p>
            <h1 className="mt-1 font-display text-4xl font-bold leading-tight text-melting-red sm:text-5xl">
              {shop.fullName}
            </h1>
            <div className="mt-4 flex flex-col gap-2 text-base text-ink/85">
              <p className="flex items-center gap-2">
                <Clock size={18} className="shrink-0 text-melting-red" aria-hidden /> {shop.hoursLabel}
                <OpenBadge shop={shop} />
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-melting-red" aria-hidden /> {shop.address}
              </p>
            </div>
            <ShopButtons shop={shop} className="mt-5 max-w-md" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-soft-pink/30">
            <Image
              src="/brand/hero-cookie.jpg"
              alt="A Melting Bites chocolate chip cookie broken in half"
              fill
              sizes="(min-width: 768px) 460px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border-2 border-melting-red/15">
          <iframe
            title={`Map to ${shop.fullName}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(shop.mapsQuery)}&output=embed`}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/menu/?branch=${shop.id}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-melting-red px-6 font-display font-semibold text-cream"
          >
            See the {shop.name} menu
          </Link>
          <Link
            href={`/${other.id}/`}
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-melting-red px-6 font-display font-semibold text-melting-red"
          >
            Our {other.name} shop
          </Link>
        </div>
      </section>
    </>
  );
}
