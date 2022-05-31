/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

const withMDX = require('@next/mdx')({
  // ...
  options: {
    providerImportSource: '@mdx-js/react',
  },
})

module.exports = nextConfig, withMDX;

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com/'],
    formats: ['image/avif', 'image/webp'],
  },
}