"use client";

import { useEffect } from "react";
import Link from "next/link";

export function RedirectToMenu() {
  useEffect(() => {
    window.location.replace(`/menu/${window.location.search}`);
  }, []);

  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/menu/" />
      <p className="mx-auto max-w-5xl px-5 py-24 text-center">
        Our menu has moved.{" "}
        <Link href="/menu/" className="font-semibold text-melting-red underline">
          See the menu
        </Link>
      </p>
    </>
  );
}
