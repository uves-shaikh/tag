import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // The @next/eslint-plugin-next flat config integration is broken in this
    // version — linting still runs via `pnpm lint`. Build is unaffected.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
