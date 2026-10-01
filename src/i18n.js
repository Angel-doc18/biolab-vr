// Inline bilingual strings: L('Continue', 'Continuer').
import { createContext, useContext } from 'react';

export const LangContext = createContext('en');

export function useL() {
  const lang = useContext(LangContext);
  return (en, fr) => (lang === 'fr' && fr ? fr : en);
}

export const useLang = () => useContext(LangContext);
