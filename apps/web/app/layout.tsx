import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/globals.css";
import { NextThemeProviders } from "@/components/providers/next-theme.provider";
import ReactQueryProvider from "@/components/providers/react-query.provider";
import LayoutTransition from "@/components/layout/page-transition";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { Toaster } from "@workspace/ui/components/sonner";
import ParticlesLayout from "@/components/layout/particles-layout";
import { EmailDialog } from "@/components/sections/home/email-dialog";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <NextThemeProviders>
          <ReactQueryProvider>
            <LayoutTransition
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ParticlesLayout>{children}</ParticlesLayout>
            </LayoutTransition>
            <Navbar />
            <EmailDialog />
            <Toaster position="top-right" />
          </ReactQueryProvider>
        </NextThemeProviders>
      </body>
    </html>
  );
}

//OG AND SEO
export const metadata: Metadata = {
  title: "Bxntang",
  description: "Nur Bintang Hidayat or as kindly known as Bxntang",
  authors: {
    name: "Nur Bintang Hidayat",
    url: "https://github.com/nbintang",
  },
  openGraph: {
    title: "Bxntang",
    description: "Nur Bintang Hidayat or as kindly known as Bxntang",
    url: `${process.env.NODE_ENV !== "development" ? "https://bxntang-2.vercel.app" : "http://localhost:3000"}`,
    siteName: "Next.js",
    images: [
      {
        url: `${process.env.NODE_ENV !== "development" ? "https://bxntang-2.vercel.app" : "http://localhost:3000"}/api/og?title=BXNTANG`,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
