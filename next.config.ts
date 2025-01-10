import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint warnings during build
  },
};


export default nextConfig;
