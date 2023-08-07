import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import NextAuthContext from "@/context/NextAuthContext";

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
    <html lang="en" className="h-full">
      <body className="relative w-full flex flex-col md:flex-row md:h-full overflow-auto bg-neutral-50">
        <NextAuthContext>
          <Header />
          <main className="">{children}</main>
          <Footer />
        </NextAuthContext>
      </body>
    </html>
  );
}
