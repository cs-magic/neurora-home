import { ReactNode } from "react";
import type { Metadata } from "next";

import "@assets/styles/main.css";
import "../styles/github-markdown.css"; // 添加这一行

export const metadata: Metadata = {
  title: "飞脑科技",
  description: "助力超级个体",
  keywords: [
    "飞脑",
    "飞脑科技",
    "Neurora",
    "Neurora Tech",
    "Neurora Technology",
    "AGI",
    "AIGC",
    "LLM",
    "Assistant",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
