import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Globe,
  Loader2,
  MessageCircle,
  Search,
  ShieldCheck,
  XCircle,
} from 'lucide-react';
import { AppView } from '../../types';
import {
  DOMAIN_PRICING,
  SERVICE_PILLARS,
  getWhatsAppUrl,
} from '../../data/studioData';
import { ServicesOverviewSection } from '../home/ServicesOverviewSection';
import { PortfolioSection } from '../home/PortfolioSection';
import { WebsiteShowcaseSection } from '../home/WebsiteShowcaseSection';
import { HostingPricingSection } from '../home/HostingPricingSection';
import { AboutProcessSection } from '../home/AboutProcessSection';
import { ContactSection } from '../home/ContactSection';

interface PageProps {
  onNavigate: (view: AppView) => void;
}

const PageBanner: React.FC<{
  eyebrow: string;
  title: string;
  description: string;
  onBack: () => void;
}> = ({ eyebrow, title, description, onBack }) => (
  <div className="pt-28 pb-12 bg-[#071A33] border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar ao início</span>
      </button>

      <div className="max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4599FF]">
          {eyebrow}
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const ServicesPage: React.FC<PageProps> = ({ onNavigate }) => (
  <div className="bg-[#071A33]">
    <PageBanner
      eyebrow="Serviços DESART STUDIO"
      title="Soluções criativas e tecnológicas focadas no essencial."
      description="Atuamos exclusivamente em três frentes complementares: Design Gráfico, Criação de Websites e Hospedagem e Domínios."
      onBack={() => onNavigate('home')}
    />
    <ServicesOverviewSection onNavigate={onNavigate} />
    <ContactSection />
  </div>
);

export const GraphicDesignPage: React.FC<PageProps> = ({ onNavigate }) => {
  const pillar = SERVICE_PILLARS[0];
  return (
    <div className="bg-[#071A33]">
      <PageBanner
        eyebrow="01 · DESART DESIGN"
        title="Design Gráfico e Identidade Visual para marcas memoráveis."
        description={pillar.description}
        onBack={() => onNavigate('home')}
      />

      <section className="py-20 bg-[#06152B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Serviços de Design Gráfico Incluídos
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Cada peça gráfica é desenhada com atenção ao alinhamento, tipografia e fidelidade de reprodução, tanto para meios digitais como para impressão gráfica.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-200">
                {pillar.allServices.map((service) => (
                  <li
                    key={service}
                    className="studio-surface rounded-xl p-4 flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-[#4599FF] shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppUrl('Olá DESART STUDIO, gostaria de solicitar um orçamento para Design Gráfico.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Solicitar orçamento de Design</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#102B4D] hover:bg-[#163864] text-white text-sm font-semibold transition-colors"
                >
                  <span>Ver portfólio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="studio-glass rounded-2xl p-3">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#041022]">
                  <img
                    src="/src/assets/images/portfolio_brand_identity_1794614229319.jpg"
                    alt="Identidade visual e materiais corporativos DESART DESIGN"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export const WebDevelopmentPage: React.FC<PageProps> = ({ onNavigate }) => {
  const pillar = SERVICE_PILLARS[1];
  return (
    <div className="bg-[#071A33]">
      <PageBanner
        eyebrow="02 · DESART WEB"
        title="Criação de Websites rápidos, responsivos e orientados a resultados."
        description={pillar.description}
        onBack={() => onNavigate('home')}
      />
      <WebsiteShowcaseSection onNavigate={onNavigate} />
      <section className="py-20 bg-[#071A33] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Tipos de Projectos Web
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Estruturamos cada website de acordo com os objetivos comerciais e a fase de crescimento do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillar.allServices.map((srv, idx) => (
              <div key={srv} className="studio-surface rounded-xl p-5 flex items-start gap-3">
                <span className="text-xs font-bold text-[#4599FF] font-display tabular-nums mt-0.5">
                  0{idx + 1}.
                </span>
                <span className="text-sm font-medium text-slate-200">{srv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export const HostingPage: React.FC<PageProps> = ({ onNavigate }) => (
  <div className="bg-[#071A33]">
    <PageBanner
      eyebrow="03 · DESART HOST"
      title="Hospedagem Web, WordPress e Domínios com gestão DirectAdmin."
      description="Colocamos o seu website no ar com certificados SSL, gestão de DNS, renovações organizadas e assistência técnica direta."
      onBack={() => onNavigate('home')}
    />
    <HostingPricingSection onNavigate={onNavigate} />
    <ContactSection />
  </div>
);

interface DomainResult {
  domain: string;
  tld: string;
  pricePerYear: string;
  renewalPrice: string;
  available: boolean;
  category: string;
}

export const DomainsPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [registeredDomain, setRegisteredDomain] = useState<string | null>(null);
  const [registeringDomain, setRegisteringDomain] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setErrorMsg('Introduza o nome do domínio que pretende verificar.');
      return;
    }
    setLoading(true);
    setErrorMsg(null);
    setRegisteredDomain(null);
    try {
      const res = await fetch(`/api/domains/search?q=${encodeURIComponent(query.trim())}`);
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Erro ao pesquisar domínio.');
      } else {
        setResults(data.results || []);
      }
    } catch {
      setErrorMsg('Erro de ligação ao serviço de pesquisa.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (domainName: string) => {
    setRegisteringDomain(domainName);
    setErrorMsg(null);
    try {
      const res = await fetch('/api/domains/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: domainName, years: 1 }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setRegisteredDomain(domainName);
      } else {
        setErrorMsg(data.error || 'Não foi possível registar o domínio.');
      }
    } catch {
      setErrorMsg('Erro de comunicação ao registar domínio.');
    } finally {
      setRegisteringDomain(null);
    }
  };

  return (
    <div className="bg-[#071A33]">
      <PageBanner
        eyebrow="03 · DESART HOST · DOMÍNIOS"
        title="Registo, gestão DNS e renovação de domínios."
        description="Proteja o nome da sua empresa em Moçambique (.co.mz, .mz) e extensões internacionais com gestão centralizada."
        onBack={() => onNavigate('home')}
      />

      <section className="py-20 bg-[#06152B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Search Box */}
          <div className="studio-surface rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white font-display">
              Pesquisar e Registar Domínio
            </h2>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="domains-page-search" className="sr-only">
                Pesquisar domínio
              </label>
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="domains-page-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ex: suaempresa.co.mz"
                  className="w-full pl-10 pr-4 py-3.5 rounded-lg bg-[#041022] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4599FF]"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3.5 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-sm font-bold transition-colors flex items-center justify-center gap-2 shrink-0 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>A consultar...</span>
                  </>
                ) : (
                  <span>Pesquisar</span>
                )}
              </button>
            </form>

            {errorMsg && (
              <p role="alert" className="text-xs text-rose-400">
                {errorMsg}
              </p>
            )}

            {registeredDomain && (
              <div
                role="status"
                className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-200 flex flex-wrap items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Domínio <strong className="text-white">{registeredDomain}</strong> reservado na plataforma. Fale connosco para ativação comercial.
                  </span>
                </div>
                <a
                  href={getWhatsAppUrl(`Olá DESART STUDIO, acabei de reservar o domínio ${registeredDomain} e gostaria de concluir a ativação.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4599FF] hover:text-white font-bold"
                >
                  Confirmar via WhatsApp
                </a>
              </div>
            )}

            {results.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {results.map((item) => (
                  <div
                    key={item.domain}
                    className="p-5 rounded-xl bg-[#041022]/80 border border-white/10 flex flex-col justify-between gap-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-lg font-bold text-white font-display">
                          {item.domain}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {item.category} · Gestão DNS incluída
                        </div>
                      </div>
                      {item.available ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Disponível</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 shrink-0">
                          <XCircle className="w-4 h-4" />
                          <span>Registado</span>
                        </span>
                      )}
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-base font-bold text-white tabular-nums">
                          {item.pricePerYear}
                        </div>
                        <div className="text-[11px] text-slate-400 tabular-nums">
                          Renovação: {item.renewalPrice}
                        </div>
                      </div>

                      {item.available && (
                        <button
                          type="button"
                          onClick={() => handleRegister(item.domain)}
                          disabled={registeringDomain === item.domain}
                          className="px-4 py-2 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-xs font-bold transition-colors disabled:opacity-60"
                        >
                          {registeringDomain === item.domain ? 'A registar...' : 'Reservar'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Standard TLD Pricing Table */}
          <div className="studio-surface rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-[#4599FF]" />
              <h3 className="text-lg font-bold text-white font-display">
                Tabela de Preços de Domínios
              </h3>
            </div>

            <div className="divide-y divide-white/10">
              {DOMAIN_PRICING.map((row) => (
                <div
                  key={row.tld}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm"
                >
                  <div>
                    <span className="font-bold text-white font-display">{row.tld}</span>
                    <span className="text-slate-400 ml-3">{row.label}</span>
                  </div>
                  <div className="flex items-center gap-6 tabular-nums">
                    <span className="text-slate-400 text-xs">Renovação: {row.renewal}</span>
                    <span className="font-bold text-white">{row.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const PortfolioPage: React.FC<PageProps> = ({ onNavigate }) => (
  <div className="bg-[#071A33]">
    <PageBanner
      eyebrow="Portfólio DESART STUDIO"
      title="Trabalho que transforma marcas."
      description="Explore projectos demonstrativos em Design Gráfico, Identidade Visual, Websites e Publicidade."
      onBack={() => onNavigate('home')}
    />
    <PortfolioSection onNavigate={onNavigate} showFullHeader={false} />
    <ContactSection />
  </div>
);

export const AboutPage: React.FC<PageProps> = ({ onNavigate }) => (
  <div className="bg-[#071A33]">
    <PageBanner
      eyebrow="Sobre Nós"
      title="Mais do que design. Criamos presença digital."
      description="Conheça a nossa missão, visão, valores e o processo que orienta cada projecto entregue."
      onBack={() => onNavigate('home')}
    />
    <AboutProcessSection />
    <ContactSection />
  </div>
);

export const ContactPage: React.FC<PageProps> = ({ onNavigate }) => (
  <div className="bg-[#071A33]">
    <PageBanner
      eyebrow="Contactos"
      title="Vamos construir algo extraordinário?"
      description="Solicite um orçamento ou fale diretamente com a nossa equipa pelo WhatsApp (+258 833 081 636)."
      onBack={() => onNavigate('home')}
    />
    <ContactSection />
  </div>
);

export const PrivacyPage: React.FC<PageProps> = ({ onNavigate }) => (
  <div className="bg-[#071A33]">
    <PageBanner
      eyebrow="Legal & Privacidade"
      title="Política de Privacidade"
      description="Compromisso de confidencialidade e tratamento responsável dos dados partilhados através da plataforma DESART STUDIO."
      onBack={() => onNavigate('home')}
    />
    <section className="py-16 bg-[#06152B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-slate-300 leading-relaxed">
        <div className="studio-surface rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5 text-[#4599FF] font-semibold">
            <ShieldCheck className="w-5 h-5" />
            <span>Recolha e Utilização de Informação</span>
          </div>
          <p>
            Os dados fornecidos nos formulários de contacto ou pedidos de orçamento (nome, email, telefone e descrição do projecto) são utilizados exclusivamente para responder à sua solicitação, preparar propostas comerciais e prestar assistência técnica.
          </p>
          <p>
            Não comercializamos nem partilhamos informações de clientes com terceiros para fins publicitários. Para dúvidas sobre os seus dados ou pedidos de remoção, contacte contacto@desartstudio.co.mz.
          </p>
        </div>
      </div>
    </section>
  </div>
);
