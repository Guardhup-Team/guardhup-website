/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/guardhup-website',
  assetPrefix: '/guardhup-website/',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
