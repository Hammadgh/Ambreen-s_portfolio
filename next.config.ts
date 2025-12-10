import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Allow Unsplash assets used across the page
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Needed for fully static exports
    unoptimized: true,
  },
};

export default nextConfig;
