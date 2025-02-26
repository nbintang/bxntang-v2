"use client";

import * as React from "react";
import { useQuoteStore } from "../hooks/useRandomQuote";
import { useShallow } from "zustand/shallow";

export default function RandomQuotes() {
  const { randomQuote, generateQuote } = useQuoteStore(
    useShallow((state) => state)
  );
  React.useEffect(() => {
    if (!randomQuote) generateQuote();
  }, [randomQuote, generateQuote]);

  return (
    <blockquote className="relative font-display text-center text-lg font-medium tracking-tight text-neutral-950 sm:text-4xl">
      <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
        {randomQuote}
      </p>
    </blockquote>
  );
}
