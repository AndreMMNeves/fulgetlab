/**
 * ============================================================================
 *  BANCO DE FOTOS DO SITE
 * ----------------------------------------------------------------------------
 *  Todas as fotos reais de obra ficam em /public/fotos e são referenciadas
 *  aqui, com o texto alternativo (alt) já escrito. Para trocar uma foto,
 *  basta substituir o arquivo em /public/fotos mantendo o mesmo nome — ou
 *  apontar o `src` abaixo para o arquivo novo.
 *
 *  `w` e `h` são as dimensões reais do arquivo (o Next usa para reservar o
 *  espaço e evitar layout shift). `pos` ajusta o object-position quando o
 *  corte precisa privilegiar uma parte da imagem.
 * ============================================================================
 */

export type Foto = {
  src: string;
  alt: string;
  w: number;
  h: number;
  pos?: string;
};

const f = (src: string, alt: string, w: number, h: number, pos?: string): Foto => ({
  src: `/fotos/${src}.jpg`,
  alt,
  w,
  h,
  pos,
});

// ---------------------------------------------------------------- FULGET
export const fotosFulget = {
  areaPiscina: f(
    "fulget-area-piscina",
    "Deck de área de piscina residencial revestido em Fulget bege",
    1200, 1600, "object-top",
  ),
  deckGrafite: f(
    "fulget-deck-grafite",
    "Área externa revestida em Fulget grafite com acabamento rente ao gramado",
    1200, 1600, "object-top",
  ),
  areaExternaAmbar: f(
    "fulget-area-externa-ambar",
    "Ampla área externa em Fulget âmbar contornando o jardim",
    1200, 1600, "object-top",
  ),
  bordaJardim: f(
    "fulget-borda-jardim",
    "Detalhe da borda do piso de Fulget âmbar rente à grama",
    1200, 1600,
  ),
  varandaTerracota: f(
    "fulget-varanda-terracota",
    "Varanda com piso de Fulget terracota e parede em pedra natural",
    1200, 1600, "object-top",
  ),
  varandaPergolado: f(
    "fulget-varanda-pergolado",
    "Varanda com pergolado de madeira e piso de Fulget terracota",
    1200, 1600, "object-top",
  ),
  entradaResidencia: f(
    "fulget-entrada-residencia",
    "Entrada de residência com piso de Fulget cinza e faixas de dilatação",
    1200, 1600, "object-top",
  ),
  bancoRevestido: f(
    "fulget-banco-revestido",
    "Banco de concreto revestido em Fulget cinza",
    1200, 1600,
  ),
  corredorComercial: f(
    "fulget-corredor-comercial",
    "Corredor comercial em Fulget bege ao longo de fachada de vidro",
    1200, 1600,
  ),
  rampaAcesso: f(
    "fulget-rampa-acesso",
    "Rampa de acesso revestida em Fulget bege antiderrapante",
    960, 1280, "object-top",
  ),
  estacionamento: f(
    "fulget-estacionamento",
    "Estacionamento coberto com piso de Fulget bege",
    1200, 1600, "object-top",
  ),
  areaTecnica: f(
    "fulget-area-tecnica",
    "Área técnica com piso de Fulget claro e ralos embutidos",
    1200, 1600,
  ),
  escadaExterna: f(
    "fulget-escada-externa",
    "Escada externa com degraus revestidos em Fulget cinza",
    900, 1600,
  ),
  calcadaLateral: f(
    "fulget-calcada-lateral",
    "Calçada lateral em Fulget bege entre o muro e o jardim",
    1200, 1600,
  ),
  degrausTerracota: f(
    "fulget-degraus-terracota",
    "Degraus de acesso revestidos em Fulget terracota",
    899, 1599,
  ),
  piscinaDeckCinza: f(
    "fulget-piscina-deck-cinza",
    "Piscina com deck em Fulget cinza claro e ralo linear",
    900, 1600, "object-top",
  ),
  piscinaAreaLazer: f(
    "fulget-piscina-area-lazer",
    "Área de lazer com piscina e piso de Fulget antiderrapante",
    900, 1600,
  ),
  piscinaVistaAmpla: f(
    "fulget-piscina-vista-ampla",
    "Vista ampla da área de piscina revestida em Fulget",
    900, 1600,
  ),
  escadaAcessoPredio: f(
    "fulget-escada-acesso-predio",
    "Escada de acesso a edifício com degraus em Fulget",
    960, 1280,
  ),
  passarelaComercial: f(
    "fulget-passarela-comercial",
    "Passarela comercial com piso de Fulget dourado",
    1200, 1600,
  ),
  calcadaPublica: f(
    "fulget-calcada-publica",
    "Calçada pública executada em Fulget",
    1200, 1600, "object-top",
  ),
  entradaSocial: f(
    "fulget-entrada-social",
    "Entrada social com piso de Fulget cinza e faixa decorativa em pedra",
    1280, 720,
  ),
  patioEntrada: f(
    "fulget-patio-entrada",
    "Pátio de entrada revestido em Fulget cinza",
    1280, 720,
  ),
} satisfies Record<string, Foto>;

