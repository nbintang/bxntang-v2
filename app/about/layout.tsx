import { generateMetadata } from "@/lib/seo";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-14 sm:mt-16  lg:mt-20 flex flex-col gap-6 justify-between min-h-[calc(100dvh-9rem)]">
      {children}
    </main>
  );
}

export const metadata = generateMetadata({
  title: "About Myself | Bxntang",
  description: "Who am I and what is my purpose ?",
  urlEndpoint: `/about`,
});
