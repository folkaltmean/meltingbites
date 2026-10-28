import type { Metadata } from "next";

export const siteUrl = "https://www.meltingbitesdessert.com";
export const ogImage = { url: "/brand/og-cookie.jpg", width: 1200, height: 630, alt: "A Melting Bites chocolate chip cookie broken in half" };

// Page-level openGraph replaces the root one in Next.js, so every page repeats url + image here.
export function pageMeta(title: string, description: string, path: string, absoluteTitle = false): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Melting Bites", type: "website", images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
