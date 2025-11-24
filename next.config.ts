import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // Better image compression
  },
  compress: true, // Brotli + Gzip compression
  poweredByHeader: false,
  reactStrictMode: true,

  // Cache static files aggressively
  async headers() {
    return [
      {
        source: "/(.*).(svg|jpg|jpeg|png|webp|avif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*).(css|js)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
