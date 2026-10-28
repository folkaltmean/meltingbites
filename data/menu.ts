// Menu for /menu — source: shop's menu board + "LINE FOLK .xlsx" v4 (22 Oct 2026).
// Same data as the A3 menu v2 (27 Oct 2026). Never add a price that the shop has not confirmed.

export type Branch = "rawai" | "chalong";

export const BRANCHES: Record<Branch, { name: string }> = {
  rawai: { name: "Rawai" },
  chalong: { name: "Chalong" },
};

// Halloween specials. Set `enabled: false` to take them off the menu right away;
// they also disappear on their own once `endsAt` has passed (Bangkok time).
export const HALLOWEEN = { enabled: true, endsAt: "2026-11-02T00:00:00+07:00", label: "Until 1 Nov" };

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  branches: Branch[];
  bestSeller?: boolean;
  nuts?: boolean;
  glutenFree?: boolean;
  note?: string;
  halloween?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
  halloween?: boolean;
};

const BOTH: Branch[] = ["rawai", "chalong"];
const img = (file: string) => `/brand/menu-2026/${file}.jpg`;

export const SUNDAE_OPTIONS = {
  sauces: ["Chocolate", "Caramel", "Strawberry", "Nutella", "Biscoff"],
  crunches: ["Lotus", "Oreo", "Peanut", "Hazelnut"],
  extraSauce: [
    { label: "Chocolate, Caramel or Strawberry", price: 20 },
    { label: "Nutella or Biscoff", price: 35 },
  ],
  extraCrunch: [
    { label: "Peanut", price: 15 },
    { label: "Lotus or Oreo", price: 20 },
    { label: "Hazelnut", price: 30 },
  ],
};

// Shown in the Cinnamon Rolls section when no monthly roll is listed (board copy).
export const ROLL_OF_THE_MONTH_FALLBACK = "Cinnamon of the Month: a new roll every month. Ask our staff!";

