"use client";

import React from "react";
import { useQuoteStore } from "../hooks/useRandomQuote";
import { BlurFade } from "@/components/ui/blur-fade";

export default function RandomQuotes() {
  const randomQuote = useQuoteStore((state) => state.randomQuote);
  return (
    <BlurFade
    delay={0.2 * 2}
    inView
    blur="0px"
    className="flex justify-center items-center text-muted-foreground gap-2"
  >
 
    <blockquote className="relative font-display text-center text-lg font-medium tracking-tight text-neutral-950 sm:text-4xl">
      <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
        {randomQuote}
      </p>
    </blockquote>
  </BlurFade>
  );
}
