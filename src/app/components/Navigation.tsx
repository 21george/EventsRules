import { useState, useEffect } from 'react';
import { MapPin, Menu, X, Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const isMobile = window.innerWidth < 1024;

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  const leftNavItems = [
    { labelKey: 'nav.home', href: '/' },
  ];

  const rightNavItems = [
    { labelKey: 'nav.about', href: '/AboutSection' },
  ];

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      titleKey: 'contact.phone',
      details: '+4915563012884',
      link: 'tel:+4915563012884',
    },
    {
      icon: <Mail size={20} />,
      titleKey: 'contact.email',
      details: 'info@eventsrules.com',
      link: 'mailto:info@eventsrules.com',
    },
    {
      icon: <MapPin size={20} />,
      titleKey: 'contact.location',
      details: 'München',
      link: 'https://maps.google.com',
    },
  ];

  const isActivePage = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return location.pathname === '/';
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    // Handle hash navigation for home page sections
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname === '/') {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  // Reusable nav link renderer
  const renderNavLink = (
    item: { labelKey: string; href: string },
    extraClassName = ''
  ) => {
    const activeClass = isActivePage(item.href) ? 'text-[#d4a574]' : 'text-white/90';
    const baseClass = `text-xs tracking-[0.2em] hover:text-[#d4a574] transition-colors ${activeClass} ${extraClassName}`;

    return item.href.startsWith('/#') ? (
      <a
        key={item.labelKey}
        href={item.href}
        onClick={() => handleNavClick(item.href)}
        className={baseClass}
      >
        {t(item.labelKey)}
      </a>
    ) : (
      <Link
        key={item.labelKey}
        to={item.href}
        onClick={() => handleNavClick(item.href)}
        className={baseClass}
      >
        {t(item.labelKey)}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-center px-8 py-6">
        {/* Left menu items */}
        <div className="flex items-center gap-12">
          {leftNavItems.map((item) => renderNavLink(item))}
        </div>

        {/* Center Logo */}
        <Link to="/" className="mx-12 flex-shrink-0">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png"
            alt="Event Rules Logo"
            className="h-16 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Right menu items + Language Switcher */}
        <div className="flex items-center gap-12">
          {rightNavItems.map((item) => renderNavLink(item))}
          <LanguageSwitcher variant="dropdown" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png"
              alt="Event Rules Logo"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#d4a574] p-2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={34} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm py-4 h-screen flex flex-col items-start">
            {[...leftNavItems, ...rightNavItems].map((item) =>
              renderNavLink(item, 'block px-6 py-3 text-sm')
            )}

            {/* Mobile Language Switcher */}
            <div className="px-6 py-3">
              <LanguageSwitcher variant="dropdown" />
            </div>

            {/* Mobile CTA Section */}
            <div className="w-full px-6 py-6 mt-26">
              <div className="text-center">
                <h2 className="text-2xl text-white mb-4">
                  {t('serviceDetail.readyToStart')}
                </h2>
                <p className="text-gray-400 mb-6 text-sm">
                  {t('makeParty.description')}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+4915563012884"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#d4a574] text-black rounded-full hover:bg-[#c49564] transition-all duration-300"
                  >
                    <Phone size={20} />
                    {t('serviceDetail.callUsNow')}
                  </a>
                  <a
                    href="mailto:info@eventsrules.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#d4a574] text-[#d4a574] rounded-full hover:bg-[#d4a574] hover:text-black transition-all duration-300"
                  >
                    <Mail size={20} />
                    {t('serviceDetail.sendEmail')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}