import "@/styles/globals.css";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

import { Toaster } from "@/components/ui/sonner";
import { EmailDialog } from "@/components/EmailDialog";
import { generateMetadata } from "@/lib/metadata";
import NavbarLayout from "@/components/layouts/NavbarLayout";

export const metadata = generateMetadata({
  title: "Bxntang",
  description: "Software Engineer from Depok, Indonesia",
  
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-mono  antialiased text-base  thin-scrollbar`}>
        <ReactQueryProvider>
          <main className="h-full bg-neutral-950 text-neutral-100">
            <NavbarLayout>{children}</NavbarLayout>
          </main>
          <EmailDialog />
          <Toaster position="top-right" />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
