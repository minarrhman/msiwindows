import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Window Service",
  description:
    "Professional window installation and replacement services.",
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