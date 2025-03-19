/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable Cloudflare compatibility
  experimental: {
    optimizeCss: true,
  },
  // Use Cloudflare compatible runtime
  output: 'standalone',
}

module.exports = nextConfig 