/**
 * Mockup visual de um chatbot de atendimento + painel de pedidos (SaaS para
 * lanchonetes) — não é um screenshot real, é uma composição autoral que
 * ilustra o produto: conversa do cliente à esquerda, ticket do pedido
 * estruturado à direita, mostrando o chatbot alimentando o painel em tempo
 * real.
 */
export default function ChatbotMock() {
  return (
    <div className="absolute inset-0 flex items-stretch gap-2.5 bg-gradient-to-br from-teal900 to-bg-deep p-3.5">
      {/* conversa do chatbot */}
      <div className="flex flex-1 flex-col justify-end gap-1.5">
        <div className="self-start rounded-lg rounded-bl-sm bg-white/[0.06] px-2.5 py-1.5 text-[9.5px] text-foam-dim">
          Quero um X-burger e uma batata grande
        </div>
        <div className="self-end rounded-lg rounded-br-sm bg-aqua/15 px-2.5 py-1.5 text-[9.5px] text-aqua">
          Fechado! Retirada ou entrega?
        </div>
        <div className="self-start rounded-lg rounded-bl-sm bg-white/[0.06] px-2.5 py-1.5 text-[9.5px] text-foam-dim">
          Entrega, por favor
        </div>
      </div>

      {/* ticket do pedido, gerado a partir da conversa */}
      <div className="flex w-[38%] flex-col justify-between rounded-xl border border-white/10 bg-black/20 p-2.5">
        <div>
          <p className="font-display text-[9px] uppercase tracking-[0.14em] text-foam-dim">
            Pedido #052
          </p>
          <ul className="mt-1.5 space-y-1 text-[9.5px] text-foam">
            <li>1× X-burger</li>
            <li>1× Batata G</li>
          </ul>
        </div>
        <span className="mt-2 self-start rounded-full bg-aqua/15 px-2 py-0.5 text-[9px] text-aqua">
          Em preparo
        </span>
      </div>
    </div>
  );
}
