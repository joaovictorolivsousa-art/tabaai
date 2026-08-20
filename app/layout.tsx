import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = 'https://taba.studio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'TABÁ — Tecnologia e IA para transformar negócios digitais',
  description:
    'TABÁ é um estúdio de tecnologia e inteligência artificial. Desenvolvemos produtos SaaS, automações com IA e plataformas digitais para empresas que precisam inovar — nascido em São Pedro da Aldeia, Região dos Lagos.',
  keywords: [
    'TABÁ',
    'tecnologia São Pedro da Aldeia',
    'IA Região dos Lagos',
    'desenvolvimento SaaS com IA',
    'automação inteligente',
    'produtos digitais Rio de Janeiro',
    'estúdio de tecnologia',
    'inteligência artificial aplicada',
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'TABÁ — Tecnologia que resolve, IA que transforma',
    description:
      'Estúdio de tecnologia e inteligência artificial para produtos SaaS, automações e plataformas digitais — da Região dos Lagos, RJ.',
    type: 'website',
    url: siteUrl,
    locale: 'pt_BR',
    siteName: 'TABÁ',
  },
  twitter: {
    card: 'summary',
    title: 'TABÁ — Tecnologia que resolve, IA que transforma',
    description:
      'Estúdio de tecnologia e inteligência artificial para produtos SaaS, automações e plataformas digitais — da Região dos Lagos, RJ.',
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23071A19'/%3E%3Cpath d='M4 20 Q10 14 16 20 T28 20' stroke='%237FE7C4' stroke-width='2' fill='none'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <body className="font-body font-light antialiased">{children}</body>
    </html>
  );
}
