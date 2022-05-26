/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com/'],
    formats: ['image/avif', 'image/webp'],
  },
}