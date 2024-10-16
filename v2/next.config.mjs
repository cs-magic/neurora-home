import dotenv from "dotenv";
import { withContentlayer } from "next-contentlayer";
import { fileURLToPath } from "node:url";
import path from "path";

dotenv.config({
  path: path.join(fileURLToPath(import.meta.url), "../../../.env"),
});

// logEnv("UPSTASH");

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

  images: {
    remotePatterns: [
      { protocol: "http", hostname: "**" },
      { protocol: "https", hostname: "**" },
    ],
  },  
};

export default withContentlayer(nextConfig);
