import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";

const title = "Menu";
const description =
  "The full Melting Bites menu for our Rawai and Chalong shops in Phuket: cookies, sundaes, cinnamon rolls, brownies and creamies, with prices.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function MenuPage() {
  return <MenuClient />;
}
