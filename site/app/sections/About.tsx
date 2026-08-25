"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  Layers,
  Users,
  TreePine,
  Leaf,
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


export default function About() {
  return (
    <section id="sobre" className="w-full overflow-hidden">
      {/* Parte superior - fundo claro */}
      <div className="relative bg-sand-50">
        <div className="container relative z-10 mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Coluna de texto */}
            <SectionReveal className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-caramel-600">
                Madeira que transforma
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-wood-900 md:text-4xl lg:text-5xl">
                Madeira que{" "}
                <span className="text-caramel-600">transforma projetos</span> em
                realidade
              </h2>

              <p className="mb-10 max-w-xl text-base font-medium leading-relaxed text-wood-700 md:text-lg">
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
                        className="h-6 w-6 text-forest-800"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold leading-tight text-wood-900">
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
              </div>

              {/* Card flutuante */}
              <div className="absolute right-4 top-4 w-56 rounded-xl bg-white p-4 shadow-xl backdrop-blur-sm md:right-6 md:top-6 md:w-64 md:p-5">
                <ul className="space-y-4">
                  {highlights.map((highlight) => {
                    const Icon = highlight.icon;
                    return (
                      <li
                        key={highlight.title}
                        className="flex items-start gap-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-caramel-100">
                          <Icon
                            className="h-4 w-4 text-caramel-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-wood-900">
                            {highlight.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-snug text-wood-600">
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

    </section>
  );
}
