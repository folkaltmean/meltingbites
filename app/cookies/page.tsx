import type { Metadata } from "next";
import { CookiesClient } from "./CookiesClient";

const title = "Our Cookies";
const description =
  "Small-batch, handmade cookies baked fresh in Rawai, Phuket. Browse our flavours and ask about custom gift plates.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function CookiesPage() {
  return <CookiesClient />;
}
