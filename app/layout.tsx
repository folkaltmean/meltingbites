import type { Metadata } from "next";
import { Fredoka, Nunito, Kanit } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://melting-bites.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melting Bites — Handmade Cookies in Rawai, Phuket",
    template: "%s | Melting Bites",
  },
  description:
    "Warm, handmade cookies baked fresh daily in Rawai, Phuket. Open plates, playful paper wraps, and small-batch flavours — visit our shop or ask about wholesale.",
  openGraph: {
    title: "Melting Bites — Handmade Cookies in Rawai, Phuket",
    description:
      "Warm, handmade cookies baked fresh daily in Rawai, Phuket. Open plates, playful paper wraps, and small-batch flavours.",
    url: siteUrl,
    siteName: "Melting Bites",
    images: [{ url: "/brand/logos/icon-mark.png", width: 512, height: 512, alt: "Melting Bites logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Melting Bites — Handmade Cookies in Rawai, Phuket",
    description: "Warm, handmade cookies baked fresh daily in Rawai, Phuket.",
    images: ["/brand/logos/icon-mark.png"],
  },
  icons: {
    icon: "/brand/logos/icon-mark.png",
    apple: "/brand/logos/icon-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${kanit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
