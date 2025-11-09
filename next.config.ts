import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/m2u2NvXMGK",
        permanent: true
      }
    ];
  },
};

export default nextConfig;
