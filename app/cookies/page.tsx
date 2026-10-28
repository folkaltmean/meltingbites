import type { Metadata } from "next";
import { RedirectToMenu } from "./RedirectToMenu";

// The cookies page moved to /menu. Static export has no server redirects,
// so the old URL forwards in the browser (meta refresh + JS fallback).
export const metadata: Metadata = {
  title: "Menu",
  robots: { index: false },
  alternates: { canonical: "/menu/" },
};

export default function CookiesPage() {
  return <RedirectToMenu />;
}
