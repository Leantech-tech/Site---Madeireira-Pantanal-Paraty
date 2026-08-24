"use client";

import Image from "next/image";
import {
  Layers,
  Award,
  ShieldCheck,
  DollarSign,
  Home,
  Truck,
  Headphones,
} from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import { images } from "../lib/images";

const features = [
  {
    icon: Layers,
    title: "Variedade completa",
    description: "Diversos tipos de madeiras e perfis para sua necessidade.",
  },
  {
    icon: Award,
    title: "Qualidade comprovada",
    description: "Materiais selecionados e tratados para maior durabilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Mais resistência e segurança",
    description: "Madeiras que oferecem alta performance em qualquer projeto.",
  },
  {
    icon: DollarSign,
    title: "Melhor custo-benefício",
    description: "Preço justo e condições que cabem no seu planejamento.",
  },
];

const productCards = [
  {
    title: "Madeiras Brutas",
    description: "Vigas, caibros, ripas e pranchas.",
    image: images.replace2,
  },
  {
    title: "Compensados e Laminados",
    description: "Diversos modelos e espessuras.",
    image: images.heroWood2,
  },
  {
    title: "Tábuas e Pranchas",
    description: "Ideal para estruturas e acabamentos.",
    image: images.heroWood5,
  },
  {
    title: "Madeiras para Telhado",
    description: "Mais segurança e durabilidade.",
    image: images.replace1,
  },
  {
    title: "Eucalipto Tratado",
    description: "Resistência para áreas externas e contato com o solo.",
    image: images.heroWood3,
  },
  {
    title: "Acabamentos e Perfis",
    description: "Soluções para cada detalhe do seu projeto.",
    image: images.heroWood4,
  },
];

const bottomFeatures = [
  {
    icon: Home,
    title: "Estoque completo e pronto para atender",
    description: "Agilidade na entrega para manter sua obra no prazo.",
  },
  {
    icon: Truck,
    title: "Entrega rápida e segura",
    description: "Atendemos com eficiência e responsabilidade.",
  },
  {
    icon: Headphones,
    title: "Atendimento especializado",
    description: "Nossa equipe entende do que você precisa.",
  },
  {
    icon: ShieldCheck,
    title: "Compromisso com a sua construção",
    description: "Qualidade, confiança e parceria em cada entrega.",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="w-full bg-sand-50">
      <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna de texto */}
          <SectionReveal className="max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-caramel-600">
              Qualidade que você confia
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-wood-900 md:text-4xl lg:text-5xl">
              Materiais para construir com{" "}
              <span className="text-caramel-600">qualidade</span>
            </h2>

            <div className="mb-6 h-1 w-16 rounded-full bg-caramel-500" />

            <p className="mb-10 text-base font-medium leading-relaxed text-wood-700 md:text-lg">
              Trabalhamos com uma linha completa de madeiras e materiais
              selecionados para garantir mais resistência, segurança e
              acabamento impecável em cada etapa da sua obra.
            </p>

            <div className="mb-10 grid grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex flex-col gap-3">
                    <Icon
                      className="h-6 w-6 text-forest-800"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-wood-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-wood-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>

          {/* Coluna de imagem e cards */}
          <SectionReveal delay={0.1}>
            <div className="grid gap-3 md:grid-cols-2">
              {/* Imagem grande vertical + card de procedência */}
              <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl md:min-h-0">
                <Image
                  src={images.heroWood2}
                  alt="Pilhas de madeiras organizadas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>

              {/* Grid de 6 cards pequenos: 2 colunas x 3 linhas */}
              <div className="grid grid-cols-2 grid-rows-3 gap-3">
                {productCards.map((card) => {
                  return (
                    <div
                      key={card.title}
                      className="group relative min-h-[130px] overflow-hidden rounded-xl sm:min-h-[150px]"
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Faixa inferior */}
      <div className="container mx-auto px-6 pb-20 md:pb-28 lg:pb-32">
        <div className="rounded-2xl bg-forest-900 px-6 py-10 md:rounded-3xl md:px-10 md:py-12 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="mb-2 text-2xl font-bold leading-tight text-white md:text-3xl">
                Tudo o que você precisa em um só lugar
              </h3>
              <p className="text-sm font-medium leading-relaxed text-white/70 md:text-base">
                Soluções completas em madeira para sua obra do início ao
                acabamento.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
              {bottomFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <Icon
                      className="h-6 w-6 shrink-0 text-caramel-400"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-white md:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-white/70 md:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
