"use client";

import { TreePine, Layers, Ruler, SquareStack, Hammer, Handshake } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import Card from "../components/Card";
import { productCategories, site } from "../lib/content";

const icons = [
  TreePine,
  Layers,
  Ruler,
  SquareStack,
  Hammer,
  Handshake,
];

export default function Products() {
  return (
    <section id="produtos" className="w-full bg-white py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionReveal className="mb-16 md:mb-20 lg:mb-24 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-caramel-600">
            Produtos
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-wood-900 md:text-4xl lg:text-5xl">
            Materiais para construir com qualidade
          </h2>
          <p className="text-base font-medium leading-relaxed text-wood-700 md:text-lg">
            A {site.name} oferece uma variedade de materiais em madeira para atender
            projetos de construção, reformas e acabamentos.
          </p>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card
                key={category.title}
                delay={index * 0.05}
                className="group flex h-full flex-col border border-wood-200/60 bg-white p-8 transition-colors duration-300 hover:border-caramel-400/50 hover:bg-sand-50/60 hover:shadow-[0_24px_48px_-24px_rgba(176,122,63,0.4)]"
              >
                <Icon
                  className="mb-6 h-6 w-6 stroke-1 text-caramel-600 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="mb-3 text-lg font-semibold text-wood-900">
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed text-wood-600">
                  {category.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
