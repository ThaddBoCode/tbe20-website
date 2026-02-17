import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tbe20-website',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
