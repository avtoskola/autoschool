/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [375, 640, 750, 1080, 1200, 1920],
    formats: ['image/avif', 'image/webp'],
    domains: ['http://localhost:3001', 'http://localhost:3000', 'https://autoschool-liard.vercel.app'],
  },
};

module.exports = nextConfig;
