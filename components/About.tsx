import Reveal from './Reveal';
import MapPin from './MapPin';

export default function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1320px] px-5 py-[clamp(90px,12vw,150px)] sm:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative aspect-[1655/950] w-full overflow-hidden rounded-[18px] bg-[radial-gradient(60%_60%_at_30%_20%,rgba(127,231,196,0.16),transparent_60%),linear-gradient(200deg,#123B3C,#030B0A)]">
            <MapPin />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="eyebrow">Sobre a TABÁ</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-[18px] max-w-[16ch] font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-foam">
              Nascidos na Região dos Lagos. Construindo tecnologia que conecta o
              Brasil.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-[48ch] text-[15px] text-foam-dim">
              São Pedro da Aldeia pode ser uma cidade pequena, mas as conexões
              que fazemos são globais. Daqui, desenvolvemos tecnologia e IA para
              empresas de todo o país — com a mesma qualidade de qualquer grande
              centro, mas com a tranquilidade de quem trabalha onde a
              criatividade tem espaço.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-3.5 max-w-[48ch] text-[15px] text-foam-dim">
              A TABÁ nasceu da crença de que bons produtos digitais não precisam
              vir de grandes metrópoles. Precisam vir de gente que entende de
              tecnologia, de negócio e de gente — e que sabe aplicar isso com
              inteligência.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
