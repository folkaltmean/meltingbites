import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { MenuClient } from "./MenuClient";

const title = "Menu";
const description =
  "The full Melting Bites menu for our Rawai and Chalong shops in Phuket: cookies, sundaes, cinnamon rolls, brownies and creamies, with prices.";

export const metadata: Metadata = pageMeta(title, description, "/menu/");

export default function MenuPage() {
  return <MenuClient />;
}
