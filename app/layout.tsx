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
  title: "AI Chat Surveys - Get Deeper Customer Insights | Evallo",
  description: "Transform surveys into AI-powered conversations. Get 40% higher completion rates with chat-based surveys. Advanced analytics, seamless integrations. Better than traditional forms.",
  keywords: [
    "AI chat surveys",
    "AI survey creator",
    "conversational surveys",
    "chat-based surveys",
    "AI survey builder",
    "survey platform",
    "AI-powered surveys",
    "conversational forms",
    "customer feedback tool",
    "Typeform alternative",
    "Qualtrics alternative",
    "SurveyMonkey alternative",
    "survey analytics",
    "AI form builder",
    "interactive surveys",
    "customer insights platform"
  ],
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
    title: "AI Chat Surveys - Get Deeper Customer Insights | Evallo",
    description: "Transform surveys into AI-powered conversations. Get 40% higher completion rates with chat-based surveys and advanced analytics.",
    url: "https://evallo.app",
    siteName: "Evallo",
    images: [
      {
        url: "/Evallo-Hero-Image-1-1024x1024.webp",
        width: 1024,
        height: 1024,
        alt: "Evallo - AI Chat Survey Platform for Better Customer Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chat Surveys - Get Deeper Customer Insights | Evallo",
    description: "Transform surveys into AI-powered conversations. Get 40% higher completion rates with chat-based surveys and advanced analytics.",
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
