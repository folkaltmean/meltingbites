import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://melting-bites.example.com";

const routes = ["", "/cookies", "/story", "/visit", "/wholesale", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
