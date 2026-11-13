import React from 'react';
import { 
  Cpu, 
  Layers, 
  Database, 
  Terminal, 
  Smartphone, 
  Zap, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Server,
  CloudLightning,
  GitBranch
} from 'lucide-react';
import { AppView } from '../../types';

interface SystemsSectionProps {
  onNavigate: (view: AppView) => void;
}

export const SystemsSection: React.FC<SystemsSectionProps> = ({ onNavigate }) => {
  const systems = [
    { title: 'ERP & Gestão Empresarial', desc: 'Controlo financeiro integrado, faturação certificada e gestão de tesouraria multimoeda.' },
    { title: 'POS & Ponto de Venda', desc: 'Faturação rápida em lojas físicas com impressão térmica, leitor de código de barras e sincronização cloud.' },
    { title: 'Business Management Systems', desc: 'Plataformas completas para controlo de inventário, recursos humanos e fluxos operacionais.' },
    { title: 'Mobile Applications (iOS & Android)', desc: 'Apps nativas ou híbridas de alto rendimento para clientes finais ou equipas de campo.' },
    { title: 'Dashboards & Business Intelligence', desc: 'Painéis analíticos em tempo real com métricas cruciais para tomada de decisão executiva.' },
    { title: 'Automação de Processos & RPA', desc: 'Redução de tarefas manuais repetitivas através de scripts inteligentes e bots de validação.' },
    { title: 'APIs & Integrações de Pagamentos', desc: 'Conexão direta aos gateways do M-Pesa (Vodacom), e-Mola (Movitel) e bancos comerciais.' },
    { title: 'Custom Software Architecture', desc: 'Engenharia de software personalizada modelada de acordo com as necessidades específicas da sua empresa.' }
  ];

  const pipeline = [
    { step: '01', title: 'PROBLEM', desc: 'Diagnóstico aprofundado dos gargalos e objetivos do negócio' },
    { step: '02', title: 'ARCHITECTURE', desc: 'Modelagem de dados PostgreSQL, microsserviços e segurança RBAC' },
    { step: '03', title: 'DEVELOPMENT', desc: 'Engenharia limpa com testes automatizados e sprint ágil' },
    { step: '04', title: 'DEPLOYMENT', desc: 'Implementação contínua CI/CD em servidores cloud de baixa latência' },
    { step: '05', title: 'SUPPORT', desc: 'Monitorização 24/7, manutenção preventiva e evolução contínua' }
  ];

  return (
    <section className="py-24 bg-[#050B16] text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#4599FF]/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#4599FF] font-display">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGENHARIA DE SOFTWARE & SISTEMAS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            TECNOLOGIA PERSONALIZADA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
              PARA O SEU NEGÓCIO.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Desenvolvemos a espinha dorsal digital da sua empresa. Softwares robustos que integram pagamentos móveis em Moçambique, dados e operações numa só interface.
          </p>
        </div>

        {/* 5-Step Architecture Flow: PROBLEM ↓ ARCHITECTURE ↓ DEVELOPMENT ↓ DEPLOYMENT ↓ SUPPORT */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-[#4599FF] uppercase font-display">
              PIPELINE DE ENGENHARIA DESART
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {pipeline.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#4599FF]">{item.step}</span>
                    {idx < pipeline.length - 1 && (
                      <div className="hidden md:block text-slate-600 group-hover:text-blue-400 transition-colors">
                        →
                      </div>
                    )}
                  </div>

                  <h3 className="text-sm font-extrabold text-white tracking-wider font-display mb-1.5 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>Fase {idx + 1} Validada</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Matrix (8 Systems) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {systems.map((sys, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-[#4599FF]/70 hover:bg-slate-900/90 transition-all text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-500/20 text-[#4599FF] flex items-center justify-center mb-3 group-hover:bg-[#4599FF] group-hover:text-white transition-colors">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white font-display mb-1 group-hover:text-blue-300 transition-colors">
                {sys.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {sys.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-[#0B1528] border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl font-bold text-white font-display">Tem um desafio complexo de tecnologia?</h3>
            <p className="text-xs text-slate-400 mt-1">Converse diretamente com os nossos arquitetos de software e engenheiros de dados.</p>
          </div>
          <button
            onClick={() => onNavigate('service-apps')}
            className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#4599FF] hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex items-center space-x-2 shrink-0"
          >
            <span>AGENDAR SESSÃO TÉCNICA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
