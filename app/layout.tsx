import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import data from "@/config";
import ThemeContext from "@/context/themeContext";
import "@/styles/global.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: data.title,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <ThemeContext>{children}</ThemeContext>
        <Analytics />
      </body>
    </html>
  );
}
