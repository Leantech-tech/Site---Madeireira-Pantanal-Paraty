"use client";

import Image from "next/image";
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  Layers,
  Package,
  Truck,
  Users,
  Leaf,
  Target,
  Handshake,
} from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import { images } from "../lib/images";

const sideFeatures = [
  {
    icon: ShieldCheck,
    title: "Madeiras selecionadas",
    description: "Matéria-prima de procedência garantida e tratada para maior durabilidade.",
  },
  {
    icon: Award,
    title: "Qualidade em cada etapa",
    description: "Do corte ao acabamento, seguimos altos padrões para garantir o melhor resultado.",
  },
  {
    icon: HeartHandshake,
    title: "Compromisso com você",
    description: "Atendimento próximo, honesto e focado em entregar a melhor experiência.",
  },
];

const cards = [
  {
    icon: Layers,
    title: "Madeira de alta qualidade",
    description: "Trabalhamos com madeiras selecionadas, secas e tratadas, garantindo resistência e durabilidade para qualquer projeto.",
    image: images.differentialQuality,
  },
  {
    icon: ShieldCheck,
    title: "Tratamento e proteção",
    description: "Nossas madeiras recebem tratamento adequado contra pragas e umidade, aumentando a vida útil do material.",
    image: images.differentialTreatment,
  },
  {
    icon: Package,
    title: "Estoque completo",
    description: "Variedade de produtos e medidas para atender desde pequenos reparos até grandes construções.",
    image: images.differentialStock,
  },
  {
    icon: Truck,
    title: "Entrega rápida e segura",
    description: "Logística própria para entregar seus materiais com agilidade e segurança em toda a região.",
    image: images.differentialDelivery,
  },
  {
    icon: Users,
    title: "Atendimento especializado",
    description: "Nossa equipe entende do assunto e está pronta para orientar você na escolha da melhor solução.",
    image: images.differentialService,
  },
  {
    icon: Leaf,
    title: "Compromisso sustentável",
    description: "Respeitamos o meio ambiente e trabalhamos com responsabilidade para um futuro mais sustentável.",
    image: images.differentialSustainability,
  },
];

const bottomStats = [
  {
    icon: Award,
    value: "+20",
    label: "anos de experiência",
    description: "Tradição e confiança no que fazemos.",
  },
  {
    icon: Layers,
    value: "100%",
    label: "madeiras selecionadas",
    description: "Qualidade garantida em cada peça.",
  },
  {
    icon: Truck,
    value: "",
    label: "Entrega rápida",
    description: "Agilidade e segurança para sua obra.",
  },
  {
    icon: Handshake,
    value: "",
    label: "Clientes satisfeitos",
    description: "Parceria que gera confiança e resultados.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="w-full bg-sand-50">
      <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna de texto */}
          <SectionReveal className="lg:col-span-4">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-caramel-600">
              <Award className="h-4 w-4" aria-hidden="true" />
              Qualidade que você confia
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-wood-900 md:text-4xl lg:text-5xl">
              Diferenciais que fazem a{" "}
              <span className="text-caramel-600">diferença</span>
            </h2>

            <div className="mb-6 h-1 w-16 rounded-full bg-caramel-500" />

            <p className="mb-10 max-w-md text-base font-medium leading-relaxed text-wood-700 md:text-lg">
              Na Madeireira Pantanal, cada detalhe importa. Trabalhamos para
              entregar mais que madeira: entregamos confiança, qualidade e
              parceria em cada projeto.
            </p>

            <div className="mb-10 flex flex-col gap-6">
              {sideFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-900">
                      <Icon
                        className="h-5 w-5 text-caramel-400"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
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

          {/* Grid de cards */}
          <SectionReveal delay={0.1} className="lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group overflow-hidden rounded-2xl bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="relative px-5 pb-6 pt-0">
                      <div className="relative -top-6 mb-[-0.5rem] inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest-900 shadow-md">
                        <Icon
                          className="h-5 w-5 text-caramel-400"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="mb-2 text-base font-bold text-wood-900">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-wood-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </div>

        {/* Faixa verde inferior contida */}
        <SectionReveal delay={0.2} className="mt-16">
          <div className="rounded-2xl bg-forest-900 px-6 py-10 md:rounded-3xl md:px-10 md:py-12 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="flex items-center gap-5 lg:col-span-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-caramel-500/20">
                  <Target
                    className="h-8 w-8 text-caramel-400"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
                    Mais que madeira,{" "}
                    <span className="text-caramel-400">uma parceria</span> para
                    construir o melhor.
                  </h3>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
                {bottomStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-caramel-400"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-lg font-bold text-white">
                          {stat.value && <span>{stat.value} </span>}
                          <span className="text-sm font-semibold">
                            {stat.label}
                          </span>
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/70">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
