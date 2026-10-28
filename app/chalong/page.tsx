import type { Metadata } from "next";
import { SHOPS } from "@/data/shops";
import { pageMeta } from "@/lib/seo";
import { ShopPage } from "@/components/shops/ShopPage";

const shop = SHOPS.chalong;

export const metadata: Metadata = pageMeta(
  shop.pageTitle,
  `${shop.fullName}, Phuket. ${shop.hoursLabel}. ${shop.address}. Order on Grab or get directions.`,
  "/chalong/",
  true
);

export default function Page() {
  return <ShopPage shop={shop} />;
}
