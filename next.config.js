/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/dday.svg',
        destination: '/api/dday.svg',
      },
    ];
  },
};

module.exports = nextConfig;
