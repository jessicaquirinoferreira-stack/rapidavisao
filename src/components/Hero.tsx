import { useState } from 'react';
import { MessageCircle, ShieldCheck, MapPin, FileText, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { ASSETS, COMPANY, WHATSAPP_LINKS } from '../data/constants';

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105 transform duration-1000"
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
        {/* Measured Scrim for WCAG readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-slate-950/50 to-slate-950" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center flex flex-col items-center">
        {/* Google 5.0 Official Badge Kicker */}
        <a
          href="#google-avaliacoes"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-white mb-4 transition-colors group cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          <span className="font-bold text-[#FBBC05] tracking-wide">
            5.0 ★★★★★
          </span>
          <span className="text-slate-200">Certificado Oficial Google</span>
          <span className="text-white/40">·</span>
          <span className="text-emerald-400 font-semibold underline underline-offset-2 group-hover:text-emerald-300">
            284+ Avaliações
          </span>
        </a>

        {/* Location & Trust Header Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-slate-200 mb-6">
          <MapPin className="w-4 h-4 text-red-500 shrink-0" />
          <span>Atendimento em toda a cidade de Pelotas - RS e Região</span>
          <span className="text-white/40">·</span>
          <span className="text-emerald-400 font-semibold">Vamos até o veículo</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.15] max-w-4xl [text-wrap:balance]">
          Cautelar <span className="text-red-500 font-extrabold">R$ 250,00</span> —{' '}
          <span className="text-white">Experiente, Detalhada, Rápida e Barata!</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-2xl font-medium text-slate-200 max-w-2xl">
          Chame no WhatsApp:{' '}
          <a
            href={WHATSAPP_LINKS.hero}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:underline font-bold inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>{COMPANY.phoneDisplay}</span>
            <span className="text-slate-300 font-normal">— {COMPANY.contactPerson}</span>
          </a>
        </p>

        {/* Red Highlight Stripe */}
        <div className="mt-6 w-full max-w-3xl">
          <div className="bg-red-600/90 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-red-400/40 shadow-lg shadow-red-900/30 backdrop-blur-sm">
            “O valor de R$ 250,00 corresponde à vistoria cautelar com histórico documental.”
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={WHATSAPP_LINKS.hero}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ea952] active:scale-95 text-white font-bold text-lg sm:text-xl px-8 py-4 rounded-xl shadow-xl shadow-emerald-950/40 hover:shadow-2xl hover:shadow-emerald-900/50 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span>Chamar Gustavo no WhatsApp</span>
          </a>

          <a
            href="#precos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold text-base px-6 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
          >
            <span>Ver Todas as Opções de Preço</span>
          </a>
        </div>

        {/* Highlights Row */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl text-left">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Laudo em PDF</p>
              <p className="text-slate-400 text-xs">Média de 20 páginas nítidas</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Pintura & Estrutura</p>
              <p className="text-slate-400 text-xs">Medição peça por peça</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Atendimento Móvel</p>
              <p className="text-slate-400 text-xs">Pelotas e cidades vizinhas</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Histórico Completo</p>
              <p className="text-slate-400 text-xs">Leilão, sinistro e débitos</p>
            </div>
          </div>
        </div>

        {/* Audio Toggle for Hero Video */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200 transition-colors bg-black/40 px-3 py-1.5 rounded-full border border-white/10"
          title={isMuted ? 'Ativar som do vídeo' : 'Silenciar vídeo'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          <span>{isMuted ? 'Vídeo em reprodução silenciosa' : 'Áudio ativado'}</span>
        </button>
      </div>
    </section>
  );
}
