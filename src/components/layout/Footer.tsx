import React from 'react';
import { Phone, Mail, Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';
import { AppView } from '../../types';
import {
  VIEW_TO_PATH,
  WHATSAPP_DISPLAY,
  STUDIO_EMAIL,
  getWhatsAppUrl,
} from '../../data/studioData';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, view: AppView) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <footer className="bg-[#041022] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={VIEW_TO_PATH.home}
              onClick={(e) => handleLink(e, 'home')}
              className="inline-block text-xl font-extrabold tracking-tight text-white font-display"
            >
              DESART STUDIO
            </a>

            <p className="text-sm font-medium text-[#4599FF]">
              Digital solutions. Designed to grow.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Design gráfico, criação de websites e soluções de hospedagem e domínios para marcas que querem crescer com solidez no ambiente digital.
            </p>

            <div className="pt-2 space-y-2 text-sm text-slate-300">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#4599FF] transition-colors w-fit"
              >
                <Phone className="w-4 h-4 text-[#4599FF]" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="flex items-center gap-2.5 hover:text-[#4599FF] transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-[#4599FF]" />
                <span>{STUDIO_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={VIEW_TO_PATH.home}
                  onClick={(e) => handleLink(e, 'home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href={VIEW_TO_PATH['design-grafico']}
                  onClick={(e) => handleLink(e, 'design-grafico')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Design Gráfico
                </a>
              </li>
              <li>
                <a
                  href={VIEW_TO_PATH['criacao-de-websites']}
                  onClick={(e) => handleLink(e, 'criacao-de-websites')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Websites
                </a>
              </li>
              <li>
                <a
                  href={VIEW_TO_PATH.hospedagem}
                  onClick={(e) => handleLink(e, 'hospedagem')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Hospedagem
                </a>
              </li>
              <li>
                <a
                  href={VIEW_TO_PATH.dominios}
                  onClick={(e) => handleLink(e, 'dominios')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Domínios
                </a>
              </li>
              <li>
                <a
                  href={VIEW_TO_PATH.portfolio}
                  onClick={(e) => handleLink(e, 'portfolio')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href={VIEW_TO_PATH.contactos}
                  onClick={(e) => handleLink(e, 'contactos')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contactos
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Client Platform Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white font-display">
                Redes Sociais & Legal
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/desartstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da DESART STUDIO"
                  className="w-10 h-10 rounded-lg bg-[#102B4D]/60 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#4599FF] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/desartstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da DESART STUDIO"
                  className="w-10 h-10 rounded-lg bg-[#102B4D]/60 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#4599FF] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/desartstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da DESART STUDIO"
                  className="w-10 h-10 rounded-lg bg-[#102B4D]/60 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#4599FF] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={VIEW_TO_PATH.privacidade}
                  onClick={(e) => handleLink(e, 'privacidade')}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Área Reservada
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <button
                  type="button"
                  onClick={() => onNavigate('customer-portal')}
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-[#4599FF] transition-colors"
                >
                  <span>Portal do Cliente</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <button
                  type="button"
                  onClick={() => onNavigate('admin-dashboard')}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-[#4599FF] transition-colors"
                >
                  <span>Administração</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DESART STUDIO. Todos os direitos reservados.</p>
          <p>Design Gráfico · Criação de Websites · Hospedagem e Domínios</p>
        </div>
      </div>
    </footer>
  );
};
