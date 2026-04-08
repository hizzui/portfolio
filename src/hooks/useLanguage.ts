import { useCallback, useState } from 'react';

export const useLanguage = () => {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  const changeLang = useCallback((newLang: 'pt' | 'en') => {
    setLang(newLang);
  }, []);

  return {
    lang,
    setLang: changeLang,
  };
};
