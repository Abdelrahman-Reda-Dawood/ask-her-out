import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const inter = Patrick_Hand({ weight: ["400"], subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Date Me",
  description: "Sorry You cannot reject this request",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
