import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = pageMeta(
  "Melting Bites: handmade 150g cookies in Chalong and Rawai, Phuket",
  "Handmade 150g cookies, baked fresh daily in Chalong and Rawai, Phuket. Order on Grab or get directions to either shop.",
  "/",
  true
);

export default function Home() {
  return <HomeClient />;
}
