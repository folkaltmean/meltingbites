import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Export each route as <route>/index.html so /cookies resolves on the
  // Plesk/nginx host instead of 403ing on the same-named directory.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
