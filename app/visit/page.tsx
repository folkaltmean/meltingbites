import type { Metadata } from "next";
import { VisitClient } from "./VisitClient";

const title = "Visit Us";
const description =
  "Visit Melting Bites in Chalong and Rawai, Phuket. Address, opening hours, parking notes, and LINE pre-orders for warm cookies.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function VisitPage() {
  return <VisitClient />;
}
