

import { mainURL } from "@/lib/metadata";
import type { MetadataRoute } from "next";

const endPointUrls = ["/", "/blog", "/activity", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = endPointUrls.map((url) => ({
    url: `${mainURL}${url}`,
    lastModified: new Date(),
    priority: url === "/" ? 1 : 0.5,
  }));
  return urls;
}
