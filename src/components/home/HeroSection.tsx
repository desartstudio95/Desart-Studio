import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Server, 
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import { DigitalCoreCanvas } from '../3d/DigitalCoreCanvas';
import { AppView } from '../../types';

interface HeroSectionProps {
  onNavigate: (view: AppView) => void;
  onOpenAi: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenAi }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white flex items-center"
    >
      {/* Subtle background ambient blue gradient & grid */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4599FF]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-blue-400/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      {/* Large faint background typography */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.025] text-[180px] sm:text-[260px] font-black text-slate-900 font-display tracking-tight whitespace-nowrap">
        DESART CORE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#4599FF] animate-pulse"></span>
              <span className="text-xs font-bold tracking-wide uppercase text-[#0B1528] font-display">
                DESART DIGITAL CORE
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-slate-600 font-medium">
                A sua presença digital, completa.
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.08] font-display">
              CONSTRUÍMOS A <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1528] via-[#102447] to-[#4599FF]">
                PRESENÇA DIGITAL
              </span> <br />
              DO SEU NEGÓCIO.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Domínios, e-mail profissional, websites, design e tecnologia empresarial num único ecossistema integrado de alta performance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('domain-search-box');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('service-domains');
                }}
                className="px-7 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#4599FF] to-[#1a73e8] hover:from-[#358aee] hover:to-[#1560c5] shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
              >
                <span>COMEÇAR AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('ecosystem-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-4 rounded-xl text-sm font-bold tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all hover:border-slate-300 flex items-center justify-center space-x-2"
              >
                <span>EXPLORAR SERVIÇOS</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Micro proof points */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#4599FF]" />
                <span>Domínios oficiais .co.mz e .mz</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#4599FF]" />
                <span>Infraestrutura DESART Mail Pro</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#4599FF]" />
                <span>SLA 99.98% Garantido</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D DIGITAL CORE Structure + Floating Holographic Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* Concentric ambient background rings */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-blue-200/40 pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute w-[360px] h-[360px] rounded-full border border-blue-400/20 pointer-events-none"></div>

            {/* Three.js 3D Interactive Canvas */}
            <div className="w-full h-full absolute inset-0 flex items-center justify-center z-10">
              <DigitalCoreCanvas interactive={true} intensity="immersive" theme="light" />
            </div>

            {/* Floating Glass Element 1: DOMAIN (Top Left) */}
            <div 
              style={{
                transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -14}px)`,
                transition: 'transform 0.15s ease-out',
                animationDuration: '7s'
              }}
              className="absolute top-6 left-2 sm:left-6 z-20 glass-panel rounded-2xl p-3.5 shadow-xl border border-white/80 max-w-[190px] animate-bounce"
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="flex items-center space-x-1.5">
                  <div className="p-1 rounded-md bg-blue-100/70 text-[#4599FF]">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">DOMAIN</span>
                </div>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">ACTIVE</span>
              </div>
              <div className="text-xs font-extrabold text-slate-900 tracking-tight font-display">empresa.co.mz</div>
              <div className="text-[10px] text-slate-500 mt-0.5">DNS Root Cluster • 3600 TTL</div>
            </div>

            {/* Floating Glass Element 2: MAIL (Top Right) */}
            <div 
              style={{
                transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -16}px)`,
                transition: 'transform 0.15s ease-out',
                animationDuration: '8s'
              }}
              className="absolute top-10 right-2 sm:right-6 z-20 glass-panel rounded-2xl p-3.5 shadow-xl border border-white/80 max-w-[190px] animate-bounce"
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="flex items-center space-x-1.5">
                  <div className="p-1 rounded-md bg-blue-100/70 text-[#4599FF]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">MAIL</span>
                </div>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">ACTIVE</span>
              </div>
              <div className="text-xs font-extrabold text-slate-900 tracking-tight font-display">12 MAILBOXES</div>
              <div className="text-[10px] text-slate-500 mt-0.5">15 GB Quota • IMAP/SSL 993</div>
            </div>

            {/* Floating Glass Element 3: WEBSITE (Bottom Left) */}
            <div 
              style={{
                transform: `translate(${mousePos.x * -16}px, ${mousePos.y * 18}px)`,
                transition: 'transform 0.15s ease-out',
                animationDuration: '6.5s'
              }}
              className="absolute bottom-6 left-4 sm:left-10 z-20 glass-panel rounded-2xl p-3.5 shadow-xl border border-white/80 max-w-[190px] animate-bounce"
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="flex items-center space-x-1.5">
                  <div className="p-1 rounded-md bg-blue-100/70 text-[#4599FF]">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">WEBSITE</span>
                </div>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">ONLINE</span>
              </div>
              <div className="text-xs font-extrabold text-slate-900 tracking-tight font-display">Fast Edge CDN</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Latency 18ms • SSL Wildcard</div>
            </div>

            {/* Floating Glass Element 4: SECURITY (Bottom Right) */}
            <div 
              style={{
                transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 15}px)`,
                transition: 'transform 0.15s ease-out',
                animationDuration: '7.5s'
              }}
              className="absolute bottom-10 right-4 sm:right-8 z-20 glass-panel rounded-2xl p-3.5 shadow-xl border border-white/80 max-w-[200px] animate-bounce"
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="flex items-center space-x-1.5">
                  <div className="p-1 rounded-md bg-blue-100/70 text-[#4599FF]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">SECURITY</span>
                </div>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">PROTECTED</span>
              </div>
              <div className="text-xs font-extrabold text-slate-900 tracking-tight font-display">DMARC / SPF / DKIM</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Antispam AI & 2FA Habilitado</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
