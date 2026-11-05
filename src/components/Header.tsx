import { useState } from 'react';
import { MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { ASSETS, COMPANY, WHATSAPP_LINKS } from '../data/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Brand Zone */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg p-1"
          >
            <img
              src={ASSETS.logo}
              alt="Rápida Visão Vistoria Cautelar"
              className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#servicos"
              className="hover:text-red-600 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Serviços
            </a>
            <a
              href="#precos"
              className="hover:text-red-600 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Preços
            </a>
            <a
              href="#google-avaliacoes"
              className="hover:text-red-600 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-red-600 flex items-center gap-1.5"
            >
              <span className="text-[#FBBC05] font-bold text-xs">★ 5.0</span>
              <span>Google</span>
            </a>
            <a
              href="#como-funciona"
              className="hover:text-red-600 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Como Funciona
            </a>
            <a
              href="#unidade-pelotas"
              className="hover:text-red-600 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-red-600 flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>Pelotas - RS</span>
            </a>
            <a
              href="#contato"
              className="hover:text-red-600 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Contato
            </a>
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] active:scale-95 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-white bg-[#25D366] rounded-lg active:scale-95 transition-transform"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 px-2 space-y-2 animate-in fade-in duration-150 bg-white">
            <div className="px-3 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>{COMPANY.unit}</span>
            </div>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg hover:text-red-600 transition-colors"
            >
              Serviços Inclusos
            </a>
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg hover:text-red-600 transition-colors"
            >
              Tabela de Preços (a partir de R$ 100)
            </a>
            <a
              href="#google-avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg hover:text-red-600 transition-colors"
            >
              ★ 5.0 no Google (Certificado Oficial)
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg hover:text-red-600 transition-colors"
            >
              Como Funciona o Agendamento
            </a>
            <a
              href="#analise-pintura"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg hover:text-red-600 transition-colors"
            >
              Análise de Pintura & Estrutura
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg hover:text-red-600 transition-colors"
            >
              Contato & Localização
            </a>
            <div className="pt-2">
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 px-4 rounded-lg shadow-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chamar Gustavo no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
