import "@/styles/globals.css";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { EmailDialog } from "@/components/EmailDialog";
import { generateMetadata, mainMetaData } from "@/lib/seo/metadata";
import NavbarLayout from "@/components/layouts/NavbarLayout";

export const metadata: Metadata = generateMetadata(mainMetaData);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body className={`font-mono  antialiased text-base  thin-scrollbar`}>
        {/* <NextThemeProviders> */}
        <ReactQueryProvider>
          <main className="h-full bg-neutral-950 text-neutral-100">
            <NavbarLayout>{children}</NavbarLayout>
          </main>
          <EmailDialog />
          <Toaster position="top-right" />
        </ReactQueryProvider>
        {/* </NextThemeProviders> */}
      </body>
    </html>
  );
}
