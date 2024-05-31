import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer, NavBar, ScrollToTop } from "@/components";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevSEAL Technology Inc.",
  description: "DevSEAL technology - software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <ScrollToTop />
        <header>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
