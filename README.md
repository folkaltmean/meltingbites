# Melting Bites — Marketing Site

Handmade cookies, Rawai, Phuket. Next.js (App Router) + TypeScript +
Tailwind CSS, configured for static export.

## Stack

- **Next.js 16** (App Router, static export via `output: "export"`)
- **TypeScript** + **Tailwind CSS v4** (theme tokens in `app/globals.css`)
- **framer-motion** for scroll reveals and the animated hero accent
  (`prefers-reduced-motion` respected throughout)
- **lucide-react** for utility icons; brand doodles/stamps are the real PNG
  assets in `public/brand/`
- Simple dictionary-based i18n (EN default, TH toggle) — no routing changes,
  just a client-side context swap. See `lib/i18n/`.

## Run it

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & static export

```bash
npm run build      # runs `next build`, which also produces the static export
```

Because `next.config.ts` sets `output: "export"`, `next build` writes a fully
static site to `out/` — every route as its own `.html` file, ready to be
served by any static host. There is no separate export step in this version
of Next.js.

```bash
npx serve out       # preview the exported site locally, if you'd like
```

## Deploy

The `out/` folder is a plain static site — drag-and-drop it onto **Netlify**,
or point **Vercel** at this repo (it auto-detects the Next.js static export
and needs no extra config). Any other static host (S3 + CloudFront, GitHub
Pages, Cloudflare Pages, etc.) works the same way: build, then upload `out/`.

## Project structure

```
app/                  Routes (App Router). Each page is a server component
                       (for metadata) rendering a co-located "*Client.tsx"
                       component that does the actual UI + i18n.
components/
  ui/                 Section, Button, Stamp, PatternBand, CookieCard
  layout/             Header, Footer, LanguageToggle
  motion/             Reveal (scroll fade/rise wrapper)
  forms/               useFormSubmit hook + shared field styles
  icons/               LINE + Instagram icons (not in lucide-react)
data/cookies.ts        Typed placeholder menu — edit this to go live
lib/i18n/               Dictionary (EN source of truth + generated TH
                       placeholders) and the LocaleProvider context
lib/forms.ts            Formspree-style endpoint config
public/brand/           Optimized brand assets (logos, illustrations, icons,
                       stamps, patterns) — see public/brand/originals/ for
                       the untouched source files
scripts/process-assets.mjs   The sharp pipeline that produced public/brand/
                       from "../Brand Assets". Re-run it if the source files
                       change.
```

## Content

**Nothing in this repo is a real business fact.** Flavours, prices, address,
hours, socials, founder story and form endpoints are all clearly bracketed
placeholders (`[LIKE THIS]`). See **[TODO-CONTENT.md](./TODO-CONTENT.md)**
for the full checklist of what to fill in before launch.

## Suggested next steps

- **Online ordering** — the cookies grid is brochure-only today ("Add to
  plate" is decorative). A real cart/checkout would need either an
  e-commerce backend (Shopify, Snipcart) or a custom order-and-pay flow,
  which also means moving off pure static export for at least that flow.
- **A real CMS for the menu** — `data/cookies.ts` is a typed TypeScript file
  on purpose (zero infra, edit and redeploy), but if flavours change often a
  headless CMS (Sanity, Contentful) would let non-developers update the menu
  without a code change.
- **A gift-plate builder** — the "open plate" concept is the brand's
  signature; an interactive builder (pick a plate size, pick a wrap, pick
  flavours) would turn that story into something people can actually use to
  order gifts.
- **Real Thai translations** — the TH toggle works today but every string is
  a `[TH: ...]` placeholder generated from the English copy. Swapping in
  real translations is a content task, not a code task (see
  TODO-CONTENT.md §9).
