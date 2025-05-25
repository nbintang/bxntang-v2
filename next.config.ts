import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "image.api.playstation.com",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
