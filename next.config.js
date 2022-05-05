const withLess = require("next-with-less");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "primary-color": "#1b4edd",
      },
    },
  },
};

module.exports = withLess(nextConfig);
