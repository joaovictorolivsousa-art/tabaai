/**
 * Barra de CTA persistente, visível apenas em mobile (abaixo de md), fixada
 * no rodapé da viewport. Fica discreta (fundo translúcido, borda fina) e não
 * cobre o rodapé real do site — some sozinha ao chegar perto do fim da
 * página graças ao formulário de contato já ter seu próprio CTA visível.
 */
export default function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center border-t border-white/10 bg-bg-deep/85 px-5 py-3 backdrop-blur-sm md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="#contato"
        className="flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-aqua px-6 py-3 font-display text-sm font-semibold text-bg-deep"
      >
        Começar um projeto <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
