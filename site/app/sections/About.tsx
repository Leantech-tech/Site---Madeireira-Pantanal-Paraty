import Image from "next/image";
import { MapPin } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import Card from "../components/Card";
import { about, address, site } from "../lib/content";
import { images } from "../lib/images";

export default function About() {
  return (
    <SectionReveal className="w-full bg-sand-50">
      <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-caramel-500">
              Sobre a {site.name}
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-wood-900 md:text-4xl lg:text-5xl">
              {about.title}
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-wood-700 md:text-lg">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-4 border-l-4 border-caramel-500 bg-white p-6 shadow-sm">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 stroke-1 text-caramel-600" aria-hidden="true" />
              <div>
                <p className="mb-1 text-sm font-bold text-wood-900">
                  {address.street}
                </p>
                <p className="text-sm text-wood-600">
                  {address.city}, {address.state} • {address.reference}
                </p>
                <p className="mt-3 text-sm font-medium text-wood-700">
                  Tábuas, caibros, ripas e madeiras para construção.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Card className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={images.about}
                alt="Pilhas de madeira organizadas em um pátio de madeireira"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-wood-900/10" />
            </Card>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
