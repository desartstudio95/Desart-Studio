import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// In-memory Database for DESART Digital Ecosystem
const db = {
  domains: [
    {
      id: "dom-1",
      name: "empresa.co.mz",
      tld: ".co.mz",
      status: "ACTIVE",
      registrationDate: "2024-09-15",
      expiresAt: "2027-09-15",
      autoRenew: true,
      price: "2.900 MT / ano",
      nameservers: ["ns1.desartstudio.co.mz", "ns2.desartstudio.co.mz"],
      dnsRecords: [
        { type: "A", name: "@", value: "102.214.12.88", ttl: "3600" },
        { type: "CNAME", name: "www", value: "empresa.co.mz", ttl: "3600" },
        { type: "MX", name: "@", value: "mail.desartstudio.co.mz", priority: 10, ttl: "3600" },
        { type: "TXT", name: "@", value: "v=spf1 include:_spf.desartstudio.co.mz ~all", ttl: "3600" }
      ]
    },
    {
      id: "dom-2",
      name: "desarttech.mz",
      tld: ".mz",
      status: "ACTIVE",
      registrationDate: "2025-01-10",
      expiresAt: "2026-01-10",
      autoRenew: false,
      price: "3.500 MT / ano",
      nameservers: ["ns1.desartstudio.co.mz", "ns2.desartstudio.co.mz"],
      dnsRecords: [
        { type: "A", name: "@", value: "102.214.12.89", ttl: "3600" }
      ]
    }
  ],
  mailboxes: [
    {
      id: "mail-1",
      email: "info@empresa.co.mz",
      domain: "empresa.co.mz",
      status: "ACTIVE",
      storageUsed: 2.4,
      storageLimit: 15.0,
      lastActivity: "Hoje às 09:24",
      user: "Geral",
      twoFactorEnabled: true
    },
    {
      id: "mail-2",
      email: "vendas@empresa.co.mz",
      domain: "empresa.co.mz",
      status: "ACTIVE",
      storageUsed: 5.1,
      storageLimit: 15.0,
      lastActivity: "Hoje às 11:42",
      user: "Equipa Comercial",
      twoFactorEnabled: true
    },
    {
      id: "mail-3",
      email: "suporte@empresa.co.mz",
      domain: "empresa.co.mz",
      status: "ACTIVE",
      storageUsed: 1.2,
      storageLimit: 15.0,
      lastActivity: "Ontem às 16:15",
      user: "Suporte Técnico",
      twoFactorEnabled: false
    }
  ],
  websites: [
    {
      id: "web-1",
      name: "Minha Empresa Portal",
      domain: "empresa.co.mz",
      status: "ONLINE",
      plan: "Corporate Enterprise",
      renewalDate: "15 Set 2027",
      sslStatus: "Ativo (Let's Encrypt Wildcard)",
      techStack: "React + Tailwind + Node.js Microservices",
      uptime: "99.98%"
    }
  ],
  invoices: [
    {
      id: "INV-2026-089",
      description: "Renovação Anual: Ecossistema Digital Business + 10 Mailboxes",
      amount: "17.500 MT",
      rawAmount: 17500,
      dueDate: "15 Out 2026",
      status: "PENDING",
      method: "M-Pesa / Transferência",
      downloadUrl: "#"
    },
    {
      id: "INV-2025-042",
      description: "Registo de Domínio .co.mz (3 anos) + Certificado SSL",
      amount: "8.700 MT",
      rawAmount: 8700,
      dueDate: "15 Set 2025",
      status: "PAID",
      method: "M-Pesa",
      downloadUrl: "#"
    },
    {
      id: "INV-2025-011",
      description: "Setup Desart Mail Pro 15GB x 3 contas",
      amount: "2.250 MT",
      rawAmount: 2250,
      dueDate: "10 Jan 2025",
      status: "PAID",
      method: "e-Mola",
      downloadUrl: "#"
    }
  ],
  tickets: [
    {
      id: "1042",
      title: "Problema na configuração do email",
      status: "IN PROGRESS",
      category: "DESART MAIL",
      priority: "HIGH",
      createdAt: "2026-09-12 14:30",
      updatedAt: "2026-09-13 08:15",
      agent: "Amílcar Cossa (Nível 2 Tech Lead)",
      messages: [
        {
          id: "m1",
          author: "João Silva",
          role: "customer",
          time: "12 Set 14:30",
          text: "Boa tarde equipa DESART. Estamos a tentar configurar a caixa vendas@empresa.co.mz no Outlook para macOS com IMAP/SSL mas dá timeout na porta 993."
        },
        {
          id: "m2",
          author: "Amílcar Cossa",
          role: "agent",
          time: "12 Set 15:05",
          text: "Olá João! Verificamos que o registo MX e o certificado SSL/TLS no servidor de correio DESART estão operacionais. Recomendamos verificar se o hostname está definido como 'mail.desartstudio.co.mz' com criptografia SSL/TLS forçada e porta 465 (SMTP) / 993 (IMAP)."
        }
      ]
    },
    {
      id: "1039",
      title: "Solicitação de novo registo DNS DKIM",
      status: "RESOLVED",
      category: "DOMAINS",
      priority: "MEDIUM",
      createdAt: "2026-09-08 10:12",
      updatedAt: "2026-09-08 11:20",
      agent: "Sara Tembe",
      messages: [
        {
          id: "m1",
          author: "João Silva",
          role: "customer",
          time: "08 Set 10:12",
          text: "Precisamos de atualizar a chave DKIM pública para a nossa campanha de marketing."
        },
        {
          id: "m2",
          author: "Sara Tembe",
          role: "agent",
          time: "08 Set 11:20",
          text: "Chave DKIM propagada com sucesso em todos os servidores DNS de Moçambique e mundiais."
        }
      ]
    }
  ],
  adminMetrics: {
    customers: 147,
    domains: 198,
    mailboxes: 526,
    activeServices: 218,
    mrr: "385.400 MT",
    revenue: "4.620.000 MT",
    pendingPayments: "42.500 MT",
    tickets: 12
  }
};

