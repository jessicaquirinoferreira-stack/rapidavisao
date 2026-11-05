import { MessageCircle, MapPin, Phone, ShieldCheck, ArrowUp } from 'lucide-react';
import { ASSETS, COMPANY, WHATSAPP_LINKS } from '../data/constants';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-2 inline-block shadow-md border border-slate-700">
                <img
                  src={ASSETS.logo}
                  alt="Rápida Visão Vistoria Cautelar"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {COMPANY.tagline} Vistoria cautelar automotiva preventiva, medição detalhada de pintura e histórico documental completo com laudo em PDF.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{COMPANY.unit} (Atendimento a domicílio)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {COMPANY.phoneDisplay} — Gustavo</span>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços Inclusos
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">
                  Tabela de Preços
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#analise-pintura" className="hover:text-white transition-colors">
                  Análise de Pintura
                </a>
              </li>
              <li>
                <a href="#unidade-pelotas" className="hover:text-white transition-colors">
                  Unidade Pelotas
                </a>
              </li>
              <li>
                <a href="#oportunidade" className="hover:text-white transition-colors">
                  Oportunidade de Negócio
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Serviços & Laudos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#precos" className="hover:text-white transition-colors">
                  Cautelar com Histórico (R$ 250)
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">
                  Cautelar sem Histórico (R$ 200)
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">
                  Somente Pintura (R$ 180)
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">
                  Somente Histórico (R$ 100)
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Laudo 20 Páginas em PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Atendimento Rápido
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Fale diretamente com o Gustavo para agendar sua vistoria hoje mesmo em Pelotas.
            </p>
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] active:scale-95 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all w-full justify-center"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              © {new Date().getFullYear()} Rápida Visão — Vistoria Cautelar. Todos os direitos reservados.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors p-1"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
