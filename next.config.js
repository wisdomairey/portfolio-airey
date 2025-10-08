/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['robinsonhonour.me'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robinsonhonour.me',
      },
    ],
  },
}

module.exports = nextConfig
