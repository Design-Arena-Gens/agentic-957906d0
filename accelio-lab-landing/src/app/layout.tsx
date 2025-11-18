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
  title: "Accelio Lab | AI Infrastructure Consulting",
  description:
    "Accelio Lab designs, builds, and scales AI infrastructure for medium to large enterprises. Strategy, platform engineering, MLOps, and governance delivered by senior experts.",
  keywords: [
    "AI consulting",
    "AI infrastructure",
    "MLOps",
    "enterprise AI",
    "AI strategy",
    "Accelio Lab",
  ],
  openGraph: {
    title: "Accelio Lab | AI Infrastructure Consulting",
    description:
      "Enterprise-grade AI infrastructure strategy, implementation, and operations from Accelio Lab.",
    url: "https://agentic-957906d0.vercel.app",
    siteName: "Accelio Lab",
    images: [
      {
        url: "https://agentic-957906d0.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accelio Lab - AI Infrastructure Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://agentic-957906d0.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
