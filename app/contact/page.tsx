import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ContactClient } from "./ContactClient";

const title = "Contact";
const description =
  "Get in touch with Melting Bites in Chalong and Rawai, Phuket: shop hours, directions, Grab and Instagram.";

export const metadata: Metadata = pageMeta(title, description, "/contact/");

export default function ContactPage() {
  return <ContactClient />;
}
