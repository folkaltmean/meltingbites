// English is the source of truth. Thai is derived automatically as
// "[TH: ...]" placeholders so every string has a slot ready for real
// translation without anyone needing to restructure this file.

export const en = {
  nav: {
    home: "Home",
    cookies: "Menu",
    story: "Our Story",
    visit: "Visit Us",
    wholesale: "Wholesale",
    contact: "Contact",
  },
  header: {
    langLabel: "Language",
  },
  home: {
    hero: {
      eyebrow: "Handmade in Chalong and Rawai, Phuket",
      title: "Handmade 150g cookies in Phuket",
      subtitle:
        "We mix, roll and bake every batch ourselves — still warm when it reaches your plate, still warm when you take that first bite.",
      ctaPrimary: "Find our shops",
      ctaSecondary: "See the cookies",
    },
    signature: {
      heading: "Small batch. Every single day.",
      subtitle:
        "No shortcuts, no six-month freezer stock — just dough we mix ourselves and ovens we watch like hawks.",
      items: [
        { caption: "Every batch baked fresh, this morning." },
        { caption: "Mixed, rolled and topped with love." },
        { caption: "Go on. You know you want to." },
      ],
    },
    featured: {
      heading: "Today's favourites",
      subtitle:
        "A little taste of what's coming out of the oven. The full lineup — and the flavours we rotate in — lives on the menu page.",
      cta: "See the full menu",
    },
    openPlate: {
      eyebrow: "Boxes",
      heading: "Birthday boxes and Creamie boxes.",
      body: "Celebrating? Ask for a birthday box of cookies. Our Creamies, 200g dessert cups, come boxed too, at our Chalong shop.",
      cta: "See the menu",
    },
    story: {
      heading: "Started in Chalong",
      body: "Melting Bites started in Chalong, near the Chalong Pier roundabout. Our second shop opened in Rawai on 10 October 2026.",
      cta: "Read our story",
    },
    wholesale: {
      heading: "Baking for your café, hotel or next big event?",
      body: "Boxes of cookies for villas, hotels, offices and events in Phuket.",
      cta: "Talk wholesale",
    },
    follow: {
      heading: "Follow the crumbs",
      subtitle: "Behind-the-scenes dough, fresh trays, and the occasional kitchen chaos.",
      handle: "@meltingbitesdesserts",
    },
  },
  cookies: {
    heading: "Our Cookies",
    subtitle: "Baked to order in small batches. Flavours rotate, plates are always warm.",
    filterAll: "All",
    addToPlate: "Add to plate",
    priceLabel: "from",
    custom: {
      heading: "Building a gift or a party plate?",
      body: "Mix flavours, pick a wrap, tell us the occasion — we'll put together a custom plate for pickup or delivery.",
      cta: "Ask about a custom plate",
    },
  },
  story: {
    heading: "Our Story",
    lead: "Melting Bites started in Chalong, near the Chalong Pier roundabout. On 10 October 2026 we opened our second shop, in Rawai.",
    sections: [
      {
        heading: "Two shops",
        body: "Chalong is our daytime shop, and it delivers. Rawai stays open into the evening and serves soft serve.",
      },
    ],
    closing: "Come and say hi in Chalong or Rawai.",
  },
  visit: {
    heading: "Visit Us",
    subtitle: "Two shops in Phuket, open every day.",
  },
  wholesale: {
    heading: "Wholesale & Partnerships",
    subtitle: "Boxes of handmade 150g cookies for villas, hotels, offices and events in Phuket.",
    wrap: {
      heading: "Gifts and wholesale",
      body: "Tell us about your guests or your event, and we'll come back to you with options and prices.",
    },
    benefitsHeading: "Why bake with us",
    benefits: [
      {
        heading: "Small-batch, always fresh",
        body: "No mass-produced pallets — every order is baked close to your delivery date.",
      },
      {
        heading: "Built around your event",
        body: "Villas, hotels, offices and events, sized to your order.",
      },
      {
        heading: "Reliable, standing supply",
        body: "Set up a recurring order or a one-off drop — we'll work to your calendar.",
      },
    ],
    form: {
      heading: "Start a wholesale conversation",
      intro: "Tell us a bit about your business and what you're picturing — we'll follow up with options and pricing.",
      name: "Your name",
      business: "Business name",
      email: "Email",
      phone: "Phone",
      partnershipType: "Type of partnership",
      partnershipOptions: ["Café", "Hotel", "Event", "Corporate gifting", "Other"],
      message: "Tell us about your event or order",
      submit: "Send enquiry",
      successHeading: "Thank you — that's in our inbox!",
      successBody: "We read every enquiry ourselves and usually reply within a couple of days. Talk soon!",
    },
  },
  contact: {
    heading: "Say Hello",
    subtitle: "Questions, birthday boxes, or just want to tell us your favourite flavour? Find us at either shop or on Instagram.",
    form: {
      heading: "Send us a message",
      name: "Your name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      successHeading: "Message sent — thank you!",
      successBody: "We'll get back to you as warmly and as quickly as we can.",
    },
    details: {
      lineLabel: "LINE",
      igLabel: "Instagram",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
    },
    signoff: "Bite me, please — talk soon.",
  },
  footer: {
    tagline: "Handmade 150g cookies in Chalong and Rawai, Phuket. Bite me, please.",
    navLabel: "Explore",
    followLabel: "Say hi",
    addressLabel: "Find us",
    copyright: "Melting Bites. All rights reserved.",
  },
  common: {
    instagram: "Instagram",
    line: "LINE",
    placeholderPhoto: "Photo coming soon",
  },
} as const;

export type Dictionary = typeof en;

function mapDeep<T>(value: T): T {
  if (typeof value === "string") {
    return `[TH: ${value}]` as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => mapDeep(item)) as unknown as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, v]) => [key, mapDeep(v)])
    ) as unknown as T;
  }
  return value;
}

export const th: Dictionary = mapDeep(en);

export const dictionaries: Record<"en" | "th", Dictionary> = { en, th };
export type Locale = "en" | "th";
