import { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'de',  name: 'Deutsch',  flag: '🇩🇪' },
  { code: 'en',  name: 'English',  flag: '🇺🇸' },
  { code: 'fr',  name: 'Français', flag: '🇫🇷' },
];

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons';
  className?: string;
}

export function LanguageSwitcher({ variant = 'buttons', className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    languages.find((l) => i18n.language === l.code || i18n.language.startsWith(l.code)) ??
    languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── Inline buttons variant (DE | EN | FR) ──────────────────────────────────
  if (variant === 'buttons') {
    return (
      <div className={`flex items-center gap-0.5 ${className}`}>
        {languages.map((lang, index) => {
          const isActive = i18n.language === lang.code || i18n.language.startsWith(lang.code);
          return (
            <span key={lang.code} className="flex items-center">
              <button
                onClick={() => changeLanguage(lang.code)}
                aria-label={`Switch to ${lang.name}`}
                className={`relative px-2.5 py-1 text-xs tracking-[0.15em] font-medium transition-all duration-200 ${
                  isActive ? 'text-[#03030b]' : 'text-white/50 hover:text-white/80'
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[1.5px] bg-[#03030b] rounded-full" />
                )}
              </button>
              {index < languages.length - 1 && (
                <span className="text-white/20 text-xs select-none">|</span>
              )}
            </span>
          );
        })}
      </div>
    );
  }

  // ── Flag dropdown variant ──────────────────────────────────────────────────
  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`
          flex items-center gap-3 px-4 py-2.5 rounded-lg w-52
          text-white text-sm font-medium
          border transition-all duration-200
          ${open ? '' : ''}
        `}
      >
        <span className="text-xl leading-none">{current.flag}</span>
        <span className="flex-1 text-left">
          {current.name}{' '}
        </span>
        
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-[calc(100%+6px)] left-0 w-52 rounded-lg bg-[#03030b] border  overflow-hidden z-50">
          {languages
            .filter((l) => l.code !== current.code)
            .map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="flex items-center gap-3 w-full px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
              >
                <span className="text-xl leading-none">{lang.flag}</span>
                <span>
                  {lang.name}{' '}
                </span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}