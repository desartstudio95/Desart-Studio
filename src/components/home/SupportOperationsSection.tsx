import React, { useState } from 'react';
import { 
  LifeBuoy, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Mail, 
  ArrowRight, 
  Server,
  Activity,
  Send,
  Loader2
} from 'lucide-react';
import { AppView } from '../../types';

interface SupportOperationsSectionProps {
  onNavigate: (view: AppView) => void;
  onOpenTicketModal?: () => void;
}

export const SupportOperationsSection: React.FC<SupportOperationsSectionProps> = ({ 
  onNavigate,
  onOpenTicketModal 
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('DESART MAIL');
  const [ticketMessage, setTicketMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const servicesStatus = [
    { name: 'DESART MAIL', status: 'OPERATIONAL', latency: '24ms', uptime: '99.99%', protocol: 'DESART Mail Cluster' },
    { name: 'DOMAINS', status: 'OPERATIONAL', latency: '12ms', uptime: '100%', protocol: 'REGISTAR DNS Anycast' },
    { name: 'WEBSITES', status: 'OPERATIONAL', latency: '18ms', uptime: '99.98%', protocol: 'Edge CDN Global' },
    { name: 'CUSTOMER PORTAL', status: 'OPERATIONAL', latency: '15ms', uptime: '100%', protocol: 'SSL / 2FA Engine' },
  ];

  const handleSubmitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMessage) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/tickets/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: ticketSubject,
          category: ticketCategory,
          priority: 'HIGH',
          message: ticketMessage
        })
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setModalOpen(false);
          setSubmitted(false);
          setTicketSubject('');
          setTicketMessage('');
          onNavigate('customer-portal');
        }, 1200);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-700 font-display">
            <Activity className="w-3.5 h-3.5" />
            <span>CENTRO DE OPERAÇÕES TECNOLÓGICAS (NOC)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            MONITORIZAÇÃO CONTÍNUA. <br />
            <span className="text-[#4599FF]">SUPORTE DE NÍVEL EMPRESARIAL.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A sua empresa não pode parar. Mantemos observabilidade contínua da infraestrutura com equipa de resposta rápida e SLAs auditados.
          </p>
        </div>

        {/* Live Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {servicesStatus.map((service, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#4599FF] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-900 font-display">{service.name}</span>
                <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{service.status}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-mono space-y-1 pt-2 border-t border-slate-100">
                <div className="flex justify-between">
                  <span>Disponibilidade:</span>
                  <strong className="text-slate-800">{service.uptime}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Latência Média:</span>
                  <strong className="text-slate-800">{service.latency}</strong>
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-1">
                  {service.protocol}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help / Open Ticket Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#4599FF] uppercase tracking-wider font-display">
              <LifeBuoy className="w-4 h-4" />
              <span>SLA DE RESPOSTA PRIORITÁRIA</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
              PRECISA DE AJUDA?
            </h3>
            <p className="text-sm text-slate-400 max-w-lg">
              Abra um pedido de assistência diretamente aos nossos engenheiros seniores ou contacte a linha de suporte telefónico em Moçambique.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300">
              <span className="flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-[#4599FF]" />
                <strong className="text-white">833 081 636</strong>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#4599FF]" />
                <span>Atendimento 24/7 para clientes corporativos</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#4599FF] hover:bg-blue-600 shadow-lg shadow-blue-500/30 transition-all flex items-center space-x-2"
            >
              <span>ABRIR PEDIDO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('service-support')}
              className="px-6 py-4 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Conhecer Política de SLA
            </button>
          </div>
        </div>

        {/* Interactive Ticket Creation Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-blue-50 text-[#4599FF]">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Abrir Pedido de Suporte (Ticket)</h3>
                    <p className="text-xs text-slate-500">Atribuído ao Centro de Operações DESART</p>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              {submitted ? (
                <div className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Pedido Criado com Sucesso!</h4>
                  <p className="text-xs text-slate-600">O seu ticket foi registrado e um técnico responderá em breve no Portal do Cliente.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitTicket} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Categoria do Pedido</label>
                    <select
                      value={ticketCategory}
                      onChange={(e) => setTicketCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#4599FF]"
                    >
                      <option value="DESART MAIL">DESART MAIL (Configuração, IMAP, Senhas)</option>
                      <option value="DOMAINS">DOMAINS (DNS, Registos, Renovação)</option>
                      <option value="WEBSITES">WEBSITES (Hospedagem, Alterações, SSL)</option>
                      <option value="SYSTEMS">SYSTEMS (ERP, Integração de Pagamentos)</option>
                      <option value="BILLING">FATURAÇÃO (Pagamentos M-Pesa, Recibos)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Assunto</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dificuldade em configurar porta IMAP no macOS"
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#4599FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Descrição do Problema</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva detalhadamente o erro ou a solicitação..."
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#4599FF]"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="w-1/2 py-3 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-1/2 py-3 rounded-xl bg-[#4599FF] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-blue-500/25 disabled:opacity-75"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>A ENVIAR...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMETER TICKET</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
