/**
 * Conteúdo do site (textos, listas, dados). Edite aqui para atualizar as
 * páginas sem mexer no layout. As fotos reais entram depois no lugar dos
 * placeholders (ver componente <Media />).
 */

export type Produto = {
  slug: string;
  nome: string;
  resumo: string;
  descricao: string;
  aplicacoes: string[];
  beneficios: string[];
  acabamentos: string[];
  // Cor de destaque usada no placeholder de imagem (tom de pedra)
  tom: "areia" | "grafite" | "terracota" | "cristal";
};

export const produtos: Produto[] = [
  {
    slug: "fulget",
    nome: "Fulget",
    resumo:
      "Revestimento de agregados naturais lavados, antiderrapante e de altíssima resistência para pisos e fachadas.",
    descricao:
      "O Fulget é um revestimento composto por seixos e agregados naturais selecionados, aplicado sobre argamassa e lavado para expor as pedras. O resultado é uma superfície texturizada, antiderrapante e extremamente durável, ideal para áreas externas e de alto tráfego. Resiste ao sol, à chuva e ao uso intenso mantendo a estética por décadas.",
    aplicacoes: [
      "Calçadas e passeios públicos",
      "Áreas de piscina e áreas molhadas",
      "Fachadas e muros",
      "Estacionamentos e rampas",
      "Praças e áreas de lazer",
    ],
    beneficios: [
      "Superfície antiderrapante mesmo molhada",
      "Alta resistência a tráfego e intempéries",
      "Baixíssima manutenção",
      "Ampla variedade de cores e granulometrias",
      "Ótimo custo-benefício a longo prazo",
    ],
    acabamentos: [
      "Seixo rolado natural",
      "Granilha de mármore",
      "Agregados coloridos",
      "Granulometria fina, média e grossa",
    ],
    tom: "terracota",
  },
  {
    slug: "granilite",
    nome: "Granilite",
    resumo:
      "Piso monolítico de granilha e cimento, polido e sem juntas aparentes — o clássico acabamento sofisticado e resistente.",
    descricao:
      "O Granilite (também conhecido como marmorite) é um piso moldado no local, feito com granilha de mármore e cimento, polido até um acabamento liso e brilhante. Por ser monolítico e sem emendas, é higiênico, uniforme e de aparência nobre. Une resistência industrial a um visual elegante, com possibilidade de desenhos, faixas e logotipos embutidos.",
    aplicacoes: [
      "Halls e áreas comuns de edifícios",
      "Escolas, hospitais e clínicas",
      "Lojas e ambientes comerciais",
      "Áreas industriais e cozinhas",
      "Residências de alto padrão",
    ],
    beneficios: [
      "Superfície contínua, sem juntas e fácil de limpar",
      "Altíssima durabilidade e resistência à abrasão",
      "Acabamento polido e sofisticado",
      "Permite personalização de cores e desenhos",
      "Pode ser restaurado, voltando ao brilho original",
    ],
    acabamentos: [
      "Polido brilhante",
      "Acetinado",
      "Com juntas de dilatação em latão ou plástico",
      "Cores lisas ou mescladas",
    ],
    tom: "cristal",
  },
];

/** Modelo de negócio: os dois públicos (B2B e B2C). */
export const publicos = [
  {
    titulo: "Para empresas e obras (B2B)",
    descricao:
      "Fornecimento de material em escala e execução para construtoras, arquitetos, condomínios e indústrias. Orçamento por metragem, prazos de obra e suporte técnico.",
    itens: [
      "Venda de material a granel e ensacado",
      "Aplicação com equipe própria",
      "Atendimento a projetos e especificações técnicas",
      "Condições especiais para grandes volumes",
    ],
  },
  {
    titulo: "Para você e sua casa (B2C)",
    descricao:
      "Reforma ou construção residencial com acompanhamento próximo, do orçamento à entrega. Você escolhe cores e acabamentos e nós cuidamos de tudo.",
    itens: [
      "Visita técnica e orçamento sem compromisso",
      "Aplicação profissional garantida",
      "Escolha de cores e acabamentos",
      "Acabamento limpo e no prazo",
    ],
  },
];

