import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Daftarkan Unsplash di sini
      },
      {
        protocol: "http",
        hostname: "fitmed-apilocal.local",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
