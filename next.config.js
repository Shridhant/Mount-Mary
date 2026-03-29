/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "elshaddaiacademy.org" },
    ],
  },
};

module.exports = nextConfig;
