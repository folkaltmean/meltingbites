// Placeholder menu. Every flavour name, description and price below is a
// stand-in — replace them with the real Melting Bites lineup and this page
// (and the featured cards on the homepage) go live automatically.

export type CookieCategory = "classic" | "seasonal" | "gift";

export type Cookie = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: CookieCategory;
  featured?: boolean;
};

export const categoryLabels: Record<CookieCategory, string> = {
  classic: "Classic",
  seasonal: "Seasonal",
  gift: "Gift Plates",
};

export const cookies: Cookie[] = [
  {
    id: "classic-chip",
    name: "[FLAVOR NAME] Classic Chip",
    description: "[DESCRIPTION — e.g. crisp edges, gooey centre, always warm.]",
    price: "[PRICE ฿]",
    category: "classic",
    featured: true,
  },
  {
    id: "sea-salt-caramel",
    name: "[FLAVOR NAME] Sea Salt Caramel",
    description: "[DESCRIPTION — e.g. buttery dough, pockets of soft caramel, a pinch of salt.]",
    price: "[PRICE ฿]",
    category: "classic",
    featured: true,
  },
  {
    id: "double-cocoa",
    name: "[FLAVOR NAME] Double Cocoa",
    description: "[DESCRIPTION — e.g. deep chocolate dough, dark chocolate chunks.]",
    price: "[PRICE ฿]",
    category: "classic",
  },
  {
    id: "matcha-white-choc",
    name: "[FLAVOR NAME] Matcha White Choc",
    description: "[DESCRIPTION — e.g. earthy matcha dough, ribbons of white chocolate.]",
    price: "[PRICE ฿]",
    category: "seasonal",
    featured: true,
  },
  {
    id: "coconut-pandan",
    name: "[FLAVOR NAME] Coconut Pandan",
    description: "[DESCRIPTION — e.g. toasted coconut, a whisper of pandan, tropical and warm.]",
    price: "[PRICE ฿]",
    category: "seasonal",
  },
  {
    id: "gift-plate-mix",
    name: "[FLAVOR NAME] The Gift Plate Mix",
    description: "[DESCRIPTION — e.g. a little of everything, wrapped for giving.]",
    price: "[PRICE ฿]",
    category: "gift",
    featured: true,
  },
];