// API Routes

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    platform: "DESART DIGITAL ECOSYSTEM",
    version: "2.5.0-pro",
    services: {
      desart_mail_layer: "OPERATIONAL",
      registrar_bridge: "OPERATIONAL",
      payment_gateway: "OPERATIONAL",
      dns_cluster: "OPERATIONAL"
    }
  });
});

// Registrar API Architecture - Domain search simulation
app.get("/api/domains/search", (req, res) => {
  const query = (req.query.q as string || "").trim().toLowerCase();
  if (!query) {
    return res.status(400).json({ error: "Termo de pesquisa obrigatório" });
  }

  // Clean extension if provided
  const baseName = query.replace(/\.(co\.mz|mz|com|org|africa|net)$/i, "");
  
  // Real registrar pricing tier in Mozambican Meticais (MT)
  const results = [
    {
      domain: `${baseName}.co.mz`,
      tld: ".co.mz",
      pricePerYear: "2.900 MT",
      renewalPrice: "2.900 MT",
      available: !["desart", "google", "governo", "bancodemocambique", "empresa"].includes(baseName),
      badge: "Recomendado para Moçambique",
      category: "Nacional Comercial"
    },
    {
      domain: `${baseName}.mz`,
      tld: ".mz",
      pricePerYear: "3.500 MT",
      renewalPrice: "3.500 MT",
      available: !["desart", "banco", "vodacom"].includes(baseName),
      badge: "Identidade Oficial",
      category: "Topo de Moçambique"
    },
    {
      domain: `${baseName}.com`,
      tld: ".com",
      pricePerYear: "1.450 MT",
      renewalPrice: "1.450 MT",
      available: true,
      badge: "Global",
      category: "Internacional"
    },
    {
      domain: `${baseName}.africa`,
      tld: ".africa",
      pricePerYear: "2.200 MT",
      renewalPrice: "2.200 MT",
      available: true,
      badge: "Continental",
      category: "Pan-Africano"
    },
    {
      domain: `${baseName}.org`,
      tld: ".org",
      pricePerYear: "1.800 MT",
      renewalPrice: "1.800 MT",
      available: true,
      badge: "Institucional",
      category: "Organizações"
    }
  ];

  res.json({ query: baseName, results });
});

