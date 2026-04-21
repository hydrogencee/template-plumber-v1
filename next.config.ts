import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',   // REQUIRED for static Vercel deploy — do not remove
  trailingSlash: true,
  images: { unoptimized: true },  // required for static export with next/image
};

export default nextConfig;
