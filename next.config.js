/**
 * @format
 * @type {import('next').NextConfig}
 */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
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
      "i.ibb.co",
      "tailwindui.com",
      "cdn.shopify.com",
    ],
  },
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
