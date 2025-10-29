import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,

  // ❗ Force Amplify to treat it as a server-rendered app
  output: "standalone",

  images: { unoptimized: true },

  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      allowedOrigins: ["*"],
    },
  },
};

export default nextConfig;
