import { type HomeLayoutProps } from "fumadocs-ui/home-layout";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home2)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "Neurora Docs",
  },
  links: [
    {
      text: "Home Page",
      url: "/",
      active: "nested-url",
    },
    {
      text: "Github",
      url: "https://github.com/cs-magic",
      active: "nested-url",
    },
  ],
};
