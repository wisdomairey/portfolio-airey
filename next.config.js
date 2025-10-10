/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-airey',
  images: {
    unoptimized: true,
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
