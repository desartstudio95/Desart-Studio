import React, { useState } from 'react';
import { 
  Globe, 
  Mail, 
  Zap, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Server, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Lock,
  RefreshCw,
  Phone
} from 'lucide-react';
import { AppView } from '../../types';

interface StrikingHeroProps {
  onNavigate: (view: AppView) => void;
  onOpenAi: () => void;
}

export const StrikingHero: React.FC<StrikingHeroProps> = ({ onNavigate, onOpenAi }) => {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'domains' | 'mail' | 'speed' | 'mpesa'>('domains');
  
  // Domain search simulator inside console
  const [domainQuery, setDomainQuery] = useState('minhaempresa');
  const [selectedTld, setSelectedTld] = useState('.co.mz');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<{ available: boolean; domain: string; price: string } | null>({
    available: true,
    domain: 'minhaempresa.co.mz',
    price: '2.900 MT / ano'
  });

  // M-Pesa simulator state
  const [mpesaSimulated, setMpesaSimulated] = useState(false);
  const [mpesaLoading, setMpesaLoading] = useState(false);

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
    }, 450);
  };

  const handleSimulateMpesa = () => {
    setMpesaLoading(true);
    setTimeout(() => {
      setMpesaLoading(false);
      setMpesaSimulated(true);
    }, 900);
  };

  return (
    <section className="relative min-h-[92vh] bg-[#040812] text-slate-100 pt-28 pb-20 overflow-hidden">
      
      {/* Precision grid & ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#1E40AF]/20 via-[#4599FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Sovereign Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">DESART STUDIO</span>
            <span className="text-slate-600">•</span>
            <span className="text-white font-medium">REDE ANYCAST MOÇAMBIQUE ATIVA</span>
          </div>
        </div>

        {/* Hero Typography: Confident, Authoritative, Concise */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-display">
            Infraestrutura digital soberana para empresas em Moçambique.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Domínios <span className="text-white font-semibold">.MZ</span> oficiais, caixas de e-mail corporativo com <span className="text-white font-semibold">15 GB (DESART Mail)</span>, websites de alta performance e automação com M-Pesa.
          </p>

          {/* Direct Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => {
                const el = document.getElementById('configurator-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#4599FF] hover:bg-blue-600 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
            >
              <span>Configurar Solução para a Minha Empresa</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('customer-portal')}
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all flex items-center space-x-2"
            >
              <Lock className="w-3.5 h-3.5 text-[#4599FF]" />
              <span>Portal do Cliente</span>
            </button>

            <a
              href="tel:833081636"
              className="px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Linha Direta: 833 081 636</span>
            </a>
          </div>
        </div>

        {/* Centerpiece: The Interactive DESART Console */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#080F1E] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden">
            
            {/* Console Bar / Header */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#050B16] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 pl-2 hidden sm:inline">
                  desart-core-v2.5 // engine live preview
                </span>
              </div>

              {/* Console Mode Switcher */}
              <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {[
                  { id: 'domains', label: 'Domínios .MZ', icon: Globe },
                  { id: 'mail', label: 'DESART Mail 15GB', icon: Mail },
                  { id: 'speed', label: 'Velocidade', icon: Zap },
                  { id: 'mpesa', label: 'M-Pesa Gateway', icon: Smartphone },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveConsoleTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                      activeConsoleTab === tab.id
                        ? 'bg-[#4599FF] text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Console Body Content */}
            <div className="p-6 sm:p-8">
              
              {/* TAB 1: DOMAINS SEARCH */}
              {activeConsoleTab === 'domains' && (
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                      VERIFICAÇÃO WHOIS EM TEMPO REAL
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Pesquise o nome da sua empresa no registo oficial de Moçambique
                    </h3>
                  </div>

                  <form onSubmit={handleDomainSearch} className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-stretch gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="relative flex-1 flex items-center pl-4">
                        <Search className="w-4 h-4 text-slate-500 mr-2 shrink-0" />
                        <input
                          type="text"
                          value={domainQuery}
                          onChange={(e) => setDomainQuery(e.target.value)}
                          placeholder="ex: minhaempresa"
                          className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-slate-600 font-mono"
                        />
                      </div>

                      <div className="flex items-center space-x-2 px-2">
                        <select
                          value={selectedTld}
                          onChange={(e) => setSelectedTld(e.target.value)}
                          className="bg-slate-900 text-white text-xs font-mono font-bold px-3 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500"
                        >
                          <option value=".co.mz">.co.mz (2.900 MT)</option>
                          <option value=".mz">.mz (3.500 MT)</option>
                          <option value=".com">.com (1.450 MT)</option>
                          <option value=".africa">.africa (2.200 MT)</option>
                        </select>

                        <button
                          type="submit"
                          disabled={isSearching}
                          className="px-5 py-2.5 rounded-xl bg-[#4599FF] hover:bg-blue-600 text-white text-xs font-bold flex items-center space-x-1.5 shrink-0 transition-colors"
                        >
                          {isSearching ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <>
                              <span>Verificar</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Quick suggestion tags */}
                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <span className="text-[11px] text-slate-500">Exemplos rápidos:</span>
                      {['advogados', 'capital', 'logistica', 'agro'].map((sug) => (
                        <button
                          type="button"
                          key={sug}
                          onClick={() => {
                            setDomainQuery(sug);
                            setSelectedTld('.co.mz');
                            setSearchResult({
                              available: true,
                              domain: `${sug}.co.mz`,
                              price: '2.900 MT / ano'
                            });
                          }}
                          className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 hover:text-white border border-slate-800 text-[11px] font-mono"
                        >
                          {sug}.co.mz
                        </button>
                      ))}
                    </div>
                  </form>

                  {/* Search Result Card */}
                  {searchResult && (
                    <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-base font-extrabold text-white">
                              {searchResult.domain}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                              DISPONÍVEL
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            Registo imediato com Anycast DNS + Proteção WHOIS gratuita
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 self-end sm:self-auto">
                        <div className="text-right">
                          <div className="text-base font-black text-white font-display">
                            {searchResult.price}
                          </div>
                          <div className="text-[10px] text-slate-400">Recibo com NUIT</div>
                        </div>

                        <button
                          onClick={() => onNavigate('customer-portal')}
                          className="px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold transition-colors"
                        >
                          Registar no Portal
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: DESART MAIL 15GB */}
              {activeConsoleTab === 'mail' && (
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                      DESART MAIL CLUSTER ENGINE
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Caixas postais isoladas com 15 GB reais por utilizador
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Simulated Mailbox status */}
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                          <span className="font-mono text-xs font-bold text-white">direcao@empresa.co.mz</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-[#4599FF] font-bold">
                          15 GB QUOTA
                        </span>
                      </div>

                      {/* Quota bar */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>Armazenamento utilizado</span>
                          <strong className="text-white font-mono">2.8 GB / 15.0 GB (18%)</strong>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[18%]"></div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-900 text-xs text-slate-400 flex items-center justify-between">
                        <span>Segurança Criptográfica:</span>
                        <span className="text-emerald-400 font-mono font-bold">SPF / DKIM / DMARC 100% OK</span>
                      </div>
                    </div>

                    {/* Protocol parameters */}
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="text-xs font-bold text-slate-300 font-display">
                        Parâmetros de Conexão Segura
                      </div>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between p-2 rounded-lg bg-slate-900/70">
                          <span className="text-slate-400">Servidor IMAP:</span>
                          <span className="text-white">mail.desartstudio.co.mz:993 (SSL)</span>
                        </div>
                        <div className="flex justify-between p-2 rounded-lg bg-slate-900/70">
                          <span className="text-slate-400">Servidor SMTP:</span>
                          <span className="text-white">mail.desartstudio.co.mz:465 (SSL)</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Compatibilidade nativa com Microsoft Outlook, Apple Mail e Gmail móvel.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-400">
                      Incluído em todos os pacotes DESART Mail com backup automático diário.
                    </span>
                    <button
                      onClick={() => onNavigate('service-mail')}
                      className="text-xs text-[#4599FF] hover:underline font-semibold flex items-center space-x-1"
                    >
                      <span>Ver especificações completas</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: SPEED */}
              {activeConsoleTab === 'speed' && (
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                      TELEMETRIA DE BAIXA LATÊNCIA
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Servidores posicionados junto do tráfego moçambicano
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                      <div className="text-3xl font-black text-emerald-400 font-display">18 ms</div>
                      <div className="text-xs font-bold text-white">Latência no IXP Maputo</div>
                      <div className="text-[11px] text-slate-400">Acesso via Vodacom, Movitel e TMCEL</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                      <div className="text-3xl font-black text-[#4599FF] font-display">100/100</div>
                      <div className="text-xs font-bold text-white">Google Core Web Vitals</div>
                      <div className="text-[11px] text-slate-400">Engenharia sem código inchado</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                      <div className="text-3xl font-black text-indigo-400 font-display">99.98%</div>
                      <div className="text-xs font-bold text-white">SLA de Disponibilidade</div>
                      <div className="text-[11px] text-slate-400">Redundância Maputo + Joanesburgo</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Diferente de alojamentos tradicionais hospedados nos Estados Unidos ou na Europa (com mais de 250ms de latência), os serviços DESART operam no ponto de troca de tráfego nacional.
                  </p>
                </div>
              )}

              {/* TAB 4: M-PESA GATEWAY */}
              {activeConsoleTab === 'mpesa' && (
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1">
                      PAGAMENTOS LOCAIS MOÇAMBICANOS
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Liquidação instantânea via M-Pesa C2B e e-Mola
                    </h3>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 max-w-sm">
                      <div className="text-xs font-bold text-white">Simulação de STK Push Automático:</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Ao registar qualquer domínio ou serviço, o seu telemóvel recebe a solicitação oficial para introduzir o PIN em segundos.
                      </p>
                      <div className="text-[11px] text-slate-500 font-mono">
                        Gateway ativo: Vodacom M-Pesa API v2 (C2B Instant Webhook)
                      </div>
                    </div>

                    <div className="w-full sm:w-72 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                      {!mpesaSimulated ? (
                        <>
                          <div className="text-[11px] font-mono text-slate-400">
                            PAGAMENTO: REGISTO .CO.MZ
                          </div>
                          <div className="text-lg font-bold text-white">2.900 MT</div>
                          <button
                            onClick={handleSimulateMpesa}
                            disabled={mpesaLoading}
                            className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors flex items-center justify-center space-x-2"
                          >
                            {mpesaLoading ? (
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              <span>Simular Confirmação M-Pesa</span>
                            )}
                          </button>
                        </>
                      ) : (
                        <div className="text-center space-y-2 py-1">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div className="text-xs font-bold text-white">Pagamento Confirmado!</div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            ID: MPX-90812 • Recibo gerado
                          </div>
                          <button
                            onClick={() => setMpesaSimulated(false)}
                            className="text-[10px] text-blue-400 hover:underline"
                          >
                            Testar novamente
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
