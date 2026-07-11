import type { Metadata } from "next";
import { StoryClient } from "./StoryClient";

const title = "Our Story";
const description =
  "The story behind Melting Bites — a handmade cookie kitchen in Chalong and Rawai, Phuket, and the people baking every batch with love.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function StoryPage() {
  return <StoryClient />;
}
