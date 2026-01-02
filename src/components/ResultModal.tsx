import React from 'react';
import { Fortune, Language } from '../types';

interface Props {
  fortune: Fortune;
  onClose: () => void;
  language: Language;
}

const UI_TEXT = {
  cn: {
    collect: "收入囊中",
    year: "2026 · 丙午年",
    horse: "馬"
  },
  en: {
    collect: "COLLECT",
    year: "2026 · Year of Horse",
    horse: "Horse"
  }
};

export const ResultModal: React.FC<Props> = ({ fortune, onClose, language }) => {
  // Get text based on language
  const text = fortune[language];
  const ui = UI_TEXT[language];

  // Split fortune into title and content 
  // CN uses '：', EN uses ': '
  const separator = language === 'cn' ? '：' : ': ';
  const [title, content] = text.includes(separator) 
    ? text.split(separator) 
    : [text, ''];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      
      {/* Paper Scroll/Strip */}
      <div className="relative w-full max-w-[320px] max-h-[85dvh] overflow-y-auto bg-[#fff1f1] border-8 border-red-200 rounded-sm shadow-[0_0_50px_rgba(255,215,0,0.5)] transform animate-[unfold-paper_0.6s_ease-out_forwards] origin-top flex flex-col scrollbar-hide">
        
        {/* Decorative pattern on paper */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        
        {/* Top Decoration */}
        <div className="h-6 sm:h-8 bg-red-600 w-full shrink-0 flex items-center justify-center">
             <div className="w-16 h-1 bg-yellow-400 rounded-full"></div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col items-center text-center relative flex-1">
          {/* Horse Stamp Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl opacity-5 pointer-events-none select-none font-serif">
            {ui.horse}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-red-600 mb-3 sm:mb-4 tracking-wider drop-shadow-sm font-serif">
            {title}
          </h2>
          
          {content && (
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed font-serif">
              {content}
            </p>
          )}

          <div className="mt-6 sm:mt-8 w-16 h-1 bg-red-200 rounded-full shrink-0"></div>
          <p className="mt-2 text-xs text-red-400 font-mono shrink-0">{ui.year}</p>
        </div>

        {/* Bottom Decoration */}
        <div className="h-4 bg-red-600 w-full mt-auto shrink-0"></div>

        {/* Close Button (Icon) */}
        <button 
            onClick={onClose}
            className="absolute top-1 right-1 sm:top-2 sm:right-2 text-white/80 hover:text-white font-bold text-xl px-2 py-1 z-10"
        >
            ×
        </button>
      </div>

      {/* Action Button - Positioned fixed bottom or below content */}
      <button 
        onClick={onClose}
        className="fixed bottom-8 sm:bottom-12 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 animate-pulse z-50 whitespace-nowrap border-2 border-yellow-200 uppercase"
      >
        {ui.collect}
      </button>

    </div>
  );
};

