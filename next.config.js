/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/widget',
        destination: '/api/dday.svg',
      },
    ];
  },
};

module.exports = nextConfig;
