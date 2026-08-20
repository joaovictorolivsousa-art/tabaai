/**
 * Mockup visual de um fluxo de agendamento (SaaS de barbearias) — não é um
 * screenshot real, é uma composição autoral que ilustra o produto: grade de
 * horários, seleção de profissional, confirmação via WhatsApp. Paleta local
 * em grafite + dourado, ecoando a identidade visual real definida para esse
 * produto (diferente do teal da TABÁ, de propósito — é a marca do cliente).
 */
export default function BookingMock() {
  const slots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
  const activeSlot = 3;

  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-[#1a1512] to-bg-deep p-4">
      {/* topo: profissional selecionado */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[10px] font-semibold text-[#D4AF37]">
            M
          </span>
          <div>
            <p className="font-display text-[11px] font-semibold leading-none text-foam">
              Marcos · Barbeiro
            </p>
            <p className="mt-1 text-[9px] text-foam-dim">
              Corte + barba · 50 min
            </p>
          </div>
        </div>
        <span className="rounded-full border border-[#D4AF37]/30 px-2 py-0.5 text-[9px] uppercase tracking-wide text-[#D4AF37]">
          Hoje
        </span>
      </div>

      {/* grade de horários */}
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {slots.map((s, i) => (
          <div
            key={s}
            className={`rounded-md border py-1.5 text-center text-[10px] ${
              i === activeSlot
                ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]"
                : "border-white/10 text-foam-dim"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* confirmação */}
      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-[10px]">
        <span className="text-foam-dim">Cliente confirma via WhatsApp</span>
        <span className="rounded-full bg-[#D4AF37]/15 px-2 py-0.5 text-[#D4AF37]">
          Reservado
        </span>
      </div>
    </div>
  );
}
