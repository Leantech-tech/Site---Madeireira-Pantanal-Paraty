import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Madeireira Pantanal Paraty — Madeira e materiais para construção em Paraty",
  description:
    "Madeireira Pantanal Paraty: madeira de qualidade, materiais para construção e atendimento próximo em Paraty, Rio de Janeiro. Encontre a madeira certa para o seu projeto.",
  openGraph: {
    title: "Madeireira Pantanal Paraty",
    description:
      "Madeira de qualidade e materiais para construção em Paraty, RJ.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
