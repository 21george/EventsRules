// Language detection utility
export type Language = 'en' | 'de' | 'fr';

export const detectLanguage = (): Language => {
  // Check if language is already stored in localStorage
  const storedLanguage = localStorage.getItem('preferred-language');
  if (storedLanguage === 'en' || storedLanguage === 'de' || storedLanguage === 'fr') {
    return storedLanguage;
  }

  // Detect browser language
  const browserLanguage = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLanguage.toLowerCase().split('-')[0];
  
  // Check supported languages
  if (langCode === 'de') return 'de';
  if (langCode === 'fr') return 'fr';
  if (langCode === 'en') return 'en';
  
  // Default to German
  return 'de';
};

export const saveLanguagePreference = (language: Language): void => {
  localStorage.setItem('preferred-language', language);
};
