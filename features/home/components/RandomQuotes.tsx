"use client";

import React from "react";
import { useQuoteStore } from "../hooks/useRandomQuote";

export default function RandomQuotes() {
  const randomQuote = useQuoteStore((state) => state.randomQuote);
  return (
    <blockquote className="relative font-display text-center text-lg font-medium tracking-tight text-neutral-950 sm:text-4xl">
      <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
        {randomQuote}
      </p>
    </blockquote>
  );
}
