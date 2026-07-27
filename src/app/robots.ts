import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Gera o arquivo no build (necessário para exportação estática).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
