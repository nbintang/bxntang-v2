import Container from "@/components/Container";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container className="mt-14 sm:mt-16 text-black">{children}</Container>;
}
