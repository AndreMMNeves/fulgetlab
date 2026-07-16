import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { produtos } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const rotas = [
    { path: "/", priority: 1 },
    { path: "/catalogo", priority: 0.9 },
    { path: "/portfolio", priority: 0.7 },
    { path: "/sobre", priority: 0.6 },
    { path: "/contato", priority: 0.8 },
  ];

  const paginasProdutos = produtos.map((p) => ({
    url: `${base}/catalogo/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    ...rotas.map((r) => ({
      url: `${base}${r.path}`,
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...paginasProdutos,
  ];
}
