"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  Layers,
  Users,
  TreePine,
  Leaf,
  Home,
  Sofa,
  Fence,
  Tent,
  Warehouse,
} from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import { images } from "../lib/images";
import { site } from "../lib/content";

const features = [
  {
    icon: ShieldCheck,
    title: "Madeira de alta qualidade",
  },
  {
    icon: Truck,
    title: "Entrega rápida e segura",
  },
  {
    icon: Layers,
    title: "Variedade de opções",
  },
  {
    icon: Users,
    title: "Equipe especializada para te atender",
  },
];

const highlights = [
  {
    icon: TreePine,
    title: "Qualidade",
    description: "Madeiras selecionadas e bem tratadas.",
  },
  {
    icon: ShieldCheck,
    title: "Resistência",
    description: "Mais durabilidade para o seu projeto.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Compromisso com o meio ambiente.",
  },
];

const projectTypes = [
  {
    icon: Home,
    title: "Construção Civil",
    image: images.productsConstruction,
  },
  {
    icon: Sofa,
    title: "Móveis e Decoração",
    image: images.galleryInterior,
  },
  {
    icon: Fence,
    title: "Cercas e Decks",
    image: images.galleryDeck,
  },
  {
    icon: Tent,
    title: "Pergolados",
    image: images.galleryExterior,
  },
  {
    icon: Warehouse,
    title: "Telhados",
    image: images.productsBeams,
  },
];

export default function About() {
  return (
    <section id="sobre" className="w-full overflow-hidden">
      {/* Parte superior - fundo escuro */}
      <div className="relative bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800">
        <div className="container relative z-10 mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Coluna de texto */}
            <SectionReveal className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-caramel-400">
                Madeira que transforma
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Madeira que{" "}
                <span className="text-caramel-400">transforma projetos</span> em
                realidade
              </h2>

              <p className="mb-10 max-w-xl text-base font-medium leading-relaxed text-white/80 md:text-lg">
                Na {site.name}, você encontra a madeira certa para cada ideia. Seja
                para construir, reformar ou criar algo único, temos as melhores
                opções com qualidade, variedade e o suporte que você precisa.
              </p>

              <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex flex-col gap-3">
                      <Icon
                        className="h-6 w-6 text-caramel-400"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold leading-tight text-white">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </SectionReveal>

            {/* Coluna de imagem */}
            <SectionReveal
              delay={0.1}
              className="relative min-h-[320px] lg:min-h-0"
            >
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl lg:min-h-[520px]">
                <Image
                  src={images.heroWood6}
                  alt="Casa com deck de madeira"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-900/60 via-forest-900/20 to-transparent" />
              </div>

              {/* Card flutuante */}
              <div className="absolute right-4 top-4 w-56 rounded-xl bg-forest-800/95 p-4 shadow-xl backdrop-blur-sm md:right-6 md:top-6 md:w-64 md:p-5">
                <ul className="space-y-4">
                  {highlights.map((highlight) => {
                    const Icon = highlight.icon;
                    return (
                      <li
                        key={highlight.title}
                        className="flex items-start gap-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-caramel-400/20">
                          <Icon
                            className="h-4 w-4 text-caramel-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-white">
                            {highlight.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-snug text-white/70">
                            {highlight.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>

      {/* Parte inferior - fundo claro */}
      <div className="bg-sand-50">
        <div className="container mx-auto px-6 py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <SectionReveal className="lg:col-span-4">
              <div className="mb-3 h-0.5 w-10 rounded-full bg-caramel-500" />
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-caramel-600">
                Ideal para
              </p>
              <h3 className="mb-4 text-2xl font-bold leading-tight text-wood-900 md:text-3xl lg:text-4xl">
                Todos os tipos de projetos
              </h3>
              <p className="text-base font-medium leading-relaxed text-wood-700">
                Do pequeno reparo ao grande projeto, temos a madeira ideal para o
                que você precisa.
              </p>
            </SectionReveal>

            <SectionReveal
              delay={0.1}
              className="lg:col-span-8"
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {projectTypes.map((project) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={project.title}
                      className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-md"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 18vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <Icon
                          className="mb-2 h-5 w-5 text-caramel-400"
                          aria-hidden="true"
                        />
                        <h4 className="text-sm font-bold text-white">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
