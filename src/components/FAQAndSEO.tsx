import { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQ_ITEMS } from '../data/constants';

export function FAQAndSEO() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-4 h-4 text-red-600" />
            <span>Dúvidas Frequentes & Perguntas</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
            Perguntas Frequentes sobre Vistoria Cautelar em Pelotas
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Tudo o que você precisa saber antes de fechar negócio em um veículo usado ou seminovo na cidade de Pelotas - RS.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-red-100 text-red-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Local SEO Educational Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-slate-700 space-y-4">
          <div className="flex items-center gap-2 font-heading font-bold text-slate-900 text-base">
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <span>Por que escolher a Rápida Visão para Vistoria Cautelar em Pelotas?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Seja você um comprador particular ou investidor procurando <strong>perícia automotiva em Pelotas</strong>, <strong>vistoriador de automóveis em Pelotas</strong> ou um <strong>perito veicular especializado em Pelotas - RS</strong>, a <strong>Rápida Visão</strong> oferece a vistoria mais experiente, detalhada e rápida do mercado por apenas <strong>R$ 250,00 com histórico documental completo</strong>. Proteja seu patrimônio contra carros clonados, sinistrados ou com emendas de solda em longarinas.
          </p>
        </div>
      </div>
    </section>
  );
}
