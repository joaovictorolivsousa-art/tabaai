'use client';

import { useState } from 'react';

const links = [
  { href: '#servicos', label: 'O que fazemos' },
  { href: '#projetos', label: 'Cases' },
  { href: '#processo', label: 'Como trabalhamos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-5 sm:px-8 mix-blend-difference">
      <a
        href="#top"
        className="font-display text-lg font-semibold tracking-wide"
      >
        TABÁ
      </a>

      <div className="hidden md:flex items-center gap-9 text-[13px] tracking-wide">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="relative group py-1">
            {l.label}
            <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-400 group-hover:w-full" />
          </a>
        ))}
        <a
          href="#contato"
          className="rounded-full border border-foam px-[18px] py-[9px] text-xs tracking-wide transition-colors duration-300 hover:bg-foam hover:text-bg-deep"
        >
          Falar com a TABÁ
        </a>
      </div>

      <button
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex md:hidden flex-col gap-[5px] w-6"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="h-px w-full bg-foam" />
        <span className="h-px w-full bg-foam" />
        <span className="h-px w-full bg-foam" />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed top-[64px] left-0 right-0 z-50 flex flex-col gap-5 border-b border-white/10 bg-bg p-6 md:hidden"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit rounded-full border border-foam px-4 py-2 text-xs"
          >
            Falar com a TABÁ
          </a>
        </div>
      )}
    </nav>
  );
}
