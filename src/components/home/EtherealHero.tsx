import React, { useState } from 'react';
import { 
  Globe, 
  Mail, 
  Laptop, 
  Layers, 
  PenTool, 
  Smartphone, 
  Network, 
  HardDrive, 
  ShieldCheck, 
  Headphones,
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  Sparkles, 
  Lock, 
  Phone, 
  Server,
  Star,
  Zap,
  Award,
  ChevronRight
} from 'lucide-react';
import { AppView } from '../../types';

interface EtherealHeroProps {
  onNavigate: (view: AppView) => void;
  onOpenAi: () => void;
}

export const EtherealHero: React.FC<EtherealHeroProps> = ({ onNavigate, onOpenAi }) => {
  // Domain Search State inside Project 02 Card
  const [domainQuery, setDomainQuery] = useState('minhaempresa');
  const [selectedTld, setSelectedTld] = useState('.co.mz');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<{ available: boolean; domain: string; price: string } | null>({
    available: true,
    domain: 'minhaempresa.co.mz',
    price: '2.900 MT / ano'
  });

  // M-Pesa Interactive State inside Project 03 Card
  const [mpesaSimulated, setMpesaSimulated] = useState(false);
  const [mpesaLoading, setMpesaLoading] = useState(false);

  // Selected skill pill
  const [selectedSkill, setSelectedSkill] = useState<string>('Domínios .MZ');

  const handleDomainSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!domainQuery.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setSearchResult({
        available: true,
        domain: `${domainQuery.trim().toLowerCase().replace(/[^a-z0-9-]/g, '')}${selectedTld}`,
        price: selectedTld === '.mz' ? '3.500 MT / ano' : selectedTld === '.co.mz' ? '2.900 MT / ano' : '1.450 MT / ano'
      });
    }, 400);
  };

  const handleSimulateMpesa = () => {
    setMpesaLoading(true);
    setTimeout(() => {
      setMpesaLoading(false);
      setMpesaSimulated(true);
    }, 850);
  };

  const skillsList = [
    { name: 'Domínios .MZ', icon: Globe, desc: 'Registo e Anycast DNS', view: 'service-domains' as AppView },
    { name: 'DESART Mail 15GB', icon: Mail, desc: 'Caixas isoladas de alta quota', view: 'service-mail' as AppView },
    { name: 'Websites Pro', icon: Laptop, desc: 'Engenharia sem código inchado', view: 'service-websites' as AppView },
    { name: 'Sistemas ERP', icon: Layers, desc: 'Faturação NUIT & Gestão', view: 'service-apps' as AppView },
    { name: 'Design Gráfico', icon: PenTool, desc: 'Branding e Identidade Suíça', view: 'service-design' as AppView },
    { name: 'M-Pesa API', icon: Smartphone, desc: 'STK Push C2B e e-Mola', view: 'service-apps' as AppView },
    { name: 'Anycast DNS', icon: Network, desc: 'Resolução ultrarrápida', view: 'service-domains' as AppView },
    { name: 'Backups Diários', icon: HardDrive, desc: 'Snapshots redundantes', view: 'service-mail' as AppView },
    { name: 'SLA 99.98%', icon: ShieldCheck, desc: 'Garantia contratual formal', view: 'website' as AppView },
    { name: 'Suporte Direto', icon: Headphones, desc: 'Linha em Maputo 833 081 636', view: 'website' as AppView },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20 overflow-hidden ethereal-canvas selection:bg-blue-600 selection:text-white bg-[#020617]">
      
      {/* 3D Glass Floating Spheres in Deep Blue/Sapphire */}
      <div className="absolute top-28 left-[8%] w-14 h-14 glass-sphere animate-float-slow opacity-80 pointer-events-none hidden sm:block z-0"></div>
      <div className="absolute top-44 right-[12%] w-10 h-10 glass-sphere animate-float-reverse opacity-75 pointer-events-none hidden sm:block z-0"></div>
      <div className="absolute top-[520px] left-[5%] w-8 h-8 glass-sphere animate-float-slow opacity-60 pointer-events-none z-0"></div>
      <div className="absolute top-[820px] right-[4%] w-16 h-16 glass-sphere animate-float-reverse opacity-70 pointer-events-none hidden md:block z-0"></div>
      <div className="absolute bottom-40 left-[12%] w-12 h-12 glass-sphere animate-float-slow opacity-60 pointer-events-none z-0"></div>
      <div className="absolute bottom-20 right-[15%] w-9 h-9 glass-sphere animate-float-reverse opacity-70 pointer-events-none z-0"></div>

      {/* Atmospheric Deep Blue Soft Light Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-blue-600/25 via-blue-500/15 to-transparent rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-[600px] left-1/3 w-[600px] h-[350px] bg-blue-700/15 rounded-full blur-[160px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. TOP METADATA BAR (2026 INFRASTRUCTURE & DESIGN) */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-between text-xs font-mono tracking-wider text-slate-300 pt-2 border-b border-blue-900/40 pb-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="font-semibold text-white/90">2026 INFRASTRUCTURE & DESIGN</span>
          </div>

          <div className="flex items-center space-x-2 text-blue-300">
            <span className="font-semibold tracking-widest uppercase">DESART STUDIO MOÇAMBIQUE</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO DISPLAY SECTION WITH GIANT BACKGROUND TITLE & 3-COLUMN STRUCTURE */}
        {/* ========================================================================= */}
        <div className="relative pt-6 pb-4">
          
          {/* Giant Display Background Word: "DESART" */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
            <h1 className="text-[15vw] sm:text-[13vw] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.18] via-blue-300/[0.08] to-transparent font-display leading-none">
              DESART
            </h1>
          </div>

          {/* 3-Column Hero Grid: Left Card | Central Visual Orb Anchor | Right Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 pt-8 sm:pt-14">
            
            {/* LEFT CARD: Introduction & Mission */}
            <div className="lg:col-span-4 neo-glass rounded-3xl p-6 sm:p-7 space-y-5 border border-blue-500/20 shadow-2xl backdrop-blur-2xl">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Olá, somos a</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                  DESART STUDIO
                </h2>
                <div className="text-xs font-bold font-mono tracking-wide text-blue-300 uppercase">
                  INFRAESTRUTURA DIGITAL & DESIGN SOBERANO
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Projetamos e operamos domínios oficiais <strong className="text-white">.MZ</strong>, caixas postais empresariais com <strong className="text-white">15 GB (DESART Mail)</strong>, engenharia web ultrarrápida e automação com <strong className="text-white">M-Pesa</strong>.
              </p>

              {/* Status pill button */}
              <button
                onClick={() => onNavigate('customer-portal')}
                className="w-full py-3 px-4 rounded-2xl neo-glass-pill text-xs font-semibold text-white hover:text-white border border-blue-400/30 hover:border-blue-400 hover:bg-blue-600/20 transition-all flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="uppercase tracking-wider text-[11px]">PORTAL DO CLIENTE ATIVO</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* CENTER ELEMENT: Luminous 3D Holographic Core with Orbital Rings */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-4 sm:py-0">
              
              {/* Outer glowing halo ring */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                
                {/* Orbital Rotating Rings in Deep Blue */}
                <div className="absolute inset-0 rounded-full border border-blue-500/30 border-dashed animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="absolute inset-4 rounded-full border border-cyan-400/25 animate-spin" style={{ animationDuration: '22s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-10 rounded-full border border-white/20"></div>

                {/* Central Specular Glass Sphere Orb */}
                <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full glass-sphere flex flex-col items-center justify-center p-6 text-center shadow-2xl relative z-10 border border-white/40">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40 mb-2">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-extrabold text-white font-display tracking-tight">
                    DESART CORE
                  </div>
                  <div className="text-[10px] font-mono text-blue-200 mt-0.5 uppercase tracking-wider">
                    ANYCAST MAPUTO
                  </div>
                  <div className="mt-2 inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[9px] font-bold text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>18 MS LATÊNCIA</span>
                  </div>
                </div>

                {/* Micro floating satellites / badges */}
                <div className="absolute -top-1 -right-1 px-2.5 py-1 rounded-full neo-glass-pill border border-blue-400/30 text-[10px] font-mono text-blue-200 flex items-center space-x-1 shadow-lg backdrop-blur-md">
                  <Star className="w-3 h-3 text-blue-300 fill-blue-300" />
                  <span>SLA 99.98%</span>
                </div>

                <div className="absolute -bottom-2 -left-2 px-2.5 py-1 rounded-full neo-glass-pill border border-blue-400/30 text-[10px] font-mono text-blue-200 flex items-center space-x-1 shadow-lg backdrop-blur-md">
                  <ShieldCheck className="w-3 h-3 text-emerald-300" />
                  <span>15 GB EMAIL PRO</span>
                </div>
              </div>

              {/* Direct call button below center orb */}
              <div className="mt-4 flex items-center space-x-2">
                <a
                  href="tel:833081636"
                  className="px-3.5 py-1.5 rounded-full neo-glass text-[11px] font-mono text-slate-300 hover:text-white flex items-center space-x-1.5 border border-blue-500/30 hover:border-blue-400 transition-all"
                >
                  <Phone className="w-3 h-3 text-blue-400" />
                  <span>Atendimento Direto: 833 081 636</span>
                </a>
              </div>
            </div>

            {/* RIGHT CARD: Design & Engineering Philosophy */}
            <div className="lg:col-span-4 neo-glass rounded-3xl p-6 sm:p-7 space-y-5 border border-blue-500/20 shadow-2xl backdrop-blur-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-300">
                    FILOSOFIA DE ENGENHARIA
                  </span>
                  <Sparkles className="w-4 h-4 text-blue-300" />
                </div>

                {/* Animated 3D Orbital Gyro Visual in Deep Blue */}
                <div className="h-28 w-full rounded-2xl bg-blue-950/40 border border-blue-500/20 flex items-center justify-center relative overflow-hidden mb-4">
                  <div className="absolute w-24 h-24 rounded-full border border-blue-400/40 animate-pulse"></div>
                  <div className="absolute w-16 h-16 rounded-full border border-cyan-400/40 rotate-45"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-600/40 to-cyan-500/40 blur-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-white shadow-lg shadow-white/80"></div>
                  <span className="absolute bottom-2 right-3 font-mono text-[9px] text-blue-300 tracking-wider">
                    PRECISÃO SUÍÇA • AUTONOMIA
                  </span>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "O design e a tecnologia não são apenas o que se vê à superfície, mas a soberania, a velocidade e a estabilidade com que a sua empresa opera todos os dias."
                </blockquote>
              </div>

              <div className="pt-4 border-t border-blue-900/40 flex items-center justify-between">
                <button
                  onClick={() => {
                    const el = document.getElementById('configurator-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else onNavigate('website');
                  }}
                  className="text-xs font-bold text-blue-300 hover:text-white flex items-center space-x-1 group"
                >
                  <span>Configurar infraestrutura</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] font-mono text-slate-400">Maputo, MZ</span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. MIDDLE FLOATING GLASS DECK: CAPABILITIES & ENGINEERING PROCESS */}
        {/* ========================================================================= */}
        <div className="neo-glass rounded-3xl p-6 sm:p-8 border border-blue-500/20 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT HALF: NOSSAS CAPACIDADES (10 Frosted Glass Icon Tiles) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-mono uppercase tracking-wider text-blue-300 font-bold">
                  NOSSAS CAPACIDADES
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  {selectedSkill}
                </span>
              </div>

              {/* 10 Frosted Glass Tiles Grid (2 rows of 5) */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {skillsList.map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() => {
                      setSelectedSkill(skill.name);
                      onNavigate(skill.view);
                    }}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center text-center transition-all group ${
                      selectedSkill === skill.name
                        ? 'bg-blue-600/35 border-blue-400 shadow-lg shadow-blue-500/30 text-white'
                        : 'bg-blue-950/30 border-blue-500/15 hover:border-blue-400/40 text-slate-300 hover:text-white hover:bg-blue-900/30'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-900/40 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                      <skill.icon className="w-4 h-4 text-blue-300" />
                    </div>
                    <div className="text-[11px] font-bold tracking-tight leading-tight line-clamp-1">
                      {skill.name}
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/20 text-[11px] text-slate-300 flex items-center justify-between">
                <span>Engenharia consolidada sob um único contrato fiscal em Meticais (MT).</span>
                <span className="text-emerald-400 font-mono font-bold text-[10px]">100% SOBERANO</span>
              </div>
            </div>

            {/* RIGHT HALF: PROCESSO DE ENGENHARIA (4 Numbered Nodes with arrows) */}
            <div className="lg:col-span-6 space-y-4 lg:border-l lg:border-blue-900/40 lg:pl-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-mono uppercase tracking-wider text-blue-300 font-bold">
                  NOSSO PROCESSO
                </h3>
                <span className="text-[11px] font-mono text-blue-300">METODOLOGIA RIGOROSA</span>
              </div>

              {/* 4 Steps Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    num: '01',
                    name: 'DISCOVER',
                    label: 'DIAGNÓSTICO',
                    desc: 'Levantamento da marca, caixas e requisitos fiscais.'
                  },
                  {
                    num: '02',
                    name: 'DEFINE',
                    label: 'ARQUITETURA',
                    desc: 'Configuração DNS Anycast, caixas 15GB e layouts.'
                  },
                  {
                    num: '03',
                    name: 'DESIGN',
                    label: 'ENGENHARIA',
                    desc: 'Implementação limpa sem modelos genéricos de IA.'
                  },
                  {
                    num: '04',
                    name: 'DELIVER',
                    label: 'ATIVAÇÃO',
                    desc: 'Entrada em produção, fatura com NUIT e monitorização.'
                  },
                ].map((step, idx) => (
                  <div 
                    key={step.num}
                    className="p-3.5 rounded-2xl bg-blue-950/30 border border-blue-500/15 hover:border-blue-400/40 transition-all flex flex-col justify-between space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-full bg-blue-600/25 border border-blue-400/40 text-blue-300 font-mono text-xs font-bold flex items-center justify-center">
                        {step.num}
                      </div>
                      {idx < 3 && (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-300 transition-colors hidden sm:block" />
                      )}
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-blue-300 font-bold">{step.name}</div>
                      <div className="text-xs font-bold text-white leading-tight mt-0.5">{step.label}</div>
                      <p className="text-[10px] text-slate-400 leading-tight mt-1 line-clamp-3">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. FEATURED PROJECTS SECTION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Intro Card */}
          <div className="lg:col-span-3 neo-glass rounded-3xl p-6 border border-blue-500/20 shadow-2xl backdrop-blur-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-blue-300">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">SOLUÇÕES EM OPERAÇÃO</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display leading-tight">
                Infraestrutura ativa em produção
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Plataformas desenhadas para eliminar a fragilidade tecnológica da sua empresa em Moçambique.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('configurator-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('website');
                }}
                className="w-full py-3 px-4 rounded-xl neo-glass-pill text-xs font-bold uppercase tracking-wider text-blue-200 hover:text-white border border-blue-400/30 hover:border-blue-400 flex items-center justify-between group transition-all"
              >
                <span>Ver Simulador</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAi}
                className="w-full py-2.5 px-4 rounded-xl text-[11px] text-slate-400 hover:text-white flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>Consultar DESART AI</span>
              </button>
            </div>
          </div>

          {/* 3 Showcase Cards Grid (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* CARD 01: DESART MAIL 15GB */}
            <div className="neo-glass-card rounded-3xl p-5 border border-blue-500/20 shadow-2xl flex flex-col justify-between group hover:border-blue-400/50 transition-all">
              <div className="space-y-4">
                {/* Live Mock UI Screen Container */}
                <div className="w-full h-44 rounded-2xl bg-[#050B18] border border-blue-500/20 p-3.5 flex flex-col justify-between overflow-hidden relative shadow-inner">
                  {/* Screen Header */}
                  <div className="flex items-center justify-between border-b border-blue-900/40 pb-2">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[9px] font-mono text-slate-400 pl-1">mail.desartstudio.co.mz</span>
                    </div>
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-blue-600/25 text-blue-300 font-bold">15 GB QUOTA</span>
                  </div>

                  {/* Quota Gauge Visual */}
                  <div className="space-y-2 py-2">
                    <div className="flex justify-between text-[10px] text-slate-300">
                      <span>geral@empresa.co.mz</span>
                      <span className="font-mono text-blue-300 font-bold">2.4 GB / 15 GB</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full w-[16%]"></div>
                    </div>
                    <div className="text-[9px] text-emerald-400 font-mono flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>SPF, DKIM & DMARC 100% OK</span>
                    </div>
                  </div>

                  <div className="text-[9px] font-mono text-slate-500 border-t border-blue-950 pt-1">
                    IMAP: 993 (SSL) • SMTP: 465 (SSL)
                  </div>
                </div>

                {/* Card Info */}
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-blue-300">01</span>
                    <h4 className="text-sm font-bold text-white font-display">
                      DESART Mail (15GB Reais)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Caixas de email profissionais isoladas para empresas sem bloqueios de espaço.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-blue-900/40 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-300 text-[10px] font-mono font-bold">
                  CORREIO SOBERANO
                </span>
                <button
                  onClick={() => onNavigate('service-mail')}
                  className="text-xs font-semibold text-white hover:text-blue-300 transition-colors flex items-center space-x-1"
                >
                  <span>Planos</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* CARD 02: DOMÍNIOS .MZ & ANYCAST */}
            <div className="neo-glass-card rounded-3xl p-5 border border-blue-500/20 shadow-2xl flex flex-col justify-between group hover:border-blue-400/50 transition-all">
              <div className="space-y-4">
                {/* Live Mock UI Screen Container */}
                <div className="w-full h-44 rounded-2xl bg-[#050B18] border border-blue-500/20 p-3.5 flex flex-col justify-between overflow-hidden relative shadow-inner">
                  <div className="flex items-center justify-between border-b border-blue-900/40 pb-2">
                    <span className="text-[9px] font-mono text-blue-400 font-bold uppercase">WHOIS REGISTRY MZ</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>

                  {/* Interactive Domain Check Snippet */}
                  <form onSubmit={handleDomainSearch} className="space-y-1.5">
                    <div className="flex items-center bg-slate-950 border border-blue-500/30 rounded-lg p-1">
                      <input
                        type="text"
                        value={domainQuery}
                        onChange={(e) => setDomainQuery(e.target.value)}
                        placeholder="nome"
                        className="w-full bg-transparent text-white text-[11px] font-mono px-2 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-2 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-bold shrink-0 transition-colors"
                      >
                        {isSearching ? '...' : 'Verificar'}
                      </button>
                    </div>

                    {searchResult && (
                      <div className="p-1.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-[9px] text-emerald-300 flex items-center justify-between">
                        <span className="font-mono font-bold truncate max-w-[110px]">{searchResult.domain}</span>
                        <span className="font-bold text-white font-mono">{searchResult.price}</span>
                      </div>
                    )}
                  </form>

                  <div className="text-[8px] font-mono text-slate-500 border-t border-blue-950 pt-1">
                    Extensões: .co.mz (2.900 MT) • .mz (3.500 MT)
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-blue-300">02</span>
                    <h4 className="text-sm font-bold text-white font-display">
                      Registo de Domínios .MZ
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Preservação jurídica e técnica do nome da sua marca em Moçambique.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-blue-900/40 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-300 text-[10px] font-mono font-bold">
                  ANYCAST DNS
                </span>
                <button
                  onClick={() => onNavigate('service-domains')}
                  className="text-xs font-semibold text-white hover:text-blue-300 transition-colors flex items-center space-x-1"
                >
                  <span>Tabela</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* CARD 03: GATEWAYS M-PESA & PLATAFORMAS */}
            <div className="neo-glass-card rounded-3xl p-5 border border-blue-500/20 shadow-2xl flex flex-col justify-between group hover:border-emerald-400/50 transition-all">
              <div className="space-y-4">
                {/* Live Mock UI Screen Container */}
                <div className="w-full h-44 rounded-2xl bg-[#050B18] border border-blue-500/20 p-3.5 flex flex-col justify-between overflow-hidden relative shadow-inner">
                  <div className="flex items-center justify-between border-b border-blue-900/40 pb-2">
                    <span className="text-[9px] font-mono text-rose-400 font-bold uppercase">M-PESA STK PUSH API</span>
                    <span className="text-[8px] font-mono text-slate-400">INSTANT C2B</span>
                  </div>

                  {/* M-Pesa Interactive Simulation */}
                  <div className="p-2 rounded-xl bg-slate-950 border border-blue-500/20 text-center space-y-1.5">
                    {!mpesaSimulated ? (
                      <>
                        <div className="text-[9px] font-mono text-slate-400">Faturação NUIT / M-Pesa</div>
                        <div className="text-xs font-bold text-white font-mono">2.900 MT</div>
                        <button
                          onClick={handleSimulateMpesa}
                          disabled={mpesaLoading}
                          className="w-full py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold transition-colors shadow-md"
                        >
                          {mpesaLoading ? 'Enviando STK Push...' : 'Simular PIN no Telemóvel'}
                        </button>
                      </>
                    ) : (
                      <div className="py-1 space-y-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                        <div className="text-[10px] font-bold text-white">Pagamento Aprovado!</div>
                        <button
                          onClick={() => setMpesaSimulated(false)}
                          className="text-[9px] text-blue-400 underline"
                        >
                          Repetir teste
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="text-[8px] font-mono text-slate-500 border-t border-blue-950 pt-1">
                    Integração com Vodacom M-Pesa & Movitel e-Mola
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-blue-300">03</span>
                    <h4 className="text-sm font-bold text-white font-display">
                      Sistemas & Automação M-Pesa
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Plataformas integradas com faturamento fiscal e liquidação instantânea móvel.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-blue-900/40 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 text-[10px] font-mono font-bold">
                  API MOÇAMBIQUE
                </span>
                <button
                  onClick={() => onNavigate('service-apps')}
                  className="text-xs font-semibold text-white hover:text-emerald-300 transition-colors flex items-center space-x-1"
                >
                  <span>Sistemas</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 5. ACHIEVEMENTS & IMPACT GLASS STRIP */}
        {/* ========================================================================= */}
        <div className="neo-glass rounded-3xl p-6 sm:p-8 border border-blue-500/20 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-3 space-y-1.5">
              <div className="flex items-center space-x-2 text-blue-300">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">IMPACTO & OPERAÇÕES</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Métricas Reais
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dados consolidados de infraestrutura ativa no ecossistema moçambicano.
              </p>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Star, val: '280+', label: 'Domínios .MZ Ativos', sub: 'Sob Anycast DNS' },
                { icon: Mail, val: '1.200+', label: 'Caixas de Email 15GB', sub: 'Cluster DESART Mail' },
                { icon: Zap, val: '99.98%', label: 'Uptime Contratual SLA', sub: 'Redundância Maputo + JHB' },
                { icon: Award, val: '100%', label: 'Engenharia Moçambicana', sub: 'Suporte Direto 833 081 636' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/15 hover:border-blue-400/30 transition-all text-center space-y-1 group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/15 text-blue-300 flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-display">
                    {stat.val}
                  </div>
                  <div className="text-xs font-bold text-slate-200">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{stat.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. BOTTOM CONTACT DECK */}
        {/* ========================================================================= */}
        <div className="neo-glass rounded-3xl p-6 sm:p-8 border border-blue-500/20 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box */}
            <div className="lg:col-span-4 space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300">
                  VAMOS POTENCIAR O SEU NEGÓCIO
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Pronto para uma presença de prestígio?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Consulte a nossa equipa em Maputo ou ative a sua conta diretamente através do Portal do Cliente.
                </p>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => onNavigate('customer-portal')}
                  className="py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center space-x-2 group"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Aceder ao Portal do Cliente</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Middle: Details & Glowing Glass Monogram Seal */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 py-2 border-y lg:border-y-0 lg:border-x border-blue-900/40 px-4">
              
              {/* Circular Glowing Glass Monogram in Blue */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-blue-400/40 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="w-20 h-20 rounded-full glass-sphere flex items-center justify-center border border-white/50 shadow-xl">
                  <span className="text-2xl font-black text-white font-display tracking-tight">
                    DS
                  </span>
                </div>
              </div>

              <div className="text-center space-y-1 text-xs">
                <div className="font-bold text-white">DESART STUDIO MOÇAMBIQUE</div>
                <div className="text-[11px] text-blue-300 font-mono">contacto@desartstudio.co.mz</div>
                <div className="text-[10px] text-slate-400 font-mono">Maputo, Av. 24 de Julho</div>
              </div>
            </div>

            {/* Right: Direct Channels */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                CANAIS DIRETOS EM MOÇAMBIQUE
              </div>

              <div className="space-y-2 text-xs">
                <a
                  href="https://wa.me/258833081636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-blue-950/30 hover:bg-blue-900/40 border border-blue-500/20 hover:border-blue-400/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2.5">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-bold text-white">WhatsApp & Chamadas</div>
                      <div className="text-[10px] text-slate-400 font-mono">+258 833 081 636</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-300 transition-colors" />
                </a>

                <button
                  onClick={() => onNavigate('service-mail')}
                  className="w-full p-2.5 rounded-xl bg-blue-950/30 hover:bg-blue-900/40 border border-blue-500/20 hover:border-blue-400/40 transition-all flex items-center justify-between group text-left"
                >
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="font-bold text-white">Webmail Corporativo</div>
                      <div className="text-[10px] text-slate-400 font-mono">mail.desartstudio.co.mz</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-300 transition-colors" />
                </button>

                <button
                  onClick={() => onNavigate('admin-dashboard')}
                  className="w-full p-2.5 rounded-xl bg-blue-950/30 hover:bg-blue-900/40 border border-blue-500/20 hover:border-blue-400/40 transition-all flex items-center justify-between group text-left"
                >
                  <div className="flex items-center space-x-2.5">
                    <Server className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="font-bold text-white">Painel Admin</div>
                      <div className="text-[10px] text-slate-400 font-mono">admin.desartstudio.co.mz</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-300 transition-colors" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
