/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/portfolio-airey', // Remove this when using custom domain
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
