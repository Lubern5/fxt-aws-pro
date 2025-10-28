/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  experimental: { serverActions: {} }, // ✅ fixed type
};

export default nextConfig;
