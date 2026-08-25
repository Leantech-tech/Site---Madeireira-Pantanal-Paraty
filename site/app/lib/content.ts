import { images } from "./images";

export const site = {
  name: "Madeireira Pantanal Paraty",
  tagline: "Madeira de qualidade para construir seus projetos.",
  shortDescription:
    "Madeira de qualidade para construir seus projetos em Paraty, Rio de Janeiro.",
  instagram: "https://www.instagram.com/madeireirapantanal_paraty/",
} as const;

export const address = {
  street: "Estrada Paraty x Cunha, 2260",
  reference: "Em frente à entrada do bairro Pantanal",
  city: "Paraty",
  state: "Rio de Janeiro",
  country: "Brasil",
  zip: "CEP 23970-000",
  full: [
    "Estrada Paraty x Cunha, 2260",
    "Em frente à entrada do bairro Pantanal",
    "Paraty, Rio de Janeiro, Brasil",
    "CEP 23970-000",
  ],
} as const;

export const about = {
  title: "Madeira que transforma projetos em realidade",
  paragraphs: [
    "A Madeireira Pantanal Paraty é referência em materiais de madeira para construção na região de Paraty, no Rio de Janeiro. Atuamos com dedicação para oferecer produtos que atendam desde pequenas reformas até grandes projetos.",
    "Nosso compromisso é com a qualidade, a variedade e o atendimento próximo. Cada cliente é recebido com atenção para encontrar a madeira certa para sua necessidade, sempre com transparência e profissionalismo.",
  ],
} as const;

export const productCategories = [
  {
    title: "Madeiras para construção",
    description: "Materiais para estruturas, coberturas e acabamentos de obras.",
  },
  {
    title: "Tábuas",
    description: "Tábuas para diferentes aplicações em construção e marcenaria.",
  },
  {
    title: "Caibros",
    description: "Opções para telhados, forros e estruturas leves.",
  },
  {
    title: "Ripas",
    description: "Ripas para acabamentos, closes, cercas e pequenas estruturas.",
  },
  {
    title: "Materiais para projetos",
    description: "Soluções em madeira para projetos residenciais e comerciais.",
  },
  {
    title: "Soluções em madeira",
    description: "Atendimento personalizado para encontrar a medida certa para você.",
  },
] as const;

export const differentials = [
  {
    title: "Qualidade",
    description: "Materiais selecionados para diferentes necessidades de construção.",
  },
  {
    title: "Variedade",
    description: "Opções para diferentes tipos de projetos.",
  },
  {
    title: "Atendimento",
    description: "Atendimento próximo e profissional.",
  },
  {
    title: "Experiência",
    description: "Foco em oferecer materiais adequados para cada projeto.",
  },
] as const;

export const woodTypes = [
  "Todas",
  "Construção",
  "Deck e externa",
  "Acabamento",
  "Estrutura",
] as const;

export const woodTones = [
  {
    name: "Pinus",
    image: images.woodPinus,
  },
  {
    name: "Eucalipto",
    image: images.woodEucalipto,
  },
  {
    name: "Cumaru",
    image: images.woodCumaru,
  },
  {
    name: "Ipê",
    image: images.woodIpe,
  },
  {
    name: "Massaranduba",
    image: images.woodMassaranduba,
  },
  {
    name: "Garapeira",
    image: images.woodGarapeira,
  },
  {
    name: "Cedro",
    image: images.woodCedro,
  },
  {
    name: "Angelim",
    image: images.woodAngelim,
  },
  {
    name: "Itaúba",
    image: images.woodItauba,
  },
  {
    name: "Peroba",
    image: images.woodPeroba,
  },
] as const;

export const woods = [
  {
    name: "Pinus",
    type: "Construção",
    image: images.woodPinus,
    description: "Versátil e econômica, ideal para estruturas leves e cofragem.",
  },
  {
    name: "Eucalipto",
    type: "Construção",
    image: images.woodEucalipto,
    description: "Resistência e durabilidade para estruturas e escoramentos.",
  },
  {
    name: "Cumaru",
    type: "Deck e externa",
    image: images.woodCumaru,
    description: "Madeira densa e resistente, perfeita para decks e áreas externas.",
  },
  {
    name: "Ipê",
    type: "Deck e externa",
    image: images.woodIpe,
    description: "Alta durabilidade e beleza para decks, pisos e revestimentos.",
  },
  {
    name: "Massaranduba",
    type: "Deck e externa",
    image: images.woodMassaranduba,
    description: "Resistente à umidade, excelente para áreas externas e decks.",
  },
  {
    name: "Garapeira",
    type: "Acabamento",
    image: images.woodGarapeira,
    description: "Madeira nobre com tonalidade avermelhada para portas e acabamentos.",
  },
  {
    name: "Cedro",
    type: "Acabamento",
    image: images.woodCedro,
    description: "Leve e trabalhável, muito usado em móveis e acabamentos internos.",
  },
  {
    name: "Angelim",
    type: "Estrutura",
    image: images.woodAngelim,
    description: "Robusta e durável, indicada para vigas e estruturas de grande porte.",
  },
  {
    name: "Itaúba",
    type: "Estrutura",
    image: images.woodItauba,
    description: "Excelente resistência natural para estruturas e construção pesada.",
  },
  {
    name: "Peroba",
    type: "Acabamento",
    image: images.woodPeroba,
    description: "Madeira de demolição com história e charme para projetos especiais.",
  },
] as const;

export const gallery = {
  title: "Inspiração em cada detalhe",
  subtitle:
    "Veja como a madeira pode fazer parte de projetos de construção, áreas externas e acabamentos.",
} as const;

export const contact = {
  title: "Vamos encontrar a madeira certa para o seu projeto?",
  subtitle:
    "Entre em contato com a Madeireira Pantanal Paraty e fale com nossa equipe.",
  cta: "Falar no WhatsApp",
  whatsapp: "5524999794208",
} as const;
