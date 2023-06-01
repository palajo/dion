/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  domains: ['localhost'],
  images: {
    domains: ['localhost', 'api.dion.lviv.ua'],
  },
}

export default nextConfig;
