import { useState } from 'react';
import { MessageCircle, Send, X, ShieldCheck, ExternalLink, Instagram } from 'lucide-react';
import { ASSETS, COMPANY, WHATSAPP_LINKS, getWhatsAppUrl } from '../data/constants';

export function FloatingElements() {
  const [chatOpen, setChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [conversation, setConversation] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: 'Olá! Sou a assistente virtual da Rápida Visão. Como posso ajudar com sua vistoria cautelar?',
    },
  ]);

  const handleSendMessage = (textToSend?: string) => {
    const msg = textToSend || inputMessage;
    if (!msg.trim()) return;

    // Add user message to simulation
    setConversation((prev) => [...prev, { sender: 'user', text: msg }]);
    setInputMessage('');

    // Open WhatsApp with message
    setTimeout(() => {
      const whatsappUrl = getWhatsAppUrl(
        `Olá! Sou cliente em Pelotas e estava conversando com a assistente virtual da Rápida Visão:\n"${msg}"`
      );
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <>
      {/* LEFT SIDE: Floating Virtual Assistant */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-50 flex flex-col items-start">
        {/* Chat Window Popup */}
        {chatOpen && (
          <div className="mb-4 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-200">
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={ASSETS.assistantAvatar}
                    alt="Assistente Virtual Rápida Visão"
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Assistente Rápida Visão</h4>
                  <p className="text-[11px] text-emerald-400 font-medium">Online agora • Pelotas - RS</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fechar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="p-4 bg-slate-50 space-y-3 max-h-[260px] overflow-y-auto text-xs">
              {conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-red-600 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Quick shortcut replies */}
              <div className="pt-2 space-y-1.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Sugestões rápidas:
                </p>
                <button
                  type="button"
                  onClick={() =>
                    handleSendMessage(
                      'Olá! Gostaria de agendar a vistoria cautelar com histórico por R$ 250,00.'
                    )
                  }
                  className="w-full text-left p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium transition-colors text-[11px]"
                >
                  🚗 Agendar Vistoria com Histórico (R$ 250)
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleSendMessage(
                      'Olá! Quero saber como funciona o atendimento móvel em Pelotas.'
                    )
                  }
                  className="w-full text-left p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium transition-colors text-[11px]"
                >
                  📍 Atendimento no local do veículo em Pelotas
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleSendMessage('Olá, Gustavo! Tenho uma dúvida sobre o laudo da vistoria.')
                  }
                  className="w-full text-left p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium transition-colors text-[11px]"
                >
                  📋 Dúvida sobre o laudo de 20 páginas
                </button>
              </div>
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Digite sua dúvida ou mensagem..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <button
                type="submit"
                className="p-2 bg-[#25D366] hover:bg-[#1ea952] text-white rounded-xl transition-colors shrink-0"
                aria-label="Enviar para WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Floating Bubble Trigger */}
        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          className="group relative flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 pl-2 pr-4 py-2 rounded-full shadow-2xl border border-slate-200 transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Assistente Virtual Rápida Visão"
        >
          <div className="relative">
            <img
              src={ASSETS.assistantAvatar}
              alt="Assistente Virtual"
              className="w-12 h-12 rounded-full object-cover border-2 border-red-500 shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-bold text-slate-900 leading-tight">Assistente Virtual</p>
            <p className="text-[10px] text-emerald-600 font-semibold">Tire suas dúvidas</p>
          </div>
        </button>
      </div>

      {/* RIGHT SIDE: Floating Vertical Actions (Instagram & WhatsApp) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3 items-end">
        {/* Instagram Floating Button */}
        <a
          href={COMPANY.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group relative"
          aria-label="Acompanhe nosso Instagram"
        >
          <Instagram className="w-6 h-6 stroke-[2.2]" />
          <span className="sr-only">Instagram</span>
          {/* Tooltip on hover */}
          <span className="absolute right-15 bg-slate-900 text-white text-xs font-medium py-1 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Siga @rapidavisao
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={WHATSAPP_LINKS.general}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ea952] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 group relative ring-4 ring-[#25D366]/30 animate-pulse hover:animate-none"
          aria-label="Falar no WhatsApp com Gustavo"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="sr-only">WhatsApp</span>
          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md flex items-center gap-1.5">
            <span>Chamar Gustavo</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </span>
        </a>
      </div>
    </>
  );
}
