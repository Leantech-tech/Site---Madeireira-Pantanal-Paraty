"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Card from "../components/Card";
import { contact, site } from "../lib/content";

export default function Contact() {
  return (
    <section id="contato" className="w-full bg-sand-50 py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <Card
          className="mx-auto max-w-3xl border border-wood-200/60 bg-white px-8 py-14 text-center shadow-sm md:px-16"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-wood-900 md:text-4xl lg:text-5xl">
            {contact.title}
          </h2>
          <p className="mb-10 text-base font-medium leading-relaxed text-wood-700 md:text-lg">
            {contact.subtitle}
          </p>

          <motion.a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-forest-900 px-12 py-5 text-sm font-semibold uppercase tracking-[0.15em] text-sand-50 shadow-lg transition-colors hover:bg-forest-800 focus:outline-none focus:ring-2 focus:ring-forest-900 focus:ring-offset-2 focus:ring-offset-sand-50"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            {contact.cta}
          </motion.a>

          <p className="mt-8 text-xs text-wood-500">
            O telefone/WhatsApp será adicionado em breve.
          </p>
        </Card>
      </div>
    </section>
  );
}
