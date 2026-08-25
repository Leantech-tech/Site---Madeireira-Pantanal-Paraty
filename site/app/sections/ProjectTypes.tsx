"use client";

import Image from "next/image";
import {
  Blocks,
  ShieldCheck,
  Award,
  DollarSign,
  Home,
  Sofa,
  TreePine,
  Fence,
  Warehouse,
  Hammer,
  Handshake,
  Boxes,
  Truck,
  HeadsetIcon,
} from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import { images } from "../lib/images";

const features = [
  {
    icon: Blocks,
    title: "Para qualquer projeto",
    description: "Soluções completas para obras de todos os tamanhos.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade que garante segurança",
    description: "Madeiras tratadas e selecionadas com rigor.",
  },
  {
    icon: Award,
    title: "Resistência e durabilidade",
    description: "Materiais que oferecem mais vida útil para sua obra.",
  },
  {
    icon: DollarSign,
    title: "Melhor custo-benefício",
    description: "Preço justo e condições que cabem no seu planejamento.",
  },
];

const projectTypes = [
  {
    icon: Home,
    title: "Construção Civil",
    description: "Madeiras para estruturas, formas, telhados, vigas e acabamentos.",
    image: images.projectCard1,
  },
  {
    icon: Sofa,
    title: "Móveis e Marcenaria",
    description: "Tábuas, pranchas e madeiras ideais para móveis sob medida e projetos personalizados.",
    image: images.projectCard2,
  },
  {
    icon: TreePine,
    title: "Áreas Externas",
    description: "Madeiras tratadas para decks, pergolados, varandas e áreas de lazer com durabilidade.",
    image: images.projectCard3,
  },
  {
    icon: Fence,
    title: "Cercas e Divisórias",
    description: "Soluções práticas e resistentes para cercas, fechamentos e divisórias.",
    image: images.projectCard4,
  },
  {
    icon: Warehouse,
    title: "Telhados e Coberturas",
    description: "Madeiras de alta qualidade para caibros, ripas, terças e toda estrutura do telhado.",
    image: images.projectCard5,
  },
  {
    icon: Hammer,
    title: "Reformas e Projetos",
    description: "Materiais ideais para reformas, reparos e projetos de todos os tipos.",
    image: images.projectCard6,
  },
];

const bottomFeatures = [
  {
    icon: Boxes,
    title: "Variedade completa de madeiras",
    description: "Tudo o que você precisa em um só lugar.",
  },
  {
    icon: Truck,
    title: "Entrega rápida e segura",
    description: "Agilidade para sua obra não parar.",
  },
  {
    icon: HeadsetIcon,
    title: "Atendimento especializado",
    description: "Nossa equipe pronta para ajudar você a escolher a melhor solução.",
  },
  {
    icon: ShieldCheck,
    title: "Compromisso com a sua obra",
    description: "Qualidade, confiança e parceria em cada entrega.",
  },
];

export default function ProjectTypes() {
  return (
    <section id="projetos" className="w-full bg-sand-50">
      <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna de texto */}
          <SectionReveal className="lg:col-span-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-caramel-600">
              Soluções para cada necessidade
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-wood-900 md:text-4xl lg:text-5xl">
              Todos os tipos de{" "}
              <span className="text-caramel-600">projetos</span>
            </h2>

            <div className="mb-6 h-1 w-16 rounded-full bg-caramel-500" />

            <p className="mb-10 max-w-md text-base font-medium leading-relaxed text-wood-700 md:text-lg">
              Temos as madeiras certas para cada tipo de projeto. Do pequeno reparo
              à grande construção, oferecemos qualidade, variedade e o suporte que
              você precisa para construir com segurança e eficiência.
            </p>

            <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex flex-col gap-3">
                    <Icon
                      className="h-7 w-7 text-forest-800"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-sm font-bold leading-tight text-wood-900">
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
              {projectTypes.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.title}
                    className="group overflow-hidden rounded-2xl bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
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
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-wood-600">
                        {project.description}
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
                  <Handshake
                    className="h-8 w-8 text-caramel-400"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
                    Do pequeno detalhe ao{" "}
                    <span className="text-caramel-400">grande projeto</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    A Madeireira Pantanal é sua parceira em cada etapa da construção.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
                {bottomFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-caramel-400"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {feature.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-white/70">
                          {feature.description}
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
