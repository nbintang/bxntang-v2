"use client";
import { quotes } from "@/dummy";
import { useEffect, useState } from "react";

export default function RandomQuotes() {
  const [randomQuote, setRandomQuote] = useState<string | undefined>("");

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  return randomQuote as string;
}
