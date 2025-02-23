"use client";

import { create } from "zustand";
import { quotes } from "../dummy";

interface QuoteState {
  randomQuote: string;
  generateQuote: () => void;
}

export const useQuoteStore = create<QuoteState>((set) => ({
  randomQuote: quotes[Math.floor(Math.random() * quotes.length)],
  generateQuote: () => set({ randomQuote: quotes[Math.floor(Math.random() * quotes.length)] }),
}));
