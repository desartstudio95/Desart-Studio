import React, { useState } from 'react';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, Mail, Globe } from 'lucide-react';
import { AppView } from '../../types';

interface PricingSectionProps {
  onNavigate: (view: AppView) => void;
  onSelectPlan?: (planName: string, cycle: 'monthly' | 'annual') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate, onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlanModal, setSelectedPlanModal] = useState<string | null>(null);

  const plans = [
    {
      name: 'START',
      badge: 'Para Empreendedores & Startups',
      monthlyPrice: '750 MT',
      annualPrice: '7.500 MT',
      savings: 'Economize 1.500 MT no plano anual',
      mailboxes: '3 caixas postais',
      storage: '15 GB por caixa (45 GB totais)',
      features: [
        'Domínio .co.mz grátis no primeiro ano (plano anual)',
        '3 caixas postais profissionais',
        '15 GB de armazenamento ultrarrápido por conta',
        'Painel Webmail moderno profissional',
        'Criptografia SSL/TLS e 2FA',
        'Suporte por email e WhatsApp',
        'Filtro Antispam básico'
      ],
      popular: false,
      cta: 'Contratar Start'
    },
    {
      name: 'BUSINESS',
      badge: 'MAIS POPULAR',
      monthlyPrice: '1.750 MT',
      annualPrice: '17.500 MT',
      savings: 'Economize 3.500 MT no plano anual (2 meses grátis)',
      mailboxes: '10 caixas postais',
      storage: '15 GB por caixa (150 GB totais)',
      features: [
        'Domínio .co.mz grátis no primeiro ano',
        '10 caixas postais corporativas',
        '15 GB de armazenamento por caixa',
        'Gestão avançada de DNS e Nameservers',
        'Políticas de segurança SPF, DKIM e DMARC',
        'Sincronização Outlook, iOS, Android e Gmail',
        'Antispam inteligente com Machine Learning',
        'Suporte prioritário SLA 4 horas'
      ],
      popular: true,
      cta: 'Assinar Business'
    },
    {
      name: 'PROFESSIONAL',
      badge: 'Empresas em Expansão',
      monthlyPrice: '3.500 MT',
      annualPrice: '35.000 MT',
      savings: 'Economize 7.000 MT no plano anual',
      mailboxes: '25 caixas postais',
      storage: '15 GB por caixa (375 GB totais)',
      features: [
        'Domínio .co.mz + Certificado SSL Wildcard',
        '25 caixas postais corporativas dedicadas',
        '15 GB por conta com backup diário automático',
        'Acesso à API de integração e Webhooks',
        'Gestor de conta dedicado em Moçambique',
        'Relatórios de auditoria e entregabilidade de email',
        'Suporte 24/7 com atendimento telefónico'
      ],
      popular: false,
      cta: 'Contratar Professional'
    },
    {
      name: 'ENTERPRISE',
      badge: 'Grandes Corporações & Governo',
      monthlyPrice: 'Sob consulta',
      annualPrice: 'Sob consulta',
      savings: 'Capacidade ilimitada e SLA customizado',
      mailboxes: '50+ caixas postais',
      storage: 'Armazenamento dedicado sob demanda',
      features: [
        'Servidores de correio isolados (Dedicated Core)',
        'Mais de 50 caixas postais com quotas personalizáveis',
        'Migração assistida gratuita de dados legados',
        'SLA 99.99% com garantia contratual',
        'Faturação com retenção na fonte e pagamentos bancários',
        'Integração com Active Directory / LDAP corporativo',
        'Treinamento in-company para equipas'
      ],
      popular: false,
      cta: 'Falar com Consultor'
    }
  ];

  return (
    <section id="pricing-section" className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#4599FF] font-display">
            <span>PLANOS TRANSPARENTES EM METICAIS (MT)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            INFRAESTRUTURA ESCALÁVEL <br />
            <span className="text-[#4599FF]">PARA CADA ETAPA DO SEU NEGÓCIO.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Sem custos ocultos ou surpresas cambiais. Faturação em Meticais com suporte a M-Pesa, e-Mola e transferências bancárias nacionais.
          </p>

          {/* Toggle Mensal / Anual */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center space-x-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  !isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                FATURAÇÃO MENSAL
              </button>

              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  isAnnual ? 'bg-[#4599FF] text-white shadow-md shadow-blue-500/25' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span>FATURAÇÃO ANUAL</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isAnnual ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'}`}>
                  -2 MESES
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                plan.popular
                  ? 'bg-gradient-to-b from-slate-900 to-[#0B1528] text-white border-[#4599FF] shadow-2xl shadow-blue-500/20 lg:-translate-y-2'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              {/* Popular Flag */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#4599FF] to-blue-600 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                  ★ {plan.badge}
                </div>
              )}

              <div>
                {!plan.popular && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-display block mb-1">
                    {plan.badge}
                  </span>
                )}

                <h3 className={`text-xl font-extrabold tracking-tight font-display mb-3 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>

                {/* Price Display */}
                <div className="mb-4">
                  <div className="flex items-baseline space-x-1.5">
                    <span className={`text-3xl sm:text-4xl font-black font-display ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice !== 'Sob consulta' && (
                      <span className={`text-xs font-semibold ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                        {isAnnual ? '/ ano' : '/ mês'}
                      </span>
                    )}
                  </div>
                  {isAnnual && (
                    <div className="text-[11px] font-medium text-[#4599FF] mt-1">
                      {plan.savings}
                    </div>
                  )}
                </div>

                {/* Core Limits */}
                <div className={`p-3 rounded-xl mb-6 text-xs space-y-1 ${plan.popular ? 'bg-slate-800/80 border border-slate-700' : 'bg-slate-50 border border-slate-100'}`}>
                  <div className="font-bold flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#4599FF]" />
                    <span>{plan.mailboxes}</span>
                  </div>
                  <div className={plan.popular ? 'text-slate-400' : 'text-slate-500'}>
                    {plan.storage}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 text-xs">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2">
                      <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${plan.popular ? 'bg-blue-500/20 text-[#4599FF]' : 'bg-blue-50 text-[#4599FF]'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.popular ? 'text-slate-300' : 'text-slate-600'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setSelectedPlanModal(plan.name);
                  if (onSelectPlan) onSelectPlan(plan.name, isAnnual ? 'annual' : 'monthly');
                }}
                className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-md flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-[#4599FF] hover:bg-blue-600 text-white shadow-blue-500/30'
                    : 'bg-slate-900 hover:bg-[#4599FF] text-white shadow-slate-900/10'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal / Quick Confirmation */}
        {selectedPlanModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-blue-50 text-[#4599FF]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Plano Selecionado: {selectedPlanModal}</h3>
                </div>
                <button
                  onClick={() => setSelectedPlanModal(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Excelente escolha. O plano <strong>{selectedPlanModal}</strong> ({isAnnual ? 'Ciclo Anual' : 'Ciclo Mensal'}) será provisionado na infraestrutura DESART Mail com fatura emitida para pagamento via M-Pesa, e-Mola ou Transferência Bancária.
              </p>

              <div className="space-y-2 mb-6">
                <button
                  onClick={() => {
                    setSelectedPlanModal(null);
                    onNavigate('customer-portal');
                  }}
                  className="w-full py-3 rounded-xl bg-[#4599FF] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <span>Continuar no Portal do Cliente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedPlanModal(null)}
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                >
                  Continuar a navegar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
