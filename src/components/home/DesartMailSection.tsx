import React from 'react';
import { 
  Mail, 
  ShieldCheck, 
  Lock, 
  Smartphone, 
  Laptop, 
  Check, 
  ArrowRight, 
  HardDrive, 
  Server,
  Zap
} from 'lucide-react';
import { AppView } from '../../types';

interface DesartMailSectionProps {
  onNavigate: (view: AppView) => void;
}

export const DesartMailSection: React.FC<DesartMailSectionProps> = ({ onNavigate }) => {
  const mailboxes = [
    { email: 'info@empresa.co.mz', user: 'Comunicação Geral & Receção', unread: 2, status: 'Ativo • SSL 993' },
    { email: 'vendas@empresa.co.mz', user: 'Departamento Comercial', unread: 7, status: 'Ativo • IMAP/SMTP' },
    { email: 'suporte@empresa.co.mz', user: 'Helpdesk de Clientes', unread: 0, status: 'Ativo • 2FA' },
  ];

  const features = [
    '15 GB por caixa postal',
    'Webmail moderno & responsivo',
    'Protocolos IMAP & SMTP seguros',
    'Compatível com Microsoft Outlook & Apple Mail',
    'Integração nativa com Gmail App',
    'Sincronização Android & iPhone',
    'Filtro Antispam com Inteligência Artificial',
    'Antivírus em tempo real integrado',
    'Assinatura criptográfica SPF e DKIM',
    'Políticas DMARC rigorosas',
    'Criptografia ponta a ponta SSL / TLS 1.3',
    'Autenticação de Dois Fatores (2FA)'
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background ambient blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#4599FF]/7 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#4599FF] font-display">
            <Mail className="w-3.5 h-3.5" />
            <span>INFRAESTRUTURA DESART MAIL ENTERPRISE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            EMAIL PROFISSIONAL. <br />
            <span className="text-[#4599FF]">IDENTIDADE PROFISSIONAL.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Elimine endereços genéricos. Dê autoridade corporativa às suas comunicações com servidores de e-mail de alta disponibilidade, isolamento de dados e segurança multicamadas.
          </p>
        </div>

        {/* 3D Devices Showcase + Device Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Mockups visual (Laptop + Smartphone representation) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            {/* Ambient glass reflection plate */}
            <div className="w-full max-w-xl p-3 sm:p-5 rounded-3xl glass-panel shadow-2xl border border-white/90 relative">
              
              {/* Laptop Header Bar */}
              <div className="bg-slate-900 rounded-t-2xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] font-mono text-slate-400 ml-2">webmail.desartstudio.co.mz</span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-emerald-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>TLS 1.3 / DKIM VERIFICADO</span>
                </div>
              </div>

              {/* Inside Laptop: DESART Mail Interface */}
              <div className="bg-white rounded-b-2xl p-4 sm:p-6 border border-slate-100 divide-y divide-slate-100">
                <div className="pb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#4599FF] flex items-center justify-center font-bold text-xs">
                      EM
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Caixas Postais da Empresa</h4>
                      <p className="text-[10px] text-slate-500">Domínio: empresa.co.mz • 15 GB Quota/caixa</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#4599FF] text-[10px] font-bold">
                    3 Caixas Ativas
                  </span>
                </div>

                <div className="pt-3 space-y-2.5">
                  {mailboxes.map((box, i) => (
                    <div 
                      key={i} 
                      className="p-3 rounded-xl bg-slate-50/90 hover:bg-blue-50/60 border border-slate-200/60 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#4599FF]">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 font-mono">{box.email}</div>
                          <div className="text-[10px] text-slate-500">{box.user}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700">
                          {box.status}
                        </span>
                        {box.unread > 0 && (
                          <div className="text-[10px] text-[#4599FF] font-semibold mt-0.5">{box.unread} novos e-mails</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center space-x-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-[#4599FF]" />
                    <span>Armazenamento: 8.7 GB utilizado de 45 GB totais</span>
                  </span>
                  <span className="font-semibold text-slate-700 font-mono">POP3 / IMAP / SMTP</span>
                </div>
              </div>

            </div>

            {/* Overlapping Floating Smartphone mockup (bottom right) */}
            <div className="hidden sm:block absolute -bottom-6 -right-4 w-56 rounded-3xl bg-slate-900 text-white p-3 shadow-2xl border-4 border-slate-800 animate-pulse" style={{ animationDuration: '8s' }}>
              <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-3"></div>
              <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-400">DESART Mobile</span>
                  <span className="text-emerald-400 font-bold">2FA ON</span>
                </div>
                <div className="text-xs font-bold text-white font-mono truncate">vendas@empresa.co.mz</div>
                <p className="text-[10px] text-slate-400 leading-tight">Notificação push: Proposta comercial aprovada.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Features List & CTA */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                Segurança, robustez e total controlo institucional.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Desenvolvido sobre infraestrutura dedicada soberana com alta capacidade de entrega (alta reputação de IP para evitar pasta de spam).
              </p>
            </div>

            {/* Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 font-medium">
                  <div className="p-0.5 rounded-full bg-blue-100 text-[#4599FF] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onNavigate('service-mail')}
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#4599FF] hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>CONHECER O DESART MAIL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('pricing-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center"
              >
                Ver Planos & Preços
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
