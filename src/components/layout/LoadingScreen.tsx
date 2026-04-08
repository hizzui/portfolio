import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animar a barra de 0 a 100% de forma suave em 3 segundos
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 30);

    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'repeating-linear-gradient(-45deg, #FFB380 0px, #FFB380 15px, #FFAA66 15px, #FFAA66 16px)'
      }}
    >
      <div className="text-center">
        <div className="text-7xl font-black tracking-tighter mb-8 text-black">dev.ryan</div>
        <div className="w-80 h-6 border-4 border-black mb-6 bg-white flex items-center overflow-hidden">
          <div
            className="h-full bg-black"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
        <div className="text-sm font-mono tracking-widest text-black">
          INITIALIZING SYSTEM...
        </div>
      </div>
    </div>
  );
};
