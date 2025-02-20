import Container from "@/components/layouts/Container";
import { generateMetadata } from "@/lib/seo";
import React from "react";

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container className="mt-14 sm:mt-16 mb-3">{children}</Container>;
}




export const metadata = generateMetadata({
  title: "Activity | Bxntang",
  description: "My Daily Activity",
  urlEndpoint: `/about`,
});