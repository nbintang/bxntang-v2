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
import { generateMetadata, mainMetaData } from "@/lib/metadata";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = generateMetadata(mainMetaData);

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
