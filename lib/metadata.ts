import { Metadata } from "next";

const baseTitle = "Bxntang";
const baseDescription = "Nur Bintang Hidayat or as kindly known as Bxntang";
export const mainURL =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_URL || "https://bxntang-2.vercel.app"
    : "http://localhost:3000";


interface PartialMetadataInput extends Partial<Metadata> {
  urlEndpoint?: string;
}

export function generateMetadata({
  title,
  description,
  urlEndpoint,
  ...rest
}: PartialMetadataInput): Metadata {
  const ogTitle = title ?? (defaultMetaData.title as string);
  const ogDescription = description ?? (defaultMetaData.description as string);
  const fullUrl = `${mainURL}${urlEndpoint || ""}`;
  const imageUrl = `${mainURL}/api/og?title=${encodeURIComponent(
    ogTitle as string
  )}&description=${encodeURIComponent(ogDescription)}`;

  return {
    ...defaultMetaData,
    ...rest,
    title: ogTitle,
    description: ogDescription,
    openGraph: {
      ...defaultMetaData.openGraph,
      ...rest.openGraph,
      title: ogTitle,
      description: ogDescription,
      url: fullUrl,
      images: [{ url: imageUrl, height: 600 }],
    },
  };
}
export const defaultMetaData: Metadata = {
  metadataBase: new URL(mainURL),
  title: baseTitle,
  description: baseDescription,
  authors: { name: "Nur Bintang Hidayat", url: "https://github.com/nbintang" },
  publisher: "Bxntang",
  openGraph: {
    title: baseTitle,
    description: baseDescription,
    url: mainURL,
    siteName: "Bxntang",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${mainURL}/api/og?title=${encodeURIComponent(
          baseTitle
        )}&description=${encodeURIComponent(baseDescription)}`,
        height: 600,
      },
    ],
  },
};