// Domain registration endpoint
app.post("/api/domains/register", (req, res) => {
  const { domain, years, registrant } = req.body;
  if (!domain) {
    return res.status(400).json({ error: "Domínio é obrigatório" });
  }

  const newDomain = {
    id: `dom-${Date.now()}`,
    name: domain,
    tld: domain.substring(domain.indexOf(".")),
    status: "ACTIVE",
    registrationDate: new Date().toISOString().split("T")[0],
    expiresAt: new Date(Date.now() + (years || 1) * 365 * 86400000).toISOString().split("T")[0],
    autoRenew: true,
    price: `${(years || 1) * 2900} MT`,
    nameservers: ["ns1.desartstudio.co.mz", "ns2.desartstudio.co.mz"],
    dnsRecords: [
      { type: "A", name: "@", value: "102.214.12.88", ttl: "3600" },
      { type: "CNAME", name: "www", value: domain, ttl: "3600" }
    ]
  };

  db.domains.push(newDomain);
  res.status(201).json({ success: true, domain: newDomain });
});

// Customer portal overview data
app.get("/api/portal/overview", (req, res) => {
  res.json({
    user: {
      name: "João Silva",
      company: "Empresa Moçambique Lda.",
      email: "joao@empresa.co.mz",
      role: "Administrador da Conta"
    },
    stats: {
      activeServices: 4,
      domainsCount: db.domains.length,
      mailboxesCount: db.mailboxes.length,
      mailboxesLimit: 10,
      nextRenewal: "15 Set 2027",
      emailUsageGb: 8.7,
      emailTotalGb: 15.0,
      nextPayment: "17.500 MT"
    },
    domains: db.domains,
    mailboxes: db.mailboxes,
    websites: db.websites,
    invoices: db.invoices,
    tickets: db.tickets,
    activities: [
      { id: "a1", action: "Caixa de correio criada", detail: "suporte@empresa.co.mz", time: "Hoje, 09:20", icon: "mail" },
      { id: "a2", action: "Pagamento recebido com sucesso", detail: "Factura INV-2025-042 via M-Pesa", time: "12 Set, 14:10", icon: "check" },
      { id: "a3", action: "Domínio renovado", detail: "empresa.co.mz activo até 2027", time: "10 Set, 18:40", icon: "globe" },
      { id: "a4", action: "Ticket de suporte actualizado", detail: "#1042 - Problema na configuração do email", time: "09 Set, 11:05", icon: "ticket" }
    ]
  });
});

// DESART Mail API Abstraction Layer - Mailbox Management
app.get("/api/mailboxes", (req, res) => {
  res.json({ mailboxes: db.mailboxes });
});

app.post("/api/mailboxes/create", (req, res) => {
  const { username, domain, password, quotaGb } = req.body;
  if (!username || !domain) {
    return res.status(400).json({ error: "Username e domínio são obrigatórios" });
  }

  const email = `${username}@${domain}`;
  if (db.mailboxes.some(m => m.email === email)) {
    return res.status(400).json({ error: "Este endereço de e-mail já existe na infraestrutura" });
  }

  const newMailbox = {
    id: `mail-${Date.now()}`,
    email,
    domain,
    status: "ACTIVE",
    storageUsed: 0.01,
    storageLimit: quotaGb || 15.0,
    lastActivity: "Recém-criado",
    user: username,
    twoFactorEnabled: true
  };

  db.mailboxes.push(newMailbox);
  res.status(201).json({ success: true, mailbox: newMailbox });
});

app.delete("/api/mailboxes/:id", (req, res) => {
  const id = req.params.id;
  const idx = db.mailboxes.findIndex(m => m.id === id);
  if (idx === -1) return res.status(404).json({ error: "Caixa postal não encontrada" });
  db.mailboxes.splice(idx, 1);
  res.json({ success: true, message: "Caixa desativada no servidor de correio DESART" });
});

// Billing endpoints & Payment Gateway Simulation (M-Pesa, e-Mola, Bank Transfer)
app.get("/api/billing/invoices", (req, res) => {
  res.json({ invoices: db.invoices });
});

app.post("/api/billing/pay", (req, res) => {
  const { invoiceId, method, phoneNumber, reference } = req.body;
  const invoice = db.invoices.find(inv => inv.id === invoiceId);
  if (!invoice) {
    return res.status(404).json({ error: "Factura não encontrada" });
  }

  invoice.status = "PAID";
  invoice.method = method || "M-Pesa";

  res.json({
    success: true,
    message: `Pagamento de ${invoice.amount} processado com sucesso via ${method}!`,
    transactionId: `TX-MZ-${Math.floor(10000000 + Math.random() * 90000000)}`,
    invoice
  });
});

