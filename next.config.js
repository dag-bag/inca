/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "source.unsplash.com",
      "cdn.sanity.io",
      "images.pexels.com",
      "lh3.googleusercontent.com",
      "mdbootstrap.com",
    ],
  },
};

module.exports = nextConfig;
