/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  domains: ['localhost'],
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
