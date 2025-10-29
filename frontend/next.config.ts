/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // ✅ new syntax replaces "next export"
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
