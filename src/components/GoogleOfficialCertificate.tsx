import { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageCircle, ExternalLink, ThumbsUp } from 'lucide-react';
import { GOOGLE_CERTIFICATE, GOOGLE_REVIEWS_LIST, COMPANY, WHATSAPP_LINKS } from '../data/constants';

export function GoogleLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official Google Wordmark Colors */}
      <path
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.33 22.25 22.18zm-9.74 0c0-7.98-5.79-13.6-12.51-13.6-6.72 0-12.52 5.62-12.52 13.6 0 7.9 5.8 13.6 12.52 13.6 6.72 0 12.51-5.7 12.51-13.6z"
        fill="#EA4335"
      />
      <path
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.33 22.25 22.18zm-9.74 0c0-7.98-5.79-13.6-12.51-13.6-6.72 0-12.52 5.62-12.52 13.6 0 7.9 5.8 13.6 12.52 13.6 6.72 0 12.51-5.7 12.51-13.6z"
        fill="#FBBC05"
      />
      <path
        d="M209.75 26.34v40.74c0 16.76-9.89 23.64-21.57 23.64-10.98 0-17.58-7.37-20.06-13.33l8.5-3.54c1.51 3.63 5.19 7.87 11.56 7.87 7.42 0 12.01-4.59 12.01-13.23v-3.23h-.34c-2.18 2.69-6.38 5.04-11.67 5.04-11.08 0-21.23-9.67-21.23-22.09 0-12.51 10.15-22.27 21.23-22.27 5.29 0 9.49 2.35 11.67 4.96h.34v-3.61h9.56zm-8.86 21.01c0-7.81-5.2-13.6-12.01-13.6-6.88 0-12.51 5.79-12.51 13.6 0 7.73 5.63 13.43 12.51 13.43 6.81 0 12.01-5.7 12.01-13.43z"
        fill="#4285F4"
      />
      <path d="M225.75 3.34h9.74v66.02h-9.74z" fill="#34A853" />
      <path
        d="M260.67 54.07l7.73 5.15c-2.52 3.73-8.56 10.14-18.72 10.14-12.68 0-22.16-9.83-22.16-22.18 0-13.18 9.57-22.18 21.07-22.18 11.59 0 17.21 9.16 19.06 14.11l1.01 2.52-29.38 12.17c2.27 4.45 5.8 6.72 10.83 6.72 5.04 0 8.48-2.52 10.56-6.45zm-19.9-7.56l19.64-8.15c-1.09-2.77-4.45-4.7-8.48-4.7-5.12 0-12.26 4.53-11.16 12.85z"
        fill="#EA4335"
      />
      <path
        d="M35.64 41.83V53.2h26.44c-1.05 5.73-6.62 16.78-26.44 16.78-15.93 0-28.93-13.2-28.93-29.47S19.71 11.04 35.64 11.04c9.08 0 15.15 3.87 18.62 7.18l8.99-8.66C57.48 4.09 47.45 0 35.64 0 15.96 0 0 15.96 0 35.64s15.96 35.64 35.64 35.64c20.57 0 34.22-14.47 34.22-34.82 0-2.34-.25-4.11-.56-5.87l-33.66.24z"
        fill="#4285F4"
      />
    </svg>
  );
}

export function GoogleOfficialCertificate() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pelotas' | 'historico'>('all');

  const filteredReviews = GOOGLE_REVIEWS_LIST.filter((review) => {
    if (activeFilter === 'pelotas') return review.city.includes('Pelotas');
    if (activeFilter === 'historico') return review.service.includes('Histórico');
    return true;
  });

  return (
    <section id="google-avaliacoes" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certificate Hero Seal Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden mb-16">
          {/* Subtle Google Colors Accent Top Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/4 bg-[#4285F4]" />
            <div className="w-1/4 bg-[#EA4335]" />
            <div className="w-1/4 bg-[#FBBC05]" />
            <div className="w-1/4 bg-[#34A853]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Google Certificate Badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="mb-3">
                <GoogleLogo className="h-9 w-auto" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                Certificado Oficial de Excelência
              </span>

              {/* Big 5.0 Rating */}
              <div className="my-4 flex items-baseline gap-2">
                <span className="font-heading font-black text-6xl text-slate-900 tracking-tight tabular-nums">
                  {GOOGLE_CERTIFICATE.rating}
                </span>
                <span className="text-xl font-bold text-slate-400">/ 5.0</span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1.5 text-[#FBBC05] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#FBBC05]" />
                ))}
              </div>

              <p className="text-xs font-semibold text-slate-700">
                Classificação Máxima de 5.0 Estrelas
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Com base em <strong>{GOOGLE_CERTIFICATE.totalReviews} avaliações reais</strong> no Google
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200 w-full flex items-center justify-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Empresa Verificada no Google</span>
              </div>
            </div>

            {/* Right: Certificate Information & Trust Statement */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Google Meu Negócio • Vistoria Cautelar Pelotas - RS</span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
                Certificado Oficial Google com Avaliação 5.0
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                A <strong>Rápida Visão — Vistoria Cautelar</strong> conquistou reputação de <strong>5.0 estrelas no Google</strong> por oferecer um atendimento técnico rigoroso, transparente, sem surpresas e com o melhor custo-benefício de Pelotas (a partir de R$ 250 com histórico completo).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">100% Imparcial</p>
                  <p className="text-slate-500 mt-0.5">Laudos independentes sem conchavo com lojas</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">Agilidade Presencial</p>
                  <p className="text-slate-500 mt-0.5">Atendimento móvel no local do carro em Pelotas</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">20 Páginas em PDF</p>
                  <p className="text-slate-500 mt-0.5">Relatório nítido entregue no mesmo dia</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Falar com Gustavo no WhatsApp</span>
                </a>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
                  <span>Satisfação 100% garantida</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Reviews Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                Avaliações Recentes de Clientes no Google
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Depoimentos reais de quem comprou carro em Pelotas com laudo da Rápida Visão
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Todas ({GOOGLE_REVIEWS_LIST.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('pelotas')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeFilter === 'pelotas'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pelotas - RS
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('historico')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeFilter === 'historico'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Com Histórico
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Review Header with Google G */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-heading font-bold text-sm flex items-center justify-center">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-sm text-slate-900">{rev.author}</p>
                        <p className="text-[11px] text-slate-500">{rev.city} • {rev.timeAgo}</p>
                      </div>
                    </div>
                    {/* Official Google G Logo icon */}
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center p-1">
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#FBBC05]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05]" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* Service Tag */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-700">{rev.service}</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Avaliação Verificada
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
