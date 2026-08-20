"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form handler / API route / email service.
    setSent(true);
  }

  const inputClass =
    "w-full border-b border-white/10 bg-transparent px-0.5 py-2.5 text-[15px] text-foam transition-colors duration-300 focus:border-aqua focus:outline-none";
  const selectClass = `${inputClass} appearance-none bg-[right_2px_center] bg-no-repeat pr-5 [background-image:url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20fill='%23B9C4BE'%3E%3Cpath%20d='M5.5%207.5l4.5%205%204.5-5z'/%3E%3C/svg%3E")]`;
  const labelClass =
    "mb-2 block text-xs uppercase tracking-[0.08em] text-foam-dim";
  // O popup nativo do <select> ignora o tema escuro do site e renderiza com
  // fundo claro; sem cor explícita aqui o texto (herdado claro) fica
  // ilegível sobre esse fundo. Forçamos contraste direto nas <option>.
  const optionStyle = { color: "#0B1615", backgroundColor: "#FFFFFF" };

  return (
    <section
      id="contato"
      className="mx-auto max-w-[1320px] px-5 py-[clamp(90px,12vw,150px)] sm:px-8"
    >
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <Reveal>
            <div className="eyebrow">Contato</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-[18px] max-w-[12ch] font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-foam">
              Conte o que precisa existir.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-[40ch] text-[15px] text-foam-dim">
              Respondemos em até 2 dias úteis. Se preferir algo mais direto,
              fale com a gente pelo WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <a
              href="https://wa.me/5522900000000?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20um%20projeto%20com%20a%20TAB%C3%81"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 px-5 py-3 text-[13px] transition-colors duration-300 hover:border-aqua hover:text-aqua"
            >
              Falar no WhatsApp →
            </a>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <form onSubmit={handleSubmit} className="max-w-xl">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className={labelClass}>
                  Nome
                </label>
                <input id="nome" name="nome" type="text" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="empresa" className={labelClass}>
                  Empresa
                </label>
                <input id="empresa" name="empresa" type="text" className={inputClass} />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input id="email" name="email" type="email" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="orcamento" className={labelClass}>
                  Faixa de investimento
                </label>
                <select id="orcamento" name="orcamento" defaultValue="" className={selectClass}>
                  <option value="" disabled style={optionStyle}>
                    Selecione
                  </option>
                  <option value="Ainda não sei" style={optionStyle}>Ainda não sei</option>
                  <option value="Até R$ 5 mil" style={optionStyle}>Até R$ 5 mil</option>
                  <option value="R$ 5 mil – R$ 10 mil" style={optionStyle}>R$ 5 mil – R$ 10 mil</option>
                  <option value="R$ 10 mil – R$ 20 mil" style={optionStyle}>R$ 10 mil – R$ 20 mil</option>
                  <option value="R$ 20 mil+" style={optionStyle}>R$ 20 mil+</option>
                </select>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="necessidade" className={labelClass}>
                  O que você precisa?
                </label>
                <textarea
                  id="necessidade"
                  name="necessidade"
                  required
                  rows={3}
                  className={`${inputClass} resize-y`}
                />
              </div>
              <div>
                <label htmlFor="prazo" className={labelClass}>
                  Prazo desejado
                </label>
                <select id="prazo" name="prazo" defaultValue="" className={selectClass}>
                  <option value="" disabled style={optionStyle}>
                    Selecione
                  </option>
                  <option value="O quanto antes" style={optionStyle}>O quanto antes</option>
                  <option value="Próximos 30 dias" style={optionStyle}>Próximos 30 dias</option>
                  <option value="1–3 meses" style={optionStyle}>1–3 meses</option>
                  <option value="Ainda não definido" style={optionStyle}>Ainda não definido</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-aqua px-[26px] py-[15px] font-display text-sm font-semibold text-bg-deep transition-transform duration-400 hover:-translate-y-0.5"
            >
              Começar conversa <span>→</span>
            </button>
            <p className="mt-3.5 text-xs text-foam-dim" role="status" aria-live="polite">
              {sent && "Mensagem recebida. Retornamos em breve."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
