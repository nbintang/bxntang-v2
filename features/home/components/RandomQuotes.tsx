"use client";

import { useEffect, useState } from "react";
import { quotes } from "../dummy";

export default function RandomQuotes() {
  const [randomQuote, setRandomQuote] = useState<string | undefined>("");

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  return randomQuote as string;
}
