import { createPreset } from "fumadocs-ui/tailwind-plugin";

import tailwindConfig from "../../tailwind.config";

tailwindConfig.content.push(
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./content/**/*.{md,mdx}",
  "./mdx-components.{ts,tsx}",
  "../../node_modules/fumadocs-ui/**/*.js",
);

tailwindConfig.presets = [createPreset()];

export default tailwindConfig;
