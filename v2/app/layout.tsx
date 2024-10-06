import "../global.css";
import { cn } from "@cs-magic/shadcn/lib/utils";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Neurora",
    template: "%s | Neurora",
  },
  keywords: ["Neurora", "Neurora Technology", "飞脑", "飞脑科技"],
  description: "Neurora is devoted to empowering Super Individuals.",
  openGraph: {
    title: "Neurora",
    description: "Neurora is devoted to empowering Super Individuals.",
    url: "https://cs-magic.cn",
    siteName: "cs-magic.cn",
    images: [
      {
        url: "https://cs-magic.cn/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Neurora",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={cn(
          `bg-black text-white`,
          process.env.NODE_ENV === "development" && "debug-screens",
        )}
      >
        {children}
      </body>
    </html>
  );
}
