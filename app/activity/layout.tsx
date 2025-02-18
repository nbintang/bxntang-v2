import Container from "@/components/Container";
import { generateMetadata } from "@/lib/seo/metadata";
import { mainURL, metaDataOpenGraph } from "@/lib/seo/openGraph";
import { Metadata } from "next";
import React from "react";

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container className="mt-14 sm:mt-16 mb-3">{children}</Container>;
}
export const metadata: Metadata = generateMetadata({
  title: "Bxntang | Activity",
  description: "This is Bxntang activity page",
  authors: {
    name: "Nur Bintang Hidayat",
    url: "https://github.com/nbintang",
  },
  openGraph: {
    title: "Bxntang | Activity",
    url: `${mainURL}/activity`,
    description: "This is Bxntang activity page",
    ...metaDataOpenGraph,
  },
});
