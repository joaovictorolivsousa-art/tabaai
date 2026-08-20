import Reveal from './Reveal';

export default function CTAFinal() {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-[clamp(110px,16vw,180px)] text-center sm:px-8">
      <Reveal className="flex justify-center">
        <div className="eyebrow">Vamos começar</div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mx-auto mt-8 max-w-[16ch] font-display text-[clamp(2.2rem,6vw,4.6rem)] font-semibold text-foam">
          Vamos construir a tecnologia certa para seu negócio?
        </h2>
      </Reveal>
      <Reveal delay={2} className="mt-10 flex justify-center">
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full bg-aqua px-[34px] py-[18px] font-display text-base font-semibold text-bg-deep transition-transform duration-400 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(127,231,196,0.5)]"
        >
          Falar com a TABÁ <span>→</span>
        </a>
      </Reveal>
    </section>
  );
}
