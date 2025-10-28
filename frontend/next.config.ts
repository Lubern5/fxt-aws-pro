/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // tells Amplify it's SSR
  reactCompiler: true,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
