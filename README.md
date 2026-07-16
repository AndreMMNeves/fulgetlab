# Fulgran Revestimentos — site institucional

Site em **Next.js 16 + Tailwind CSS v4** para empresa de revestimentos de piso
**Fulget** e **Granilite** (venda de material + aplicação, B2B e B2C).
Otimizado para SEO, com foco em ranquear para buscas de "fulget" e "granilite".

## Como rodar

```bash
npm install       # instala dependências (já instaladas)
npm run dev       # ambiente de desenvolvimento → http://localhost:3000
npm run build     # build de produção
npm run start     # sobe o build de produção
```

## ⚙️ O que você PRECISA trocar (dados reais)

Tudo que é placeholder está centralizado. Comece por aqui:

### 1. `src/lib/site.ts` — dados da empresa (arquivo mais importante)
- `name`, `shortName`, `tagline` — nome e slogan reais
- `whatsapp.number` — **número real** no formato `5511999999999` (DDI 55 + DDD + número)
- `phone`, `email`, `address` — telefone, e-mail e endereço reais
- `url` — domínio final (ex.: `https://www.suaempresa.com.br`) — usado no SEO/sitemap
- `social.instagram` — link do Instagram
- `leadsterId` — cole o ID do **Leadster** aqui para ativar o chatbot (veja abaixo)

### 2. `src/lib/content.ts` — textos das páginas
Descrições de produtos, aplicações, benefícios, diferenciais, FAQ e a lista de
obras do portfólio. Edite os textos livremente.

### 3. Fotos reais
As imagens são **placeholders** elegantes (componente `<Media />`). Onde aparece
um placeholder, entra uma foto real. Para trocar:
1. Coloque as fotos em `public/obras/` (crie a pasta).
2. Troque `<Media label="..." />` por `<Image />` do `next/image` apontando para a foto.
3. Mantenha o texto do `label` como `alt` (importante para SEO/acessibilidade).

### 4. Cores da marca (opcional)
Ajuste a paleta em `src/app/globals.css`, no bloco `@theme` (grafite, areia, âmbar).

## 🤖 Leadster (chatbot)
1. Pegue o ID no painel do Leadster → **Instalação**.
2. Cole em `site.leadsterId` (em `src/lib/site.ts`).
3. Pronto — o script carrega sozinho só quando o ID está preenchido
   (`src/components/Leadster.tsx`).

## 📁 Estrutura

```
src/
  app/
    layout.tsx            # layout raiz: fontes, SEO base, header/footer/whatsapp/leadster
    page.tsx              # Home
    catalogo/             # catálogo + páginas de Fulget e Granilite (rota dinâmica)
    portfolio/            # obras
    sobre/                # sobre a empresa
    contato/              # contato + formulário que abre o WhatsApp
    sitemap.ts / robots.ts / opengraph-image.tsx   # SEO técnico
  components/             # Header, Footer, WhatsApp, UI, Media, JsonLd, etc.
  lib/
    site.ts              # ← CONFIG DA MARCA (edite aqui)
    content.ts           # ← TEXTOS/CONTEÚDO (edite aqui)
```

## 🚀 Publicar
Recomendado: **Vercel** (deploy nativo de Next.js). Suba o repositório e conecte.
Lembre de ajustar `site.url` para o domínio real antes de publicar (o SEO usa esse valor).

## ✅ SEO já incluído
- `metadata` por página (title, description, canonical, OpenGraph, Twitter)
- Dados estruturados JSON-LD (empresa `GeneralContractor`, serviços e FAQ)
- `sitemap.xml` e `robots.txt` automáticos
- HTML semântico, `lang="pt-BR"`, imagem OpenGraph gerada
- Palavras-chave focadas em Fulget, Granilite e SEO local (São Paulo)
