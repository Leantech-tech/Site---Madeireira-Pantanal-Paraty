import SectionReveal from "../components/SectionReveal";
import Card from "../components/Card";
import { address, site } from "../lib/content";
import { MapPin } from "lucide-react";

export default function Location() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.456857448507!2d-44.733333!3d-23.216667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzAwLjAiUyA0NMKwNDQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

  return (
    <section className="w-full bg-white py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionReveal className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-caramel-600">
              Localização
            </p>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-wood-900 md:text-4xl lg:text-5xl">
              Venha nos visitar em Paraty
            </h2>
            <p className="mb-10 text-base font-medium leading-relaxed text-wood-700 md:text-lg">
              A {site.name} está localizada em um ponto de fácil acesso na
              Estrada Paraty x Cunha, em frente à entrada do bairro Pantanal.
            </p>

            <Card
              delay={0.1}
              className="flex items-start gap-4 rounded-2xl bg-forest-900 p-6 text-sand-100"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-caramel-500/20 text-caramel-400">
                <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <address className="not-italic">
                {address.full.map((line, index) => (
                  <p
                    key={index}
                    className={`${
                      index === 0
                        ? "text-lg font-bold text-sand-50"
                        : index === 1
                          ? "text-sm font-medium text-caramel-400"
                          : "text-sm text-sand-200/90"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </address>
            </Card>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <Card
              className="relative h-80 w-full overflow-hidden border border-wood-200/60 md:h-96 lg:h-full lg:min-h-[420px]"
              delay={0.2}
            >
              <iframe
                src={mapEmbedUrl}
                title="Localização da Madeireira Pantanal Paraty"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
