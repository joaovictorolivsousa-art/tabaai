/**
 * Mockup visual de um painel de gestão (SaaS), usado para ilustrar o tipo de
 * produto que a TABÁ projeta e constrói — não é um screenshot real, é uma
 * composição autoral pensada para transmitir precisão e autoridade:
 * números grandes, grade sóbria, pouca cor, hierarquia clara.
 */
export default function DashboardMock() {
  const bars = [38, 62, 47, 81, 56, 90, 68];

  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-teal900 to-bg-deep p-4">
      {/* topo: identidade do painel + status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
          <span className="font-display text-[10px] uppercase tracking-[0.16em] text-foam-dim">
            Painel · Visão geral
          </span>
        </div>
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-wide text-foam-dim">
          Ao vivo
        </span>
      </div>

      {/* KPIs principais */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-foam-dim">
            Receita recorrente
          </p>
          <p className="font-display text-[1.55rem] font-semibold leading-none text-foam">
            R$ 184<span className="text-[0.6em] text-foam-dim">.2k</span>
          </p>
          <p className="mt-1 text-[10px] text-aqua">▲ 12,4% no mês</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wide text-foam-dim">
            Contas ativas
          </p>
          <p className="font-display text-[1.55rem] font-semibold leading-none text-foam">
            1<span className="text-[0.6em] text-foam-dim">,204</span>
          </p>
          <p className="mt-1 text-[10px] text-aqua">▲ 3,1% no mês</p>
        </div>
      </div>

      {/* mini gráfico de barras */}
      <div className="mt-3 flex h-10 items-end gap-[5px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${
              i === bars.length - 2 ? "bg-aqua" : "bg-foam/20"
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      {/* linha de tabela — registro recente */}
      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-[10px]">
        <span className="text-foam-dim">Fatura #A-0231</span>
        <span className="rounded-full bg-aqua/15 px-2 py-0.5 text-aqua">
          Paga
        </span>
      </div>
    </div>
  );
}
