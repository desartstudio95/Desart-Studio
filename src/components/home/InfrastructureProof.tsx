import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  MapPin, 
  Phone,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { AppView } from '../../types';

interface InfrastructureProofProps {
  onNavigate: (view: AppView) => void;
}

export const InfrastructureProof: React.FC<InfrastructureProofProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#050B16] text-slate-100 py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>SEGURANÇA & SOBERANIA NACIONAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight leading-tight">
              Infraestrutura que reside onde a sua empresa opera.
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Enquanto provedores genéricos hospedam serviços em servidores distantes com mais de 250ms de latência e suporte impessoal, a DESART opera pontos de presença otimizados para o ecossistema moçambicano.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Maputo Edge DC</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>JHB Teraco Redundancy</span>
              </div>
            </div>
          </div>

          {/* Right Proof Cards Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#4599FF] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Tráfego Local no IXP Moçambique
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Acesso veloz às suas caixas postais através de Vodacom, Movitel e TMCEL sem dependência de cabos submarinos internacionais.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                SLA Contratual de 99.98%
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Garantia formal de disponibilidade com monitorização permanente 24/7 e plano de contingência ativo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Linha Telefónica Direta em Português
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fale diretamente com engenheiros no <strong className="text-white">833 081 636</strong>. Resolução ágil sem filas infinitas de e-mails impessoais.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Faturação com NUIT & Pagamento Local
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Liquide faturas em Meticais (MT) via M-Pesa, e-Mola ou transferência para BIM, BCI e Standard Bank com total conformidade fiscal.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
