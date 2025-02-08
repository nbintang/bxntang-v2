import { type OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
export const mainURL = process.env.NODE_ENV === "production" ? "https://bxntang-2.vercel.app" : "http://localhost:3000"

export const metaDataOpenGraph: OpenGraph = {
  title: "Bxntang",
  description: "Nur Bintang Hidayat or as kindly known as Bxntang",
  url: `${mainURL}`,
  siteName: "Next.js",
  images: [
    {
      url: `${mainURL}/api/og?title=BXNTANG`,
      height: 600,
    },
  ],
  locale: "en_US",
  type: "website",
};