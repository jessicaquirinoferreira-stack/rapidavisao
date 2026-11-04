import { useState } from 'react';
import { ShieldCheck, Car } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  imgClassName?: string;
  containerClassName?: string;
}

export function ImageWithFallback({
  src,
  alt = 'Rápida Visão',
  className = '',
  imgClassName = '',
  fallbackTitle,
  fallbackSubtitle,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden ${className}`}
        style={{ minHeight: '180px' }}
      >
        <div className="absolute inset-0 bg-red-600/10 pointer-events-none" />
        <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center mb-3">
          <Car className="w-6 h-6 text-red-500" />
        </div>
        <p className="font-heading font-bold text-base text-white tracking-wide">
          {fallbackTitle || alt || 'Rápida Visão'}
        </p>
        <p className="text-xs text-slate-400 mt-1 max-w-xs">
          {fallbackSubtitle || 'Vistoria Cautelar Especializada • Pelotas - RS'}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-red-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
          <span>Laudo Técnico de Alta Precisão</span>
        </div>
      </div>
    );
  }

  // Determine fit: if imgClassName has object-contain or className has object-contain, use that
  const fitClass = imgClassName.includes('object-')
    ? imgClassName
    : className.includes('object-contain')
    ? 'object-contain'
    : 'object-cover';

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <Car className="w-6 h-6 text-slate-300 animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full ${fitClass} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}
