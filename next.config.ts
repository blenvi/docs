import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();
const nextConfig = {
  reactStrictMode: true,
} satisfies NextConfig;

export default withMDX(nextConfig);
