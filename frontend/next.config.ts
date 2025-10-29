import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ✅ this keeps server support
  reactStrictMode: true,
};

export default nextConfig;
