import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "bxntang-portfolio",
    name: "Bxntang",
    short_name: "Bxntang Portfolio",
    description: "Nur Bintang Hidayat or as kindly known as Bxntang",
    display_override: ["window-controls-overlay"],
    scope: "/",
    start_url: "/",
    display: "standalone",
    background_color: "#111",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
