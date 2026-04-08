import React, { useEffect, useState } from 'react';
import { AboutContent, ContactContent, StackContent, WorkContent } from '../components/content';
import { Footer, Header, HeroSection, LoadingScreen } from '../components/layout';
import { WindowFrame } from '../components/ui';
import { TRANSLATIONS } from '../constants';
import { useLanguage, useWindowManager } from '../hooks';
import type { WindowState } from '../types';

export const HomeScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { lang, setLang } = useLanguage();
  const {
    windows,
    openWindow,
    closeWindow,
    toggleMinimize,
    toggleMaximize,
    bringToFront,
    updateWindowPosition,
  } = useWindowManager();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const getWindowTitle = (win: WindowState) => {
    const t = TRANSLATIONS[lang];
    if (win.type === 'about') return t.about.title;
    if (win.type === 'work') return t.work.title;
    if (win.type === 'stack') return t.stack.title;
    if (win.type === 'contact') return t.contact.title;
    return win.title;
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans text-black" style={{
      background: 'repeating-linear-gradient(-45deg, #FFB380 0px, #FFB380 15px, #FFAA66 15px, #FFAA66 16px)'
    }}>
      <Header
        lang={lang}
        onOpenWindow={openWindow}
        onChangeLanguage={setLang}
      />

      <HeroSection lang={lang} translations={TRANSLATIONS} />

      {windows.map((win) => (
        <WindowFrame
          key={win.id}
          window={win}
          titleOverride={getWindowTitle(win)}
          onClose={closeWindow}
          onMinimize={toggleMinimize}
          onMaximize={toggleMaximize}
          onFocus={bringToFront}
          updatePosition={updateWindowPosition}
        >
          {win.type === 'about' && <AboutContent lang={lang} translations={TRANSLATIONS} />}
          {win.type === 'work' && <WorkContent lang={lang} translations={TRANSLATIONS} />}
          {win.type === 'stack' && <StackContent lang={lang} translations={TRANSLATIONS} />}
          {win.type === 'contact' && <ContactContent lang={lang} translations={TRANSLATIONS} />}
        </WindowFrame>
      ))}

      <Footer />
    </div>
  );
};

export default HomeScreen;
