/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export, suitable for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export compatibility
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
        port: '',
        pathname: '/s/i/googlematerialicons/**',
      },
    ],
  },

  // If deploying to a subfolder like `https://<user>.github.io/<repo-name>`,
  // uncomment and set the basePath and assetPrefix.
  // basePath: '/osun-dev-insights',
  // assetPrefix: '/osun-dev-insights/',
};

module.exports = nextConfig;
