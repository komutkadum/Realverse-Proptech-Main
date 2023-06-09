/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/properties',
        destination: '/properties/all',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
