import { Metadata } from "next";
import { type OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const mainURL =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_URL || "https://bxntang-2.vercel.app"
    : "http://localhost:3000";

interface PartialMetadata extends Partial<Metadata> {
  urlEndpoint?: string;
}

export function generateMetadata(data: PartialMetadata): Metadata {
  const title = (data.title ?? defaultMetaData.title) as string | undefined;
  const description = (data.description ?? defaultMetaData.description) as
    | string
    | undefined;

  return {
    ...defaultMetaData,
    ...data,
    openGraph: {
      title,
      description,
      ...defaultMetaData.openGraph,
      ...data.openGraph,
      url: `${mainURL}${data.urlEndpoint || ""}`,
      images: [
        {
          url: `${mainURL}/api/og?title=${encodeURIComponent(
            title as string
          )}&description=${encodeURIComponent(description as string)}`,
          height: 600,
        },
      ],
    },
  } as Metadata;
}

export const defaultMetaDataOG: OpenGraph = {
  title: "Bxntang",
  description: "Nur Bintang Hidayat or as kindly known as Bxntang",
  url: mainURL,
  siteName: "Next.js",
  images: [
    {
      url: `${mainURL}/api/og?title=Bxntang&description=Software Engineer from Indonesia`,
      height: 600,
    },
  ],
  locale: "en_US",
  type: "website",
};

export const defaultMetaData: Metadata = {
  title: "Bxntang",
  description: "Nur Bintang Hidayat or as kindly known as Bxntang",
  authors: {
    name: "Nur Bintang Hidayat",
    url: "https://github.com/nbintang",
  },
  publisher: "Bxntang",
  openGraph: defaultMetaDataOG,
};
