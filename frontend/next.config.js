/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // required for Docker deployment

  async rewrites() {
    // In production, NEXT_PUBLIC_API_URL is the App Runner backend URL.
    // Locally it falls back to localhost:8080.
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
