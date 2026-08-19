"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { woods, woodTypes } from "../lib/content";

export default function Woods() {
  const [selectedType, setSelectedType] = useState<string>("Todas");

  const filteredWoods = useMemo(() => {
    if (selectedType === "Todas") return woods;
    return woods.filter((wood) => wood.type === selectedType);
  }, [selectedType]);

  return (
    <section id="madeiras" className="w-full bg-white py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionReveal className="mb-10 md:mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-caramel-600">
            Madeiras
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-wood-900 md:text-4xl lg:text-5xl">
            Conheça as madeiras que trabalhamos
          </h2>
          <p className="text-base font-medium leading-relaxed text-wood-700 md:text-lg">
            Selecione uma categoria e descubra as opções de madeira disponíveis
            para o seu projeto.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mb-10 md:mb-14">
          <div className="flex flex-wrap gap-3">
            {woodTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  selectedType === type
                    ? "bg-wood-900 text-white shadow-md"
                    : "bg-sand-100 text-wood-700 hover:bg-sand-200 hover:text-wood-900"
                }`}
                aria-pressed={selectedType === type}
              >
                {type}
              </button>
            ))}
          </div>
        </SectionReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="-mx-6 lg:-mx-8"
          >
            <div className="px-6 lg:px-8">
              <div className="woods-row wood-scrollbar">
                {filteredWoods.map((wood, index) => (
                  <motion.article
                    key={`${wood.name}-${wood.type}`}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="group"
                  >
                    <div className="flex h-56 flex-col overflow-hidden rounded-2xl border border-wood-200/60 bg-sand-50/50 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-caramel-400/50 hover:shadow-[0_24px_48px_-24px_rgba(176,122,63,0.35)] sm:h-64 md:h-72">
                      <div className="relative flex-[0.8] overflow-hidden bg-wood-200">
                        <Image
                          src={wood.image}
                          alt={wood.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="25vw"
                        />
                        <div className="absolute inset-0 bg-wood-900/0 transition-colors duration-300 group-hover:bg-wood-900/10" />
                      </div>
                      <div className="flex flex-[0.2] items-center justify-center p-4">
                        <h3 className="text-center text-base font-bold text-wood-900 md:text-lg">
                          {wood.name}
                        </h3>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
