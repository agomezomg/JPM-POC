const nextConfig = {
  reactStrictMode: true,
  images: {
      unoptimized: true
  },
  async rewrites() {
      return [
          {
              source: '/:path*',
              destination: 'http://localhost:8080/api/:path*',
          }
      ]
  }
}

module.exports = nextConfig