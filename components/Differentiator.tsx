import Reveal from './Reveal';

const cards = [
  {
    title: 'IA nativa',
    text: 'Não tratamos IA como um add-on. Ela é parte integrante de tudo que construímos — desde a arquitetura até a interface, pensamos em como a inteligência artificial pode tornar o produto mais inteligente.',
  },
  {
    title: 'Tecnologia que resolve',
    text: 'Cada linha de código, cada modelo de IA, cada integração é escolhida para resolver um problema real. Não usamos tecnologia por tecnologia — usamos porque funciona.',
  },
  {
    title: 'Pensamento de produto',
    text: 'Não entregamos código e sumimos. Acompanhamos o uso, analisamos dados e iteramos. O produto nunca está pronto — está sempre evoluindo com IA e dados reais.',
  },
];

export default function Differentiator() {
  return (
    <section
      id="diferencial"
      className="mx-auto max-w-[1320px] px-5 py-[clamp(90px,12vw,150px)] sm:px-8"
    >
      <Reveal>
        <div className="eyebrow">Diferencial</div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-[22px] max-w-[26ch] font-display text-[clamp(1.4rem,2.6vw,2rem)] font-normal leading-[1.35] text-foam">
          Muitos entregam código. Poucos entregam{' '}
          <em className="not-italic text-aqua">tecnologia que resolve</em> — a
          diferença está em como a IA e a arquitetura servem ao seu negócio.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i as 0 | 1 | 2}>
            <h3 className="font-display text-[1.1rem] font-semibold text-aqua">
              {c.title}
            </h3>
            <p className="mt-3 text-sm text-foam-dim">{c.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