// Support Ticket System
app.get("/api/tickets", (req, res) => {
  res.json({ tickets: db.tickets });
});

app.post("/api/tickets/create", (req, res) => {
  const { title, category, priority, message } = req.body;
  if (!title || !message) {
    return res.status(400).json({ error: "Título e mensagem são obrigatórios" });
  }

  const newTicket = {
    id: `${1043 + db.tickets.length}`,
    title,
    status: "OPEN",
    category: category || "SUPPORT",
    priority: priority || "MEDIUM",
    createdAt: new Date().toISOString().replace("T", " ").substring(0, 16),
    updatedAt: new Date().toISOString().replace("T", " ").substring(0, 16),
    agent: "Atendimento Automático DESART",
    messages: [
      {
        id: `m-${Date.now()}`,
        author: "João Silva",
        role: "customer",
        time: "Hoje",
        text: message
      }
    ]
  };

  db.tickets.unshift(newTicket);
  res.status(201).json({ success: true, ticket: newTicket });
});

app.post("/api/tickets/:id/reply", (req, res) => {
  const { text, author, role } = req.body;
  const ticket = db.tickets.find(t => t.id === req.params.id);
  if (!ticket) return res.status(404).json({ error: "Ticket não encontrado" });

  const newMsg = {
    id: `m-${Date.now()}`,
    author: author || "João Silva",
    role: role || "customer",
    time: "Hoje às " + new Date().toLocaleTimeString().substring(0, 5),
    text
  };

  ticket.messages.push(newMsg);
  ticket.updatedAt = new Date().toISOString().replace("T", " ").substring(0, 16);
  res.json({ success: true, ticket });
});

// Admin command center API
app.get("/api/admin/overview", (req, res) => {
  res.json({
    metrics: db.adminMetrics,
    recentCustomers: [
      { id: "c1", name: "Inhambane Logística Lda", email: "info@inhambanelog.co.mz", services: 5, mrr: "12.500 MT", status: "ACTIVE" },
      { id: "c2", name: "Maputo FinTech Solutions", email: "admin@maputofin.mz", services: 8, mrr: "35.000 MT", status: "ACTIVE" },
      { id: "c3", name: "Beira Agroexport", email: "geral@beiragro.co.mz", services: 3, mrr: "7.500 MT", status: "ACTIVE" },
      { id: "c4", name: "Nampula Distribuição", email: "contacto@nampuladist.co.mz", services: 2, mrr: "3.500 MT", status: "TRIAL" }
    ],
    domainInventory: db.domains,
    mailboxes: db.mailboxes,
    invoices: db.invoices,
    tickets: db.tickets
  });
});

// Gemini AI Assistant endpoint for DESART Digital Ecosystem
app.post("/api/ai/assistant", async (req, res) => {
  try {
    const { prompt, context } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt é obrigatório" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Fallback if no API key is provided
      return res.json({
        text: `Como assistente tecnológico do ecossistema DESART STUDIO, posso auxiliá-lo na configuração de domínios (.co.mz, .mz), parametrização de caixas DESART Mail com criptografia DKIM/SPF, gestão de servidores e suporte técnico.`
      });
    }

    const systemInstruction = `Você é o DESART AI CORE, o assistente de inteligência e arquitetura de infraestrutura digital da DESART STUDIO (Moçambique).
Seu tom é extremamente profissional, tecnológico, polido e confiante (semelhante ao estilo Apple e Stripe para o mercado africano e global).
Você entende profundamente de:
1. Registo e gestão de domínios (.co.mz, .mz, .com, .africa, DNS, MX, SPF, DKIM, DMARC)
2. DESART Mail & Email Profissional corporativo (IMAP 993, SMTP 465, TLS/SSL, 15GB de cota, antispam)
3. Desenvolvimento de websites empresariais e plataformas SaaS (React, Tailwind, Node.js)
4. Sistemas de gestão de negócios, ERPs, POS e integrações de pagamentos locais (M-Pesa, e-Mola, Bancos de Moçambique).
Responda com concisão, clareza técnica e precisão em Português.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini AI error:", error);
    res.status(500).json({
      error: "Erro ao processar consulta de IA",
      details: error.message || "Erro interno"
    });
  }
});

// Setup Vite or static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DESART Digital Ecosystem server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
