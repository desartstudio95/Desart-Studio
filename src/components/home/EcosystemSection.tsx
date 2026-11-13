import React, { useState } from 'react';
import { 
  Globe, 
  Mail, 
  Laptop, 
  Palette, 
  Smartphone, 
  Cpu, 
  LifeBuoy, 
  ArrowRight,
  Shield,
  Layers
} from 'lucide-react';
import { DigitalCoreCanvas } from '../3d/DigitalCoreCanvas';
import { AppView } from '../../types';

interface EcosystemSectionProps {
  onNavigate: (view: AppView) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onNavigate }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const tools = [
    {
      index: '01',
      id: 'service-domains' as AppView,
      name: 'DOMAINS',
      title: 'Registo e Gestão de Domínios',
      desc: 'Domínios .co.mz e .mz com propagação ultrarrápida, proteção WHOIS e gestão DNS Anycast.',
      icon: Globe,
      accent: 'from-blue-500 to-cyan-400'
    },
    {
      index: '02',
      id: 'service-mail' as AppView,
      name: 'EMAIL',
      title: 'DESART Mail Corporativo',
      desc: '15 GB por caixa postal, servidores dedicados com criptografia DKIM, SPF, 2FA e webmail moderno.',
      icon: Mail,
      accent: 'from-blue-600 to-indigo-500'
    },
    {
      index: '03',
      id: 'service-websites' as AppView,
      name: 'WEBSITES',
      title: 'Websites de Alto Rendimento',
      desc: 'Portais corporativos, landing pages e e-commerce desenhados para autoridade e conversão imediata.',
      icon: Laptop,
      accent: 'from-sky-500 to-blue-500'
    },
    {
      index: '04',
      id: 'service-design' as AppView,
      name: 'DESIGN',
      title: 'Design Gráfico & Branding',
      desc: 'Identidade de marca inesquecível, embalagens, materiais institucionais e publicidade de topo.',
      icon: Palette,
      accent: 'from-blue-400 to-teal-400'
    },
    {
      index: '05',
      id: 'service-apps' as AppView,
      name: 'APPLICATIONS',
      title: 'Aplicações Web & Mobile',
      desc: 'Desenvolvimento ágil de apps sob medida em iOS, Android e arquiteturas modernas na nuvem.',
      icon: Smartphone,
      accent: 'from-indigo-500 to-purple-500'
    },
    {
      index: '06',
      id: 'service-apps' as AppView,
      name: 'SYSTEMS',
      title: 'Sistemas de Gestão & ERP',
      desc: 'Softwares de faturação, controlo de stock, POS e integrações com M-Pesa e bancos locais.',
      icon: Cpu,
      accent: 'from-blue-700 to-slate-800'
    },
    {
      index: '07',
      id: 'service-support' as AppView,
      name: 'SUPPORT',
      title: 'Suporte Técnico Proativo',
      desc: 'Monitorização contínua 24/7, SLA garantido e equipa sénior local em Moçambique.',
      icon: LifeBuoy,
      accent: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section id="ecosystem-section" className="py-24 bg-[#0B1528] text-white relative overflow-hidden">
      {/* Background ambient light and grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#4599FF]/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>

      {/* Large decorative typography */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] text-[160px] sm:text-[230px] font-black tracking-tight font-display whitespace-nowrap">
        ECOSYSTEM
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#4599FF] font-display">
            <span>ARQUITETURA TOTAL</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            UM ECOSSISTEMA. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
              TODAS AS FERRAMENTAS.
            </span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Elimine a fragmentação entre fornecedores distintos. O DESART DIGITAL CORE sincroniza a sua infraestrutura técnica, identidade e processos corporativos.
          </p>
        </div>

        {/* Central 3D Canvas visual + Grid of 7 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Central 3D Visualizer Canvas */}
          <div className="lg:col-span-5 h-[380px] sm:h-[440px] relative rounded-3xl glass-panel-dark flex items-center justify-center p-6 overflow-hidden border border-blue-500/20 shadow-2xl">
            <div className="absolute top-4 left-5 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              <span className="text-[11px] font-mono text-blue-300 uppercase tracking-wider">CORE VISUALIZER // LIVE</span>
            </div>
            
            <div className="w-full h-full">
              <DigitalCoreCanvas interactive={true} intensity="normal" theme="dark" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs flex items-center justify-between">
              <div className="flex items-center space-x-2 text-slate-300">
                <Shield className="w-4 h-4 text-[#4599FF]" />
                <span>Nós Integrados: <strong className="text-white">7 Serviços Ativos</strong></span>
              </div>
              <span className="text-[11px] font-bold text-[#4599FF] font-mono">100% DISPONIBILIDADE</span>
            </div>
          </div>

          {/* Interactive Cards: 01 to 07 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {tools.map((tool, idx) => {
              const isHovered = activeNode === idx;
              return (
                <div
                  key={tool.index}
                  onMouseEnter={() => setActiveNode(idx)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => onNavigate(tool.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border text-left group ${
                    isHovered 
                      ? 'bg-slate-800/90 border-[#4599FF] -translate-y-1.5 shadow-xl shadow-blue-500/10' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#4599FF]">{tool.index}</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-display group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                    <div className={`p-1.5 rounded-lg bg-gradient-to-tr ${tool.accent} text-white shadow-xs`}>
                      <tool.icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {tool.desc}
                  </p>

                  <div className="mt-3 flex items-center space-x-1.5 text-xs font-semibold text-[#4599FF] group-hover:text-white transition-colors">
                    <span>Aceder ao serviço</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
