import React, { useState } from 'react';
import { 
  Globe, 
  Mail, 
  Laptop, 
  Palette, 
  Cpu, 
  LifeBuoy, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Zap, 
  Download, 
  Phone,
  HardDrive,
  Layers,
  HelpCircle
} from 'lucide-react';
import { AppView } from '../../types';
import { DomainSearchSection } from '../home/DomainSearchSection';

interface ServiceDetailPageProps {
  serviceId: AppView;
  onNavigate: (view: AppView) => void;
  onOpenAi: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  serviceId, 
  onNavigate,
  onOpenAi 
}) => {
  const getServiceData = () => {
    switch (serviceId) {
      case 'service-domains':
        return {
          title: 'Registo e Gestão de Domínios Oficiais .MZ',
          subtitle: 'A porta de entrada para a identidade digital da sua empresa em Moçambique e no mundo.',
          tag: 'REGISTRO DE DOMÍNIOS',
          icon: Globe,
          accent: 'text-blue-500 bg-blue-50',
          highlights: [
            'Propagação DNS ultrarrápida através de cluster Anycast',
            'Proteção de privacidade WHOIS gratuita',
            'Painel avançado para gestão de registos A, CNAME, MX, TXT e SPF',
            'Bloqueio contra transferências não autorizadas',
            'Renovação automática sem interrupção de serviço'
          ],
          pricingTable: [
            { tld: '.co.mz', type: 'Empresas em Moçambique', price: '2.900 MT / ano', renewal: '2.900 MT', recommended: true },
            { tld: '.mz', type: 'Identidade Oficial Nacional', price: '3.500 MT / ano', renewal: '3.500 MT', recommended: false },
            { tld: '.com', type: 'Comércio Internacional', price: '1.450 MT / ano', renewal: '1.450 MT', recommended: false },
            { tld: '.africa', type: 'Presença Continental', price: '2.200 MT / ano', renewal: '2.200 MT', recommended: false },
            { tld: '.org.mz', type: 'ONGs e Associações', price: '2.900 MT / ano', renewal: '2.900 MT', recommended: false },
          ]
        };

      case 'service-mail':
        return {
          title: 'DESART MAIL: Email Corporativo de Alta Performance',
          subtitle: '15 GB por caixa postal sobre servidores dedicados isolados com segurança e privacidade rigorosas.',
          tag: 'EMAIL PROFISSIONAL',
          icon: Mail,
          accent: 'text-indigo-500 bg-indigo-50',
          highlights: [
            '15 GB de quota real por caixa postal corporativa',
            'Webmail corporativo moderno e compatível com smartphones',
            'Portas seguras IMAP (993) e SMTP (465) com SSL/TLS 1.3',
            'Filtro antispam com inteligência artificial e antivírus integrado',
            'Assinaturas criptográficas SPF, DKIM e DMARC já ativadas',
            'Migração assistida sem perda de histórico para novos clientes'
          ],
          pricingTable: [
            { tld: 'Plano Start', type: '3 caixas postais (45 GB totais)', price: '7.500 MT / ano', renewal: '750 MT/mês', recommended: false },
            { tld: 'Plano Business', type: '10 caixas postais (150 GB totais)', price: '17.500 MT / ano', renewal: '1.750 MT/mês', recommended: true },
            { tld: 'Plano Professional', type: '25 caixas postais (375 GB totais)', price: '35.000 MT / ano', renewal: '3.500 MT/mês', recommended: false },
            { tld: 'Plano Enterprise', type: '50+ caixas postais dedicadas', price: 'Sob consulta', renewal: 'Customizado', recommended: false },
          ]
        };

      case 'service-websites':
        return {
          title: 'Websites & Portais de Alto Rendimento',
          subtitle: 'Engenharia web de padrão internacional para marcas que exigem autoridade e velocidade extrema.',
          tag: 'DESENVOLVIMENTO WEB',
          icon: Laptop,
          accent: 'text-sky-500 bg-sky-50',
          highlights: [
            'Design exclusivo e refinado com padrão de acabamento Apple',
            'Carregamento em menos de 1 segundo através de CDN Edge global',
            'Otimização SEO técnica completa para Google e Bing',
            'Integração direta com formulários de contacto e WhatsApp corporativo',
            'Totalmente responsivo em desktops, tablets e telemóveis'
          ],
          pricingTable: [
            { tld: 'Landing Page Pro', type: 'Página única de alta conversão', price: '25.000 MT', renewal: 'Único', recommended: false },
            { tld: 'Website Corporativo', type: 'Até 6 páginas institucionais', price: '45.000 MT', renewal: 'Único', recommended: true },
            { tld: 'E-commerce & Catálogo', type: 'Loja com pagamentos M-Pesa', price: '75.000 MT', renewal: 'Único', recommended: false },
            { tld: 'Portal & Aplicação Web', type: 'Arquitetura customizada React/Node', price: 'Sob orçamento', renewal: 'Customizado', recommended: false },
          ]
        };

      case 'service-design':
        return {
          title: 'Design Gráfico, Branding & Identidade Visual',
          subtitle: 'Transformamos a percepção da sua empresa com marcas memoráveis e comunicação gráfica de excelência.',
          tag: 'ESTÚDIO DE DESIGN',
          icon: Palette,
          accent: 'text-purple-500 bg-purple-50',
          highlights: [
            'Criação de logótipos baseados em conceitos estratégicos de mercado',
            'Manual completo de normas gráficas e diretrizes visuais',
            'Materiais corporativos: cartões de visita, pastas, papel timbrado e fardamento',
            'Design de embalagens e rótulos com especificações de impressão',
            'Grelha e templates para redes sociais (LinkedIn, Instagram, Facebook)'
          ],
          pricingTable: [
            { tld: 'Pack Essencial', type: 'Logótipo + Mini Guia de Aplicação', price: '18.000 MT', renewal: 'Único', recommended: false },
            { tld: 'Identidade Completa', type: 'Branding + Manual + Estacionário', price: '38.000 MT', renewal: 'Único', recommended: true },
            { tld: 'Design de Embalagem', type: 'Rótulo ou Caixa com mockups 3D', price: '22.000 MT', renewal: 'Único', recommended: false },
            { tld: 'Gestão Visual Mensal', type: 'Acompanhamento contínuo de design', price: '20.000 MT / mês', renewal: 'Mensal', recommended: false },
          ]
        };

      case 'service-apps':
        return {
          title: 'Sistemas Empresariais, ERP & Aplicações',
          subtitle: 'Automação inteligente e softwares construídos sob medida para os fluxos operacionais da sua empresa.',
          tag: 'SISTEMAS & ERP',
          icon: Cpu,
          accent: 'text-blue-600 bg-blue-50',
          highlights: [
            'Sistemas de faturação certificados de acordo com as normas fiscais',
            'Módulos de gestão de stock, clientes (CRM) e fornecedores',
            'Integração nativa com APIs de pagamento do M-Pesa (Vodacom) e e-Mola (Movitel)',
            'Painéis administrativos em tempo real com relatórios exportáveis em Excel/PDF',
            'Segurança bancária com perfis de acesso restrito (RBAC)'
          ],
          pricingTable: [
            { tld: 'POS / Ponto de Venda', type: 'Para retalho e restauração com recibo', price: '35.000 MT', renewal: 'Ou 2.500 MT/mês', recommended: false },
            { tld: 'ERP Comercial', type: 'Faturação, stock e contas a receber', price: '65.000 MT', renewal: 'Ou 4.500 MT/mês', recommended: true },
            { tld: 'App Mobile iOS & Android', type: 'Aplicativo nativo para clientes', price: 'Sob consulta', renewal: 'Por sprint', recommended: false },
            { tld: 'Integração de APIs', type: 'Conexão M-Pesa / Bancos / SMS', price: '15.000 MT', renewal: 'Único', recommended: false },
          ]
        };

      case 'service-support':
      default:
        return {
          title: 'Suporte Técnico Proativo & Contrato de SLA',
          subtitle: 'Garantia de continuidade operacional, monitorização de servidores e apoio técnico em Moçambique.',
          tag: 'SUPORTE & SLA',
          icon: LifeBuoy,
          accent: 'text-emerald-600 bg-emerald-50',
          highlights: [
            'Linha de atendimento telefónico prioritário com engenheiros seniores',
            'Tempo de resposta contratual (SLA) a partir de 2 horas para incidentes críticos',
            'Monitorização contínua de integridade de e-mail, websites e DNS',
            'Backups diários automatizados com retenção externa na cloud',
            'Relatórios mensais de desempenho e saúde de infraestrutura'
          ],
          pricingTable: [
            { tld: 'Suporte Standard', type: 'Incluído em todos os serviços ativos', price: 'Grátis', renewal: 'SLA 24h', recommended: false },
            { tld: 'SLA Business Pro', type: 'Tempo de resposta até 4h + Telefone', price: '5.000 MT / mês', renewal: 'Mensal', recommended: true },
            { tld: 'SLA Mission-Critical', type: 'Plantão 24/7 com engenheiro dedicado', price: '15.000 MT / mês', renewal: 'Mensal', recommended: false },
          ]
        };
    }
  };

  const service = getServiceData();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation button */}
        <button
          onClick={() => onNavigate('website')}
          className="mb-8 inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar à Página Principal</span>
        </button>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-display ${service.accent}`}>
              <service.icon className="w-4 h-4" />
              <span>{service.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('customer-portal')}
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#4599FF] hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all flex items-center space-x-2"
              >
                <span>CONTRATAR NO PORTAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAi}
                className="px-6 py-3.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center space-x-2"
              >
                <span>Perguntar ao DESART AI Core</span>
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Domain Search if on domain service */}
        {serviceId === 'service-domains' && (
          <div className="mb-12">
            <DomainSearchSection onNavigate={onNavigate} />
          </div>
        )}

        {/* Technical Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Diferenciais de Engenharia DESART STUDIO
            </h3>
            <div className="space-y-3">
              {service.highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-1 rounded-full bg-blue-50 text-[#4599FF] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0B1528] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">GARANTIA CONTRATUAL</span>
              <h3 className="text-xl font-bold font-display text-white">Infraestrutura Nacional & Global</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Todas as operações são auditadas e sustentadas por acordos de nível de serviço formais. Apoiamos empresas em Moçambique com pagamentos em moeda nacional (MT) e assistência telefónica dedicada.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#4599FF]" />
                <span>Linha Direta: <strong>833 081 636</strong></span>
              </div>
              <span className="text-emerald-400 font-mono font-bold">DISPONIBILIDADE 99.98%</span>
            </div>
          </div>
        </div>

        {/* Pricing / Packages Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 font-display">Tabela de Planos & Investimento</h3>
            <p className="text-xs text-slate-500">Valores em Meticais (MT), faturados com recibo fiscal</p>
          </div>

          <div className="divide-y divide-slate-100">
            {service.pricingTable.map((row, idx) => (
              <div 
                key={idx} 
                className={`py-4 px-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl transition-colors ${
                  row.recommended ? 'bg-blue-50/50' : 'hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-slate-900">{row.tld}</span>
                    {row.recommended && (
                      <span className="px-2 py-0.5 rounded-full bg-[#4599FF] text-white text-[10px] font-bold">
                        RECOMENDADO
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{row.type}</div>
                </div>

                <div className="flex items-center space-x-4 self-end sm:self-auto">
                  <div className="text-right">
                    <div className="text-base font-black text-slate-900 font-display">{row.price}</div>
                    <div className="text-[10px] text-slate-400">Renovação: {row.renewal}</div>
                  </div>

                  <button
                    onClick={() => onNavigate('customer-portal')}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-[#4599FF] text-white transition-colors"
                  >
                    Solicitar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
