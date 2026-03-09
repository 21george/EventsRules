import { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { saveLanguagePreference } from '../hooks/LanguegeDetector';

export type Language = 'en' | 'de' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { t: i18nT, i18n } = useTranslation();

  const language = (i18n.language?.split('-')[0] || 'de') as Language;

  const setLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    saveLanguagePreference(lang);
  };

  const t = (key: string): string => {
    return i18nT(key) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
