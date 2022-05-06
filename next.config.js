const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");
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
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};

module.exports = withLess(nextConfig);
