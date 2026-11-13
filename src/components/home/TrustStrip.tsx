import React from 'react';
import { Globe, Mail, Laptop, Cpu, LifeBuoy } from 'lucide-react';
import { AppView } from '../../types';

interface TrustStripProps {
  onNavigate: (view: AppView) => void;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ onNavigate }) => {
  const items = [
    { id: 'service-domains' as AppView, name: 'Domains', label: 'Domínios .MZ', icon: Globe, highlight: 'DNS Anycast' },
    { id: 'service-mail' as AppView, name: 'Professional Email', label: 'Email Corporativo', icon: Mail, highlight: '15GB Quota' },
    { id: 'service-websites' as AppView, name: 'Websites', label: 'Websites & Portais', icon: Laptop, highlight: 'Design Moderno' },
    { id: 'service-apps' as AppView, name: 'Business Systems', label: 'Sistemas Empresariais', icon: Cpu, highlight: 'ERP & POS' },
    { id: 'service-support' as AppView, name: 'Support', label: 'Suporte & SLA', icon: LifeBuoy, highlight: '24/7 Atendimento' },
  ];

  return (
    <section className="py-8 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#4599FF] font-display block mb-1">
              INFRAESTRUTURA INTEGRADA
            </span>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight font-display">
              TECNOLOGIA PARA NEGÓCIOS QUE QUEREM CRESCER.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full md:w-auto">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/80 border border-slate-200/60 hover:border-blue-300 transition-all text-left group"
              >
                <div className="p-1.5 rounded-lg bg-white shadow-xs text-slate-700 group-hover:text-[#4599FF] group-hover:bg-blue-50 transition-colors">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight group-hover:text-[#4599FF] transition-colors">{item.name}</div>
                  <div className="text-[10px] text-slate-500">{item.highlight}</div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
