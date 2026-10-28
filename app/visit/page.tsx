import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { VisitClient } from "./VisitClient";

const title = "Visit Us";
const description =
  "Visit Melting Bites in Chalong (12:00 to 22:00) and Rawai (14:30 to 23:00), Phuket. Open every day. Addresses, maps and Grab links.";

export const metadata: Metadata = pageMeta(title, description, "/visit/");

export default function VisitPage() {
  return <VisitClient />;
}
