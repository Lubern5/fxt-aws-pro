/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactCompiler: true,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
