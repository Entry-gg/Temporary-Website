import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entry.gg - Coming Soon",
  description: "Entry.gg is the ultimate tool to create, deploy, and manage forms & applications for your community.",
  openGraph: {
    title: "Entry.gg",
    description: "Entry is the ultimate tool for creating and deploying forms, applications, and much more!",
    url: "https://entry.gg",
    siteName: "Entry.gg",
    images: [
      {
        url: "https://entry.gg/Entry.png",
        alt: "Entry.gg Logo",
        width: 800,
        height: 800
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
