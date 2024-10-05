import { withContentlayer } from "next-contentlayer";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";

dotenv.config({
  path: path.join(fileURLToPath(import.meta.url), "../../.env"),
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withContentlayer(nextConfig);
