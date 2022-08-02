/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  domains: ['localhost'],
  images: {
    domains: ['localhost', 'api.dion.lviv.ua'],
  },
}

module.exports = nextConfig
