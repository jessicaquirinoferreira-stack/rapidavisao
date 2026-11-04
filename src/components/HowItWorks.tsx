import { MessageCircle, CalendarCheck, Search, FileText, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, WHATSAPP_LINKS } from '../data/constants';

const STEP_ICONS = [MessageCircle, CalendarCheck, Search, FileText];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3.5 py-1 rounded-full mb-3">
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
            Como Funciona a Vistoria Cautelar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Você não precisa se preocupar com logística ou deslocamento. Cuidamos de todo o processo de forma prática, rápida e transparente.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];

            return (
              <div
                key={step.step}
                className="relative flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-500/30 hover:bg-white hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono font-black text-3xl text-slate-300 group-hover:text-red-500 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] active:scale-95 text-white font-bold text-base px-8 py-4 rounded-xl shadow-md transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Iniciar Atendimento com Gustavo pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
