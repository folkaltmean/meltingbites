import type { Metadata } from "next";
import { Fredoka, Nunito, Kanit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyOrderBar } from "@/components/shops/StickyOrderBar";

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

const siteUrl = "https://www.meltingbitesdessert.com";
const gaId = "G-1TNR14JZFM";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melting Bites: handmade 150g cookies in Chalong and Rawai, Phuket",
    template: "%s | Melting Bites",
  },
  description:
    "Handmade 150g cookies, baked fresh daily in Chalong and Rawai, Phuket. Order on Grab or get directions to either shop.",
  openGraph: {
    title: "Melting Bites: handmade 150g cookies in Phuket",
    description: "Handmade 150g cookies, baked fresh daily in Chalong and Rawai, Phuket. Order on Grab or visit us.",
    url: siteUrl,
    siteName: "Melting Bites",
    images: [{ url: "/brand/og-cookie.jpg", width: 1200, height: 630, alt: "A Melting Bites chocolate chip cookie broken in half" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melting Bites: handmade 150g cookies in Phuket",
    description: "Handmade 150g cookies, baked fresh daily in Chalong and Rawai, Phuket.",
    images: ["/brand/og-cookie.jpg"],
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
          <StickyOrderBar />
        </LocaleProvider>
        {/* Google tag (gtag.js) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
        </Script>
      </body>
    </html>
  );
}
