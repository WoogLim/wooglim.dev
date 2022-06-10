/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
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
    domains: ['avatars.githubusercontent.com/', 'user-images.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
}