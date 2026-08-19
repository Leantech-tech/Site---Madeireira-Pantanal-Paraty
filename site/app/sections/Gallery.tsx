"use client";

import Image from "next/image";
import SectionReveal from "../components/SectionReveal";
import Card from "../components/Card";
import { gallery } from "../lib/content";
import { images } from "../lib/images";

const galleryImages = [
  { src: images.galleryStructure, alt: "Estrutura de madeira em construção" },
  { src: images.galleryDeck, alt: "Deck de madeira em área externa" },
  { src: images.galleryInterior, alt: "Acabamento interno em madeira" },
  { src: images.galleryExterior, alt: "Fachada com detalhes em madeira" },
  { src: images.galleryDetail, alt: "Detalhe de trabalho em madeira" },
  { src: images.galleryTools, alt: "Ferramentas para trabalhar madeira" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="w-full bg-sand-50 py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionReveal className="mb-14 text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-caramel-600">
            Projetos
          </p>
          <h2 className="mb-5 text-3xl font-bold text-wood-900 md:text-4xl lg:text-5xl">
            {gallery.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-wood-700 md:text-lg">
            {gallery.subtitle}
          </p>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Card
              key={image.alt}
              delay={index * 0.05}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-wood-200 shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-wood-900/0 transition-colors duration-300 group-hover:bg-wood-900/10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
