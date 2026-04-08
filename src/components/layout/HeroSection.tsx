import React from 'react';
import type { Translation } from '../../types';

interface HeroSectionProps {
  lang: 'pt' | 'en';
  translations: Record<'pt' | 'en', Translation>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const heroTexts = {
    pt: {
      line1: 'DEV PYTHON.',
      line2: 'UM (DESENVOLVEDOR)',
      line3: 'BACKEND.',
    },
    en: {
      line1: 'DEV PYTHON.',
      line2: 'A (DEVELOPER)',
      line3: 'BACKEND.',
    },
  };

  const text = heroTexts[lang];

  return (
    <section className="absolute inset-0 flex flex-col justify-start pt-40 pl-12 pointer-events-none z-10">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-line-1 {
          animation: fadeInUp 0.8s ease-out;
        }
        .hero-line-2 {
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }
        .hero-line-3 {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
      `}</style>
      <h1 className="text-9xl font-black leading-none mb-4 tracking-tight hero-line-1">
        {text.line1}
      </h1>
      <h2
        className="text-9xl font-black leading-none tracking-tight italic hero-line-2"
        style={{
          color: '#FFB380',
          WebkitTextStroke: '3px #000000',
          paintOrder: 'stroke fill',
        }}
      >
        {text.line2}
      </h2>
      <h3
        className="text-9xl font-black leading-none tracking-tight hero-line-3"
      >
        {text.line3}
      </h3>
    </section>
  );
};
