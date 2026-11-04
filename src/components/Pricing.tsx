import { useState } from 'react';
import { MessageCircle, Check, Star, ZoomIn, X } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/constants';
import { ImageWithFallback } from './ImageWithFallback';

export function Pricing() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="precos" className="py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-100/80 px-3.5 py-1 rounded-full mb-3">
            <Star className="w-4 h-4 fill-red-600 text-red-600" />
            <span>Valores Claros & Sem Surpresas</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight [text-wrap:balance]">
            Preços e Opções de Vistoria
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A vistoria cautelar mais rápida, detalhada e barata de Pelotas. Fotos completas de cada modelo de laudo e serviço. Clique nas imagens para ampliar em tela cheia.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isFeatured = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl transition-all duration-300 ${
                  isFeatured
                    ? 'bg-white border-2 border-red-600 shadow-2xl shadow-red-600/15 lg:-translate-y-3 ring-4 ring-red-600/10'
                    : 'bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Popular Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 fill-white" />
                      {pkg.badge || 'MAIS PROCURADO'}
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Image Container - FULL PHOTO DISPLAY (object-contain with zero crop) */}
                  <div
                    onClick={() => setSelectedPhoto({ src: pkg.image, title: pkg.title })}
                    className="relative rounded-t-3xl overflow-hidden h-52 sm:h-56 bg-gradient-to-b from-slate-900 to-slate-950 p-2 border-b border-slate-200 cursor-pointer group"
                    title="Clique para ver a foto completa em alta resolução"
                  >
                    <ImageWithFallback
                      src={pkg.image}
                      alt={pkg.title}
                      fallbackTitle={pkg.title}
                      fallbackSubtitle={`Pacote Rápida Visão por ${pkg.price}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* View Full Photo Overlay Badge */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-white/95 text-slate-900 text-xs font-bold py-1.5 px-3 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-xs">
                        <ZoomIn className="w-3.5 h-3.5 text-red-600" />
                        <span>Ver Foto Completa</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2 right-2 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded pointer-events-none">
                      Pelotas - RS
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="font-heading font-extrabold text-lg text-slate-900 leading-snug min-h-[50px]">
                      {pkg.title}
                    </h3>

                    {/* Price Block */}
                    <div className="mt-4 pb-4 border-b border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading font-black text-3xl sm:text-4xl text-slate-950 tabular-nums">
                          {pkg.price}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="mt-5 space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0 mt-4">
                  <a
                    href={pkg.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm py-3.5 px-4 rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md ${
                      isFeatured
                        ? 'bg-[#25D366] hover:bg-[#1ea952] text-white'
                        : 'bg-slate-900 hover:bg-red-600 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Price Clarification Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            * O valor de <strong className="text-slate-800">R$ 250,00</strong> corresponde à vistoria cautelar estrutural completa com histórico documental incluso (20 páginas em PDF). Deslocamento até o local do veículo em Pelotas já incluso nos agendamentos da cidade.
          </p>
        </div>
      </div>

      {/* Full Photo Modal / Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden border border-slate-700 p-2 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-slate-800 text-white">
              <span className="font-heading font-bold text-sm sm:text-base">
                {selectedPhoto.title} — Imagem Completa
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
