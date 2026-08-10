import React from 'react';

// Esteira de cima: "produto principal"
const materialImages = [
  'https://i.ibb.co/4RZZcXgN/produto-principal-8.jpg',
  'https://i.ibb.co/LdBTLgfD/produto-principal-9.jpg',
  'https://i.ibb.co/gLXVNyMc/produto-principal-10.jpg',
  'https://i.ibb.co/xRG4GRz/produto-principal-11.jpg',
  'https://i.ibb.co/jPTN7pSq/produto-principal-1.jpg',
];
const duplicatedImages = [...materialImages, ...materialImages, ...materialImages];

// Esteira de baixo: "mais do material"
const secondMaterialImages = [
  'https://i.ibb.co/xK9NZZGG/mais-do-que-voce-vai-receber-6.jpg',
  'https://i.ibb.co/gb1hkNpw/mais-do-que-voce-vai-receber-7.jpg',
  'https://i.ibb.co/N6kL42C6/mais-do-que-voce-vai-receber-8.jpg',
  'https://i.ibb.co/HLnpMLNV/mais-do-que-voce-vai-receber-9.jpg',
  'https://i.ibb.co/zh5Yf1Sx/mais-do-que-voce-vai-receber-10.jpg',
  'https://i.ibb.co/Z1M5RfbV/mais-do-que-voce-vai-receber-11.jpg',
];
const duplicatedSecondImages = [...secondMaterialImages, ...secondMaterialImages, ...secondMaterialImages];

export const MoreMaterialSection: React.FC = React.memo(() => {
  return (
    <section id="demonstracao-produto" className="py-8 md:py-12 bg-[#071A33] border-t border-white/10 relative z-10 overflow-hidden text-white">
      {/* Title */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 mb-6 text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
          VEJA ALGUNS DOS TREINOS QUE VOCÊ IRÁ RECEBER
        </h2>
      </div>

      {/* Marquee Track 1 - Moving Left */}
      <div className="relative w-full overflow-hidden py-2 group">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#071A33] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#071A33] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 w-max animate-marquee-more hover:[animation-play-state:paused] will-change-transform transform-gpu [backface-visibility:hidden]">
          {duplicatedImages.map((imgUrl, index) => {
            return (
              <img
                key={`more-1-${index}`}
                src={imgUrl}
                alt={`Página real do material ${index + 1}`}
                className="h-[200px] sm:h-[260px] md:h-[300px] w-auto shrink-0 rounded-xl object-contain shadow-xl border border-white/10 bg-[#0D2B52] p-1"
                loading="eager"
                decoding="async"
              />
            );
          })}
        </div>
      </div>

      {/* Marquee Track 2 - Moving Right (Opposite Direction) */}
      <div className="relative w-full overflow-hidden py-2 mt-2 sm:mt-4 group">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#071A33] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#071A33] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] will-change-transform transform-gpu [backface-visibility:hidden]">
          {duplicatedSecondImages.map((imgUrl, index) => {
            return (
              <img
                key={`more-2-${index}`}
                src={imgUrl}
                alt={`Página demonstrativa ${index + 1}`}
                className="h-[200px] sm:h-[260px] md:h-[300px] w-auto shrink-0 rounded-xl object-contain shadow-xl border border-white/10 bg-[#0D2B52] p-1"
                loading="eager"
                decoding="async"
              />
            );
          })}
        </div>
      </div>

      {/* Explanatory text without card container */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6 text-center">
        <h3 className="text-lg sm:text-xl font-black italic uppercase text-[#FF7A00] tracking-tight">
          +700 TREINOS ILUSTRADOS E EXPLICADOS PASSO A PASSO
        </h3>
      </div>

      <style>{`
        @keyframes marqueeMore {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        @keyframes marqueeReverse {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-more {
          animation: marqueeMore 28s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marqueeReverse 28s linear infinite;
        }
      `}</style>
    </section>
  );
});

