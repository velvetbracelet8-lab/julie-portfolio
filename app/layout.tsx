import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julie Lupex — Designer & Frontend Developer",
  description:
    "Julie Lupex designs intuitive experiences and builds high-performance websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${manrope.variable}`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}