/** Texturas de Fulget — usadas como amostras de acabamento. */
export const texturasFulget = {
  granilhaMarmore: f(
    "textura-fulget-granilha-marmore",
    "Textura de Fulget com granilha de mármore branca e grafite",
    1200, 1600,
  ),
  seixoAmbar: f(
    "textura-fulget-seixo-ambar",
    "Textura de Fulget com seixo rolado natural em tons âmbar",
    1200, 1600,
  ),
  granulometriaFina: f(
    "textura-fulget-granulometria-fina",
    "Textura de Fulget de granulometria fina",
    899, 1599,
  ),
  cinza: f(
    "textura-fulget-cinza",
    "Textura de Fulget cinza de granulometria média",
    1200, 1600,
  ),
} satisfies Record<string, Foto>;

// -------------------------------------------------------------- GRANILITE
export const fotosGranilite = {
  hallPolido: f(
    "granilite-hall-polido",
    "Hall com piso de Granilite polido e brilho espelhado",
    1600, 900,
  ),
  salaBrilho: f(
    "granilite-sala-brilho",
    "Sala ampla com Granilite polido refletindo a luz natural",
    1600, 900,
  ),
  hallEscuro: f(
    "granilite-hall-escuro",
    "Hall de edifício com Granilite polido em tom escuro",
    1600, 900,
  ),
  pisoAmbar: f(
    "granilite-piso-ambar",
    "Piso de Granilite claro com granilhas âmbar",
    1600, 900,
  ),
  areaComercial: f(
    "granilite-area-comercial",
    "Ambiente comercial com piso de Granilite claro sem juntas aparentes",
    1600, 900,
  ),
  detalheLosango: f(
    "granilite-detalhe-losango",
    "Detalhe de Granilite com desenho em losango e juntas pretas",
    1600, 900,
  ),
  corredorDesenho: f(
    "granilite-corredor-desenho",
    "Corredor com Granilite polido e desenho geométrico embutido no piso",
    900, 1600,
  ),
  escadaVermelha: f(
    "granilite-escada-vermelha",
    "Escada com degraus em Granilite vermelho polido",
    900, 1600,
  ),
  hallRose: f(
    "granilite-hall-rose",
    "Hall com piso de Granilite rosé polido",
    720, 720,
  ),
  pisoDesenhado: f(
    "granilite-piso-desenhado",
    "Piso de Granilite vermelho com desenho e juntas de dilatação",
    960, 960,
  ),
  escadaPolida: f(
    "granilite-escada-polida",
    "Escada em Granilite polido cinza",
    900, 1600,
  ),
  hallInstitucional: f(
    "granilite-hall-institucional",
    "Hall institucional em Granilite com medalhão decorativo no piso",
    1200, 1600,
  ),
  corredorEscolar: f(
    "granilite-corredor-escolar",
    "Corredor escolar com piso de Granilite polido de alto tráfego",
    960, 1280,
  ),
  degrausSalao: f(
    "granilite-degraus-salao",
    "Salão amplo com degraus e piso em Granilite polido",
    1600, 1200,
  ),
  salaoBrilho: f(
    "granilite-salao-brilho",
    "Salão com Granilite polido de alto brilho",
    1600, 900,
  ),
} satisfies Record<string, Foto>;

/** Texturas de Granilite — usadas como amostras de acabamento. */
export const texturasGranilite = {
  grafite: f(
    "textura-granilite-grafite",
    "Textura de Granilite polido grafite",
    960, 960,
  ),
  ambar: f(
    "textura-granilite-ambar",
    "Textura de Granilite com granilhas âmbar e douradas",
    1200, 1600,
  ),
  branco: f(
    "textura-granilite-branco",
    "Textura de Granilite branco com granilhas escuras",
    1032, 774,
  ),
  pretoBranco: f(
    "textura-granilite-preto-branco",
    "Textura de Granilite branco com granilha preta",
    1600, 900,
  ),
} satisfies Record<string, Foto>;

/** Logotipos da marca (arquivos em /public/marca). */
export const marca = {
  /** Lockup horizontal (símbolo + FulgetLab Revestimentos) — usar sobre fundo escuro. */
  horizontal: { src: "/marca/fulgetlab-horizontal.png", w: 2763, h: 790 },
  /** Lockup vertical claro (branco + amarelo) — usar sobre fundo escuro. */
  verticalClaro: { src: "/marca/fulgetlab-vertical-claro.png", w: 2253, h: 1530 },
  /** Lockup vertical escuro (petróleo) — usar sobre fundo claro. */
  verticalEscuro: { src: "/marca/fulgetlab-vertical-escuro.png", w: 2253, h: 1530 },
  /** Apenas o símbolo "F" em amarelo — usar sobre fundo escuro. */
  simbolo: { src: "/marca/fulgetlab-simbolo.png", w: 442, h: 790 },
} as const;
