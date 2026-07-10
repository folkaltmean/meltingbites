import type { Metadata } from "next";
import { WholesaleClient } from "./WholesaleClient";

const title = "Wholesale & Partnerships";
const description =
  "Wholesale cookies and co-branded paper wraps for cafés, hotels, events and corporate gifting from Melting Bites in Phuket.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function WholesalePage() {
  return <WholesaleClient />;
}
