export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1320px] border-t border-white/10 px-5 pb-28 pt-14 sm:px-8 md:pb-14">
      <div className="flex flex-wrap justify-between gap-8">
        <div>
          <div className="font-display text-xl font-semibold">TABÁ</div>
          <div className="mt-2 text-[13px] text-foam-dim">
            Tecnologia e IA · São Pedro da Aldeia — RJ, Brasil
          </div>
        </div>
        <div className="flex flex-wrap gap-7 text-[13px] text-foam-dim">
          <a href="mailto:ola@taba.studio" className="hover:text-aqua">
            ola@taba.studio
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-aqua"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-aqua"
          >
            LinkedIn
          </a>
          <a href="#contato" className="hover:text-aqua">
            Contato
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-between gap-2.5 text-[11px] text-foam-dim">
        <span>
          © {new Date().getFullYear()} TABÁ. Todos os direitos reservados.
        </span>
        <span>Design & desenvolvimento próprios.</span>
      </div>
    </footer>
  );
}
