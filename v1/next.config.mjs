import { createMDX } from "fumadocs-mdx/next";

import withFonts from "next-fonts";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // next.config.js

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withFonts(withMDX(config));
