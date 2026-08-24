"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  ThumbsUp,
  Phone,
  ArrowRight,
  TreePine,
  Building2,
  Sofa,
  Home,
  Fence,
} from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import { images } from "../lib/images";

const features = [
  {
    icon: BadgeCheck,
    label: "Materiais selecionados",
  },
  {
    icon: Leaf,
    label: "Tratamento de qualidade",
  },
  {
    icon: ThumbsUp,
    label: "Melhor custo-benefício",
  },
];

const highlights = [
  {
    icon: Leaf,
    title: "Madeiras de alta qualidade",
  },
  {
    icon: ShieldCheck,
    title: "Maior resistência e durabilidade",
  },
  {
    icon: CheckCircle2,
    title: "Ideal para diversos usos",
  },
];

const categories = [
  {
    icon: Building2,
    title: "Construção Civil",
    description: "Madeiras resistentes para estruturas e acabamentos.",
  },
  {
    icon: Sofa,
    title: "Móveis e Marcenaria",
    description: "Perfeitas para móveis sob medida e projetos personalizados.",
  },
  {
    icon: Home,
    title: "Telhados e Coberturas",
    description: "Madeiras tratadas para segurança e durabilidade.",
  },
  {
    icon: Fence,
    title: "Cercas e Decks",
    description: "Beleza e resistência para áreas externas.",
  },
];

export default function Woods() {
  return (
    <section id="madeiras" className="w-full bg-sand-50">
      <div className="container mx-auto px-6 pt-20 md:pt-28 lg:pt-32">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Coluna de texto */}
          <SectionReveal className="order-2 flex h-full lg:order-1">
            <div className="flex h-full max-w-xl flex-col">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-caramel-600">
                Qualidade que você conta
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-wood-900 md:text-4xl lg:text-5xl">
                Madeiras de{" "}
                <span className="text-caramel-600">qualidade</span> para todos
                os projetos
              </h2>

              <div className="mb-6 h-1 w-16 rounded-full bg-caramel-500" />

              <p className="mb-8 text-base font-medium leading-relaxed text-wood-700 md:text-lg">
                Trabalhamos com madeiras selecionadas e tratadas, ideais para
                construção, reforma, móveis e muito mais. Resistência,
                durabilidade e o melhor custo-benefício você encontra aqui.
              </p>

              <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <Icon
                        className="h-5 w-5 shrink-0 text-caramel-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold leading-tight text-wood-900">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mb-4 mt-auto flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest-800/20 transition-all duration-300 hover:bg-forest-900 hover:shadow-xl"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Fale conosco
                </a>

                <Link
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-wood-300 bg-white px-7 py-3.5 text-sm font-semibold text-wood-900 shadow-sm transition-all duration-300 hover:bg-sand-100 hover:text-wood-900"
                >
                  Ver produtos
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </SectionReveal>

          {/* Coluna de imagem */}
          <SectionReveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/3]">
                <Image
                  src={images.heroWood2}
                  alt="Pilhas de madeiras selecionadas e tratadas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Card de destaque verde */}
              <div className="absolute right-4 top-4 w-56 rounded-xl bg-forest-800 p-4 shadow-lg md:right-6 md:top-6 md:w-64 md:p-5">
                <ul className="space-y-3">
                  {highlights.map((highlight) => {
                    const Icon = highlight.icon;
                    return (
                      <li
                        key={highlight.title}
                        className="flex items-start gap-3"
                      >
                        <Icon
                          className="mt-0.5 h-4 w-4 shrink-0 text-caramel-400"
                          aria-hidden="true"
                        />
                        <span className="text-xs font-semibold uppercase leading-tight tracking-wide text-white">
                          {highlight.title}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Card de experiência */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white p-4 shadow-lg md:bottom-6 md:left-6 md:right-auto md:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100">
                    <TreePine
                      className="h-6 w-6 text-forest-800"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-wood-900">
                      +20{" "}
                      <span className="text-base font-semibold uppercase tracking-wide">
                        Anos
                      </span>
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-wood-600">
                      De experiência
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Faixa inferior */}
        <div className="rounded-2xl bg-forest-800 px-6 py-10 md:rounded-3xl md:px-10 md:py-12 lg:px-12">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-caramel-400 md:text-base">
            Soluções em madeira para cada necessidade
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="flex items-start gap-4"
                >
                  <Icon
                    className="h-6 w-6 shrink-0 text-caramel-400"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-white md:text-base">
                      {category.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {category.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
