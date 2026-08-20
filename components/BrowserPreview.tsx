interface BrowserPreviewProps {
  url: string;
  label: string;
  status?: "live" | "upcoming" | "concept";
}

/**
 * Preview estilo "navegador" para cases que linkam (ou vão linkar) para um
 * site próprio. Evita depender de screenshot estático (que quebra quando o
 * site do cliente muda). Quando status="upcoming", mostra um badge "Em breve"
 * e não deve ser usado dentro de um <a> clicável — o site ainda não existe.
 */
export default function BrowserPreview({
  url,
  label,
  status = "live",
}: BrowserPreviewProps) {
  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-teal700 to-bg-deep">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-foam/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-foam/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-foam/25" />
        <span className="ml-2 truncate rounded-full bg-white/5 px-2.5 py-1 text-[9.5px] text-foam-dim">
          {url}
        </span>
        {status === "upcoming" && (
          <span className="ml-auto shrink-0 rounded-full bg-aqua/15 px-2 py-0.5 text-[9px] uppercase tracking-wide text-aqua">
            Em breve
          </span>
        )}
      </div>
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -translate-x-[60%] bg-gradient-to-r from-transparent via-aqua/10 to-transparent transition-transform duration-700 group-hover:translate-x-[60%]" />
        <span className="font-display text-sm font-medium tracking-wide text-foam-dim">
          {label}
        </span>
      </div>
    </div>
  );
}
