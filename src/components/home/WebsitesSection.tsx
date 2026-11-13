import React from 'react';
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Zap, 
  Code2, 
  ShieldCheck 
} from 'lucide-react';
import { AppView } from '../../types';

interface WebsitesSectionProps {
  onNavigate: (view: AppView) => void;
}

export const WebsitesSection: React.FC<WebsitesSectionProps> = ({ onNavigate }) => {
  const serviceTypes = [
    { title: 'Websites Corporativos', desc: 'Presença institucional imponente com autoridade de marca para médias e grandes empresas.' },
    { title: 'Landing Pages de Conversão', desc: 'Páginas otimizadas para campanhas de marketing, captação de leads e lançamento de produtos.' },
    { title: 'E-commerce & Lojas Virtuais', desc: 'Comércio eletrónico com integração direta com M-Pesa, e-Mola, cartões e cálculo de frete.' },
    { title: 'Portais & Áreas de Membros', desc: 'Ambientes restritos para clientes, relatórios financeiros e gestão de conteúdos complexos.' },
    { title: 'Aplicações Web Sob Medida', desc: 'Sistemas cloud-native desenvolvidos com React, TypeScript e arquitetura escalável.' }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glow and grid */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#4599FF]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text & Services */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#4599FF] font-display">
              <Laptop className="w-3.5 h-3.5" />
              <span>DESENVOLVIMENTO WEB & ENGENHARIA DIGITAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              WEBSITES QUE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
                REPRESENTAM O SEU NEGÓCIO.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Esqueça modelos lentos e amadores. Criamos produtos web com engenharia de topo, design refinado no padrão Apple e velocidade extrema em servidores Edge CDN.
            </p>

            {/* Services List */}
            <div className="space-y-3 pt-2">
              {serviceTypes.map((srv, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-[#4599FF] transition-all flex items-start space-x-3">
                  <div className="p-1 rounded-lg bg-blue-500/20 text-[#4599FF] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-display">{srv.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-3">
              <button
                onClick={() => onNavigate('service-websites')}
                className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#4599FF] to-blue-600 hover:from-blue-400 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <span>CRIAR WEBSITE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right: Floating 3D Device Mockups (Desktop, Tablet, Mobile) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px]">
            
            {/* Desktop Mockup */}
            <div className="w-full max-w-lg rounded-2xl bg-slate-950 p-3 shadow-2xl border border-slate-700/80 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-slate-900 rounded-t-xl px-3 py-2 flex items-center justify-between border-b border-slate-800">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-[10px] font-mono text-slate-400">https://empresa.co.mz</span>
                <span className="text-[9px] text-emerald-400 font-bold">100/100 SPEED</span>
              </div>
              
              <div className="bg-slate-900/90 p-4 rounded-b-xl space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <div className="h-4 w-24 bg-blue-500/30 rounded"></div>
                  <div className="flex space-x-2">
                    <div className="h-2 w-8 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8 bg-slate-700 rounded"></div>
                  </div>
                </div>
                <div className="h-20 rounded-lg bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-slate-800 p-3 flex flex-col justify-center">
                  <div className="h-3 w-40 bg-white/90 rounded mb-1.5"></div>
                  <div className="h-2 w-56 bg-slate-400/80 rounded"></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 bg-slate-800 rounded p-2">
                    <div className="h-1.5 w-8 bg-blue-400 rounded mb-1"></div>
                    <div className="h-1 w-12 bg-slate-600 rounded"></div>
                  </div>
                  <div className="h-12 bg-slate-800 rounded p-2">
                    <div className="h-1.5 w-8 bg-blue-400 rounded mb-1"></div>
                    <div className="h-1 w-12 bg-slate-600 rounded"></div>
                  </div>
                  <div className="h-12 bg-slate-800 rounded p-2">
                    <div className="h-1.5 w-8 bg-blue-400 rounded mb-1"></div>
                    <div className="h-1 w-12 bg-slate-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Mockup (overlapping) */}
            <div className="absolute -bottom-6 left-0 sm:left-4 w-52 sm:w-60 bg-slate-950 p-2.5 rounded-2xl shadow-2xl border border-slate-600/80 transform rotate-3 hover:rotate-0 transition-transform">
              <div className="bg-slate-900 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between text-[9px] text-slate-400">
                  <span className="font-mono">Tablet View</span>
                  <span className="text-blue-400">Touch UI</span>
                </div>
                <div className="h-10 bg-blue-900/30 rounded flex items-center px-2">
                  <div className="h-2 w-20 bg-white/80 rounded"></div>
                </div>
                <div className="h-8 bg-slate-800 rounded"></div>
              </div>
            </div>

            {/* Smartphone Mockup (overlapping bottom right) */}
            <div className="absolute -bottom-8 right-2 sm:right-6 w-36 sm:w-40 bg-slate-950 p-2 rounded-2xl shadow-2xl border-2 border-slate-600 transform -rotate-4 hover:rotate-0 transition-transform">
              <div className="w-8 h-1 bg-slate-700 rounded-full mx-auto mb-2"></div>
              <div className="bg-slate-900 rounded-lg p-2 space-y-1.5">
                <div className="h-2 w-12 bg-blue-400 rounded"></div>
                <div className="h-10 bg-slate-800 rounded"></div>
                <div className="h-4 bg-blue-600 rounded"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
