import type { NextConfig } from "next";

/**
 * O site é publicado como HTML estático (hospedagem compartilhada da
 * HostGator, que roda Apache/PHP e não tem Node.js).
 *
 * `next build` gera a pasta `out/` — é o conteúdo dela que vai para o
 * `public_html`, não a pasta do projeto.
 *
 * Consequências desse modo:
 *  - `images.unoptimized`: não existe otimizador em tempo real, então as
 *    fotos já vão pré-convertidas para WebP (ver /public/fotos).
 *  - `trailingSlash`: gera /catalogo/index.html, que é o formato que o
 *    Apache serve sozinho ao acessar /catalogo/.
 *
 * Para voltar a hospedar com servidor (Vercel etc.), basta remover as três
 * linhas abaixo e as fotos voltam a ser otimizadas sob demanda.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
