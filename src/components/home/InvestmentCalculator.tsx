import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Mail, 
  Globe, 
  Laptop,
  Sparkles,
  Phone
} from 'lucide-react';
import { AppView } from '../../types';

interface InvestmentCalculatorProps {
  onNavigate: (view: AppView) => void;
}

export const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({ onNavigate }) => {
  const [domainType, setDomainType] = useState<'.co.mz' | '.mz' | '.com' | 'none'>('.co.mz');
  const [mailboxesCount, setMailboxesCount] = useState<number>(10);
  const [websiteOption, setWebsiteOption] = useState<'none' | 'landing' | 'corporate'>('none');
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  // Pricing calculations in MT
  const getDomainPrice = () => {
    switch (domainType) {
      case '.co.mz': return 2900;
      case '.mz': return 3500;
      case '.com': return 1450;
      case 'none': return 0;
    }
  };

  // Mailboxes pricing logic:
  // 3 boxes: 750 MT/mo (7.500 MT/yr)
  // 10 boxes: 1.750 MT/mo (17.500 MT/yr)
  // 25 boxes: 3.500 MT/mo (35.000 MT/yr)
  // custom: scale linearly based on tiers
  const getMailAnnualPrice = () => {
    if (mailboxesCount <= 3) return 7500;
    if (mailboxesCount <= 10) return 17500;
    if (mailboxesCount <= 25) return 35000;
    return 35000 + (mailboxesCount - 25) * 1200;
  };

  const getWebsitePrice = () => {
    if (websiteOption === 'landing') return 25000;
    if (websiteOption === 'corporate') return 45000;
    return 0;
  };

  const domainPrice = getDomainPrice();
  const mailAnnual = getMailAnnualPrice();
  const mailMonthly = Math.round(mailAnnual / 10); // 2 months free on annual
  const webPrice = getWebsitePrice();

  const totalAnnual = domainPrice + mailAnnual + webPrice;
  const totalMonthlyEquivalent = Math.round((domainPrice + mailAnnual) / 12) + (webPrice > 0 ? Math.round(webPrice / 12) : 0);

  return (
    <section id="configurator-section" className="bg-[#040812] text-slate-100 py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#4599FF] uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>CONFIGURADOR DE INVESTIMENTO TRANSPARENTE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Sem custos ocultos.<br />Preço exato em Meticais (MT).
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Ajuste os parâmetros da sua empresa e obtenha instantaneamente o valor formal de investimento com fatura fiscal.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="max-w-5xl mx-auto bg-[#081020] rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Domínio */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                  <Globe className="w-3.5 h-3.5 text-[#4599FF]" />
                  <span>1. Registo de Domínio Oficial</span>
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                  {[
                    { id: '.co.mz', label: '.co.mz', sub: '2.900 MT/ano', badge: 'Mais Comum' },
                    { id: '.mz', label: '.mz', sub: '3.500 MT/ano', badge: 'Oficial' },
                    { id: '.com', label: '.com', sub: '1.450 MT/ano', badge: 'Global' },
                    { id: 'none', label: 'Já Possuo', sub: '0 MT', badge: 'Migração' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setDomainType(t.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        domainType === t.id
                          ? 'bg-[#4599FF]/15 border-[#4599FF] text-white shadow-md shadow-blue-500/10'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-white text-sm">{t.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{t.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Caixas de Email 15GB */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>2. Caixas de Email DESART Mail (15 GB / caixa)</span>
                  </label>
                  <span className="font-mono text-xs font-bold text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30">
                    {mailboxesCount} caixas ({mailboxesCount * 15} GB totais)
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                  {[3, 10, 25, 50].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setMailboxesCount(count)}
                      className={`py-2.5 rounded-xl border text-center font-bold transition-all ${
                        mailboxesCount === count
                          ? 'bg-indigo-500 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {count} Caixas
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Todas as caixas incluem Webmail Profissional DESART, IMAP/SMTP seguro e Antispam IA.</span>
                  <span className="text-emerald-400 font-mono font-bold">15 GB cada</span>
                </div>
              </div>

              {/* Step 3: Website Adicional (Opcional) */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                  <Laptop className="w-3.5 h-3.5 text-sky-400" />
                  <span>3. Website ou Presença Digital (Opcional)</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  {[
                    { id: 'none', title: 'Sem Website', desc: 'Apenas email e domínio' },
                    { id: 'landing', title: 'Landing Page Pro', desc: '+25.000 MT (Página única)' },
                    { id: 'corporate', title: 'Website Corporativo', desc: '+45.000 MT (Até 6 páginas)' },
                  ].map((w) => (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => setWebsiteOption(w.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        websiteOption === w.id
                          ? 'bg-sky-500/15 border-sky-500 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-white text-xs">{w.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{w.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary / Receipt Card (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    PROPOSTA ESTIMADA
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold font-mono">
                    RECIBO COM NUIT
                  </span>
                </div>

                {/* Line items */}
                <div className="py-4 space-y-3 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Domínio {domainType !== 'none' ? domainType : '(Existente)'}:</span>
                    <strong className="font-mono text-white">{domainPrice.toLocaleString()} MT</strong>
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span>{mailboxesCount}x Caixas DESART Mail (15GB):</span>
                    <strong className="font-mono text-white">{mailAnnual.toLocaleString()} MT/ano</strong>
                  </div>

                  {webPrice > 0 && (
                    <div className="flex justify-between text-slate-300">
                      <span>Desenvolvimento Web ({websiteOption}):</span>
                      <strong className="font-mono text-white">{webPrice.toLocaleString()} MT</strong>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-900 flex justify-between text-slate-400 text-[11px]">
                    <span>Configuração DNS & Ativação:</span>
                    <strong className="text-emerald-400 font-mono">GRÁTIS</strong>
                  </div>
                </div>

                {/* Total box */}
                <div className="p-4 rounded-2xl bg-[#091224] border border-blue-500/30 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Total Anual Consolidado
                  </div>
                  <div className="text-3xl font-black text-white font-display">
                    {totalAnnual.toLocaleString()} MT
                  </div>
                  <div className="text-xs text-blue-400 font-medium">
                    Equivalente a aprox. {totalMonthlyEquivalent.toLocaleString()} MT / mês
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onNavigate('customer-portal')}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#4599FF] hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Ativar Agora no Portal do Cliente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/258833081636?text=Ola%20DESART%20STUDIO,%20gostaria%20de%20solicitar%20uma%20proposta%20para%20${mailboxesCount}%20caixas%20de%20email%20e%20dominio%20${domainType}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Solicitar via WhatsApp / Telefone</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
