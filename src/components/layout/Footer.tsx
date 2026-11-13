import React from 'react';
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Server,
  Layers
} from 'lucide-react';
import { AppView } from '../../types';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050B16] text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[140px] pointer-events-none"></div>

      {/* Large background typography: "DESART" with low opacity */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] text-[180px] sm:text-[240px] font-extrabold tracking-tighter text-white font-display whitespace-nowrap">
        DESART
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('website')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#102447] to-[#4599FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" style={{ animationDuration: '9s' }}></div>
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-white font-display">DESART</span>
                <span className="text-xs font-bold tracking-widest text-[#4599FF] px-2 py-0.5 rounded bg-blue-900/40 border border-blue-500/30">STUDIO</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-medium italic">
              "A sua presença digital, completa."
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Domínios, e-mail profissional, websites, design e tecnologia empresarial num único ecossistema integrado. Infraestrutura de classe mundial pensada para empresas de Moçambique e além-fronteiras.
            </p>

            {/* Direct Contact */}
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#4599FF]" />
                <span className="font-semibold text-white">833 081 636</span>
                <span className="text-slate-500 text-[11px]">(Moçambique / WhatsApp disponível)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#4599FF]" />
                <span>contacto@desartstudio.co.mz</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-[#4599FF]" />
                <span>Maputo • Moçambique • Hub Tecnológico</span>
              </div>
            </div>

            {/* Infrastructure badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>DESART Mail & REGISTAR Core API: <strong className="text-emerald-400">100% Operacional</strong></span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Serviços</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('service-domains')} className="hover:text-[#4599FF] transition-colors flex items-center space-x-1 text-slate-400">
                  <span>Registo de Domínios (.co.mz)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-mail')} className="hover:text-[#4599FF] transition-colors flex items-center space-x-1 text-slate-400">
                  <span>DESART MAIL (15GB/caixa)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-websites')} className="hover:text-[#4599FF] transition-colors flex items-center space-x-1 text-slate-400">
                  <span>Websites Corporativos</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-design')} className="hover:text-[#4599FF] transition-colors flex items-center space-x-1 text-slate-400">
                  <span>Design Gráfico & Branding</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-apps')} className="hover:text-[#4599FF] transition-colors flex items-center space-x-1 text-slate-400">
                  <span>Sistemas ERP & Aplicações</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-support')} className="hover:text-[#4599FF] transition-colors flex items-center space-x-1 text-slate-400">
                  <span>Suporte & Manutenção 24/7</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Platform */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Plataforma</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('customer-portal')} className="hover:text-[#4599FF] transition-colors flex items-center space-x-1 text-slate-400">
                  <span>Portal do Cliente (clientes)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin-dashboard')} className="hover:text-[#4599FF] transition-colors flex items-center space-x-1 text-slate-400">
                  <span>Painel de Controlo Admin</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer">Sobre a DESART STUDIO</span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer">Portfólio de Tecnologia</span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer">Perguntas Frequentes (FAQ)</span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer">Métodos de Pagamento (M-Pesa, e-Mola)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Security */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Segurança & Legal</h3>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-slate-400 hover:text-white cursor-pointer">Termos de Serviço</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer">Política de Privacidade</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer">Política de Domínios .MZ</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer">Acordo de Nível de Serviço (SLA)</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer">Auditoria de Segurança & 2FA</span></li>
              <li className="pt-2">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center space-x-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#4599FF] shrink-0" />
                  <span>Criptografia ponta a ponta TLS 1.3 & DKIM/SPF ativo</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} DESART STUDIO. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-4">
            <span>Moeda: <strong className="text-slate-300">Metical Moçambicano (MT)</strong></span>
            <span>•</span>
            <span>Região: <strong className="text-slate-300">MZ-AFRICA</strong></span>
            <span>•</span>
            <span className="text-slate-400">DESART DIGITAL CORE v2.5</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
