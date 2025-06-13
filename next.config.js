/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/<repository-name>', // Replace <repository-name> with your GitHub repo name
  images: {
    unoptimized: true, // Disable server-side image optimization
  },
};

module.exports = nextConfig;