/** Diferenciais da empresa (seção "por que escolher"). */
export const diferenciais = [
  {
    titulo: "Material próprio",
    texto:
      "Fabricamos e fornecemos o revestimento, garantindo padrão de qualidade do início ao fim.",
  },
  {
    titulo: "Equipe especializada",
    texto:
      "Aplicadores experientes em Fulget e Granilite, com acabamento impecável e no prazo.",
  },
  {
    titulo: "Produto + serviço",
    texto:
      "Você compra o material, contrata a aplicação, ou os dois juntos. Como for melhor para a sua obra.",
  },
  {
    titulo: "Atendimento consultivo",
    texto:
      "Ajudamos a escolher o revestimento certo para cada ambiente, uso e orçamento.",
  },
];

/** Etapas do atendimento (seção "como funciona"). */
export const etapas = [
  {
    numero: "01",
    titulo: "Contato e orçamento",
    texto: "Você fala com a gente pelo WhatsApp ou telefone e explica sua necessidade.",
  },
  {
    numero: "02",
    titulo: "Visita técnica",
    texto: "Avaliamos o local, tiramos medidas e recomendamos o melhor acabamento.",
  },
  {
    numero: "03",
    titulo: "Proposta clara",
    texto: "Enviamos um orçamento detalhado, com prazo e valores transparentes.",
  },
  {
    numero: "04",
    titulo: "Execução e entrega",
    texto: "Nossa equipe aplica o revestimento e entrega a obra limpa e no prazo.",
  },
];

/** Portfólio de obras (placeholders — troque pelas fotos reais). */
export const obras = [
  { titulo: "Área de piscina residencial", local: "São Paulo — SP", tipo: "Fulget", tom: "terracota" as const },
  { titulo: "Hall de edifício comercial", local: "São Paulo — SP", tipo: "Granilite", tom: "cristal" as const },
  { titulo: "Calçada e fachada", local: "Guarulhos — SP", tipo: "Fulget", tom: "areia" as const },
  { titulo: "Piso de escola", local: "Osasco — SP", tipo: "Granilite", tom: "grafite" as const },
  { titulo: "Estacionamento coberto", local: "São Paulo — SP", tipo: "Fulget", tom: "grafite" as const },
  { titulo: "Loja de varejo", local: "São Bernardo — SP", tipo: "Granilite", tom: "areia" as const },
];

/** Perguntas frequentes (bom para SEO e para o cliente). */
export const faq = [
  {
    pergunta: "Qual a diferença entre Fulget e Granilite?",
    resposta:
      "O Fulget é um revestimento de agregados naturais lavados, texturizado e antiderrapante, indicado para áreas externas e molhadas. O Granilite é um piso polido, liso e sem juntas, feito com granilha e cimento, mais usado em ambientes internos que pedem um acabamento sofisticado.",
  },
  {
    pergunta: "Vocês vendem só o material ou também aplicam?",
    resposta:
      "Os dois. Você pode comprar apenas o material, contratar somente a aplicação ou fechar o serviço completo (material + mão de obra). Atendemos tanto obras de empresas quanto residências.",
  },
  {
    pergunta: "Quanto custa o metro quadrado?",
    resposta:
      "O valor depende do produto escolhido, do acabamento, da metragem e das condições do local. Faça um orçamento sem compromisso pelo WhatsApp e enviamos uma proposta detalhada.",
  },
  {
    pergunta: "Qual a durabilidade desses revestimentos?",
    resposta:
      "Fulget e Granilite estão entre os revestimentos mais duráveis do mercado. Com a manutenção correta, mantêm aparência e resistência por décadas, e o Granilite ainda pode ser repolido para recuperar o brilho.",
  },
  {
    pergunta: "Vocês atendem qual região?",
    resposta:
      "Atendemos São Paulo e toda a Grande São Paulo. Para obras em outras regiões, fale com a gente para verificar a viabilidade.",
  },
];
