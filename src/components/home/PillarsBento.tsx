import React from 'react';
import { 
  Globe, 
  Mail, 
  Laptop, 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Server,
  Zap,
  Smartphone
} from 'lucide-react';
import { AppView } from '../../types';

interface PillarsBentoProps {
  onNavigate: (view: AppView) => void;
}

export const PillarsBento: React.FC<PillarsBentoProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#050B16] text-slate-100 py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#4599FF] uppercase tracking-wider mb-2">
              <span>ECOSSISTEMA INTEGRADO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
              Quatro pilares fundamentais.<br />Zero concessões.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
            Elimine a fragmentação de fornecedores. A sua presença digital inteira consolidada sob um único padrão de engenharia e faturamento nacional.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: DESART Mail (Hero Box - 7 cols) */}
          <div className="lg:col-span-7 bg-[#091224] rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/20">
                  15 GB / CAIXA POSTAL
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  DESART Mail & Cluster Soberano
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  Caixas de email corporativo que realmente suportam a rotina da sua empresa. Sem caixas cheias a cada trimestre, com servidores soberanos isolados e imunidade a varreduras de terceiros.
                </p>
              </div>

              {/* Visual mini-feature comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                  <div className="text-slate-400 text-[11px]">DESART Mail</div>
                  <div className="text-base font-bold text-emerald-400">15 GB Quota Real</div>
                  <div className="text-[11px] text-slate-500">SPF + DKIM + DMARC integrados</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/40 space-y-1 opacity-70">
                  <div className="text-slate-500 text-[11px]">Alojamentos Comuns</div>
                  <div className="text-base font-bold text-slate-400">1 GB a 2 GB partilhado</div>
                  <div className="text-[11px] text-slate-500">Caixas bloqueadas com frequência</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => onNavigate('service-mail')}
                className="text-xs font-bold text-indigo-400 hover:text-white transition-colors flex items-center space-x-1.5"
              >
                <span>Conhecer planos DESART Mail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-slate-500 font-mono">Webmail Profissional nativo</span>
            </div>
          </div>

          {/* Bento Item 2: Domínios .MZ (5 cols) */}
          <div className="lg:col-span-5 bg-[#091224] rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#4599FF] flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 font-mono text-xs font-bold border border-blue-500/20">
                  REGISTO NACIONAL
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  Domínios Oficiais .CO.MZ & .MZ
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Garantia jurídica e técnica da identidade da sua marca em Moçambique. Gestão de DNS com Anycast resiliente e renovações automáticas em Meticais.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Extensão Corporativa (.co.mz):</span>
                  <strong className="text-white font-mono">2.900 MT / ano</strong>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Extensão Oficial Nacional (.mz):</span>
                  <strong className="text-white font-mono">3.500 MT / ano</strong>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => onNavigate('service-domains')}
                className="text-xs font-bold text-[#4599FF] hover:text-white transition-colors flex items-center space-x-1.5"
              >
                <span>Tabela oficial de TLDs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-slate-500 font-mono">Anycast DNS</span>
            </div>
          </div>

          {/* Bento Item 3: Engenharia Web (6 cols) */}
          <div className="lg:col-span-6 bg-[#091224] rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  Websites & Plataformas de Prestígio
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Design autoral de calibre suíço, sem o aspeto amador de modelos gerados por IA. Páginas desenhadas para transmitir autoridade e converter parceiros de grande porte.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-400 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Carregamento em menos de 1 segundo através de CDN Edge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Totalmente responsivo em smartphone, tablet e desktop</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <button
                onClick={() => onNavigate('service-websites')}
                className="text-xs font-bold text-sky-400 hover:text-white transition-colors flex items-center space-x-1.5"
              >
                <span>Ver padrões de engenharia web</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Item 4: Sistemas & M-Pesa (6 cols) */}
          <div className="lg:col-span-6 bg-[#091224] rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  Sistemas Empresariais & Automação M-Pesa
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Softwares desenhados para a realidade fiscal e operacional de Moçambique: faturação certificada com NUIT, controle de stock e pagamentos automáticos móveis.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-400 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Integração nativa de APIs Vodacom M-Pesa e Movitel e-Mola</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acesso seguro com perfis e permissões restritas (RBAC)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <button
                onClick={() => onNavigate('service-apps')}
                className="text-xs font-bold text-emerald-400 hover:text-white transition-colors flex items-center space-x-1.5"
              >
                <span>Consultar soluções de sistemas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
