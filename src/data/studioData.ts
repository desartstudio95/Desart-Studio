import { AppView, PortfolioProject } from '../types';

export const WHATSAPP_DISPLAY = '+258 833 081 636';
export const WHATSAPP_E164 = '258833081636';
export const STUDIO_EMAIL = 'contacto@desartstudio.co.mz';

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = 'Olá DESART STUDIO, gostaria de conversar sobre um projecto.';
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message || defaultMsg)}`;
}

export const VIEW_TO_PATH: Record<AppView, string> = {
  home: '/',
  website: '/',
  services: '/servicos',
  'design-grafico': '/design-grafico',
  'service-design': '/design-grafico',
  'criacao-de-websites': '/criacao-de-websites',
  'service-websites': '/criacao-de-websites',
  hospedagem: '/hospedagem',
  'service-support': '/hospedagem',
  dominios: '/dominios',
  'service-domains': '/dominios',
  portfolio: '/portfolio',
  sobre: '/sobre',
  contactos: '/contactos',
  privacidade: '/privacidade',
  'customer-portal': '/portal',
  'admin-dashboard': '/admin',
  'service-mail': '/hospedagem',
  'service-apps': '/criacao-de-websites',
};

export function pathToView(pathname: string): AppView {
  const clean = pathname.replace(/\/+$/, '') || '/';
  switch (clean) {
    case '/':
      return 'home';
    case '/servicos':
      return 'services';
    case '/design-grafico':
      return 'design-grafico';
    case '/criacao-de-websites':
      return 'criacao-de-websites';
    case '/hospedagem':
      return 'hospedagem';
    case '/dominios':
      return 'dominios';
    case '/portfolio':
      return 'portfolio';
    case '/sobre':
      return 'sobre';
    case '/contactos':
      return 'contactos';
    case '/privacidade':
      return 'privacidade';
    case '/portal':
      return 'customer-portal';
    case '/admin':
      return 'admin-dashboard';
    default:
      return 'home';
  }
}

export const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  home: {
    title: 'DESART STUDIO – Design Gráfico, Websites e Hospedagem',
    description: 'Design gráfico, criação de websites modernos e soluções de hospedagem e domínios para marcas que querem crescer no mundo digital.',
  },
  services: {
    title: 'Serviços – DESART STUDIO | Design, Websites e Hospedagem',
    description: 'Conheça os nossos três pilares de serviço: DESART Design, DESART Web e DESART Host para fortalecer a presença digital da sua marca.',
  },
  'design-grafico': {
    title: 'Design Gráfico & Identidade Visual – DESART STUDIO',
    description: 'Logótipos profissionais, identidade visual e corporativa, cartazes, flyers, banners, cartões de visita e materiais de marketing.',
  },
  'criacao-de-websites': {
    title: 'Criação de Websites & E-commerce – DESART STUDIO',
    description: 'Landing pages, websites corporativos, portfólios profissionais, lojas e-commerce, redesign e manutenção contínua.',
  },
  hospedagem: {
    title: 'Hospedagem Web, WordPress & SSL – DESART STUDIO',
    description: 'Soluções de hospedagem confiável com painel DirectAdmin, certificados SSL, backups e assistência técnica dedicada.',
  },
  dominios: {
    title: 'Registo e Gestão de Domínios (.co.mz, .mz) – DESART STUDIO',
    description: 'Registe e gira domínios .co.mz, .mz, .com e .africa com gestão de DNS, renovações transparentes e suporte técnico.',
  },
  portfolio: {
    title: 'Portfólio – DESART STUDIO | Projectos Demonstrativos',
    description: 'Explore trabalhos demonstrativos em design gráfico, identidade visual, publicidade e desenvolvimento de websites.',
  },
  sobre: {
    title: 'Sobre Nós – DESART STUDIO',
    description: 'A DESART STUDIO é uma empresa criativa e tecnológica dedicada a ajudar marcas a construir uma presença digital sólida.',
  },
  contactos: {
    title: 'Contactos – DESART STUDIO | WhatsApp +258 833 081 636',
    description: 'Fale connosco através do formulário de orçamento ou via WhatsApp (+258 833 081 636) para iniciar o seu projecto.',
  },
  privacidade: {
    title: 'Política de Privacidade – DESART STUDIO',
    description: 'Termos de tratamento de dados, privacidade e segurança da plataforma DESART STUDIO.',
  },
};

export interface ServicePillar {
  number: string;
  id: AppView;
  codeName: string;
  categoryLabel: string;
  headline: string;
  description: string;
  highlights: string[];
  allServices: string[];
  cta: string;
  image: string;
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    number: '01.',
    id: 'design-grafico',
    codeName: 'DESART DESIGN',
    categoryLabel: 'Design Gráfico',
    headline: 'Identidade e Comunicação Visual',
    description: 'Construímos identidades visuais fortes e materiais gráficos que fazem a sua marca destacar-se.',
    highlights: [
      'Identidade visual',
      'Design de logótipos',
      'Cartazes publicitários',
      'Materiais de marketing',
    ],
    allServices: [
      'Design de logótipos profissionais',
      'Identidade visual completa',
      'Identidade corporativa e estacionário',
      'Cartazes publicitários',
      'Flyers e banners digitais ou impressos',
      'Cartões de visita corporativos',
      'Catálogos comerciais',
      'Gráficos para redes sociais',
      'Materiais de marketing institucional',
    ],
    cta: 'Explorar Design',
    image: '/src/assets/images/portfolio_brand_identity_1794614229319.jpg',
  },
  {
    number: '02.',
    id: 'criacao-de-websites',
    codeName: 'DESART WEB',
    categoryLabel: 'Criação de Websites',
    headline: 'Websites e Experiência Digital',
    description: 'Desenvolvemos websites modernos, rápidos e responsivos que transformam visitantes em clientes.',
    highlights: [
      'Websites corporativos',
      'Landing pages',
      'E-commerce',
      'Interfaces responsivas',
    ],
    allServices: [
      'Landing pages orientadas a conversão',
      'Websites corporativos e institucionais',
      'Websites empresariais personalizados',
      'Portfólios profissionais',
      'Websites de e-commerce e catálogos online',
      'Redesign completo de websites existentes',
      'Manutenção contínua e atualizações técnicas',
    ],
    cta: 'Explorar Websites',
    image: '/src/assets/images/portfolio_web_platform_1794614230066.jpg',
  },
  {
    number: '03.',
    id: 'hospedagem',
    codeName: 'DESART HOST',
    categoryLabel: 'Hospedagem e Domínios',
    headline: 'Alojamento Seguro e Domínios',
    description: 'Colocamos o seu negócio online com hospedagem confiável, domínios personalizados e suporte técnico.',
    highlights: [
      'Registo de domínios',
      'Hospedagem web',
      'Certificados SSL',
      'Gestão de DNS',
    ],
    allServices: [
      'Registo de domínios (.co.mz, .mz, .com, .africa, .org)',
      'Gestão centralizada de domínios',
      'Hospedagem web otimizada em servidor DirectAdmin',
      'Hospedagem especializada para WordPress',
      'Gestão avançada de registos DNS',
      'Certificados de segurança SSL/TLS',
      'Renovações anuais transparentes',
      'Assistência técnica dedicada',
    ],
    cta: 'Explorar Hospedagem',
    image: '/src/assets/images/portfolio_hosting_infra_1794614232143.jpg',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'demo-identidade-corporativa',
    title: 'Sistema de Identidade Corporativa e Papelaria',
    category: 'Identidade Visual',
    typeLabel: 'Projecto Demonstrativo · Identidade Visual',
    summary: 'Sistema gráfico completo com manual de normas, logótipo geométrico e papelaria executiva.',
    description: 'Conceito demonstrativo desenvolvido pelo estúdio para ilustrar a construção de uma identidade corporativa consistente — combinando tipografia de precisão, paleta institucional azul-marinho e aplicação em cartões de visita, papel timbrado e dossiê de marca.',
    deliverables: [
      'Logótipo principal e variações monocromáticas',
      'Manual de identidade visual',
      'Cartões de visita e papel timbrado',
      'Paleta cromática e sistema tipográfico',
    ],
    image: '/src/assets/images/portfolio_brand_identity_1794614229319.jpg',
    isDemo: true,
    year: '2026',
  },
  {
    id: 'demo-website-corporativo',
    title: 'Plataforma Institucional Multi-Dispositivo',
    category: 'Websites',
    typeLabel: 'Projecto Demonstrativo · Websites',
    summary: 'Interface responsiva com arquitetura editorial moderna para desktop, tablet e smartphone.',
    description: 'Protótipo demonstrativo de website corporativo focado em clareza informativa, carregamento rápido, navegação acessível e adaptação fluida entre ecrãs panorâmicos e dispositivos móveis.',
    deliverables: [
      'Arquitetura de informação e UI/UX',
      'Desenvolvimento responsivo desktop e mobile',
      'Otimização técnica inicial de SEO',
      'Configuração de certificado SSL',
    ],
    image: '/src/assets/images/portfolio_web_platform_1794614230066.jpg',
    isDemo: true,
    year: '2026',
  },
  {
    id: 'demo-campanha-impressa',
    title: 'Campanha Editorial, Cartazes e Catálogo Comercial',
    category: 'Publicidade',
    typeLabel: 'Projecto Demonstrativo · Publicidade',
    summary: 'Peças publicitárias, desdobráveis tri-fold e catálogo corporativo para comunicação multicanal.',
    description: 'Conjunto demonstrativo de comunicação visual e publicidade impressa concebido para campanhas comerciais, apresentando hierarquia tipográfica clara, grelha editorial equilibrada e preparação profissional para gráfica.',
    deliverables: [
      'Cartazes publicitários de grande formato',
      'Flyer desdobrável comercial',
      'Catálogo institucional paginado',
      'Arte-final pronta para impressão',
    ],
    image: '/src/assets/images/portfolio_advertising_print_1794614230406.jpg',
    isDemo: true,
    year: '2026',
  },
  {
    id: 'demo-design-digital',
    title: 'Interface Web e Experiência Mobile Integrada',
    category: 'Websites',
    typeLabel: 'Projecto Demonstrativo · Websites',
    summary: 'Landing page de apresentação comercial com versão mobile otimizada para conversão.',
    description: 'Estudo visual demonstrativo focado em apresentação de produto e serviços digitais, evidenciando o alinhamento entre a versão desktop em portátil e a experiência tátil em smartphone.',
    deliverables: [
      'Landing page estratégica',
      'Prototipagem responsiva mobile-first',
      'Formulário de contacto e integração WhatsApp',
    ],
    image: '/src/assets/images/hero_devices_showcase_1794614229276.jpg',
    isDemo: true,
    year: '2026',
  },
  {
    id: 'demo-kit-grafico',
    title: 'Direção Gráfica para Redes Sociais e Marketing',
    category: 'Design Gráfico',
    typeLabel: 'Projecto Demonstrativo · Design Gráfico',
    summary: 'Sistema modular de peças digitais, banners promocionais e identidade visual aplicada.',
    description: 'Modelo demonstrativo de design gráfico aplicado a campanhas digitais e materiais promocionais, garantindo consistência visual entre anúncios, banners e apresentações comerciais.',
    deliverables: [
      'Templates modulares para redes sociais',
      'Banners digitais e peças promocionais',
      'Guia rápido de aplicação cromática',
    ],
    image: '/src/assets/images/hero_cinematic_studio_1794614226933.jpg',
    isDemo: true,
    year: '2026',
  },
];

export interface HostingPlan {
  id: string;
  name: string;
  subtitle: string;
  annualPrice: string;
  monthlyEquivalent: string;
  recommended?: boolean;
  specs: {
    storage: string;
    bandwidth: string;
    websites: string;
    emails: string;
    backups: string;
    panel: string;
  };
  included: string[];
  paidExtras: string[];
}

export const HOSTING_PLANS: HostingPlan[] = [
  {
    id: 'host-essencial',
    name: 'Plano Essencial',
    subtitle: 'Para landing pages e portfólios profissionais',
    annualPrice: '4.500 MT / ano',
    monthlyEquivalent: '375 MT / mês (faturação anual)',
    specs: {
      storage: '5 GB Armazenamento SSD NVMe',
      bandwidth: '100 GB Tráfego Mensal',
      websites: '1 Website (ou WordPress)',
      emails: 'Até 5 contas de e-mail associadas ao domínio',
      backups: 'Backup semanal automático',
      panel: 'Painel DirectAdmin incluído',
    },
    included: [
      'Painel de controlo DirectAdmin',
      'Certificado SSL Let’s Encrypt gratuito',
      'Gestão de registos DNS',
      'Suporte técnico para configuração inicial',
    ],
    paidExtras: [
      'Registo/renovação de domínio (.co.mz: 2.900 MT/ano)',
      'Backups diários dedicados ou restauração avançada',
      'Manutenção mensal de conteúdos e plugins WordPress',
    ],
  },
  {
    id: 'host-negocio',
    name: 'Plano Negócio',
    subtitle: 'Para websites corporativos e empresas em crescimento',
    annualPrice: '8.500 MT / ano',
    monthlyEquivalent: '708 MT / mês (faturação anual)',
    recommended: true,
    specs: {
      storage: '15 GB Armazenamento SSD NVMe',
      bandwidth: '300 GB Tráfego Mensal',
      websites: 'Até 3 Websites / Subdomínios',
      emails: 'Até 15 contas de e-mail associadas (quota partilhada no plano)',
      backups: 'Backup automático bissemanal',
      panel: 'Painel DirectAdmin completo',
    },
    included: [
      'Painel DirectAdmin com instalador WordPress',
      'Certificados SSL/TLS automáticos',
      'Proteção básica contra spam e malware',
      'Assistência técnica prioritária por WhatsApp e ticket',
    ],
    paidExtras: [
      'Registo ou renovação de domínio personalizado',
      'Redesign ou desenvolvimento de novas páginas',
      'Expansão de espaço SSD adicional sob consulta',
    ],
  },
  {
    id: 'host-avancado',
    name: 'Plano Avançado',
    subtitle: 'Para lojas e-commerce e catálogos de alto tráfego',
    annualPrice: '14.500 MT / ano',
    monthlyEquivalent: '1.208 MT / mês (faturação anual)',
    specs: {
      storage: '30 GB Armazenamento SSD NVMe',
      bandwidth: '600 GB Tráfego Mensal',
      websites: 'Até 5 Websites',
      emails: 'Até 30 contas de e-mail associadas (quota dentro dos 30 GB)',
      backups: 'Backup diário automático (retenção 7 dias)',
      panel: 'Painel DirectAdmin com Staging',
    },
    included: [
      'Recursos dedicados de CPU e memória otimizados para WordPress/WooCommerce',
      'Certificados SSL gratuitos para todos os domínios do plano',
      'Monitorização proativa de disponibilidade',
      'Suporte técnico direto em português',
    ],
    paidExtras: [
      'Registo e renovação de domínios (.co.mz, .mz, .com)',
      'Desenvolvimento de funcionalidades e-commerce à medida',
      'Migração complexa de múltiplos servidores externos',
    ],
  },
];

export const DOMAIN_PRICING = [
  { tld: '.co.mz', label: 'Empresas em Moçambique', price: '2.900 MT / ano', renewal: '2.900 MT / ano' },
  { tld: '.mz', label: 'Identidade Oficial Nacional', price: '3.500 MT / ano', renewal: '3.500 MT / ano' },
  { tld: '.com', label: 'Comercial Internacional', price: '1.450 MT / ano', renewal: '1.450 MT / ano' },
  { tld: '.africa', label: 'Presença Continental', price: '2.200 MT / ano', renewal: '2.200 MT / ano' },
  { tld: '.org', label: 'Organizações e Associações', price: '1.800 MT / ano', renewal: '1.800 MT / ano' },
];

export const ALL_IN_ONE_CAMPAIGN = {
  isActive: true,
  title: 'Campanha All In One',
  badge: 'Campanha Promocional por Tempo Limitado',
  price: '8.000 MT',
  startDate: '2026-11-01',
  endDate: '2026-12-31',
  validityLabel: 'Válido de 01 Nov a 31 Dez 2026',
  disclaimer: 'Valor promocional válido exclusivamente durante o período da campanha acima indicado. Renovações anuais de domínio e hospedagem após o 1.º ano seguem a tabela padrão.',
  includes: [
    'Website profissional completo',
    'Landing page principal estruturada',
    'Três páginas adicionais (ex: Serviços, Sobre, Contactos)',
    'Otimização SEO inicial (títulos, meta tags e estrutura semântica)',
    'Hospedagem web anual incluída (Plano Essencial 5 GB SSD)',
    'Registo de domínio incluído no primeiro ano (.com ou .co.mz conforme campanha)',
  ],
};

export function isCampaignCurrentlyActive(referenceDate = new Date()): boolean {
  if (!ALL_IN_ONE_CAMPAIGN.isActive) return false;
  const start = new Date(`${ALL_IN_ONE_CAMPAIGN.startDate}T00:00:00`);
  const end = new Date(`${ALL_IN_ONE_CAMPAIGN.endDate}T23:59:59`);
  return referenceDate >= start && referenceDate <= end;
}

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Conversamos',
    description: 'Ouvimos os objetivos do seu negócio, público-alvo e requisitos de marca ou presença online.',
  },
  {
    number: '02',
    title: 'Planeamos',
    description: 'Definimos a estrutura visual, arquitetura do website, plano de hospedagem e prazos transparentes.',
  },
  {
    number: '03',
    title: 'Criamos',
    description: 'Produzimos o design gráfico, desenvolvemos as interfaces e configuramos domínio e servidor.',
  },
  {
    number: '04',
    title: 'Entregamos',
    description: 'Publicamos o projecto com certificado SSL, testes multi-dispositivo e entrega dos ficheiros finais.',
  },
  {
    number: '05',
    title: 'Acompanhamos',
    description: 'Prestamos assistência técnica contínua, renovações organizadas e suporte para a evolução da marca.',
  },
];
