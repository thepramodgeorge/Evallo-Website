import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/ui/navbar-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evallo - AI-Powered Survey Platform | Better Than Typeform",
  description: "Create intelligent surveys with AI-powered logic, advanced analytics, and seamless integrations. Get deeper insights from your audience with Evallo's next-generation survey platform.",
  keywords: ["survey platform", "AI surveys", "form builder", "Typeform alternative", "survey analytics", "customer feedback", "market research"],
  authors: [{ name: "Evallo Team" }],
  creator: "Evallo",
  publisher: "Evallo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://evallo.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Evallo - AI-Powered Survey Platform",
    description: "Create intelligent surveys with AI-powered logic and advanced analytics. The modern alternative to Typeform.",
    url: "https://evallo.app",
    siteName: "Evallo",
    images: [
      {
        url: "/Evallo-Hero-Image-1-1024x1024.webp",
        width: 1024,
        height: 1024,
        alt: "Evallo - AI-Powered Survey Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evallo - AI-Powered Survey Platform",
    description: "Create intelligent surveys with AI-powered logic and advanced analytics.",
    images: ["/Evallo-Hero-Image-1-1024x1024.webp"],
    creator: "@evallo",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/evallo-favicon.png',
    shortcut: '/evallo-favicon.png',
    apple: '/evallo-favicon.png',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
