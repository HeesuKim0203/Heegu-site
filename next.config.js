/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ko-kr',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
