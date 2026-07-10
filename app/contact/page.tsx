import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

const title = "Contact";
const description = "Get in touch with Melting Bites — questions, custom plates, or just to say hello.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function ContactPage() {
  return <ContactClient />;
}
