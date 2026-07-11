import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Melting Bites — Handmade Cookies in Chalong and Rawai, Phuket",
  description:
    "Warm, handmade cookies baked fresh daily in Chalong and Rawai, Phuket. Open plates, playful paper wraps, and small-batch flavours — visit our shop or ask about wholesale.",
};

export default function Home() {
  return <HomeClient />;
}
