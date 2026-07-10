# TODO — Content to fill in before launch

Everything below is a placeholder. The site builds and runs fine as-is, but
nothing here is a real fact — replace each item and the site goes live.
Search the codebase for the bracketed text (e.g. `[RAWAI STORE ADDRESS]`) to
jump straight to it.

## 1. Core business facts

These appear in more than one place — grep for the bracket text to find every
instance.

- [ ] **`[RAWAI STORE ADDRESS]`** — the shop's street address.
  Used in: `lib/i18n/dictionary.ts` (`visit.address`, `footer.address`),
  `app/contact/ContactClient.tsx`.
- [ ] **`[OPENING HOURS]`** — daily/weekly hours.
  Used in: `lib/i18n/dictionary.ts` (`visit.hours`).
- [ ] **`[PARKING / HOW-TO-FIND-US NOTE]`** — how to find the shop, parking notes.
  Used in: `lib/i18n/dictionary.ts` (`visit.findUs.body`).
- [ ] **`[LINE ID / @handle]`** — LINE handle for pre-orders and chat.
  Used in: `app/contact/ContactClient.tsx`, `app/visit/VisitClient.tsx`
  (`visit.lineHandle`), `components/layout/Footer.tsx`.
- [ ] **`[INSTAGRAM @handle]`** — Instagram handle.
  Used in: `lib/i18n/dictionary.ts` (`home.follow.handle`),
  `app/contact/ContactClient.tsx`, `components/layout/Footer.tsx`.
- [ ] **`[EMAIL]`** — general contact email.
  Used in: `app/contact/ContactClient.tsx`, `components/layout/Footer.tsx`
  (also update the `mailto:hello@example.com` link in `Footer.tsx`).
- [ ] **`[PHONE]`** — contact phone number.
  Used in: `app/contact/ContactClient.tsx`.

## 2. Links that currently go nowhere (`href="#"`)

Once you have the real LINE/Instagram URLs, wire them up in:

- [ ] `components/layout/Header.tsx` — LINE + Instagram icon links (desktop and mobile menu).
- [ ] `components/layout/Footer.tsx` — LINE, Instagram and email links.
- [ ] `app/visit/VisitClient.tsx` — "Message us on LINE" button.
- [ ] `app/HomeClient.tsx` — "Follow the crumbs" Instagram handle link.

## 3. Menu data — `data/cookies.ts`

Every flavour is a placeholder. Replace `name`, `description` and `price` for
each entry (there are 6 — add or remove as needed, the grid and filters
update automatically). Also swap the "Photo coming soon" placeholder in
`components/ui/CookieCard.tsx` for real product photography once you have it
(add images to `/public/brand/` and swap the `<CookieIcon>` placeholder block
for a `next/image`).

- [ ] `[FLAVOR NAME]` × 6 flavours
- [ ] `[DESCRIPTION — ...]` × 6 one-line descriptions
- [ ] `[PRICE ฿]` × 6 prices

## 4. Founder story — `lib/i18n/dictionary.ts` (`story` object)

- [ ] `home.story.body` — short teaser paragraph (has one `[FOUNDER STORY]` insert).
- [ ] `story.lead` — the short, human intro at the top of the Our Story page.
- [ ] `story.sections[0].body` — "Why cookies."
- [ ] `story.sections[1].body` — "Why Rawai."
- [ ] `story.closing` — closing line, ideally in the founder's own voice.

## 5. Forms — `lib/forms.ts`

- [ ] Replace both `FORM_ENDPOINTS` values with real endpoints (e.g. create
  two forms at [formspree.io](https://formspree.io) — one for Wholesale
  enquiries, one for general Contact — and paste the endpoint URLs in). Until
  this is done, submitting either form will show the friendly inline error
  state rather than the success state.

## 6. Visit page — `app/visit/VisitClient.tsx`

- [ ] Swap the Google Maps embed `src` for the exact store location (Google
  Maps → Share → Embed a map → copy the `src` URL). It currently points at a
  generic "Rawai Beach, Phuket" search so the page isn't empty in the
  meantime.
- [ ] Replace the 4 "Store photo placeholder" tiles with real photos of the shop.

## 7. Home page — "Follow us" grid

- [ ] `app/HomeClient.tsx` — replace the 6 placeholder Instagram tiles with
  real post thumbnails (or wire up an Instagram embed/API if you'd rather
  keep it live).

## 8. Site-wide technical placeholders

- [ ] Domain name — replace `https://melting-bites.example.com` in
  `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts` with the real
  production domain once you have one.
- [ ] Favicon / OG image — `public/brand/logos/icon-mark.png` was generated
  by compositing the red logo on a cream square (see
  `scripts/process-assets.mjs`). Swap it for a custom-designed icon if you'd
  like something more refined at small sizes.

## 9. Thai translations

Every string has an English source of truth in `lib/i18n/dictionary.ts`
(`en` export). Thai copy is currently auto-generated as
`[TH: <english text>]` placeholders via the `mapDeep` helper at the bottom of
that file, so the TH toggle works today, just not with real Thai text yet.

- [ ] Replace the generated `th` export with real Thai copy — either hand
  translate the `en` object into a matching `th` object, or keep the
  `mapDeep` pattern and swap in a translation service. Structure must match
  `en` exactly (same keys) since components read `t.section.field` directly.

## 10. Original brand assets

Full-resolution, unmodified copies of every source file used on the site
live in `public/brand/originals/` (kept out of the optimized `public/brand/`
tree so future re-exports have a clean source). No action needed unless you
want to re-crop or re-process something.
