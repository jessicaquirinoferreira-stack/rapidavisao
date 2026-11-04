import { CheckCircle, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { INCLUDED_SERVICES, WHATSAPP_LINKS } from '../data/constants';

export function ServicesIncluded() {
  return (
    <section id="servicos" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3.5 py-1 rounded-full mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Checklist Completo de Inspeção</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
            Todos os Serviços Inclusos na Nossa Vistoria
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Nenhum detalhe passa despercebido. Cada componente crítico de segurança, autenticidade e integridade física é checado por vistoriador experiente em Pelotas.
          </p>
        </div>

        {/* 12 Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INCLUDED_SERVICES.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-red-500/40 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1ea952] flex items-center justify-center shrink-0 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <h3 className="font-heading font-bold text-slate-900 text-base leading-snug group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pl-11">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-red-950/20">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Quer uma vistoria com laudo pericial completo de 20 páginas?
            </h3>
            <p className="text-red-100 text-sm sm:text-base">
              Apenas R$ 250,00 com histórico documental incluso. Vamos até o veículo em Pelotas.
            </p>
          </div>
          <a
            href={WHATSAPP_LINKS.hero}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-slate-100 active:scale-95 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
            <span>Falar com Gustavo</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
