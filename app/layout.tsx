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
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 92a7d5cda735445c2d55c715c8bb37c4c8fc2187
  openGraph: {
    title: "Entry.gg",
    description: "Entry is the ultimate tool for creating and deploying forms, applications, and much more!",
    url: "https://entry.gg",
<<<<<<< HEAD
=======
    siteName: "Entry.gg",
>>>>>>> 92a7d5cda735445c2d55c715c8bb37c4c8fc2187
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
<<<<<<< HEAD
  },
  themeColor: "ffd900"
>>>>>>> Stashed changes
=======
  }
>>>>>>> 92a7d5cda735445c2d55c715c8bb37c4c8fc2187
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
