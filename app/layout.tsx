import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { NextThemeProviders } from "@/components/providers/NextThemeProvider";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import LayoutTransition from "@/components/layouts/PageTransition";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import ParticlesLayout from "@/components/layouts/ParticlesLayout";
import { EmailDialog } from "@/components/EmailDialog";
import { generateMetadata, mainMetaData } from "@/lib/seo/metadata";

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
