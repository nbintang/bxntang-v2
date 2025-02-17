import { mainURL } from "@/lib/seo/openGraph";
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