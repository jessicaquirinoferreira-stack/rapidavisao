import { MessageCircle, Gauge, Activity, ShieldAlert, Cpu } from 'lucide-react';
import { ASSETS, WHATSAPP_LINKS } from '../data/constants';

export function PaintAndStructure() {
  return (
    <section id="analise-pintura" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-100/70 px-3.5 py-1 rounded-full mb-3">
            <Gauge className="w-4 h-4" />
            <span>Tecnologia de Precisão Micrométrica</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight [text-wrap:balance]">
            Análise Minuciosa de Pintura e Integridade Estrutural
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A olho nu é impossível enxergar camadas de massa plástica, repinturas imperceptíveis ou longarinas recuperadas com solda. Nós usamos medidor eletrônico de espessura e inspeção por ultrassom visual.
          </p>
        </div>

        {/* 3 Metric Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Item 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Pintura Original (80µm a 140µm)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Comprovamos se o veículo mantém a tinta aplicada na linha de montagem da montadora, garantindo a máxima valorização de mercado.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Repinturas & Retoques (160µm a 260µm)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Identificamos arranhões disfarçados, portas ou para-lamas repintados após pequenas batidas ou desbotamentos.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Massa Plástica & Colisões (300µm+)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Detectamos preenchimentos pesados de massa plástica resultantes de batidas fortes com danos estruturais disfarçados.
            </p>
          </div>
        </div>

        {/* Video & Structural Inspection Features Split */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left: Video */}
            <div className="lg:col-span-5 h-full min-h-[320px] relative bg-black flex items-center justify-center">
              <video
                src={ASSETS.paintVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover max-h-[420px]"
              />
              <div className="absolute top-4 left-4 bg-red-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded">
                AO VIVO NA VISTORIA
              </div>
            </div>

            {/* Right: Technical Explanation */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Vigas, Longarinas e Colunas: A Espinha Dorsal do Veículo
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Carros que sofreram cortes, estiramentos em mesa de tração ou emendas de solda em longarinas perdem a segurança passiva em caso de novas colisões e são sumariamente reprovados por seguradoras.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Inspeção minuciosa das soldas originais por pontos (Ponto de Fábrica)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Conferência de emendas na caixa de estepe, painel traseiro e torres de amortecedor</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Medição da espessura de pintura em 100% dos painéis da carroceria</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={WHATSAPP_LINKS.onlyPaint}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Solicitar Análise de Pintura e Estrutura</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
