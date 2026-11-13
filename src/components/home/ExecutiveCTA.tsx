import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Lock,
  MessageSquare
} from 'lucide-react';
import { AppView } from '../../types';

interface ExecutiveCTAProps {
  onNavigate: (view: AppView) => void;
  onOpenAi: () => void;
}

export const ExecutiveCTA: React.FC<ExecutiveCTAProps> = ({ onNavigate, onOpenAi }) => {
  return (
    <section className="bg-[#030712] text-white py-24 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background soft ambient gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#4599FF] text-xs font-mono font-bold">
          <span>DESART STUDIO • MAPUTO, MOÇAMBIQUE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display max-w-3xl mx-auto leading-tight">
          A infraestrutura que a sua marca realmente merece.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Inicie o registo de domínios ou a ativação de caixas DESART Mail em minutos através do nosso portal, ou solicite um plano corporativo sob medida à nossa equipa técnica.
        </p>

        {/* Primary CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('customer-portal')}
            className="px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-[#4599FF] hover:bg-blue-600 shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
          >
            <Lock className="w-4 h-4" />
            <span>Aceder ao Portal do Cliente</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/258833081636?text=Ola%20DESART%20STUDIO,%20gostaria%20de%20conversar%20sobre%20solucoes%20para%20a%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all flex items-center space-x-2"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp (833 081 636)</span>
          </a>

          <button
            onClick={onOpenAi}
            className="px-5 py-4 rounded-2xl text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-[#4599FF]" />
            <span>Consultar DESART AI Core</span>
          </button>
        </div>

        {/* Footnote reassurance */}
        <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Contrato Formal & SLA 99.98%</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span>Maputo, Moçambique</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-[#4599FF]" />
            <span>contacto@desartstudio.co.mz</span>
          </div>
        </div>

      </div>
    </section>
  );
};