export const MENU: MenuSection[] = [
  {
    id: "cookies",
    title: "Cookies",
    intro: "Every cookie is 150 g, baked fresh daily.",
    items: [
      { id: "daisy", name: "Daisy", price: 150, description: "Classic chocolate chip dough. No filling needed.", image: img("daisy"), branches: BOTH, bestSeller: true },
      { id: "ruby", name: "Ruby", price: 150, description: "Red velvet, white chocolate, berry jam and cream cheese ganache.", image: img("ruby"), branches: BOTH, bestSeller: true },
      { id: "bella", name: "Bella", price: 150, description: "Filled with Nutella, finished with chocolate.", image: img("bella"), branches: BOTH, bestSeller: true, nuts: true },
      { id: "ferrero", name: "Ferrero", price: 190, description: "Chocolate dough, a whole Ferrero Rocher inside, hazelnut on top.", image: img("ferrero"), branches: BOTH, nuts: true },
      { id: "sultan", name: "Sultan", price: 180, description: "Dubai-inspired. Pistachio cream and kataifi in a dark chocolate dough.", image: img("sultan"), branches: BOTH, nuts: true },
      { id: "gigi", name: "Gigi", price: 160, description: "Kinder Bueno pieces and Nutella ganache inside.", image: img("gigi"), branches: BOTH, nuts: true },
      { id: "gloria", name: "Gloria", price: 160, description: "Oats, walnuts, raisins and chocolate.", image: img("gloria"), branches: BOTH, nuts: true, glutenFree: true },
      { id: "bianca", name: "Bianca", price: 150, description: "Double chocolate, dark and perfectly balanced.", image: img("bianca"), branches: BOTH },
      { id: "leni", name: "Leni", price: 150, description: "White chocolate and lemon zest, topped with lemon curd.", image: img("leni"), branches: BOTH },
      { id: "oreo", name: "Oreo", price: 150, description: "Chocolate chip dough loaded with Oreo pieces.", image: img("oreo"), branches: BOTH },
      { id: "lucy", name: "Lucy", price: 150, description: "Filled with Biscoff, topped with a Lotus biscuit.", image: img("lucy"), branches: BOTH },
      { id: "carmen", name: "Carmen", price: 150, description: "Chocolate dough with a gooey salted caramel centre.", image: img("carmen"), branches: BOTH },
      { id: "betty", name: "Betty", price: 150, description: "White chocolate, cream cheese and strawberry.", image: img("betty"), branches: BOTH },
      { id: "nikki", name: "Nikki", price: 150, description: "Homemade peanut butter and caramel, generously filled.", image: img("nikki"), branches: BOTH, nuts: true },
      { id: "bite-box", name: "Bite Box", price: 170, description: "150 g mini chocolate chip cookies with any sauce as a dip.", image: img("bite-box"), branches: BOTH },
    ],
  },
  {
    id: "sundaes",
    title: "Sundaes",
    intro: "Soft serve, three ways. Every base includes 1 sauce and 1 crunch.",
    items: [
      { id: "cookie-soft-serve", name: "Cookie + Soft Serve", price: 160, description: "Warm chocolate chip cookie with a swirl of soft serve.", image: img("cookie-soft-serve"), branches: ["rawai"], note: "Must try" },
      { id: "brownie-soft-serve", name: "Brownie + Soft Serve", price: 180, description: "Our Original Brownie with a swirl of soft serve.", image: img("brownie-soft-serve"), branches: ["rawai"] },
      { id: "soft-serve-cup", name: "Soft Serve Cup", price: 120, description: "Two swirls of creamy soft serve.", image: img("soft-serve-cup"), branches: ["rawai"] },
    ],
  },
  {
    id: "rolls",
    title: "Cinnamon Rolls",
    items: [
      { id: "anna", name: "Anna", price: 120, description: "Our classic roll, soft and buttery, with cream cheese frosting.", image: img("anna-roll"), branches: BOTH },
      { id: "lanna", name: "Lanna", price: 140, description: "Soft roll with Biscoff cream, Lotus crumble on top.", image: img("lanna-roll"), branches: BOTH },
      { id: "pumpkin-roll", name: "Pumpkin Spice Roll", price: 130, description: "Real pumpkin and cream cheese frosting.", image: img("pumpkin-roll"), branches: BOTH, note: "Roll of the month", halloween: true },
    ],
  },
  {
    id: "brownies",
    title: "Brownies",
    items: [
      { id: "original-brownie", name: "Original", price: 130, description: "Fudgy, full of chocolate, made with lots of butter.", image: img("brownie"), branches: BOTH },
      { id: "blondie", name: "Blondie", price: 130, description: "The white version. Caramelised and rich in every bite.", image: img("blondie"), branches: BOTH },
    ],
  },
  {
    id: "creamies",
    title: "Creamies",
    intro: "200 g dessert cups.",
    items: [
      { id: "banana-pudding", name: "Banana Pudding", price: 190, description: "Custard, banana and homemade vanilla wafers.", image: img("banana-pudding"), branches: ["chalong"] },
      { id: "kinder-creamy", name: "Kinder Creamy", price: 210, description: "Kinder chocolate cream, homemade pastry, a Kinder Bueno on top.", image: img("kinder-creamy"), branches: ["chalong"], nuts: true },
      { id: "creamy-raspberry", name: "Creamy Raspberry", price: 210, description: "Cream cheese, homemade raspberry jam and a brownie layer.", image: img("creamy-raspberry"), branches: ["chalong"] },
    ],
  },
  {
    id: "halloween",
    title: "Halloween",
    intro: "Spooky specials, for a few more days.",
    halloween: true,
    items: [
      { id: "boo", name: "Boo", price: 150, description: "Ghost cookie: white chocolate dough, dark chocolate, marshmallow inside and on top.", image: img("boo"), branches: BOTH },
      { id: "bloody-mary", name: "Bloody Mary", price: 170, description: "Dark chocolate chip cookie hiding a blood-red cream cheese ganache.", image: img("bloody-mary"), branches: BOTH },
      { id: "cleopatra", name: "Cleopatra Brownie", price: 140, description: "Fudgy brownie wrapped in white chocolate bandages.", image: img("cleopatra"), branches: BOTH },
      { id: "pumpkin-latte", name: "Pumpkin Spice Latte", price: 150, description: "Iced latte with real pumpkin, caramel and whipped cream.", image: img("pumpkin-latte"), branches: ["chalong"] },
      { id: "lanna-latte", name: "Lanna Latte", price: 160, description: "Iced Biscoff latte with caramel, whipped cream and cookie crumble.", image: img("lotus-drink"), branches: ["chalong"] },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { id: "water", name: "Melting Bites Water", price: 20, description: "Our own bottled water.", image: img("water"), branches: BOTH },
    ],
  },
];
