/* @type {import('next').NextConfig} /
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      '*.yaml': {
        loaders: ['yaml-loader'],
        as: '*.js',
      },
    },
  },
};

module.exports = nextConfig;
