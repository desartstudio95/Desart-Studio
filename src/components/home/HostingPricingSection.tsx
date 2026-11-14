import React, { useState } from 'react';
import {
  Globe,
  ShieldCheck,
  Server,
  Check,
  Search,
  Loader2,
  CheckCircle2,
  XCircle,
  Calendar,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { AppView } from '../../types';
import {
  HOSTING_PLANS,
  DOMAIN_PRICING,
  ALL_IN_ONE_CAMPAIGN,
  isCampaignCurrentlyActive,
  getWhatsAppUrl,
} from '../../data/studioData';

interface HostingPricingSectionProps {
  onNavigate: (view: AppView) => void;
}

interface DomainCheckItem {
  domain: string;
  tld: string;
  pricePerYear: string;
  available: boolean;
}

export const HostingPricingSection: React.FC<HostingPricingSectionProps> = ({
  onNavigate,
}) => {
  const [domainInput, setDomainInput] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<DomainCheckItem[] | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const campaignActive = isCampaignCurrentlyActive();

  const handleDomainCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = domainInput.trim();
    if (!trimmed) {
      setSearchError('Introduza o nome do domínio que pretende pesquisar.');
      return;
    }
    setSearching(true);
    setSearchError(null);
    try {
      const res = await fetch(`/api/domains/search?q=${encodeURIComponent(trimmed)}`);
      const data = await res.json();
      if (!res.ok) {
        setSearchError(data.error || 'Não foi possível consultar o domínio.');
      } else {
        setSearchResults(data.results || []);
      }
    } catch {
      setSearchError('Erro de ligação ao serviço de pesquisa de domínios.');
    } finally {
      setSearching(false);
    }
  };

  return (
    <section
      id="hospedagem"
      aria-labelledby="hosting-heading"
      className="py-24 bg-[#071A33] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Block: Hosting & Domains Intro + Live Domain Check */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4599FF]">
              DESART Host · Hospedagem e Domínios
            </p>
            <h2
              id="hosting-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance"
            >
              A sua presença digital começa aqui.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Infraestrutura clara e sem promessas irreais. Gerimos o registo do seu domínio, certificados SSL e alojamento com painel DirectAdmin, quotas reais e acompanhamento técnico.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-200">
              {[
                'Registo e renovação de domínios',
                'Hospedagem web e WordPress',
                'Certificados SSL/TLS incluídos',
                'Painel DirectAdmin para clientes',
                'Gestão de registos DNS',
                'Assistência técnica para websites',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4599FF] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Domain Availability Checker + Standard TLD Rates */}
          <div className="lg:col-span-6 studio-surface rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white font-display">
                Verificar Disponibilidade de Domínio
              </h3>
              <p className="text-xs text-slate-400">
                Consulte extensões nacionais (.co.mz, .mz) e internacionais com renovação anual transparente.
              </p>
            </div>

            <form onSubmit={handleDomainCheck} className="flex flex-col sm:flex-row gap-2.5">
              <label htmlFor="home-domain-input" className="sr-only">
                Nome do domínio
              </label>
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="home-domain-input"
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="Ex: suamarca.co.mz"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#041022] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4599FF]"
                />
              </div>
              <button
                type="submit"
                disabled={searching}
                className="px-6 py-3 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-sm font-bold transition-colors flex items-center justify-center gap-2 shrink-0 disabled:opacity-60"
              >
                {searching ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>A verificar</span>
                  </>
                ) : (
                  <span>Pesquisar</span>
                )}
              </button>
            </form>

            {searchError && (
              <p role="alert" className="text-xs text-rose-400">
                {searchError}
              </p>
            )}

            {searchResults && (
              <div className="space-y-2 pt-2 border-t border-white/10">
                {searchResults.slice(0, 4).map((item) => (
                  <div
                    key={item.domain}
                    className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-lg bg-[#041022]/80 border border-white/10 text-xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {item.available ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                      <span className="font-semibold text-white truncate">{item.domain}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="tabular-nums text-slate-300 font-semibold">
                        {item.pricePerYear}
                      </span>
                      {item.available && (
                        <a
                          href={getWhatsAppUrl(`Olá DESART STUDIO, pretendo registar o domínio ${item.domain}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4599FF] hover:text-white font-semibold"
                        >
                          Solicitar
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Reference TLD Table */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Tabela de Referência Anual</span>
                <button
                  type="button"
                  onClick={() => onNavigate('dominios')}
                  className="text-[#4599FF] hover:text-white font-semibold inline-flex items-center gap-1"
                >
                  <span>Ver página de Domínios</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {DOMAIN_PRICING.slice(0, 3).map((d) => (
                  <div
                    key={d.tld}
                    className="p-3 rounded-lg bg-[#041022]/60 border border-white/10"
                  >
                    <div className="font-bold text-white font-display">{d.tld}</div>
                    <div className="text-slate-300 tabular-nums mt-0.5">{d.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hosting Plans Grid (Reseller Realistic Specs + Included vs Paid Extras) */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Planos de Hospedagem DirectAdmin
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                Quotas exatas de armazenamento SSD NVMe, tráfego e contas de e-mail conforme a infraestrutura real do servidor. Sem limites fictícios.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('hospedagem')}
              className="text-sm font-semibold text-[#4599FF] hover:text-white inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Detalhes técnicos completos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {HOSTING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border ${
                  plan.recommended
                    ? 'bg-[#102B4D]/70 border-[#4599FF] shadow-xl shadow-[#4599FF]/10'
                    : 'studio-surface'
                }`}
              >
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xl font-extrabold text-white font-display">
                        {plan.name}
                      </h4>
                      {plan.recommended && (
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#4599FF]">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300">{plan.subtitle}</p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <div className="text-3xl font-extrabold text-white font-display tabular-nums">
                      {plan.annualPrice}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 tabular-nums">
                      {plan.monthlyEquivalent}
                    </div>
                  </div>

                  {/* Exact Technical Quotas */}
                  <div className="p-4 rounded-xl bg-[#041022]/75 border border-white/10 space-y-2 text-xs text-slate-200">
                    <div className="font-semibold text-white">{plan.specs.storage}</div>
                    <div>{plan.specs.bandwidth}</div>
                    <div>{plan.specs.websites}</div>
                    <div>{plan.specs.emails}</div>
                    <div>{plan.specs.backups}</div>
                    <div className="text-[#4599FF] font-medium">{plan.specs.panel}</div>
                  </div>

                  {/* Included vs Paid Extras */}
                  <div className="space-y-3 text-xs">
                    <div className="font-bold uppercase tracking-wider text-slate-300 font-display">
                      Incluído no plano
                    </div>
                    <ul className="space-y-2 text-slate-300">
                      {plan.included.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#4599FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-white/10 font-bold uppercase tracking-wider text-slate-400 font-display">
                      Extras pagos à parte
                    </div>
                    <ul className="space-y-1.5 text-slate-400">
                      {plan.paidExtras.map((extra) => (
                        <li key={extra} className="flex items-start gap-2">
                          <span aria-hidden="true" className="text-slate-500">·</span>
                          <span>{extra}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <a
                    href={getWhatsAppUrl(`Olá DESART STUDIO, gostaria de contratar o ${plan.name} (${plan.annualPrice}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 ${
                      plan.recommended
                        ? 'bg-[#4599FF] hover:bg-[#3185eb] text-white'
                        : 'bg-[#102B4D] hover:bg-[#4599FF] text-white border border-white/10'
                    }`}
                  >
                    <span>Solicitar {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Configurable Promotional Campaign (Only shown when active and within dates) */}
        {campaignActive && (
          <div className="studio-glass rounded-2xl p-6 sm:p-10 border border-[#4599FF]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#4599FF] font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>{ALL_IN_ONE_CAMPAIGN.badge}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300 tabular-nums">
                    {ALL_IN_ONE_CAMPAIGN.validityLabel}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {ALL_IN_ONE_CAMPAIGN.title}
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-200 pt-1">
                  {ALL_IN_ONE_CAMPAIGN.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#4599FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-400 leading-relaxed pt-2">
                  {ALL_IN_ONE_CAMPAIGN.disclaimer}
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#041022]/85 rounded-xl p-6 sm:p-7 border border-white/10 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Preço de Campanha
                  </div>
                  <div className="text-4xl font-extrabold text-white font-display tabular-nums mt-1">
                    {ALL_IN_ONE_CAMPAIGN.price}
                  </div>
                  <div className="text-xs text-[#4599FF] mt-1">
                    Condição promocional temporária
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(`Olá DESART STUDIO, tenho interesse na ${ALL_IN_ONE_CAMPAIGN.title} (${ALL_IN_ONE_CAMPAIGN.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-sm font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Aderir à campanha</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
