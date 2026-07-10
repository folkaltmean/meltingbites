import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Melting Bites — Handmade Cookies in Rawai, Phuket",
  description:
    "Warm, handmade cookies baked fresh daily in Rawai, Phuket. Open plates, playful paper wraps, and small-batch flavours — visit our shop or ask about wholesale.",
};

export default function Home() {
  return <HomeClient />;
}
