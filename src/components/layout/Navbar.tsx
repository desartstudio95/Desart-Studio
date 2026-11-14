import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AppView } from '../../types';
import { VIEW_TO_PATH } from '../../data/studioData';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: Array<{ id: AppView; label: string; isActive: boolean }> = [
    { id: 'home', label: 'Início', isActive: currentView === 'home' || currentView === 'website' },
    {
      id: 'services',
      label: 'Serviços',
      isActive:
        currentView === 'services' ||
        currentView === 'design-grafico' ||
        currentView === 'criacao-de-websites' ||
        currentView === 'hospedagem' ||
        currentView === 'dominios',
    },
    { id: 'portfolio', label: 'Portfólio', isActive: currentView === 'portfolio' },
    { id: 'sobre', label: 'Sobre nós', isActive: currentView === 'sobre' },
    { id: 'contactos', label: 'Contactos', isActive: currentView === 'contactos' },
  ];

  const handleNavClick = (e: React.MouseEvent, view: AppView) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(view);
  };

  const handleRequestQuote = () => {
    setMobileMenuOpen(false);
    if (currentView === 'home' || currentView === 'website') {
      const contactEl = document.getElementById('contactos');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onNavigate('contactos');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071A33]/92 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-[#020B18]/40'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href={VIEW_TO_PATH.home}
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-display whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4599FF] rounded"
          >
            DESART STUDIO
          </a>

          {/* Zone 2: Primary Navigation Links */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={VIEW_TO_PATH[item.id]}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={item.isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4599FF] rounded ${
                  item.isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#4599FF] transition-opacity duration-200 ${
                    item.isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleRequestQuote}
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wide text-white bg-[#4599FF] hover:bg-[#3185eb] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-md shadow-[#4599FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Solicitar orçamento
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-[#102B4D]/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4599FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#071A33]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 mt-2"
        >
          <nav aria-label="Navegação móvel" className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={VIEW_TO_PATH[item.id]}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={item.isActive ? 'page' : undefined}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  item.isActive
                    ? 'bg-[#102B4D] text-[#4599FF]'
                    : 'text-slate-200 hover:bg-[#102B4D]/50 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 mt-4 border-t border-white/10">
            <button
              type="button"
              onClick={handleRequestQuote}
              className="w-full py-3.5 px-5 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-sm font-bold transition-colors text-center"
            >
              Solicitar orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
