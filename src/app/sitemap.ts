import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { produtos } from "@/lib/content";

// Gera o XML no build (necessário para exportação estática).
export const dynamic = "force-static";

/**
 * Data da última revisão de conteúdo do site — atualize À MÃO quando mexer nos
 * textos (`content.ts`) ou nas páginas.
 *
 * Deliberadamente NÃO é `new Date()`: isso carimbaria "modificado agora" a cada
 * build, mesmo sem mudar uma vírgula, e o Google aprende a ignorar sitemaps que
 * mentem sobre a data.
 */
const ATUALIZADO_EM = "2026-07-27";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  // A barra no fim é obrigatória: o site usa `trailingSlash: true`, então a URL
  // real (e o canonical do HTML) é /catalogo/. Sem ela o Google bate em
  // /catalogo, leva um 301 do Apache e gasta rastreamento à toa.
  const rotas = [
    { path: "/", priority: 1 },
    { path: "/catalogo/", priority: 0.9 },
    { path: "/portfolio/", priority: 0.7 },
    { path: "/sobre/", priority: 0.6 },
    { path: "/contato/", priority: 0.8 },
  ];

  const paginasProdutos = produtos.map((p) => ({
    url: `${base}/catalogo/${p.slug}/`,
    lastModified: ATUALIZADO_EM,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    ...rotas.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: ATUALIZADO_EM,
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...paginasProdutos,
  ];
}
