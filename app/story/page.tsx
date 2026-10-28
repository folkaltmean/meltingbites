import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { StoryClient } from "./StoryClient";

const title = "Our Story";
const description =
  "How Melting Bites began in Chalong, Phuket, and opened a second shop in Rawai in October 2026.";

export const metadata: Metadata = pageMeta(title, description, "/story/");

export default function StoryPage() {
  return <StoryClient />;
}
