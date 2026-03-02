import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const leftNavItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/AboutSection' },
  ];
  
  const rightNavItems = [
    { label: 'GALLERY', href: '/gallery' },
    // { label: 'BLOG', href: '/blog' },
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
        // Already on home page, just scroll
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-center px-8 py-6">
        {/* Left menu items */}
        <div className="flex items-center gap-12">
          {leftNavItems.map((item) => (
            item.href.startsWith('/#') ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-xs tracking-[0.2em] hover:text-[#d4a574] transition-colors ${
                  isActivePage(item.href) ? 'text-[#d4a574]' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-xs tracking-[0.2em] hover:text-[#d4a574] transition-colors ${
                  isActivePage(item.href) ? 'text-[#d4a574]' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        {/* Center Logo */}
        <Link to="/" className="mx-12 flex-shrink-0">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png"
            alt="Event Rules Logo"
            className="h-16 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Right menu items */}
        <div className="flex items-center gap-12">
          {rightNavItems.map((item) => (
            item.href.startsWith('/#') ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-xs tracking-[0.2em] hover:text-[#d4a574] transition-colors ${
                  isActivePage(item.href) ? 'text-[#d4a574]' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-xs tracking-[0.2em] hover:text-[#d4a574] transition-colors ${
                  isActivePage(item.href) ? 'text-[#d4a574]' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png"
              alt="Event Rules Logo"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#d4a574] p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm py-4">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-6 py-3 text-sm tracking-[0.2em] hover:text-[#d4a574] transition-colors ${
                    isActivePage(item.href) ? 'text-[#d4a574]' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-6 py-3 text-sm tracking-[0.2em] hover:text-[#d4a574] transition-colors ${
                    isActivePage(item.href) ? 'text-[#d4a574]' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}