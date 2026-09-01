import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "王骁睿 WANGXIAORUI · 个人作品集",
  description:
    "王骁睿的个人作品集，记录视觉计算、人工智能、数学建模与可复现工程实践。",
  authors: [{ name: "王骁睿 WANGXIAORUI" }],
  keywords: [
    "王骁睿",
    "WANGXIAORUI",
    "Visual Computing",
    "Mathematical Modeling",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
