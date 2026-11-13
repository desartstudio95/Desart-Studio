import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Globe, 
  Mail, 
  Laptop, 
  CreditCard, 
  LifeBuoy, 
  User, 
  ShieldCheck, 
  Plus, 
  ExternalLink, 
  RefreshCw, 
  Download, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Lock, 
  Key, 
  ChevronRight,
  Server,
  HardDrive,
  Copy,
  ArrowUpRight,
  Sliders
} from 'lucide-react';
import { AppView, DomainItem, MailboxItem, InvoiceItem, TicketItem } from '../../types';

interface CustomerPortalProps {
  onNavigate: (view: AppView) => void;
}

export const CustomerPortal: React.FC<CustomerPortalProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'domains' | 'emails' | 'websites' | 'billing' | 'tickets' | 'settings'>('overview');
  
  // State loaded from backend mock APIs
  const [domains, setDomains] = useState<DomainItem[]>([]);
  const [mailboxes, setMailboxes] = useState<MailboxItem[]>([]);
  const [invoices, setInvoices] = useState<InvoiceItem[]>([]);
  const [tickets, setTickets] = useState<TicketItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Modals inside portal
  const [newMailboxModal, setNewMailboxModal] = useState(false);
  const [mailboxPrefix, setMailboxPrefix] = useState('');
  const [mailboxPassword, setMailboxPassword] = useState('');
  const [mailboxQuota, setMailboxQuota] = useState('15 GB');
  const [creatingMail, setCreatingMail] = useState(false);

  // New Ticket modal inside portal
  const [newTicketModal, setNewTicketModal] = useState(false);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('DESART MAIL');
  const [ticketMsg, setTicketMsg] = useState('');

  // DNS modal
  const [dnsModalDomain, setDnsModalDomain] = useState<string | null>(null);

  // Load initial portal data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [domRes, mailRes, invRes, tickRes] = await Promise.all([
          fetch('/api/domains/list'),
          fetch('/api/mailboxes/list'),
          fetch('/api/invoices/list'),
          fetch('/api/tickets/list')
        ]);
        const domData = await domRes.json();
        const mailData = await mailRes.json();
        const invData = await invRes.json();
        const tickData = await tickRes.json();

        setDomains(domData.domains || []);
        setMailboxes(mailData.mailboxes || []);
        setInvoices(invData.invoices || []);
        setTickets(tickData.tickets || []);
      } catch (err) {
        console.error('Portal data fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCreateMailbox = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mailboxPrefix) return;

    setCreatingMail(true);
    const domainToUse = domains[0]?.name || 'empresa.co.mz';
    const emailToCreate = `${mailboxPrefix}@${domainToUse}`;

    try {
      const res = await fetch('/api/mailboxes/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailToCreate,
          quota: mailboxQuota,
          password: mailboxPassword || 'DesartSecure2026!'
        })
      });
      const data = await res.json();
      if (data.mailbox) {
        setMailboxes(prev => [...prev, data.mailbox]);
        setNewMailboxModal(false);
        setMailboxPrefix('');
        setMailboxPassword('');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setCreatingMail(false);
    }
  };

  const handleCreateTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMsg) return;

    try {
      const res = await fetch('/api/tickets/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: ticketSubject,
          category: ticketCategory,
          priority: 'MEDIUM',
          message: ticketMsg
        })
      });
      const data = await res.json();
      if (data.ticket) {
        setTickets(prev => [data.ticket, ...prev]);
        setNewTicketModal(false);
        setTicketSubject('');
        setTicketMsg('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 pb-16">
      
      {/* Subdomain URL Simulation Bar */}
      <div className="bg-[#0B1528] text-white py-2 px-4 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-400">AMB / PORTAL:</span>
          <strong className="text-white">https://clientes.desartstudio.co.mz</strong>
          <span className="text-slate-500 hidden sm:inline">• Sessão Segura TLS 1.3 (ID: DESART-CLT-9821)</span>
        </div>

        <div className="flex items-center space-x-3 text-slate-300">
          <button 
            onClick={() => onNavigate('website')} 
            className="text-xs text-blue-400 hover:text-white transition-colors flex items-center space-x-1"
          >
            <span>Voltar ao Site</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Top Header Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0B1528] to-[#4599FF] flex items-center justify-center text-white text-xl font-bold font-display shadow-md shadow-blue-500/15">
              DS
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 font-display">Portal do Cliente</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#4599FF] text-xs font-bold font-mono">
                  Plano Business
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Empresa Exemplo Lda • NUIT: 400192831 • Maputo, Moçambique
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setNewMailboxModal(true)}
              className="px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#4599FF] text-xs font-bold transition-all flex items-center space-x-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Nova Caixa de Email</span>
            </button>

            <button
              onClick={() => setNewTicketModal(true)}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#4599FF] text-white text-xs font-bold transition-all flex items-center space-x-1.5 shadow-xs"
            >
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>Abrir Ticket</span>
            </button>
          </div>
        </div>

        {/* Portal Navigation Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 border-b border-slate-200">
          {[
            { id: 'overview', label: 'Visão Geral', icon: Layers },
            { id: 'domains', label: `Domínios (${domains.length})`, icon: Globe },
            { id: 'emails', label: `DESART Mail (${mailboxes.length})`, icon: Mail },
            { id: 'websites', label: 'Websites & Hospedagem', icon: Laptop },
            { id: 'billing', label: `Faturas (${invoices.length})`, icon: CreditCard },
            { id: 'tickets', label: `Suporte (${tickets.length})`, icon: LifeBuoy },
            { id: 'settings', label: 'Segurança & 2FA', icon: ShieldCheck }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* 4 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider font-display">Domínios Ativos</span>
                  <Globe className="w-4 h-4 text-[#4599FF]" />
                </div>
                <div className="text-2xl font-black text-slate-900 font-display">{domains.length}</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">Todos com DNS Ativo</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider font-display">Caixas DESART Mail</span>
                  <Mail className="w-4 h-4 text-[#4599FF]" />
                </div>
                <div className="text-2xl font-black text-slate-900 font-display">{mailboxes.length} / 10</div>
                <div className="text-[11px] text-slate-500 mt-1">15 GB por caixa postal</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider font-display">Faturas Pendentes</span>
                  <CreditCard className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-2xl font-black text-slate-900 font-display">
                  {invoices.filter(i => i.status === 'PENDING').length}
                </div>
                <div className="text-[11px] text-amber-600 font-semibold mt-1">M-Pesa e Transferência</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider font-display">Tickets de Suporte</span>
                  <LifeBuoy className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-2xl font-black text-slate-900 font-display">
                  {tickets.filter(t => t.status === 'IN_PROGRESS' || t.status === 'OPEN').length}
                </div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">SLA Ativo: 100% no prazo</div>
              </div>
            </div>

            {/* Quick Services Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Mailboxes Snapshot */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-[#4599FF]" />
                    <h3 className="text-base font-bold text-slate-900 font-display">Caixas de E-mail Recentes</h3>
                  </div>
                  <button 
                    onClick={() => setActiveTab('emails')} 
                    className="text-xs font-bold text-[#4599FF] hover:underline"
                  >
                    Gerir Todas →
                  </button>
                </div>

                <div className="space-y-2.5">
                  {mailboxes.slice(0, 3).map((m) => (
                    <div key={m.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-mono">{m.email}</div>
                        <div className="text-[10px] text-slate-500">{m.usage} de {m.quota} utilizado</div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        {m.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tickets Snapshot */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <LifeBuoy className="w-5 h-5 text-[#4599FF]" />
                    <h3 className="text-base font-bold text-slate-900 font-display">Pedidos de Suporte Recentes</h3>
                  </div>
                  <button 
                    onClick={() => setActiveTab('tickets')} 
                    className="text-xs font-bold text-[#4599FF] hover:underline"
                  >
                    Ver Todos →
                  </button>
                </div>

                <div className="space-y-2.5">
                  {tickets.slice(0, 3).map((t) => (
                    <div key={t.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-900">{t.title}</div>
                        <div className="text-[10px] text-slate-500">{t.id} • {t.updatedAt}</div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        {t.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: DOMAINS */}
        {activeTab === 'domains' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 font-display">Os Seus Domínios Registados</h2>
                <p className="text-xs text-slate-500">Gestão de DNS, renovações automáticas e proteção WHOIS</p>
              </div>
              <button
                onClick={() => onNavigate('service-domains')}
                className="px-4 py-2.5 rounded-xl bg-[#4599FF] text-white text-xs font-bold flex items-center space-x-1.5 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Registar Novo Domínio</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="divide-y divide-slate-100">
                {domains.map((dom) => (
                  <div key={dom.id} className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-base font-extrabold text-slate-900 font-mono">{dom.name}</span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          {dom.status}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 flex items-center space-x-3">
                        <span>Expira em: <strong>{dom.expiresAt}</strong></span>
                        <span>•</span>
                        <span>Renovação Automática: <strong className="text-slate-700">{dom.autoRenew ? 'Ativada' : 'Desativada'}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setDnsModalDomain(dom.name)}
                        className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        Configurar DNS
                      </button>
                      <button
                        onClick={() => alert(`Renovação iniciada para ${dom.name}. Fatura gerada.`)}
                        className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-[#4599FF] transition-colors"
                      >
                        Renovar Domínio
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DNS Modal */}
            {dnsModalDomain && (
              <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-slate-900">Gestão de DNS: {dnsModalDomain}</h3>
                    <button onClick={() => setDnsModalDomain(null)} className="p-1 text-slate-400 hover:text-slate-600">✕</button>
                  </div>

                  <p className="text-xs text-slate-600 mb-4">
                    Nameservers Anycast sincronizados com o cluster central de Moçambique:
                  </p>

                  <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200 font-mono text-xs mb-5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">NS1:</span>
                      <span className="font-bold text-slate-800">ns1.desartstudio.co.mz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">NS2:</span>
                      <span className="font-bold text-slate-800">ns2.desartstudio.co.mz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">A (Root):</span>
                      <span className="font-bold text-slate-800">197.218.45.10 (Edge Maputo)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">MX (Mail):</span>
                      <span className="font-bold text-slate-800">mail.desartstudio.co.mz (Prioridade 10)</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setDnsModalDomain(null)}
                    className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: DESART MAIL */}
        {activeTab === 'emails' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 font-display">Caixas de E-mail Profissional (DESART Mail)</h2>
                <p className="text-xs text-slate-500">Quota individual de 15 GB, sincronização IMAP/SMTP e webmail responsivo</p>
              </div>
              <button
                onClick={() => setNewMailboxModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#4599FF] text-white text-xs font-bold flex items-center space-x-1.5 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Criar Nova Caixa</span>
              </button>
            </div>

            {/* Mailboxes table/cards */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
              {mailboxes.map((box) => (
                <div key={box.id} className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-slate-900 font-mono">{box.email}</span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                        {box.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 flex items-center space-x-3">
                      <span>Quota: <strong>{box.quota}</strong></span>
                      <span>•</span>
                      <span>Uso Atual: <strong>{box.usage}</strong></span>
                      <span>•</span>
                      <span>Segurança: <strong>TLS 1.3 / DKIM</strong></span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <a
                      href="#webmail-access"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Acedendo ao Webmail DESART Mail para ${box.email}...`);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#4599FF] text-xs font-bold transition-colors flex items-center space-x-1"
                    >
                      <span>Abrir Webmail</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => alert(`Instruções de redefinição de senha enviadas para o administrador.`)}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      Alterar Senha
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* IMAP/SMTP Connection Information Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#4599FF] font-display mb-4">
                Parâmetros de Configuração para Outlook, iPhone & Android
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="text-slate-400 font-sans font-bold">Servidor de Entrada (IMAP):</div>
                  <div>Servidor: <strong className="text-white">mail.desartstudio.co.mz</strong></div>
                  <div>Porta: <strong className="text-emerald-400">993 (SSL/TLS Obrigatório)</strong></div>
                  <div>Autenticação: Senha normal</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="text-slate-400 font-sans font-bold">Servidor de Saída (SMTP):</div>
                  <div>Servidor: <strong className="text-white">mail.desartstudio.co.mz</strong></div>
                  <div>Porta: <strong className="text-emerald-400">465 (SSL) ou 587 (STARTTLS)</strong></div>
                  <div>Requer Autenticação: Sim (mesmas credenciais)</div>
                </div>
              </div>
            </div>

            {/* Modal Create Mailbox */}
            {newMailboxModal && (
              <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-slate-900">Criar Nova Caixa de Email</h3>
                    <button onClick={() => setNewMailboxModal(false)} className="p-1 text-slate-400 hover:text-slate-600">✕</button>
                  </div>

                  <form onSubmit={handleCreateMailbox} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Prefixo do E-mail</label>
                      <div className="flex items-center rounded-xl border border-slate-200 overflow-hidden focus-within:border-[#4599FF]">
                        <input
                          type="text"
                          required
                          placeholder="ex: contacto"
                          value={mailboxPrefix}
                          onChange={(e) => setMailboxPrefix(e.target.value)}
                          className="px-3.5 py-2.5 text-xs text-slate-900 w-full focus:outline-hidden"
                        />
                        <span className="bg-slate-100 px-3 py-2.5 text-xs text-slate-500 font-mono font-medium">
                          @{domains[0]?.name || 'empresa.co.mz'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Senha de Acesso</label>
                      <input
                        type="password"
                        required
                        placeholder="Mínimo 8 caracteres com símbolos"
                        value={mailboxPassword}
                        onChange={(e) => setMailboxPassword(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-[#4599FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Quota de Armazenamento</label>
                      <select
                        value={mailboxQuota}
                        onChange={(e) => setMailboxQuota(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-[#4599FF]"
                      >
                        <option value="15 GB">15 GB (Padrão DESART Mail)</option>
                        <option value="25 GB">25 GB (Upgrade Pro)</option>
                        <option value="50 GB">50 GB (Enterprise Storage)</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setNewMailboxModal(false)}
                        className="w-1/2 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        disabled={creatingMail}
                        className="w-1/2 py-2.5 rounded-xl bg-[#4599FF] text-white text-xs font-bold uppercase tracking-wider"
                      >
                        {creatingMail ? 'A Criar...' : 'Confirmar'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: WEBSITES */}
        {activeTab === 'websites' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 font-display">Websites & Infraestrutura de Alojamento</h2>
            
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-extrabold text-slate-900 font-mono">https://empresa.co.mz</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">ONLINE</span>
                  </div>
                  <p className="text-xs text-slate-500">Website Corporativo • Node.js / Vite / Edge CDN</p>
                </div>

                <a 
                  href="https://empresa.co.mz" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center space-x-1.5 self-start"
                >
                  <span>Visitar Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Certificado SSL</div>
                  <div className="text-sm font-bold text-emerald-600 flex items-center space-x-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Let's Encrypt Wildcard Ativo</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Renovação automática permanente</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Edge CDN & Cache</div>
                  <div className="text-sm font-bold text-slate-800 flex items-center space-x-1">
                    <Server className="w-4 h-4 text-[#4599FF]" />
                    <span>POP Maputo & Joanesburgo</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Tempo de resposta: 18ms</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Backups Automáticos</div>
                  <div className="text-sm font-bold text-slate-800 flex items-center space-x-1">
                    <HardDrive className="w-4 h-4 text-[#4599FF]" />
                    <span>Diário às 02:00 CAT</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Retenção de 30 dias na Cloud</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: BILLING & INVOICES */}
        {activeTab === 'billing' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 font-display">Faturação & Métodos de Pagamento</h2>
                <p className="text-xs text-slate-500">Emissão em Meticais (MT) com suporte a M-Pesa, e-Mola e Transferência Bancária</p>
              </div>
            </div>

            {/* Invoices list */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
              {invoices.map((inv) => (
                <div key={inv.id} className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-slate-900 font-mono">{inv.id}</span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        inv.status === 'PAID' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {inv.status === 'PAID' ? 'PAGO' : 'PENDENTE'}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium">{inv.service}</div>
                    <div className="text-[11px] text-slate-400">Emitido: {inv.issueDate} • Vencimento: {inv.dueDate}</div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-base font-black text-slate-900 font-display">{inv.amount}</div>
                      <div className="text-[10px] text-slate-400">{inv.paymentMethod}</div>
                    </div>

                    {inv.status === 'PAID' ? (
                      <button
                        onClick={() => alert(`A descarregar recibo oficial em PDF para ${inv.id}...`)}
                        className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-xs font-semibold flex items-center space-x-1"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Recibo PDF</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => alert(`Instruções de pagamento M-Pesa enviadas para o 84...`)}
                        className="px-4 py-2 rounded-xl bg-[#4599FF] text-white text-xs font-bold hover:bg-blue-600"
                      >
                        Pagar com M-Pesa
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: SUPPORT TICKETS */}
        {activeTab === 'tickets' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 font-display">Tickets de Suporte</h2>
                <p className="text-xs text-slate-500">Histórico de pedidos técnicos e contacto com a equipa de engenharia</p>
              </div>
              <button
                onClick={() => setNewTicketModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#4599FF] text-white text-xs font-bold flex items-center space-x-1.5 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Novo Ticket</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
              {tickets.map((t) => (
                <div key={t.id} className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-slate-400">{t.id}</span>
                      <span className="text-sm font-bold text-slate-900">{t.title}</span>
                      <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[10px] font-bold">
                        {t.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">Categoria: <strong>{t.category}</strong> • Prioridade: <strong>{t.priority}</strong></div>
                    <div className="text-[11px] text-slate-400">Atualizado: {t.updatedAt}</div>
                  </div>

                  <button
                    onClick={() => alert(`Ticket ${t.id}: Resposta do suporte: "Configurações atualizadas no servidor central."`)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    Ver Conversa
                  </button>
                </div>
              ))}
            </div>

            {/* Modal New Ticket */}
            {newTicketModal && (
              <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-slate-900">Novo Pedido de Assistência</h3>
                    <button onClick={() => setNewTicketModal(false)} className="p-1 text-slate-400 hover:text-slate-600">✕</button>
                  </div>

                  <form onSubmit={handleCreateTicket} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Categoria</label>
                      <select
                        value={ticketCategory}
                        onChange={(e) => setTicketCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:border-[#4599FF]"
                      >
                        <option value="DESART MAIL">DESART MAIL</option>
                        <option value="DOMAINS">Domínios & DNS</option>
                        <option value="WEBSITES">Websites & Hospedagem</option>
                        <option value="SYSTEMS">Sistemas & APIs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Assunto</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Aumentar quota de armazenamento para 25GB"
                        value={ticketSubject}
                        onChange={(e) => setTicketSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:border-[#4599FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mensagem</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Explique o que precisa..."
                        value={ticketMsg}
                        onChange={(e) => setTicketMsg(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:border-[#4599FF]"
                      ></textarea>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setNewTicketModal(false)}
                        className="w-1/2 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="w-1/2 py-2.5 rounded-xl bg-[#4599FF] text-white text-xs font-bold uppercase tracking-wider"
                      >
                        Criar Ticket
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 7: SETTINGS & 2FA */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 font-display">Segurança da Conta & 2FA</h2>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900">Autenticação de Dois Fatores (2FA)</div>
                  <div className="text-xs text-slate-500">Proteja a sua conta corporativa com Google Authenticator ou SMS</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                  ATIVADO
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700">Dados da Empresa</div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-xs space-y-1 text-slate-600">
                  <div><strong>Razão Social:</strong> Empresa Exemplo Lda</div>
                  <div><strong>NUIT:</strong> 400192831</div>
                  <div><strong>Cidade:</strong> Maputo, Moçambique</div>
                  <div><strong>Contacto Principal:</strong> contacto@empresa.co.mz (84 123 4567)</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
