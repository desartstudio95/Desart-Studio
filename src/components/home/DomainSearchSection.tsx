import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Zap,
  Loader2,
  Sparkles
} from 'lucide-react';
import { AppView } from '../../types';

interface DomainResult {
  domain: string;
  tld: string;
  pricePerYear: string;
  renewalPrice: string;
  available: boolean;
  badge: string;
  category: string;
}

interface DomainSearchSectionProps {
  onNavigate: (view: AppView) => void;
  onRegisterSuccess?: (domainName: string) => void;
}

export const DomainSearchSection: React.FC<DomainSearchSectionProps> = ({ 
  onNavigate,
  onRegisterSuccess 
}) => {
  const [query, setQuery] = useState('minhaempresa.co.mz');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[]>([
    {
      domain: 'minhaempresa.co.mz',
      tld: '.co.mz',
      pricePerYear: '2.900 MT / ano',
      renewalPrice: '2.900 MT',
      available: true,
      badge: 'Recomendado para Moçambique',
      category: 'Nacional Oficial'
    },
    {
      domain: 'minhaempresa.mz',
      tld: '.mz',
      pricePerYear: '3.500 MT / ano',
      renewalPrice: '3.500 MT',
      available: true,
      badge: 'Identidade de Prestígio',
      category: 'Topo de Moçambique'
    },
    {
      domain: 'minhaempresa.com',
      tld: '.com',
      pricePerYear: '1.450 MT / ano',
      renewalPrice: '1.450 MT',
      available: true,
      badge: 'Alcance Global',
      category: 'Internacional'
    },
    {
      domain: 'minhaempresa.africa',
      tld: '.africa',
      pricePerYear: '2.200 MT / ano',
      renewalPrice: '2.200 MT',
      available: true,
      badge: 'Presença Continental',
      category: 'Pan-Africano'
    }
  ]);
  const [selectedDomain, setSelectedDomain] = useState<DomainResult | null>(null);
  const [registering, setRegistering] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setRegisterSuccess(null);

    try {
      const response = await fetch(`/api/domains/search?q=${encodeURIComponent(query.trim())}`);
      const data = await response.json();
      if (data.results) {
        setResults(data.results);
      }
    } catch (err) {
      console.error('Error fetching registrar data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmRegistration = async (domainObj: DomainResult) => {
    setRegistering(true);
    try {
      const res = await fetch('/api/domains/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: domainObj.domain,
          years: 1,
          registrant: 'João Silva'
        })
      });
      const data = await res.json();
      if (data.success) {
        setRegisterSuccess(domainObj.domain);
        setSelectedDomain(null);
        if (onRegisterSuccess) onRegisterSuccess(domainObj.domain);
      }
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setRegistering(false);
    }
  };

  return (
    <section id="domain-search-box" className="py-24 bg-white relative overflow-hidden">
      {/* Background subtle light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#4599FF] font-display">
            <Globe className="w-3.5 h-3.5" />
            <span>REGISTO DE DOMÍNIOS OFICIAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            ENCONTRE O DOMÍNIO <br />
            <span className="text-[#4599FF]">DO SEU NEGÓCIO.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Garanta o seu endereço oficial em Moçambique (.co.mz, .mz) ou extensões mundiais com gestão DNS automatizada, proteção de privacidade e segurança SSL imediata.
          </p>
        </div>

        {/* Large Search Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <form 
            onSubmit={handleSearch}
            className="p-2 sm:p-2.5 rounded-2xl bg-white shadow-xl shadow-blue-500/8 border-2 border-blue-100 hover:border-[#4599FF] focus-within:border-[#4599FF] transition-all flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="flex items-center px-4 py-2 w-full">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Exemplo: minhaempresa.co.mz"
                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 font-semibold text-base sm:text-lg focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-gradient-to-r from-[#4599FF] to-[#1e73e8] hover:from-[#358aee] hover:to-[#1766c7] transition-all shadow-md shadow-blue-500/25 flex items-center justify-center space-x-2 shrink-0 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>A CONSULTAR...</span>
                </>
              ) : (
                <>
                  <span>PESQUISAR</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick extension pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-semibold text-slate-500">
            <span className="text-slate-400">TLDs populares:</span>
            {['.co.mz (2.900 MT)', '.mz (3.500 MT)', '.com (1.450 MT)', '.africa (2.200 MT)', '.org (1.800 MT)'].map((pill, i) => (
              <button
                key={i}
                onClick={() => {
                  const base = query.split('.')[0] || 'minhaempresa';
                  setQuery(`${base}${pill.split(' ')[0]}`);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100/80 hover:bg-blue-50 hover:text-[#4599FF] transition-colors"
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Success Banner */}
        {registerSuccess && (
          <div className="max-w-3xl mx-auto mb-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-sm font-bold">Domínio {registerSuccess} registado com sucesso!</p>
                <p className="text-xs text-emerald-700">Adicionado ao seu inventário no Portal do Cliente com DNS pré-configurado.</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('customer-portal')}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Gerir no Portal
            </button>
          </div>
        )}

        {/* Search Results Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                item.available 
                  ? 'bg-white hover:border-[#4599FF] hover:shadow-lg hover:shadow-blue-500/10 border-slate-200' 
                  : 'bg-slate-50/70 border-slate-200/70 opacity-75'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-[#4599FF]">
                    {item.badge}
                  </span>
                  
                  {item.available ? (
                    <div className="flex items-center space-x-1 text-emerald-600 text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Disponível</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 text-rose-500 text-xs font-bold">
                      <XCircle className="w-4 h-4" />
                      <span>Registado</span>
                    </div>
                  )}
                </div>

                <div className="text-xl font-extrabold text-slate-900 tracking-tight font-display mb-1">
                  {item.domain}
                </div>

                <div className="text-xs text-slate-500 mb-4">
                  {item.category} • Inclui DNS Anycast, Nameservers e Bloqueio de Transferência
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-lg font-black text-slate-900 font-display">{item.pricePerYear}</span>
                  <div className="text-[10px] text-slate-400">Renovação garantida por {item.renewalPrice}</div>
                </div>

                {item.available ? (
                  <button
                    onClick={() => setSelectedDomain(item)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-[#4599FF] transition-colors shadow-xs"
                  >
                    REGISTAR
                  </button>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 bg-slate-200 cursor-not-allowed"
                  >
                    INDISPONÍVEL
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Registration Modal / Checkout Confirmation */}
        {selectedDomain && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-blue-50 text-[#4599FF]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Confirmar Registo de Domínio</h3>
                    <p className="text-xs text-slate-500">Conexão direta ao REGISTAR Core</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 mb-5">
                <div className="text-lg font-extrabold text-[#0B1528] font-display">{selectedDomain.domain}</div>
                <div className="text-xs text-slate-600 mt-1">Período inicial: 1 ano com renovação automática</div>
                <div className="mt-3 text-2xl font-black text-[#4599FF]">{selectedDomain.pricePerYear}</div>
              </div>

              <div className="space-y-3 mb-6 text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proteção WHOIS e privacidade de dados incluídas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>DNS Cluster Anycast com redundância de servidores em Maputo e Europa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pronto para associar a contas DESART Mail e Websites corporativos</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="w-1/2 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => handleConfirmRegistration(selectedDomain)}
                  disabled={registering}
                  className="w-1/2 py-3 rounded-xl bg-[#4599FF] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-blue-500/25 disabled:opacity-75"
                >
                  {registering ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>A PROCESSAR...</span>
                    </>
                  ) : (
                    <>
                      <span>CONFIRMAR AGORA</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
