import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { WholesaleClient } from "./WholesaleClient";

const title = "Wholesale & Partnerships";
const description =
  "Melting Bites cookies for villas, hotels, offices and events in Phuket.";

export const metadata: Metadata = pageMeta(title, description, "/wholesale/");

export default function WholesalePage() {
  return <WholesaleClient />;
}
