import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  Loader2,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  STUDIO_EMAIL,
  getWhatsAppUrl,
} from '../../data/studioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('DESART DESIGN (Design Gráfico)');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successRef, setSuccessRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessRef(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Preencha o seu nome, endereço de email e descrição do projecto.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, service, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Não foi possível enviar o pedido.');
      } else {
        setSuccessRef(data.reference || 'Recebido');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
    } catch {
      setErrorMsg('Erro de ligação ao servidor. Pode contactar-nos diretamente via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contactos"
      aria-labelledby="contact-heading"
      className="py-24 bg-[#071A33] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info & Direct Channels */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4599FF]">
                Contactos & Orçamentos
              </p>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance"
              >
                Vamos construir algo extraordinário?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Partilhe os detalhes do seu projecto de design gráfico, website ou hospedagem. Responderemos com uma proposta clara e adequada às necessidades da sua marca.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={getWhatsAppUrl('Olá DESART STUDIO, gostaria de solicitar um orçamento para o meu projecto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="studio-surface studio-surface-hover rounded-xl p-5 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-[#4599FF]/15 border border-[#4599FF]/30 text-[#4599FF] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp Oficial</div>
                    <div className="text-base font-bold text-white font-display tabular-nums">
                      {WHATSAPP_DISPLAY}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#4599FF] group-hover:text-white transition-colors">
                  Conversar
                </span>
              </a>

              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="studio-surface studio-surface-hover rounded-xl p-5 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-[#102B4D] border border-white/10 text-[#4599FF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">E-mail Comercial</div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      {STUDIO_EMAIL}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#4599FF] group-hover:text-white transition-colors">
                  Enviar
                </span>
              </a>
            </div>

            <div className="pt-2 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Redes Sociais
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/desartstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg bg-[#102B4D]/70 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#4599FF] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/desartstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg bg-[#102B4D]/70 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#4599FF] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/desartstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg bg-[#102B4D]/70 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#4599FF] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 studio-surface rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300">
                    Nome completo
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="O seu nome ou empresa"
                    className="w-full px-4 py-3 rounded-lg bg-[#041022] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4599FF]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300">
                    Endereço de email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nome@empresa.co.mz"
                    className="w-full px-4 py-3 rounded-lg bg-[#041022] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4599FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+258 8X XXX XXXX"
                    className="w-full px-4 py-3 rounded-lg bg-[#041022] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4599FF]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300">
                    Serviço pretendido
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#041022] border border-white/15 text-sm text-white focus:outline-none focus:border-[#4599FF]"
                  >
                    <option value="DESART DESIGN (Design Gráfico)">DESART DESIGN — Design Gráfico</option>
                    <option value="DESART WEB (Criação de Websites)">DESART WEB — Criação de Websites</option>
                    <option value="DESART HOST (Hospedagem e Domínios)">DESART HOST — Hospedagem e Domínios</option>
                    <option value="Campanha All In One (8.000 MT)">Campanha All In One (8.000 MT)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300">
                  Detalhes do projecto
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva os seus objetivos, prazos ou dúvidas..."
                  className="w-full px-4 py-3 rounded-lg bg-[#041022] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4599FF]"
                />
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="p-3.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-200"
                >
                  {errorMsg}
                </div>
              )}

              {successRef && (
                <div
                  role="status"
                  className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-200 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Pedido enviado com sucesso ({successRef})</div>
                    <div className="mt-0.5">
                      Recebemos a sua solicitação. Se preferir atendimento imediato, fale connosco via WhatsApp no {WHATSAPP_DISPLAY}.
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-7 py-3.5 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-sm font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>A enviar...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar solicitação</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <span className="text-xs text-slate-400">
                  Resposta rápida em dias úteis
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
