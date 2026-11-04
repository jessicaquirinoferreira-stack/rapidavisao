import { useState } from 'react';
import { MessageCircle, Phone, MapPin, User, Send, CheckCircle2, Copy, Check, Info } from 'lucide-react';
import { COMPANY, WHATSAPP_LINKS, getWhatsAppUrl } from '../data/constants';

export function ContactSection() {
  const [carModel, setCarModel] = useState('');
  const [location, setLocation] = useState('');
  const [selectedService, setSelectedService] = useState('Vistoria Cautelar com Histórico (R$ 250)');
  const [copiedGmb, setCopiedGmb] = useState(false);
  const [showGmbModal, setShowGmbModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Gustavo! Gostaria de agendar ${selectedService}.${
      carModel ? `\nVeículo: ${carModel}` : ''
    }${location ? `\nLocal em Pelotas: ${location}` : ''}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const copyGmbData = () => {
    const data = `Nome da Empresa: Rápida Visão — Vistoria Cautelar
Categoria Principal: Vistoria veicular
Categoria Secundária: Serviço de inspeção de veículos
Telefone / WhatsApp: (53) 99712-2093
Cidade / Estado: Pelotas - RS
Site Oficial: https://rapidavisao.com.br
Área de Cobertura: Pelotas e Zona Sul do Rio Grande do Sul
Horário de Funcionamento: Segunda a Sábado das 08:00 às 19:00
Descrição: Vistoria cautelar automotiva completa com histórico documental, medição de espessura de pintura peça por peça, checagem de vigas, longarinas, chassi e motor. Atendimento a domicílio em Pelotas e região.`;
    navigator.clipboard.writeText(data);
    setCopiedGmb(true);
    setTimeout(() => setCopiedGmb(false), 2500);
  };

  return (
    <section id="contato" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-100/80 px-3.5 py-1 rounded-full mb-3">
            <Phone className="w-4 h-4 text-red-600" />
            <span>Fale Direto com o Vistoriador</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
            Entre em Contato com a Rápida Visão
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tire suas dúvidas ou agende sua vistoria cautelar em Pelotas diretamente com o Gustavo pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <h3 className="font-heading font-bold text-xl text-slate-900">
              Informações de Contato
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Responsável</p>
                  <p className="text-base font-bold text-slate-900">{COMPANY.contactPerson}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">WhatsApp / Telefone</p>
                  <a
                    href={WHATSAPP_LINKS.general}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#25D366] hover:underline"
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Unidade</p>
                  <p className="text-base font-bold text-slate-900">{COMPANY.unit}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Atendimento móvel em toda a cidade e região</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ea952] active:scale-95 text-white font-bold text-base py-4 px-6 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Falar com Gustavo</span>
              </a>
            </div>

            {/* Google My Business Quick Tool for Owner/Users */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowGmbModal(!showGmbModal)}
                className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 p-3 rounded-xl border border-slate-200 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Ficha Google Meu Negócio (SEO Local Pelotas)</span>
                </span>
                <span className="text-blue-600">{showGmbModal ? 'Ocultar' : 'Ver Dados'}</span>
              </button>

              {showGmbModal && (
                <div className="mt-3 p-4 rounded-xl bg-slate-900 text-white text-xs space-y-2 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-slate-200">Dados para Cadastro Google Perfil</span>
                    <button
                      type="button"
                      onClick={copyGmbData}
                      className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-[11px] transition-colors"
                    >
                      {copiedGmb ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedGmb ? 'Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                  <p><strong className="text-red-400">Nome:</strong> Rápida Visão — Vistoria Cautelar</p>
                  <p><strong className="text-red-400">Categoria:</strong> Vistoria veicular / Serviço de inspeção de veículos</p>
                  <p><strong className="text-red-400">Cidade:</strong> Pelotas - RS</p>
                  <p><strong className="text-red-400">Telefone:</strong> (53) 99712-2093</p>
                  <p><strong className="text-red-400">Website:</strong> https://rapidavisao.com.br</p>
                  <p className="text-[11px] text-slate-400 pt-1">
                    Ideal para rankear no topo do Google Maps em "Vistoria Cautelar Pelotas".
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Quick Agendamento Simulator / Pre-fill */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
              Simulador de Agendamento Rápido
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Preencha os dados do veículo abaixo para enviar uma mensagem personalizada e acelerar seu atendimento no WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Serviço Desejado
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-800 bg-white"
                >
                  <option value="Vistoria Cautelar Estrutural com Histórico (R$ 250)">
                    Vistoria Cautelar Estrutural com Histórico (R$ 250,00) - MAIS PROCURADO
                  </option>
                  <option value="Vistoria Cautelar Estrutural sem Histórico (R$ 200)">
                    Vistoria Cautelar Estrutural sem Histórico (R$ 200,00)
                  </option>
                  <option value="Somente Análise de Pintura (R$ 180)">
                    Somente Análise de Pintura (R$ 180,00)
                  </option>
                  <option value="Somente Histórico Documental (R$ 100)">
                    Somente Histórico Documental (R$ 100,00)
                  </option>
                  <option value="Oportunidade de Negócio / Franquia">
                    Oportunidade de Negócio / Ter uma Unidade
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Modelo e Ano do Veículo
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Onix 2021, Civic 2019..."
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Bairro / Local em Pelotas
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Fernando Osório, Centro, Três Vendas..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm text-slate-800"
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Atendimento sem compromisso</span>
                </div>
                <p>Ao clicar no botão abaixo, a conversa será aberta diretamente no WhatsApp do Gustavo com sua mensagem pronta.</p>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ea952] active:scale-95 text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg transition-all"
              >
                <Send className="w-5 h-5 fill-white" />
                <span>Enviar para WhatsApp do Gustavo</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
