/**
 * Mapa cartográfico de São Pedro da Aldeia — traçado autoral em SVG (não é
 * um recorte de mapa real) inspirado na peça de referência da marca: título
 * + linha de assinatura, bússola, rodovias, cidades vizinhas fora do quadro,
 * a Lagoa de Araruama, card de legenda e escala.
 *
 * O viewBox usa a mesma proporção do container (aspect-[1655/950]), então a
 * posição do pino pulsante em % sempre cai exatamente sobre o rótulo "São
 * Pedro da Aldeia", em qualquer tamanho de tela.
 */
export default function MapPin() {
  return (
    <>
      <svg
        viewBox="0 0 1655 950"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="aldeiaLand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E5C5A" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0A2A2A" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="aldeiaGlow" cx="30%" cy="47%" r="55%">
            <stop offset="0%" stopColor="#7FE7C4" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#7FE7C4" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1655" height="950" fill="#04100F" />
        <rect x="0" y="0" width="1655" height="950" fill="url(#aldeiaGlow)" />

        {/* grade náutica */}
        <g stroke="#EAE6DA" strokeOpacity="0.05" strokeWidth="1">
          <line x1="0" y1="190" x2="1655" y2="190" />
          <line x1="0" y1="380" x2="1655" y2="380" />
          <line x1="0" y1="570" x2="1655" y2="570" />
          <line x1="0" y1="760" x2="1655" y2="760" />
          <line x1="330" y1="0" x2="330" y2="950" />
          <line x1="660" y1="0" x2="660" y2="950" />
          <line x1="990" y1="0" x2="990" y2="950" />
          <line x1="1320" y1="0" x2="1320" y2="950" />
        </g>

        {/* massa de terra ao norte + península descendo até a cidade */}
        <path
          d="M0,0 H1655 V120
             C1560,150 1480,110 1400,140
             C1330,110 1260,150 1180,130
             C1080,160 1000,120 920,150
             C840,120 760,170 700,220
             C660,270 640,320 600,360
             C560,395 545,430 505,455
             C480,472 470,495 500,520
             C470,545 445,530 430,500
             C410,465 420,430 395,400
             C360,370 320,380 290,350
             C250,320 260,280 220,260
             C170,240 120,255 70,225
             C40,205 15,215 0,195 Z"
          fill="url(#aldeiaLand)"
        />
        <path
          d="M0,195 C15,215 40,205 70,225 C120,255 170,240 220,260 C260,280 250,320 290,350
             C320,380 360,370 395,400 C420,430 410,465 430,500 C445,530 470,545 500,520"
          fill="none"
          stroke="#7FE7C4"
          strokeOpacity="0.28"
          strokeWidth="1.5"
        />

        {/* restingas/ilhas ao sul */}
        <path
          d="M70,690 C110,672 155,682 172,706 C182,730 152,748 112,742 C78,736 56,712 70,690 Z"
          fill="url(#aldeiaLand)"
          opacity="0.85"
        />
        <path
          d="M905,720 C948,700 1000,710 1020,734 C1032,758 990,776 942,770 C905,764 888,736 905,720 Z"
          fill="url(#aldeiaLand)"
          opacity="0.85"
        />

        {/* estradas convergindo para o centro */}
        <g stroke="#EAE6DA" strokeOpacity="0.22" strokeWidth="1.5" fill="none">
          <path d="M500,520 C520,440 545,360 560,282" />
          <path d="M500,520 C420,480 350,440 280,398" />
          <path d="M500,520 C420,560 350,610 300,660" />
          <path d="M500,520 C560,570 610,640 645,720" />
          <path d="M500,520 C440,560 400,610 340,650" />
        </g>

        {/* título */}
        <text
          x="60"
          y="80"
          fontFamily="var(--font-display)"
          fontSize="34"
          fontWeight="600"
          letterSpacing="1.5"
          fill="#EAE6DA"
        >
          SÃO PEDRO DA ALDEIA
        </text>
        <rect x="60" y="98" width="60" height="3" fill="#7FE7C4" />
        <text
          x="60"
          y="130"
          fontFamily="var(--font-body)"
          fontSize="15"
          letterSpacing="2"
          fill="#B9C4BE"
        >
          RIO DE JANEIRO · BRASIL
        </text>

        {/* bússola */}
        <g transform="translate(1560,95)" opacity="0.55">
          <line x1="0" y1="-24" x2="0" y2="24" stroke="#EAE6DA" strokeWidth="1.5" />
          <path d="M0,-24 L-7,-9 L7,-9 Z" fill="#7FE7C4" />
          <text x="0" y="46" textAnchor="middle" fill="#EAE6DA" fontSize="14" letterSpacing="2">
            N
          </text>
        </g>

        {/* cidades vizinhas, fora do centro do mapa */}
        <g fill="#B9C4BE" fontFamily="var(--font-display)" fontSize="15" letterSpacing="1.5">
          <text x="620" y="122">CABO FRIO ▾</text>
          <text x="42" y="470">◂ IGUABA GRANDE</text>
        </g>

        {/* badges de rodovia */}
        <g fontFamily="var(--font-display)" fontSize="13" fill="#EAE6DA">
          <rect x="530" y="266" width="62" height="24" rx="4" fill="none" stroke="#EAE6DA" strokeOpacity="0.3" />
          <text x="561" y="282" textAnchor="middle">RJ-140</text>
          <rect x="252" y="382" width="62" height="24" rx="4" fill="none" stroke="#EAE6DA" strokeOpacity="0.3" />
          <text x="283" y="398" textAnchor="middle">RJ-106</text>
        </g>

        {/* lagoa */}
        <text
          x="1010"
          y="452"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="24"
          letterSpacing="3"
          fill="#7FE7C4"
          opacity="0.8"
        >
          LAGOA DE
        </text>
        <text
          x="1010"
          y="482"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="24"
          letterSpacing="3"
          fill="#7FE7C4"
          opacity="0.8"
        >
          ARARUAMA
        </text>

        {/* rótulo da cidade central (o pino pulsante fica em HTML, alinhado por %) */}
        <text
          x="500"
          y="454"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="27"
          fontWeight="600"
          fill="#EAE6DA"
        >
          SÃO PEDRO
        </text>
        <text
          x="500"
          y="486"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="27"
          fontWeight="600"
          fill="#EAE6DA"
        >
          DA ALDEIA
        </text>

        {/* card de legenda — some em telas pequenas para não poluir */}
        <g className="hidden sm:block" transform="translate(1280,432)">
          <rect
            width="335"
            height="340"
            rx="16"
            fill="#05100F"
            fillOpacity="0.55"
            stroke="#EAE6DA"
            strokeOpacity="0.1"
          />

          <g transform="translate(28,44)">
            <circle cx="10" cy="0" r="9" fill="none" stroke="#7FE7C4" strokeWidth="1.5" />
            <circle cx="10" cy="0" r="3" fill="#7FE7C4" />
            <text x="34" y="-3" fontFamily="var(--font-display)" fontSize="14" letterSpacing="1" fill="#EAE6DA">
              SÃO PEDRO DA ALDEIA
            </text>
            <text x="34" y="18" fontFamily="var(--font-body)" fontSize="12.5" fill="#B9C4BE">
              RJ · BRASIL
            </text>
          </g>
          <line x1="24" y1="86" x2="311" y2="86" stroke="#EAE6DA" strokeOpacity="0.08" />

          <g transform="translate(28,132)">
            <path
              d="M0,4 C4,-3 8,-3 12,4 C16,11 20,11 24,4"
              fill="none"
              stroke="#7FE7C4"
              strokeWidth="1.5"
            />
            <text x="34" y="-3" fontFamily="var(--font-display)" fontSize="14" letterSpacing="1" fill="#EAE6DA">
              LAGOA DE ARARUAMA
            </text>
            <text x="34" y="18" fontFamily="var(--font-body)" fontSize="12.5" fill="#B9C4BE">
              COSTA DO SOL
            </text>
          </g>
          <line x1="24" y1="174" x2="311" y2="174" stroke="#EAE6DA" strokeOpacity="0.08" />

          <g transform="translate(28,220)">
            <circle cx="10" cy="0" r="9" fill="none" stroke="#7FE7C4" strokeWidth="1.5" />
            <circle cx="10" cy="0" r="1.6" fill="#7FE7C4" />
            <text x="34" y="-3" fontFamily="var(--font-display)" fontSize="14" letterSpacing="1" fill="#EAE6DA">
              COORDENADAS
            </text>
            <text x="34" y="18" fontFamily="var(--font-body)" fontSize="12.5" fill="#B9C4BE">
              22°50'S 42°06'W
            </text>
          </g>
        </g>

        {/* escala */}
        <g className="hidden sm:block" transform="translate(1280,860)">
          <g stroke="#B9C4BE" strokeOpacity="0.4">
            <line x1="0" y1="0" x2="330" y2="0" />
            <line x1="0" y1="-5" x2="0" y2="5" />
            <line x1="110" y1="-5" x2="110" y2="5" />
            <line x1="220" y1="-5" x2="220" y2="5" />
            <line x1="330" y1="-5" x2="330" y2="5" />
          </g>
          <g fill="#B9C4BE" fontFamily="var(--font-body)" fontSize="12">
            <text x="0" y="24">0</text>
            <text x="100" y="24">2.5</text>
            <text x="212" y="24">5</text>
            <text x="308" y="24">7.5km</text>
          </g>
        </g>
      </svg>

      {/* pino pulsante — posicionado em % exatamente sobre "São Pedro da Aldeia"
          (500/1655, 520/950); o container mantém aspect-[1655/950], então a
          posição percentual bate com o SVG em qualquer largura de tela */}
      <span
        aria-hidden="true"
        className="ripple-ring absolute left-[30.2%] top-[54.7%] h-[13.9%] w-[8%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua/35"
      />
      <span
        aria-hidden="true"
        className="ripple-ring absolute left-[30.2%] top-[54.7%] h-[13.9%] w-[8%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua/35"
        style={{ animationDelay: "1.6s" }}
      />
      <span
        aria-hidden="true"
        className="ripple-ring absolute left-[30.2%] top-[54.7%] h-[13.9%] w-[8%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua/35"
        style={{ animationDelay: "3.2s" }}
      />
      <span
        aria-hidden="true"
        className="absolute left-[30.2%] top-[54.7%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua shadow-[0_0_12px_3px_rgba(127,231,196,0.6)]"
      />

      <span className="sr-only">
        Mapa estilizado de São Pedro da Aldeia, Região dos Lagos, Rio de Janeiro.
      </span>
    </>
  );
}
