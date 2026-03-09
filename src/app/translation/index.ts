import { en } from './En';
import { de } from './de';
import { fr } from './fr';

export const translations = {
  en,
  de,
  fr,
};

export type TranslationKeys = typeof en;
export type Language = keyof typeof translations;