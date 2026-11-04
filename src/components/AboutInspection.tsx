import { useState, useRef } from 'react';
import { MessageCircle, FileCheck, Layers, Eye, Play, Pause, Volume2, VolumeX, Check } from 'lucide-react';
import { ASSETS, WHATSAPP_LINKS } from '../data/constants';

export function AboutInspection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="sobre" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-md">
              <FileCheck className="w-4 h-4" />
              <span>Transparência & Rigor Técnico</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              Sobre a Vistoria Cautelar da{' '}
              <span className="text-red-600">Rápida Visão</span>
            </h2>

            {/* Mandatory Exact Quote */}
            <blockquote className="text-slate-700 text-lg sm:text-xl leading-relaxed border-l-4 border-red-600 pl-4 py-1 italic bg-slate-50 rounded-r-xl p-4">
              “Laudo bem claro: medimos a pintura peça por peça e analisamos vigas e longarinas estruturais, pneus, vidros e numerações de motor e chassi. Se precisar de vídeo, é só solicitar antes de realizar a vistoria. Nossa vistoria com histórico documental traz, em média, 20 páginas de informações em um PDF bem nítido, feito por vistoriador experiente.”
            </blockquote>

            <p className="text-slate-600 leading-relaxed text-base">
              Ao comprar um carro seminovo ou usado em Pelotas, você não pode contar apenas com a sorte ou a palavra do vendedor. Nossa vistoria cautelar preventiva descobre se o automóvel já teve colisões graves, se o chassi ou motor foram adulterados, se há peças substituídas e se a documentação esconde leilão ou pendências judiciais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">20 Páginas em PDF</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Fotos nítidas de cada item verificado</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Vídeo sob Solicitação</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Vídeo gravado caso solicitado previamente</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={WHATSAPP_LINKS.scheduleInspection}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ea952] active:scale-95 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Solicitar minha vistoria</span>
              </a>
            </div>
          </div>

          {/* Right Column: Demonstration Video Player */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-200">
              <div className="relative aspect-[9/16] sm:aspect-[4/5] max-h-[560px] mx-auto bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={ASSETS.paintVideo}
                  playsInline
                  loop
                  muted={isMuted}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Overlay Controls */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
                  <button
                    onClick={togglePlay}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all active:scale-90"
                    aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                  </button>

                  <div className="text-center px-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                      Demonstração da Pintura
                    </span>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all active:scale-90"
                    aria-label={isMuted ? 'Ativar som' : 'Silenciar som'}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>

                {/* Big Center Play Button if paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
                    aria-label="Iniciar reprodução"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </button>
                )}
              </div>

              {/* Caption Box */}
              <div className="p-4 bg-slate-900 text-white text-xs flex items-center justify-between border-t border-slate-800">
                <span className="text-slate-300">Medição técnica com micrômetro digital</span>
                <span className="text-red-400 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Peça por Peça
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
