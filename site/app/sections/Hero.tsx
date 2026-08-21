'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { images } from '../lib/images';

const heroImages = [
  { src: images.heroMedia, alt: 'Toras de madeira empilhadas em área de reflorestamento' },
  { src: images.heroWood1, alt: 'Madeireira com toras e tábuas organizadas' },
  { src: images.heroWood2, alt: 'Pilhas de tábuas de madeira para construção' },
  { src: images.heroWood3, alt: 'Pilha de toras em pátio de madeireira' },
  { src: images.heroWood5, alt: 'Vigas e mourões de madeira empilhados' },
  { src: images.heroWood4, alt: 'Textura rica de grão de madeira' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id='home'
      className='relative flex min-h-[100dvh] items-center justify-start overflow-hidden'
    >
      {/* Carousel background */}
      <div className='absolute inset-0 z-0'>
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className='object-cover'
              sizes='100vw'
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div
          className='absolute inset-0 z-10'
          style={{
            background:
              'linear-gradient(90deg, rgba(26,17,10,0.85) 0%, rgba(26,17,10,0.6) 50%, rgba(26,17,10,0.35) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className='container relative z-20 mx-auto px-6 md:px-10'>
        <div className='max-w-[900px] pt-24'>
          <h1 className='font-[var(--font-urbanist)] text-3xl font-extralight uppercase leading-[1.05] tracking-[0.15em] text-[#dccb90] drop-shadow-2xl md:text-5xl lg:text-6xl'>
            TUDO EM MADEIRA
            <br />
            PARA SUA OBRA
          </h1>
          <p className='mt-6 max-w-[600px] text-sm font-extralight uppercase leading-relaxed tracking-widest text-[#b8b8b8] drop-shadow-lg md:text-base'>
            ALTA QUALIDADE EM MADEIRAS CERTIFICADAS PARA ELEVAR SUA CONSTRUÇÃO E
            PROJETOS ARQUITETÔNICOS.
          </p>
        </div>
      </div>


    </section>
  );
}
