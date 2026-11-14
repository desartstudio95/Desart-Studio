export interface DomainItem {
  id: string;
  name: string;
  tld: string;
  status: 'ACTIVE' | 'PENDING' | 'EXPIRED' | 'SUSPENDED';
  registrationDate: string;
  expiresAt: string;
  autoRenew: boolean;
  price: string;
  nameservers: string[];
  dnsRecords: DnsRecord[];
}

export interface DnsRecord {
  type: 'A' | 'AAAA' | 'CNAME' | 'MX' | 'TXT' | 'NS' | 'SRV';
  name: string;
  value: string;
  ttl: string;
  priority?: number;
}

export interface MailboxItem {
  id: string;
  email: string;
  domain?: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'QUOTA_EXCEEDED';
  storageUsed?: number; // in GB
  storageLimit?: number; // in GB
  usage?: string;
  quota?: string;
  lastActivity?: string;
  user?: string;
  twoFactorEnabled?: boolean;
}

export interface WebsiteItem {
  id: string;
  name: string;
  domain: string;
  status: 'ONLINE' | 'MAINTENANCE' | 'DEPLOYING';
  plan: string;
  renewalDate: string;
  sslStatus: string;
  techStack: string;
  uptime: string;
}

export interface InvoiceItem {
  id: string;
  description?: string;
  service?: string;
  amount: string;
  rawAmount?: number;
  dueDate: string;
  issueDate?: string;
  status: 'PAID' | 'PENDING' | 'OVERDUE';
  method?: string;
  paymentMethod?: string;
  downloadUrl?: string;
}

export interface SupportMessage {
  id: string;
  author: string;
  role: 'customer' | 'agent' | 'system';
  time: string;
  text: string;
  attachmentName?: string;
}

export interface TicketItem {
  id: string;
  title: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'IN PROGRESS' | 'RESOLVED' | 'CLOSED';
  category: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  createdAt?: string;
  updatedAt?: string;
  agent?: string;
  messages?: SupportMessage[];
}

export type SupportTicket = TicketItem;

export interface CustomerAccount {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  servicesCount: number;
  mrr: string;
  status: 'ACTIVE' | 'TRIAL' | 'SUSPENDED';
  joinedDate: string;
}

export type AppView =
  | 'home'
  | 'services'
  | 'design-grafico'
  | 'criacao-de-websites'
  | 'hospedagem'
  | 'dominios'
  | 'portfolio'
  | 'sobre'
  | 'contactos'
  | 'privacidade'
  | 'customer-portal'
  | 'admin-dashboard'
  // Legacy compatibility views
  | 'website'
  | 'service-domains'
  | 'service-mail'
  | 'service-websites'
  | 'service-design'
  | 'service-apps'
  | 'service-support';

export type PortalTab =
  | 'overview'
  | 'domains'
  | 'email'
  | 'websites'
  | 'billing'
  | 'support'
  | 'settings';

export type AdminTab =
  | 'dashboard'
  | 'customers'
  | 'domains'
  | 'mailboxes'
  | 'websites'
  | 'subscriptions'
  | 'invoices'
  | 'payments'
  | 'tickets'
  | 'integrations'
  | 'settings';

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Design Gráfico' | 'Identidade Visual' | 'Websites' | 'Publicidade';
  typeLabel: string;
  summary: string;
  description: string;
  deliverables: string[];
  image: string;
  isDemo: boolean;
  year: string;
}
