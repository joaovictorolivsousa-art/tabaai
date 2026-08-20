'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduced) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 34 },
        { opacity: 1, y: 0, duration: 1.1 },
        '-=0.5'
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.7'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );
  }, []);

  return (
    <header
      id="top"
      className="relative z-[2] flex min-h-[100svh] flex-col justify-end px-5 pb-[72px] pt-[132px] sm:px-8 sm:pt-[150px]"
    >
      <div ref={eyebrowRef} className="eyebrow">
        São Pedro da Aldeia · Região dos Lagos
      </div>

      <h1
        ref={headlineRef}
        className="max-w-[16ch] font-display text-[clamp(2.4rem,7.6vw,6.4rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-foam mt-2"
      >
        Tecnologia e IA para transformar{' '}
        <em className="not-italic text-aqua">como seu negócio funciona.</em>
      </h1>

      <p
        ref={subRef}
        className="mt-6 max-w-[540px] text-[clamp(15px,1.6vw,18px)] font-light text-foam-dim"
      >
        A TABÁ é um estúdio de tecnologia e inteligência artificial. Criamos
        produtos SaaS, automatizamos processos com IA e desenvolvemos
        plataformas digitais que resolvem problemas reais — não só telas
        bonitas, mas sistemas que funcionam de verdade.
      </p>

      <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full bg-aqua px-[26px] py-[15px] font-display text-sm font-semibold text-bg-deep transition-transform duration-400 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(127,231,196,0.5)]"
        >
          Falar com a TABÁ <span>→</span>
        </a>
        <a
          href="#projetos"
          className="inline-flex items-center rounded-full border border-white/10 px-6 py-[14px] text-sm transition-colors duration-400 hover:border-foam hover:bg-white/5"
        >
          Ver cases
        </a>
      </div>

      <div className="absolute bottom-9 right-5 hidden items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-foam-dim sm:right-8 md:flex [writing-mode:vertical-rl]">
        <span className="scroll-cue-line h-11 w-px bg-gradient-to-b from-aqua to-transparent" />
        Role para descer
      </div>
    </header>
  );
}
