import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Layers, 
  Box, 
  Image as ImageIcon, 
  ArrowRight, 
  Award, 
  Check 
} from 'lucide-react';
import { AppView } from '../../types';

interface DesignSectionProps {
  onNavigate: (view: AppView) => void;
}

export const DesignSection: React.FC<DesignSectionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const portfolioItems = [
    {
      title: 'Brand Identity & Manual de Normas',
      client: 'Nampula Capital & Investimentos',
      category: 'BRANDING',
      desc: 'Sistema visual completo com tipografia proprietária, paleta institucional e regras de aplicação.',
      gradient: 'from-[#0B1528] via-[#102447] to-[#1e3a8a]',
      tag: 'Identidade Visual',
      aspect: 'col-span-1 md:col-span-2'
    },
    {
      title: 'Packaging & Embalagens Premium',
      client: 'Zambeze Organic Coffee',
      category: 'PACKAGING',
      desc: 'Embalagens sustentáveis com acabamentos em verniz localizado e foil metálico.',
      gradient: 'from-amber-900/80 via-amber-800 to-slate-900',
      tag: 'Packaging',
      aspect: 'col-span-1'
    },
    {
      title: 'Logótipo & Símbolo Tecnológico',
      client: 'Maputo Cloud Logistics',
      category: 'LOGO',
      desc: 'Monograma dinâmico desenhado sobre proporção áurea com alta escalabilidade digital.',
      gradient: 'from-blue-700 via-sky-600 to-[#0B1528]',
      tag: 'Logo Design',
      aspect: 'col-span-1'
    },
    {
      title: 'Campanhas Publicitárias & Social Media',
      client: 'Banco & FinTech Moçambique',
      category: 'ADVERTISING',
      desc: 'Key visuals de alto impacto para outdoors em Maputo, imprensa e criativos digitais.',
      gradient: 'from-slate-900 via-blue-950 to-indigo-900',
      tag: 'Advertising',
      aspect: 'col-span-1 md:col-span-2'
    },
    {
      title: 'Materiais Corporativos & Relatórios',
      client: 'PetroGás Moçambique',
      category: 'CORPORATE',
      desc: 'Relatório anual integrado com infografia de dados, encadernação de luxo e versão digital.',
      gradient: 'from-slate-800 via-slate-900 to-black',
      tag: 'Corporate Print',
      aspect: 'col-span-1'
    }
  ];

  const filteredItems = activeCategory === 'ALL'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#4599FF] font-display">
            <Palette className="w-3.5 h-3.5" />
            <span>ESTÚDIO DE DESIGN & IDENTIDADE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            DESIGN QUE TORNA <br />
            <span className="text-[#4599FF]">A SUA MARCA INESQUECÍVEL.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Unimos rigor editorial, harmonia visual e posicionamento estratégico para transformar marcas em líderes indiscutíveis nos seus mercados.
          </p>

          {/* Filter Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'ALL', label: 'Todos os Projetos' },
              { id: 'BRANDING', label: 'Brand Identity' },
              { id: 'LOGO', label: 'Logótipos' },
              { id: 'PACKAGING', label: 'Embalagens' },
              { id: 'ADVERTISING', label: 'Publicidade' },
              { id: 'CORPORATE', label: 'Materiais Corporativos' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.aspect} rounded-3xl p-7 text-white bg-gradient-to-br ${item.gradient} shadow-xl relative overflow-hidden group cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl`}
            >
              {/* Subtle glass overlay texture */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/15 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {item.client}
                  </span>
                </div>

                <div className="mt-8 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold font-display leading-tight group-hover:text-sky-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#4599FF]">
                  <span className="text-white group-hover:text-[#4599FF] transition-colors">Ver Estudo de Caso</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900 font-display">Precisa de renovar a identidade da sua empresa?</h4>
            <p className="text-xs text-slate-600 mt-1">Converse com os nossos diretores de arte para uma proposta sob medida.</p>
          </div>
          <button
            onClick={() => onNavigate('service-design')}
            className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-[#4599FF] transition-colors shadow-md shrink-0"
          >
            SOLICITAR PROPOSTA DE DESIGN
          </button>
        </div>

      </div>
    </section>
  );
};
