import { Award, ShieldCheck, Check, MessageCircle, Star } from 'lucide-react';
import { ASSETS, WHATSAPP_LINKS, COMPANY } from '../data/constants';
import { ImageWithFallback } from './ImageWithFallback';

export function Credibility() {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column: Inspector in official uniform with logo on back */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 to-amber-500 opacity-25 blur-lg group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-950">
                <ImageWithFallback
                  src={ASSETS.inspectorUniform}
                  alt="Vistoriador Rápida Visão com jaleco oficial com logo nas costas"
                  fallbackTitle="Vistoriador com Jaleco Oficial Rápida Visão"
                  fallbackSubtitle="Profissionais qualificados com uniforme técnico e medidores calibrados"
                  className="w-full h-auto object-cover max-h-[440px]"
                />
                <div className="p-4 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-slate-200 font-semibold">
                      Jaleco e Uniforme Oficial Rápida Visão com Logo
                    </span>
                  </div>
                  <span className="text-red-400 font-bold uppercase tracking-wider">
                    Padrão de Excelência Pelotas
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-strip with official inspectors photo */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 flex items-center gap-3">
                <img
                  src={ASSETS.bestInspectors}
                  alt="Equipe de vistoriadores"
                  className="w-14 h-14 object-cover rounded-lg shrink-0 border border-slate-700"
                />
                <div className="text-[11px]">
                  <p className="font-bold text-white">Equipe Certificada</p>
                  <p className="text-slate-400">Os melhores do Brasil</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-2 flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 border border-red-500/30">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="text-[11px]">
                  <p className="font-bold text-white">Laudo Imparcial</p>
                  <p className="text-slate-400">Sem conchavo com lojas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950/80 border border-red-800/40 px-3.5 py-1.5 rounded-full">
              <Award className="w-4 h-4 text-red-500" />
              <span>Autoridade em Vistoria Cautelar</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
              Os melhores vistoriadores do Brasil.
            </h2>

            <p className="text-lg sm:text-xl font-medium text-slate-300 leading-snug">
              “Experiência, precisão e atenção aos detalhes em cada etapa da vistoria.”
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Comprar um veículo sem vistoria é assumir o risco de adquirir um carro que já foi capotado, com chassi remarcado ilegalmente ou recuperado de leilão de seguradora. Na Rápida Visão Pelotas, cada vistoria é executada por vistoriador perito que examina centenas de pontos críticos antes de emitir o laudo final.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm text-slate-300">
                  Instrumentos de medição calibrados para detectar qualquer variação de tinta em micras
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm text-slate-300">
                  Cruzamento de dados com bases governamentais, DETRAN, BIN e seguradoras
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm text-slate-300">
                  Atendimento ágil com laudo completo entregue no mesmo dia pelo WhatsApp
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ea952] active:scale-95 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Conversar com o Gustavo</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400 px-3 py-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantia de laudo imparcial e independente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
