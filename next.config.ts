import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fazywssyelpsatnzisnn.supabase.co",
      },
    ],
  },
};

export default nextConfig;