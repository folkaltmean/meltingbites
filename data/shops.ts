// The two shops — source: owner's "Website Fix Brief" (Jelena, 28 Oct 2026).
// Addresses are the Google Maps place names behind each Directions link.
// LINE is hidden until Jelena sends the new account; never show @bitescookies.

import type { Branch } from "./menu";

export type Shop = {
  id: Branch;
  name: string;
  fullName: string;
  blurb: string;
  address: string;
  hoursLabel: string;
  opens: number; // minutes after midnight, Bangkok time, every day
  closes: number;
  grab: string;
  maps: string;
  mapsQuery: string;
  pageTitle: string;
};

export const SHOPS: Record<Branch, Shop> = {
  chalong: {
    id: "chalong",
    name: "Chalong",
    fullName: "Melting Bites Chalong",
    blurb: "Daytime and delivery",
    address: "39 Chaofa Road, Chalong, Mueang Phuket, Phuket 83130",
    hoursLabel: "Every day, 12:00 to 22:00",
    opens: 12 * 60,
    closes: 22 * 60,
    grab: "https://app.grab.com/s/EtNdfNoh",
    maps: "https://maps.app.goo.gl/CixsRyfL9zfqhuje9",
    mapsQuery: "Melting Bites Cookies & Desserts, 39 Chaofa Road Chalong, Phuket 83130",
    pageTitle: "Melting Bites Chalong: cookies and desserts in Phuket",
  },
  rawai: {
    id: "rawai",
    name: "Rawai",
    fullName: "Melting Bites Rawai",
    blurb: "Evenings and soft serve",
    address: "57/62 Rawai, Mueang Phuket, Phuket 83130",
    hoursLabel: "Every day, 14:30 to 23:00",
    opens: 14 * 60 + 30,
    closes: 23 * 60,
    grab: "https://app.grab.com/s/okS0QcgS",
    maps: "https://maps.app.goo.gl/TEhxAYnr9ro7v4SH8",
    mapsQuery: "Melting Bites Cookies & Desserts Rawai, Rawai, Phuket 83130",
    pageTitle: "Melting Bites Rawai: desserts and soft serve in Phuket",
  },
};

export const SHOP_LIST = [SHOPS.chalong, SHOPS.rawai];

export const INSTAGRAM = { handle: "@meltingbitesdesserts", url: "https://www.instagram.com/meltingbitesdesserts" };

// Open right now? Uses Bangkok time whatever the visitor's phone is set to.
export function isOpenNow(shop: Shop, now = new Date()) {
  const bkk = new Date(now.getTime() + (now.getTimezoneOffset() + 7 * 60) * 60_000);
  const mins = bkk.getHours() * 60 + bkk.getMinutes();
  return mins >= shop.opens && mins < shop.closes;
}
