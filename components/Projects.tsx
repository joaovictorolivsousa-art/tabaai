import Reveal from './Reveal';
import DashboardMock from './DashboardMock';
import BrowserPreview from './BrowserPreview';
import BookingMock from './BookingMock';
import ChatbotMock from './ChatbotMock';

type Visual = 'dashboard' | 'browser' | 'shine' | 'booking' | 'chatbot';

interface Project {
  category: string;
  name: string;
  desc: string;
  result: string;
  visual: Visual;
  url?: string;
  previewUrl?: string;
  status?: 'live' | 'upcoming' | 'concept';
}

const projects: Project[] = [
  {
    category: 'Site Institucional',
    name: 'Delicata Odontologia',
    desc: 'Site para clínica odontológica em São Pedro da Aldeia (RJ), construído para transmitir o atendimento humanizado da clínica e facilitar o agendamento de novos pacientes.',
    result: 'No ar em delicataodontologia.com.br',
    visual: 'browser',
    url: 'https://www.delicataodontologia.com.br',
    previewUrl: 'delicataodontologia.com.br',
    status: 'live',
  },
  {
    category: 'Produto SaaS · Projeto conceitual',
    name: 'Órbita',
    desc: 'Plataforma de gestão financeira para freelancers, com painel de fluxo de caixa e emissão de cobranças recorrentes — desenvolvida para demonstrar como a TABÁ pensa produto, não um cliente real.',
    result:
      'Sem cliente ou dado real associado — usado aqui para mostrar raciocínio de produto e interface',
    visual: 'dashboard',
    status: 'concept',
  },
  {
    category: 'Landing Page',
    name: 'Dra. Letícia Barreto',
    desc: 'Landing page com foco em conversão e portfólio para uma dentista em São Pedro da Aldeia (RJ), construída para transmitir confiança e facilitar o agendamento de avaliações.',
    result: 'No ar em draleticiabarreto.com.br',
    visual: 'browser',
    url: 'https://draleticiabarreto.com.br',
    previewUrl: 'draleticiabarreto.com.br',
    status: 'live',
  },
  {
    category: 'Produto SaaS · Projeto conceitual',
    name: 'Agenda do Barbeiro',
    desc: 'Sistema de agendamento White Label (PWA) para barbearias: cliente escolhe profissional, serviço, horário numa grade dinâmica e confirma pelo WhatsApp — barbeiro acompanha tudo num painel próprio. Código único, customizável por barbearia via arquivo de configuração.',
    result:
      'Sem cliente ou dado real associado — projeto em concepção, usado aqui para mostrar o raciocínio de fluxo e interface',
    visual: 'booking',
    status: 'concept',
  },
  {
    category: 'Automação com IA · Projeto conceitual',
    name: 'Atendimento para Lanchonetes',
    desc: 'Chatbot com inteligência artificial que recebe o pedido do cliente por conversa e organiza tudo num painel de cozinha em tempo real — primeira vertical de uma plataforma de automação multi-negócio pensada para fast-food, floricultura, bar, depósito e clínica.',
    result:
      'Sem cliente ou dado real associado — projeto em concepção, usado aqui para mostrar o raciocínio de produto e automação',
    visual: 'chatbot',
    status: 'concept',
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="mx-auto max-w-[1320px] px-5 py-[clamp(90px,12vw,150px)] sm:px-8"
    >
      <Reveal>
        <div className="eyebrow">Projetos</div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-[18px] max-w-[18ch] font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold text-foam">
          Alguns lugares onde já colocamos a mão.
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="mt-4 max-w-[52ch] text-[14.5px] text-foam-dim">
          Cases reais — no ar ou em construção — ao lado de projetos conceituais
          usados aqui para demonstrar como pensamos produto, SaaS e automação
          com IA. Espaço estruturado para receber mais cases conforme os
          projetos avançam.
        </p>
      </Reveal>

      <div className="mt-[50px]">
        {projects.map((p, i) => {
          const card = (
            <div className="group grid grid-cols-1 items-center gap-6 border-t border-white/10 py-11 last:border-b sm:grid-cols-[1fr_320px] sm:gap-10">
              <div className="order-2 sm:order-1">
                <span className="text-xs uppercase tracking-[0.14em] text-aqua">
                  {p.category}
                </span>
                <h3 className="mt-2.5 flex items-center gap-2.5 font-display text-[clamp(1.5rem,3.2vw,2.6rem)] font-semibold text-foam">
                  {p.name}
                  {p.url && (
                    <span className="text-[13px] font-normal text-foam-dim transition-transform duration-300 group-hover:translate-x-1 group-hover:text-aqua">
                      ↗
                    </span>
                  )}
                </h3>
                <p className="mt-2.5 max-w-[48ch] text-[14.5px] text-foam-dim">
                  {p.desc}
                </p>
                <p className="mt-3.5 text-[13px] tracking-wide text-foam">
                  {p.status === 'upcoming'
                    ? 'Status'
                    : p.status === 'concept'
                    ? 'Natureza do projeto'
                    : 'Resultado'}{' '}
                  <span className="text-aqua">· {p.result}</span>
                </p>
              </div>
              <div className="relative order-1 h-[150px] overflow-hidden rounded-2xl bg-gradient-to-br from-teal700 to-bg-deep transition-transform duration-500 group-hover:-translate-y-1 sm:order-2 sm:h-[190px]">
                {p.visual === 'dashboard' && <DashboardMock />}
                {p.visual === 'booking' && <BookingMock />}
                {p.visual === 'chatbot' && <ChatbotMock />}
                {p.visual === 'browser' && (
                  <BrowserPreview
                    url={p.previewUrl ?? p.name}
                    label={p.name}
                    status={p.status}
                  />
                )}
                {p.visual === 'shine' && (
                  <div className="absolute inset-0 -translate-x-[60%] bg-gradient-to-r from-transparent via-aqua/20 to-transparent transition-transform duration-700 group-hover:translate-x-[60%]" />
                )}
              </div>
            </div>
          );

          return (
            <Reveal key={p.name} delay={(i % 3) as 0 | 1 | 2}>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
