import Reveal from './Reveal';

const steps = [
  {
    num: '01',
    title: 'Descoberta',
    desc: 'Entendemos seu negócio, seus dados e seus desafios. Identificamos onde a tecnologia e a IA podem gerar mais impacto.',
  },
  {
    num: '02',
    title: 'Arquitetura',
    desc: 'Desenhamos a solução: quais tecnologias, quais modelos de IA, como os dados vão fluir e como o usuário vai interagir.',
  },
  {
    num: '03',
    title: 'Construção',
    desc: 'Desenvolvimento ágil, com testes contínuos e validação com usuários reais. IA integrada de forma nativa, não como um plug-in.',
  },
  {
    num: '04',
    title: 'Lançamento',
    desc: 'Colocamos no ar, monitoramos, aprendemos com os dados e iteramos. O produto nunca para de evoluir.',
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="mx-auto max-w-[1320px] px-5 py-[clamp(90px,12vw,150px)] sm:px-8"
    >
      <Reveal>
        <div className="eyebrow">Processo</div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-[18px] max-w-[16ch] font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold text-foam">
          Como a tecnologia ganha forma aqui dentro.
        </h2>
      </Reveal>

      <div className="mt-14 border-t border-white/10">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={(i % 3) as 0 | 1 | 2} className="relative">
            <div className="grid grid-cols-[70px_1fr] gap-7 border-b border-white/10 py-8">
              <div className="pt-1.5 font-display text-[13px] text-aqua">
                {s.num}
              </div>
              <div>
                <h3 className="font-display text-[clamp(1.2rem,2.6vw,1.8rem)] font-medium text-foam">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[52ch] text-sm text-foam-dim">
                  {s.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
