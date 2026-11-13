import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Globe, 
  Mail, 
  Laptop, 
  Palette, 
  Cpu, 
  LifeBuoy, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown,
  User,
  Sliders
} from 'lucide-react';
import { AppView } from '../../types';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  onOpenAi: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenAi }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { id: 'service-domains' as AppView, name: 'Registo de Domínios', desc: '.co.mz, .mz e TLDs mundiais', icon: Globe },
    { id: 'service-mail' as AppView, name: 'DESART Mail', desc: 'Email profissional com 15 GB dedicados', icon: Mail },
    { id: 'service-websites' as AppView, name: 'Websites & Portais', desc: 'Presença corporativa de alto impacto', icon: Laptop },
    { id: 'service-design' as AppView, name: 'Design Gráfico & Branding', desc: 'Identidade visual e materiais', icon: Palette },
    { id: 'service-apps' as AppView, name: 'Sistemas & Aplicações', desc: 'ERP, POS, automação e APIs', icon: Cpu },
    { id: 'service-support' as AppView, name: 'Suporte & Manutenção', desc: 'Disponibilidade e SLA garantido', icon: LifeBuoy },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080d1a]/90 backdrop-blur-2xl shadow-2xl border-b border-white/10 py-3'
          : 'bg-[#080d1a]/70 backdrop-blur-xl border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => onNavigate('website')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0B1528] via-[#102447] to-[#4599FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform border border-blue-500/30">
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white/90 border-t-transparent animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute w-1.5 h-1.5 rounded-full bg-[#4599FF]"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">DESART</span>
                <span className="text-xs font-bold tracking-widest text-[#4599FF] px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 font-mono">STUDIO</span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-400 font-medium -mt-0.5 hidden sm:block">DIGITAL ECOSYSTEM</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => onNavigate('website')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors ${
                currentView === 'website' ? 'text-[#4599FF] bg-blue-500/10 font-bold border border-blue-500/20' : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              Ecossistema
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl flex items-center space-x-1 transition-colors"
              >
                <span>Serviços</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-[#081020] rounded-2xl shadow-2xl border border-slate-800 p-2.5 grid gap-1.5 backdrop-blur-xl">
                    {servicesList.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => {
                          onNavigate(srv.id);
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-900 transition-colors flex items-start space-x-3 group"
                      >
                        <div className="p-2 rounded-lg bg-slate-950 text-[#4599FF] group-hover:bg-[#4599FF] group-hover:text-white transition-colors border border-slate-800">
                          <srv.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#4599FF] transition-colors">{srv.name}</div>
                          <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{srv.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('service-domains')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors"
            >
              Domínios .MZ
            </button>

            <button
              onClick={() => onNavigate('service-mail')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors"
            >
              DESART Mail 15GB
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('configurator-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onNavigate('website');
              }}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors"
            >
              Configurador
            </button>

            <button
              onClick={() => onNavigate('service-support')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors"
            >
              SLA 99.98%
            </button>
          </nav>

          {/* Right Actions & Subdomain Switcher */}
          <div className="hidden lg:flex items-center space-x-2.5">
            {/* AI Assistant Core Quick Trigger */}
            <button
              onClick={onOpenAi}
              className="px-3 py-1.5 text-xs font-semibold text-blue-400 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/60 rounded-full flex items-center space-x-1.5 transition-all shadow-xs"
              title="DESART AI Core Assistant"
            >
              <div className="w-2 h-2 rounded-full bg-[#4599FF] animate-pulse"></div>
              <span>DESART AI</span>
            </button>

            {/* Portal Switcher (clientes.desartstudio.co.mz) */}
            <button
              onClick={() => onNavigate('customer-portal')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center space-x-1.5 ${
                currentView === 'customer-portal'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                  : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <User className="w-3.5 h-3.5 text-[#4599FF]" />
              <span>Portal do Cliente</span>
            </button>

            {/* Admin Command Center (admin.desartstudio.co.mz) */}
            <button
              onClick={() => onNavigate('admin-dashboard')}
              className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center space-x-1.5 ${
                currentView === 'admin-dashboard'
                  ? 'bg-[#0B1528] text-[#4599FF] border-[#4599FF] shadow-sm'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
              title="Acesso de Administração DESART"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>

            {/* Main CTA */}
            <button
              onClick={() => {
                const el = document.getElementById('configurator-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onNavigate('website');
              }}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#4599FF] hover:bg-blue-600 rounded-xl shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Simular Preço
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenAi}
              className="p-2 text-[#4599FF] bg-blue-950/60 rounded-lg border border-blue-900/60"
              title="DESART AI"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#4599FF] animate-ping"></div>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:bg-slate-800 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#081020]/98 backdrop-blur-2xl border-b border-slate-800 px-5 pt-3 pb-7 mt-2 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Navegação</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => { onNavigate('website'); setMobileMenuOpen(false); }}
              className="p-3 text-left rounded-xl bg-slate-900/80 font-semibold text-xs text-white hover:bg-[#4599FF] transition-colors border border-slate-800"
            >
              Ecossistema
            </button>
            <button
              onClick={() => { onNavigate('service-domains'); setMobileMenuOpen(false); }}
              className="p-3 text-left rounded-xl bg-slate-900/80 font-semibold text-xs text-white hover:bg-[#4599FF] transition-colors border border-slate-800"
            >
              Domínios (.co.mz)
            </button>
            <button
              onClick={() => { onNavigate('service-mail'); setMobileMenuOpen(false); }}
              className="p-3 text-left rounded-xl bg-slate-900/80 font-semibold text-xs text-white hover:bg-[#4599FF] transition-colors border border-slate-800"
            >
              DESART Mail (15GB)
            </button>
            <button
              onClick={() => { onNavigate('service-websites'); setMobileMenuOpen(false); }}
              className="p-3 text-left rounded-xl bg-slate-900/80 font-semibold text-xs text-white hover:bg-[#4599FF] transition-colors border border-slate-800"
            >
              Websites
            </button>
            <button
              onClick={() => { onNavigate('service-design'); setMobileMenuOpen(false); }}
              className="p-3 text-left rounded-xl bg-slate-900/80 font-semibold text-xs text-white hover:bg-[#4599FF] transition-colors border border-slate-800"
            >
              Design Gráfico
            </button>
            <button
              onClick={() => { onNavigate('service-apps'); setMobileMenuOpen(false); }}
              className="p-3 text-left rounded-xl bg-slate-900/80 font-semibold text-xs text-white hover:bg-[#4599FF] transition-colors border border-slate-800"
            >
              Sistemas & M-Pesa
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Acesso a Plataformas</div>
            <button
              onClick={() => { onNavigate('customer-portal'); setMobileMenuOpen(false); }}
              className="w-full py-3 px-4 rounded-xl bg-[#4599FF] text-white font-semibold text-xs flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Portal do Cliente (clientes.desartstudio.co.mz)</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { onNavigate('admin-dashboard'); setMobileMenuOpen(false); }}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 text-slate-200 font-semibold text-xs flex items-center justify-between border border-slate-800"
            >
              <div className="flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-[#4599FF]" />
                <span>Painel Admin (admin.desartstudio.co.mz)</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
