import React from 'react';
import type { WindowType } from '../../types';

interface HeaderProps {
  lang: 'pt' | 'en';
  onOpenWindow: (type: WindowType, title: string) => void;
  onChangeLanguage: (lang: 'pt' | 'en') => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onOpenWindow,
  onChangeLanguage,
}) => {
  const labels = {
    pt: { about: 'SOBRE', work: 'PROJETOS', stack: 'STACK', contact: 'CONTATO' },
    en: { about: 'ABOUT', work: 'PROJECTS', stack: 'STACK', contact: 'CONTACT' },
  };

  return (
    <header className="flex justify-between items-center px-3 sm:px-8 md:px-12 py-2 sm:py-6 border-b-4 border-black z-50 relative gap-2 sm:gap-4 flex-nowrap overflow-x-auto" style={{
      background: 'repeating-linear-gradient(-45deg, #FFB380 0px, #FFB380 15px, #FFAA66 15px, #FFAA66 16px)'
    }}>
      <div className="text-sm sm:text-2xl font-black tracking-tight flex-shrink-0">dev.ryan</div>
      <nav className="flex gap-1 sm:gap-3 items-center flex-shrink-1 overflow-x-auto">
        {(Object.keys(labels[lang]) as WindowType[]).map((section) => (
          <button
            key={section}
            onClick={() => onOpenWindow(section, labels[lang][section])}
            className={`px-1.5 sm:px-4 py-1.5 sm:py-3 border-2 border-black font-bold text-[9px] sm:text-xs uppercase tracking-wider transition-all duration-150 rounded-md shadow-[1.5px_1.5px_0_rgba(0,0,0,0.7)] sm:shadow-[4px_4px_0_rgba(0,0,0,0.7)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-[0_0_0_rgba(0,0,0,0.1)] hover:translate-x-0.5 hover:translate-y-0.5 bg-orange-400 flex-shrink-0`}
          >
            {labels[lang][section]}
          </button>
        ))}
        <button
          onClick={() => onChangeLanguage('pt')}
          className={`px-1.5 sm:px-4 py-1.5 sm:py-3 border-2 border-black font-bold text-[9px] sm:text-xs uppercase tracking-wider transition-all duration-150 rounded-md shadow-[1.5px_1.5px_0_rgba(0,0,0,0.7)] sm:shadow-[4px_4px_0_rgba(0,0,0,0.7)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-[0_0_0_rgba(0,0,0,0.1)] hover:translate-x-0.5 hover:translate-y-0.5 bg-orange-600 text-white flex-shrink-0`}
        >
          PT
        </button>
        <button
          onClick={() => onChangeLanguage('en')}
          className={`px-1.5 sm:px-4 py-1.5 sm:py-3 border-2 border-black font-bold text-[9px] sm:text-xs uppercase tracking-wider transition-all duration-150 rounded-md shadow-[1.5px_1.5px_0_rgba(0,0,0,0.7)] sm:shadow-[4px_4px_0_rgba(0,0,0,0.7)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.5)] active:shadow-[0_0_0_rgba(0,0,0,0.1)] hover:translate-x-0.5 hover:translate-y-0.5 bg-orange-600 text-white flex-shrink-0`}
        >
          EN
        </button>
      </nav>
    </header>
  );
};
