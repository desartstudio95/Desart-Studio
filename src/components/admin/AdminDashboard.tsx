import React, { useState } from 'react';
import { 
  Sliders, 
  Users, 
  Globe, 
  Mail, 
  CreditCard, 
  LifeBuoy, 
  Server, 
  Activity, 
  Zap, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  ExternalLink,
  ShieldAlert,
  ArrowUpRight,
  Database,
  Terminal
} from 'lucide-react';
import { AppView } from '../../types';

interface AdminDashboardProps {
  onNavigate: (view: AppView) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const [adminTab, setAdminTab] = useState<'metrics' | 'domains' | 'servers' | 'clients' | 'finance' | 'api-console'>('metrics');
  const [syncingApi, setSyncingApi] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  const handleSyncRegistrar = () => {
    setSyncingApi(true);
    setTimeout(() => {
      setSyncingApi(false);
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
    }, 1500);
  };

  const clientsList = [
    { name: 'Empresa Exemplo Lda', nuit: '400192831', domain: 'empresa.co.mz', plan: 'BUSINESS', status: 'ACTIVE', mrr: '1.750 MT' },
    { name: 'Nampula Capital S.A.', nuit: '400982310', domain: 'nampulacapital.co.mz', plan: 'PROFESSIONAL', status: 'ACTIVE', mrr: '3.500 MT' },
    { name: 'Zambeze Organic Coffee', nuit: '400331902', domain: 'zambezecoffee.mz', plan: 'BUSINESS', status: 'ACTIVE', mrr: '1.750 MT' },
    { name: 'Maputo Tech Logistics', nuit: '400512874', domain: 'maputotech.co.mz', plan: 'ENTERPRISE', status: 'ACTIVE', mrr: '12.000 MT' },
    { name: 'Beira Port Services', nuit: '400771239', domain: 'beiraport.co.mz', plan: 'BUSINESS', status: 'ACTIVE', mrr: '1.750 MT' },
  ];

  const apiLogs = [
    { time: '13:42:19', endpoint: 'POST /api/domains/register', status: '200 OK', latency: '340ms', origin: 'REGISTAR-API-MZ' },
    { time: '13:40:02', endpoint: 'POST /api/mailboxes/create', status: '200 OK', latency: '120ms', origin: 'Mail-Node01' },
    { time: '13:35:48', endpoint: 'POST /api/ai/assistant', status: '200 OK', latency: '480ms', origin: 'Gemini-2.5-Flash' },
    { time: '13:28:10', endpoint: 'POST /api/payments/mpesa/c2b', status: '200 OK', latency: '820ms', origin: 'Vodacom-Gateway' },
    { time: '13:12:05', endpoint: 'GET /api/domains/search?q=moz.co.mz', status: '200 OK', latency: '95ms', origin: 'Core-Cache' },
  ];

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 pt-20 pb-16">
      
      {/* URL Simulation Topbar */}
      <div className="bg-[#030710] text-slate-300 py-2 px-4 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-slate-500">ADMIN CONTROL CENTER:</span>
          <strong className="text-white">https://admin.desartstudio.co.mz</strong>
          <span className="text-slate-500 hidden sm:inline">• Role: ROOT_SUPERADMIN (MFA Ativo)</span>
        </div>

