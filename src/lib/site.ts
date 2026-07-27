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
  name: "FulgetLab Revestimentos",
  // Nome curto (usado quando falta espaço)
  shortName: "FulgetLab",
  // Slogan / posicionamento
  tagline: "Pisos em Fulget e Granilite com acabamento de alto padrão",
  // Descrição institucional curta (usada em SEO/meta description padrão)
  description:
    "Fabricação, fornecimento e aplicação de revestimentos em Fulget e Granilite para obras residenciais, comerciais e industriais em São Paulo e região. Qualidade, durabilidade e acabamento impecável.",

  // Endereço público do site — usado em SEO/sitemap/canonical/OG.
  // O .htaccess redireciona www -> sem www, então mantenha sem o "www".
  url: "https://fulgetlab.com.br",

  // ---------------------------------------------------------------------------
  //  CONTATO
  // ---------------------------------------------------------------------------
  phone: {
    display: "(11) 99159-7869",
    href: "tel:+5511991597869",
  },
  whatsapp: {
    // Apenas dígitos, com DDI 55 + DDD. Ex.: 5511999999999
    number: "5511991597869",
    display: "(11) 99159-7869",
    // Mensagem que já vem preenchida ao abrir a conversa
    message: "Olá! Gostaria de um orçamento de revestimento (Fulget/Granilite).",
  },
  // Deixe vazio para esconder o e-mail do site (rodapé e página de contato).
  email: "comercial@fulgetlab.com.br",

  address: {
    street: "R. Eng. José Pastore, 138 — Jardim das Graças",
    city: "São Paulo",
    state: "SP",
    zip: "02714-050",
    // Região atendida (importante para SEO local)
    serviceArea: "São Paulo e Grande São Paulo",
  },

  hours: "Segunda a sexta, 8h às 17h30 — Sábado, 8h às 12h",

  // Aparece no rodapé e no JSON-LD. Deixe vazio para esconder.
  cnpj: "68.136.391/0001-00",

  social: {
    instagram: "https://www.instagram.com/fulgetlab",
    facebook:
      "https://www.facebook.com/people/Fulget-Lab-Fulget-e-Granilite/61592164253250/",
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
