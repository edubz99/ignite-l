import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Poppins } from "next/font/google";
const playwriteIN = {
  variable: "--font-playwrite",
  style:
    "https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&display=swap",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignite Inclusive Leadership",
  description:
    "Ignite Inclusive Leadership helps leaders embed diversity and inclusion into workforce strategy, creating cultures that reflect and celebrate client diversity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${playwriteIN.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