        <button 
          onClick={() => onNavigate('website')} 
          className="text-xs text-blue-400 hover:text-white transition-colors flex items-center space-x-1"
        >
          <span>Voltar ao Site Público</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#102447] to-[#4599FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black text-white font-display">DESART Command Center</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-[#4599FF] text-[10px] font-mono font-bold border border-blue-500/30">
                  BUILD v2.5.8-PROD
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Gestão central de infraestrutura, clientes, servidores de correio e faturação nacional
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleSyncRegistrar}
              disabled={syncingApi}
              className="px-4 py-2.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/40 border border-blue-500/40 text-blue-300 text-xs font-bold transition-all flex items-center space-x-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncingApi ? 'animate-spin' : ''}`} />
              <span>{syncingApi ? 'A Sincronizar...' : 'Sincronizar APIs'}</span>
            </button>
          </div>
        </div>

        {/* Sync Success banner */}
        {syncSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Sincronização bem-sucedida: Nós de correio DESART e REGISTAR Core validados com latência normal (18ms).</span>
          </div>
        )}

        {/* Admin Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800">
          {[
            { id: 'metrics', label: 'Estatísticas & MRR', icon: Activity },
            { id: 'domains', label: 'Gestão de Domínios .MZ', icon: Globe },
            { id: 'servers', label: 'Clusters de Correio & Nós', icon: Server },
            { id: 'clients', label: 'Diretório de Clientes', icon: Users },
            { id: 'finance', label: 'Faturação & M-Pesa', icon: CreditCard },
            { id: 'api-console', label: 'Consola de APIs & Logs', icon: Terminal },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setAdminTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
                adminTab === tab.id
                  ? 'bg-[#4599FF] text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: METRICS */}
        {adminTab === 'metrics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">MRR Recorrente</span>
                  <CreditCard className="w-4 h-4 text-[#4599FF]" />
                </div>
                <div className="text-3xl font-black text-white font-display">485.250 MT</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-1">+14.2% em relação ao mês anterior</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Clientes Ativos</span>
                  <Users className="w-4 h-4 text-[#4599FF]" />
                </div>
                <div className="text-3xl font-black text-white font-display">142</div>
                <div className="text-[11px] text-slate-400 mt-1">Empresas registadas no ecossistema</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Domínios Registados</span>
                  <Globe className="w-4 h-4 text-[#4599FF]" />
                </div>
                <div className="text-3xl font-black text-white font-display">289</div>
                <div className="text-[11px] text-blue-400 mt-1">82% extensões .co.mz / .mz</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Caixas DESART Mail</span>
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-black text-white font-display">840</div>
                <div className="text-[11px] text-emerald-400 mt-1">12.6 TB de armazenamento provisionado</div>
              </div>
            </div>

            {/* Quick status grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display flex items-center justify-between">
                  <span>Saúde da Infraestrutura</span>
                  <span className="text-emerald-400 text-xs font-mono">100% OPERACIONAL</span>
                </h3>
                
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Cluster Maputo-Edge-01</div>
                      <div className="text-slate-400 text-[11px]">Servidor Primário de DNS & Webmail DESART</div>
                    </div>
                    <span className="text-emerald-400 font-mono font-bold">CPU: 28% • RAM: 42%</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Cluster JHB-Backup-02</div>
                      <div className="text-slate-400 text-[11px]">Replicação Geográfica Anycast & Armazenamento Frio</div>
                    </div>
                    <span className="text-emerald-400 font-mono font-bold">CPU: 14% • RAM: 30%</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display">
                  Fila de Tickets e Despacho
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-slate-400">#TK-8092:</span>
                      <strong className="text-white ml-1.5">Configuração DKIM para subdomínio</strong>
                      <div className="text-[10px] text-slate-400">Cliente: Empresa Exemplo Lda • SLA: 2h restantes</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-[#4599FF] text-[10px] font-bold">
                      EM CURSO
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-slate-400">#TK-8089:</span>
                      <strong className="text-white ml-1.5">Upgrade de Plano Start para Business</strong>
                      <div className="text-[10px] text-slate-400">Cliente: Nampula Capital • Concluído</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                      RESOLVIDO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DOMAINS REGISTRY */}
        {adminTab === 'domains' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white font-display">Inventário Global de Domínios</h2>
                <p className="text-xs text-slate-400">Sincronizado diretamente com o registrador oficial de Moçambique</p>
              </div>
              <button 
                onClick={handleSyncRegistrar}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
              >
                Forçar Sincronização WHOIS
              </button>
            </div>

            <div className="bg-slate-900/80 rounded-3xl border border-slate-800 overflow-hidden divide-y divide-slate-800">
              {[
                { domain: 'empresa.co.mz', owner: 'Empresa Exemplo Lda', expiry: '12/2026', dns: 'Anycast Root OK', status: 'ACTIVE' },
                { domain: 'nampulacapital.co.mz', owner: 'Nampula Capital S.A.', expiry: '08/2027', dns: 'Anycast Root OK', status: 'ACTIVE' },
                { domain: 'zambezecoffee.mz', owner: 'Zambeze Organic Coffee', expiry: '03/2027', dns: 'Anycast Root OK', status: 'ACTIVE' },
                { domain: 'maputotech.co.mz', owner: 'Maputo Tech Logistics', expiry: '11/2026', dns: 'Anycast Root OK', status: 'ACTIVE' },
              ].map((d, i) => (
                <div key={i} className="p-4 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-extrabold text-white font-mono text-sm">{d.domain}</div>
                    <div className="text-slate-400 text-[11px]">{d.owner} • Expiração: {d.expiry}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-emerald-400 text-[11px]">{d.dns}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                      {d.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SERVERS */}
        {adminTab === 'servers' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white font-display">Clusters & Nós de Correio DESART</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Server className="w-5 h-5 text-[#4599FF]" />
                    <h3 className="text-base font-bold text-white font-mono">NODE-01 (Maputo DC)</h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    ONLINE
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Servidor principal de correio empresarial com discos NVMe RAID 10 e conexão direta aos IXP de Moçambique.
                </p>
                <div className="p-3 bg-slate-950 rounded-xl space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between"><span>Uso de Disco:</span><strong>3.8 TB / 10 TB (38%)</strong></div>
                  <div className="flex justify-between"><span>Caixas Hospedadas:</span><strong>480 caixas ativas</strong></div>
                  <div className="flex justify-between"><span>Filas SMTP:</span><strong className="text-emerald-400">0 emails em atraso</strong></div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Server className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-base font-bold text-white font-mono">NODE-02 (JHB Teraco)</h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                    ONLINE
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Nó redundante para replicação geográfica instantânea, contingência de desastres e tráfego internacional.
                </p>
                <div className="p-3 bg-slate-950 rounded-xl space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between"><span>Uso de Disco:</span><strong>3.8 TB / 10 TB (Sincronizado)</strong></div>
                  <div className="flex justify-between"><span>Caixas Hospedadas:</span><strong>360 caixas espelhadas</strong></div>
                  <div className="flex justify-between"><span>Latência Inter-DC:</span><strong className="text-emerald-400">14 ms</strong></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CLIENTS */}
        {adminTab === 'clients' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white font-display">Diretório de Clientes Corporativos</h2>
            <div className="bg-slate-900/80 rounded-3xl border border-slate-800 overflow-hidden divide-y divide-slate-800">
              {clientsList.map((c, idx) => (
                <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <div className="font-bold text-white text-sm">{c.name}</div>
                    <div className="text-slate-400 font-mono text-[11px]">NUIT: {c.nuit} • Domínio: {c.domain}</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-[#4599FF] font-bold">
                      {c.plan}
                    </span>
                    <strong className="text-white font-display text-sm">{c.mrr}/mês</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: FINANCE & M-PESA */}
        {adminTab === 'finance' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white font-display">Faturação & Transações M-Pesa / e-Mola</h2>
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="text-xs text-slate-300">
                Gateways de pagamento nacional configurados com webhook instantâneo:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-400 font-bold mb-1">M-Pesa C2B Vodacom</div>
                  <div className="text-lg font-black text-white font-display">294.500 MT</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Conexão API Ativa</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-400 font-bold mb-1">e-Mola Movitel</div>
                  <div className="text-lg font-black text-white font-display">82.000 MT</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Conexão API Ativa</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-400 font-bold mb-1">Transferências Bancárias</div>
                  <div className="text-lg font-black text-white font-display">108.750 MT</div>
                  <div className="text-[10px] text-blue-400 mt-1">BIM / BCI / Standard Bank</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: API CONSOLE */}
        {adminTab === 'api-console' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white font-display">Consola de APIs & Logs em Tempo Real</h2>
            <div className="bg-slate-950 p-4 sm:p-6 rounded-3xl border border-slate-800 font-mono text-xs space-y-2 shadow-2xl">
              <div className="text-slate-500 pb-2 border-b border-slate-800 flex justify-between">
                <span>[TIMESTAMP] ENDPOINT</span>
                <span>STATUS / LATÊNCIA</span>
              </div>
              {apiLogs.map((log, i) => (
                <div key={i} className="flex justify-between items-center py-1.5 border-b border-slate-900 hover:bg-slate-900/50 px-2 rounded">
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-500">{log.time}</span>
                    <span className="text-[#4599FF] font-bold">{log.endpoint}</span>
                    <span className="text-slate-600 text-[10px]">({log.origin})</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-400">{log.status}</span>
                    <span className="text-slate-400">{log.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
