import Reveal from './Reveal';

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="mx-auto max-w-[1320px] px-5 py-[clamp(90px,12vw,150px)] sm:px-8"
    >
      <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[0.7fr_1.3fr] md:gap-[60px]">
        <Reveal>
          <div className="eyebrow">Manifesto</div>
        </Reveal>

        <div>
          <Reveal delay={1}>
            <h2 className="max-w-[14ch] font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.05] text-foam">
              Tecnologia não resolve tudo. Mas a certa, aplicada no lugar certo,
              transforma qualquer negócio.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-[18px] max-w-[56ch] text-[clamp(15px,1.4vw,17px)] text-foam-dim">
              Na TABÁ, acreditamos que tecnologia e inteligência artificial são
              ferramentas, não fins. O que importa é o problema que elas
              resolvem — e como isso muda o dia a dia de quem usa.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-[18px] max-w-[56ch] text-[clamp(15px,1.4vw,17px)] text-foam-dim">
              Por isso, cada projeto começa com uma pergunta simples: o que
              precisa ser automatizado, otimizado ou reinventado? A partir daí,
              escolhemos as melhores ferramentas — IA, automação, interfaces
              inteligentes — para construir a solução certa.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-[18px] max-w-[56ch] text-[15px] font-normal text-foam">
              O resultado é tecnologia que parece feita sob medida. Porque é.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
