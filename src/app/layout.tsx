import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Instagram Clone Coding",
    template: "Instagram | %s",
  },
  description: "Instagram Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
