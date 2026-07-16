/**
 * ============================================================================
 *  CONFIGURAÇÃO CENTRAL DA MARCA
 * ----------------------------------------------------------------------------
 *  Este é o ÚNICO arquivo que você precisa editar para trocar as informações
 *  da empresa (nome, telefone, WhatsApp, e-mail, endereço, redes sociais).
 *  Os valores abaixo são PLACEHOLDERS — substitua pelos dados reais.
 * ============================================================================
 */

export const site = {
  // Nome fantasia da empresa (aparece no topo, rodapé, títulos e SEO)
  name: "Fulgran Revestimentos",
  // Nome curto (usado quando falta espaço)
  shortName: "Fulgran",
  // Slogan / posicionamento
  tagline: "Pisos em Fulget e Granilite com acabamento de alto padrão",
  // Descrição institucional curta (usada em SEO/meta description padrão)
  description:
    "Fabricação, fornecimento e aplicação de revestimentos em Fulget e Granilite para obras residenciais, comerciais e industriais em São Paulo e região. Qualidade, durabilidade e acabamento impecável.",

  // Domínio final do site (ajuste quando publicar) — usado em SEO/sitemap
  url: "https://www.fulgran.com.br",

  // ---------------------------------------------------------------------------
  //  CONTATO
  // ---------------------------------------------------------------------------
  phone: {
    display: "(11) 2955-5025",
    href: "tel:+551129555025",
  },
  whatsapp: {
    // Apenas dígitos, com DDI 55 + DDD. Ex.: 5511999999999
    number: "5511999999999",
    display: "(11) 99999-9999",
    // Mensagem que já vem preenchida ao abrir a conversa
    message: "Olá! Gostaria de um orçamento de revestimento (Fulget/Granilite).",
  },
  email: "contato@fulgran.com.br",

  address: {
    street: "Rua Exemplo, 000 — Bairro",
    city: "São Paulo",
    state: "SP",
    zip: "00000-000",
    // Região atendida (importante para SEO local)
    serviceArea: "São Paulo e Grande São Paulo",
  },

  hours: "Segunda a sexta, 8h às 17h30 — Sábado, 8h às 12h",

  social: {
    instagram: "https://instagram.com/", // ex.: https://instagram.com/fulgran
    facebook: "",
  },

  // ---------------------------------------------------------------------------
  //  INTEGRAÇÕES
  // ---------------------------------------------------------------------------
  // Leadster: cole aqui o ID do seu script (deixe vazio para desativar).
  // Você encontra no painel do Leadster > Instalação.
  leadsterId: "",
} as const;

/** Monta o link do WhatsApp com a mensagem pré-preenchida. */
export function whatsappLink(customMessage?: string): string {
  const msg = encodeURIComponent(customMessage ?? site.whatsapp.message);
  return `https://wa.me/${site.whatsapp.number}?text=${msg}`;
}
