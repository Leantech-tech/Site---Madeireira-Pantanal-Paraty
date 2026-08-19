"use client";

import { CheckCircle2, Boxes, HeadsetIcon, Award } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import Card from "../components/Card";
import { differentials } from "../lib/content";

const icons = {
  Qualidade: CheckCircle2,
  Variedade: Boxes,
  Atendimento: HeadsetIcon,
  Experiência: Award,
};

export default function Differentials() {
  return (
    <section className="w-full bg-sand-50 py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionReveal className="mb-16 md:mb-20 lg:mb-24 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-caramel-600">
            Por que escolher
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 md:text-4xl lg:text-5xl">
            Diferenciais que fazem a diferença
          </h2>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => {
            const Icon = icons[item.title as keyof typeof icons];
            return (
              <Card
                key={item.title}
                delay={index * 0.08}
                className="group flex h-full flex-col border border-wood-200/60 bg-white p-7 transition-colors duration-300 hover:border-caramel-400/50 hover:bg-sand-50/60 hover:shadow-[0_24px_48px_-24px_rgba(176,122,63,0.4)]"
              >
                <Icon
                  className="mb-6 h-8 w-8 stroke-1 text-caramel-600 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-base font-semibold text-wood-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-wood-600">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
