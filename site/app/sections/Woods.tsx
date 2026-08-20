"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TreePine, ArrowRight, Layers } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import { woodTones } from "../lib/content";

export default function Woods() {
  return (
    <section id="madeiras" className="w-full bg-white py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-[320px_1fr] lg:gap-12 xl:grid-cols-[360px_1fr] xl:gap-16">
          {/* Texto lateral */}
          <SectionReveal className="max-w-md lg:max-w-none">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sand-100 px-3 py-1.5">
              <TreePine className="h-4 w-4 text-forest-700" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-forest-700">
                Madeiras
              </span>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-wood-900 md:text-4xl lg:text-5xl">
              Madeiras de qualidade
              <br />
              <span className="text-forest-700">para todos os projetos</span>
            </h2>

            <p className="mb-8 text-base font-medium leading-relaxed text-wood-700 md:text-lg">
              Selecionamos as melhores madeiras para garantir durabilidade,
              beleza e segurança.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-3 rounded-full bg-forest-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest-700/20 transition-all duration-300 hover:bg-forest-800 hover:shadow-xl hover:shadow-forest-700/25"
            >
              <Layers className="h-5 w-5" aria-hidden="true" />
              Ver todas as madeiras
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </SectionReveal>

          {/* Grid de madeiras */}
          <SectionReveal delay={0.1} className="min-w-0 h-full">
            <div className="woods-grid wood-scrollbar h-full">
              {woodTones.map((wood, index) => (
                <motion.article
                  key={wood.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.04,
                  }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl lg:h-full lg:aspect-auto"
                >
                  <Image
                    src={wood.image}
                    alt={wood.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                  />

                  {/* Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900/80 via-wood-900/20 to-transparent" />

                  {/* Conteúdo */}
                  <div className="absolute inset-x-0 bottom-0 px-4 py-3.5 md:px-5 md:py-4">
                    <h3 className="text-sm font-semibold text-white md:text-base">
                      {wood.name}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Botão mobile */}
            <div className="mt-8 flex justify-center lg:hidden">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-5 py-2.5 text-sm font-semibold text-wood-900 transition-colors duration-300 hover:bg-stone-200"
              >
                Ver todas as madeiras
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
