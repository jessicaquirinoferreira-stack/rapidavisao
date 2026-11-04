import { Briefcase, ArrowRight, TrendingUp, CheckCircle, MessageCircle } from 'lucide-react';
import { ASSETS, WHATSAPP_LINKS } from '../data/constants';
import { ImageWithFallback } from './ImageWithFallback';

export function BusinessOpportunity() {
  return (
    <section id="oportunidade" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-5 h-full relative min-h-[300px] lg:min-h-[440px] bg-slate-950 p-4 flex items-center justify-center">
              <ImageWithFallback
                src={ASSETS.franchise}
                alt="Oportunidade de Negócio - Rápida Visão"
                fallbackTitle="Oportunidade de Negócio Rápida Visão"
                fallbackSubtitle="A melhor proposta do Brasil para ter sua própria unidade"
                className="w-full h-full object-contain max-h-[400px]"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white font-bold text-xs uppercase px-3 py-1 rounded-md shadow-md">
                Expansão Nacional
              </div>
            </div>

            {/* Copy & CTA */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950/80 border border-red-800/40 px-3.5 py-1.5 rounded-full">
                <Briefcase className="w-4 h-4 text-red-500" />
                <span>Modelo Altamente Lucrativo</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight [text-wrap:balance]">
                Oportunidade de Negócio
              </h2>

              <blockquote className="text-lg sm:text-xl font-medium text-slate-200 border-l-4 border-red-600 pl-4 py-1 italic">
                “Tenha uma Unidade e seja o primeiro na sua região, essa é a melhor proposta do Brasil.”
              </blockquote>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                O mercado de vistoria cautelar veicular cresce exponencialmente em todo o país. Conecte-se a uma marca experiente, com metodologia validada, suporte de vistoriadores de ponta e alta rentabilidade.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Baixo investimento inicial</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Retorno rápido do capital</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Treinamento técnico pericial</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Suporte operacional contínuo</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={WHATSAPP_LINKS.franchise}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Quero saber mais</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
