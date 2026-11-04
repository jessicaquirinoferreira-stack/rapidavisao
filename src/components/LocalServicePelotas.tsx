import { MapPin, Navigation, Clock, ShieldCheck, MessageCircle, Building2 } from 'lucide-react';
import { COMPANY, WHATSAPP_LINKS } from '../data/constants';

export function LocalServicePelotas() {
  const bairros = [
    'Avenida Fernando Osório (Lojas de Carros)',
    'Avenida Bento Gonçalves',
    'Avenida Duque de Caxias',
    'Centro de Pelotas',
    'Três Vendas',
    'Areal / Dunas',
    'Fragata',
    'Laranjal / Balneário',
    'São Gonçalo',
    'Capão do Leão e Região Imediata',
  ];

  return (
    <section id="unidade-pelotas" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-100/80 px-3.5 py-1 rounded-full">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>{COMPANY.unit}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              Atendimento Rápido: <br />
              <span className="text-red-600">“Vamos até a localização do veículo.”</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Você encontrou um carro à venda na internet, em uma loja ou na casa do proprietário em Pelotas? <strong>Nós vamos diretamente até o local</strong> onde o automóvel está estacionado.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Deslocamento Móvel em Pelotas</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Atendemos garagens particulares, concessionárias e lojas em todas as principais avenidas comerciais de Pelotas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Mora fora de Pelotas? Nós vistoriamos para você!</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Se você é de Porto Alegre, Rio Grande, Bagé, Canguçu ou de outro estado e vai comprar em Pelotas, realizamos a perícia completa, filmamos tudo e enviamos o laudo detalhado antes de você viajar ou transferir o dinheiro.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Agendamento Ágil no Mesmo Dia</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Entre em contato com o Gustavo e combine o horário de vistoria sem burocracia.
                  </p>
                </div>
              </div>
            </div>

            {/* Neighborhoods tags */}
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Bairros e polos atendidos em Pelotas:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
                {bairros.map((b, bIdx) => (
                  <span key={bIdx} className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] active:scale-95 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Combinar Local com Gustavo</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Map & Location Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="font-bold text-sm">Pelotas - Rio Grande do Sul</span>
                </div>
                <span className="text-xs text-slate-300">Área de Atendimento Presencial</span>
              </div>

              {/* Embedded Google Maps frame for Pelotas RS */}
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <iframe
                  title="Localização Pelotas - RS"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108422.58462058448!2d-52.417387431267575!3d-31.74864459891822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b590059e3557%3A0xe54e2ecf5777bc34!2sPelotas%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Atendimento em domicílio e garagens
                </span>
                <span className="font-mono font-bold text-red-600">Pelotas - RS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
