
import { mainURL } from "@/lib/metadata";
import { MetadataRoute } from "next";

export default function robots() : MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${mainURL}/sitemap.xml`,
    }
}