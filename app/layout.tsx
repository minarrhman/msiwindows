import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});



export const metadata: Metadata = {
  metadataBase: new URL("https://www.ms-windows.com.au"),

  title: {
    default: "Window Service Sydney | Aluminium Windows & Doors",
    template: "%s | Window Service Sydney",
  },

  description:
    "Premium aluminium windows, sliding doors, bi-fold doors, stacker doors, shopfront systems and custom glazing solutions across Sydney.",

  keywords: [
    "aluminium windows Sydney",
    "sliding doors Sydney",
    "bi fold doors Sydney",
    "stacker doors Sydney",
    "shopfront Sydney",
    "window installation Sydney",
    "double hung windows Sydney",
    "awning windows Sydney",
  ],

  openGraph: {
    title: "Window Service Sydney",
    description:
      "Premium aluminium windows, doors and shopfront solutions throughout Sydney.",
    url: "https://www.windowservice.com.au",
    siteName: "Window Service",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Window Service Sydney",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Window Service Sydney",
    description:
      "Premium aluminium windows and doors throughout Sydney.",
    images: ["/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="bg-zinc-700 overflow-x-hidden">
        <Header />
        <LocalBusinessSchema />
        <main>{children}</main>
         <Toaster
          position="top-right"
          richColors
        />
        <Footer />
      </body>
    </html>
  );
}