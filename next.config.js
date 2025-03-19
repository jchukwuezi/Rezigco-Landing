/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable Cloudflare compatibility
  experimental: {
    optimizeCss: true,
    appDir: true,
  },
  // Use Cloudflare compatible runtime
  output: 'standalone',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 