import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "个人主页",
  description: "一个简洁、可扩展的个人网站框架。",
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
