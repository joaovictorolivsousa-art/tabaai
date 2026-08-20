'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const services = [
  {
    tag: 'IA',
    name: 'Inteligência Artificial aplicada',
    desc: 'Modelos de IA customizados para resolver problemas específicos do seu negócio — desde chatbots inteligentes até sistemas de recomendação, análise de dados e automação de decisões.',
  },
  {
    tag: 'Produto',
    name: 'SaaS & Plataformas Digitais',
    desc: 'Planejamento e desenvolvimento de produtos SaaS com lógica de assinatura, onboarding fluido e painéis de controle — com IA integrada onde faz sentido.',
  },
  {
    tag: 'Automação',
    name: 'Workflows inteligentes',
    desc: 'Automatizamos processos manuais com IA e integrações entre sistemas. Menos tarefas repetitivas, mais tempo para o que realmente importa.',
  },
  {
    tag: 'Interface',
    name: 'UX/UI para produtos digitais',
    desc: 'Interfaces desenhadas para serem usadas, não só vistas. Testadas com usuários reais, otimizadas para conversão e acessibilidade.',
  },
  {
    tag: 'Código',
    name: 'Desenvolvimento de software',
    desc: 'Arquitetura robusta, código limpo e escalável. Construímos para crescer com seu negócio — desde o MVP até a plataforma madura.',
  },
  {
    tag: 'Estratégia',
    name: 'Roadmap tecnológico',
    desc: 'Planejamos a evolução digital do seu negócio: quais tecnologias adotar, como integrar IA e por onde começar para gerar impacto rápido.',
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="servicos"
      className="mx-auto max-w-[1320px] px-5 py-[clamp(90px,12vw,150px)] sm:px-8"
    >
      <Reveal>
        <div className="eyebrow">O que fazemos</div>
      </Reveal>
      <h2 className="sr-only">Serviços da TABÁ</h2>

      <div className="mt-9">
        {services.map((s, i) => {
          const open = openIndex === i;
          return (
            <div
              key={s.name}
              role="button"
              tabIndex={0}
              aria-expanded={open}
              aria-controls={`service-desc-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenIndex(open ? null : i);
                }
              }}
              className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-6 border-t border-white/10 py-[30px] last:border-b focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-aqua"
            >
              <span className="font-display text-[13px] tracking-wide text-foam-dim">
                {s.tag}
              </span>
              <span
                className={`font-display text-[clamp(1.4rem,3.4vw,2.4rem)] font-medium transition-all duration-300 ${
                  open ? 'translate-x-1.5 text-aqua' : 'text-foam'
                }`}
              >
                {s.name}
              </span>
              <span className="relative h-[18px] w-[18px]">
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-foam" />
                <span
                  className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foam transition-transform duration-300 ${
                    open ? 'rotate-90 opacity-0' : ''
                  }`}
                />
              </span>
              <p
                id={`service-desc-${i}`}
                className={`col-span-3 max-w-[60ch] overflow-hidden text-sm text-foam-dim transition-all duration-500 ${
                  open
                    ? 'max-h-[200px] pt-3.5 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
