import { Metadata } from "next";
import { metaDataOpenGraph } from "./openGraph";

export const mainMetaData: Metadata = {
  title: "Bxntang",
  description: "Nur Bintang Hidayat or as kindly known as Bxntang",
  authors: {
    name: "Nur Bintang Hidayat",
    url: "https://github.com/nbintang",
  },
  publisher: "Bxntang",
  openGraph: metaDataOpenGraph,
};

export function generateMetadata(data: Metadata): Metadata {
  return data;
}
