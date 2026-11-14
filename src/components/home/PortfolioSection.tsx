import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, Check, MessageCircle } from 'lucide-react';
import { PortfolioProject, AppView } from '../../types';
import { PORTFOLIO_PROJECTS, getWhatsAppUrl } from '../../data/studioData';

interface PortfolioSectionProps {
  onNavigate: (view: AppView) => void;
  showFullHeader?: boolean;
}

const CATEGORIES = [
  'Todos',
  'Design Gráfico',
  'Identidade Visual',
  'Websites',
  'Publicidade',
] as const;

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onNavigate,
  showFullHeader = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('Todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === 'Todos'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-24 bg-[#071A33] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          {showFullHeader && (
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4599FF]">
                Portfólio & Estudos Demonstrativos
              </p>
              <h2
                id="portfolio-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance"
              >
                Trabalho que transforma marcas.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Exemplos demonstrativos das nossas capacidades em design gráfico, identidade visual, publicidade e desenvolvimento web.
              </p>
            </div>
          )}

          {/* Segmented Category Filter */}
          <div
            role="tablist"
            aria-label="Filtrar projectos por categoria"
            className="flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4599FF] ${
                    active
                      ? 'bg-[#4599FF] text-white'
                      : 'bg-[#102B4D]/60 text-slate-300 hover:text-white hover:bg-[#102B4D] border border-white/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modern Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`studio-surface studio-surface-hover rounded-2xl overflow-hidden flex flex-col justify-between group ${
                index === 0 && activeCategory === 'Todos' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="text-left w-full flex-1 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4599FF]"
              >
                <div
                  className={`relative w-full overflow-hidden bg-[#041022] ${
                    index === 0 && activeCategory === 'Todos'
                      ? 'aspect-[16/9]'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/25 to-transparent" />
                </div>

                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="text-[#4599FF] font-semibold">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Projecto Demonstrativo</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display group-hover:text-[#4599FF] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white">
                    <span>Ver detalhes do projecto</span>
                    <ArrowUpRight className="w-4 h-4 text-[#4599FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>

        {/* View All Link if on Home */}
        {showFullHeader && (
          <div className="mt-10 flex justify-end">
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4599FF] hover:text-white transition-colors"
            >
              <span>Abrir página dedicada do Portfólio</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 bg-[#041022]/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#071A33] border border-white/15 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-[#041022]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar detalhes do projecto"
                className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-[#071A33]/90 hover:bg-[#102B4D] text-white border border-white/15 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="text-[#4599FF] font-semibold">{selectedProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Projecto Demonstrativo (Conceito de Estúdio)</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{selectedProject.year}</span>
                </div>
                <h3
                  id="project-modal-title"
                  className="text-2xl sm:text-3xl font-extrabold text-white font-display"
                >
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                  Entregáveis Demonstrados
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-200">
                  {selectedProject.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#4599FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={getWhatsAppUrl(`Olá DESART STUDIO, vi o projecto demonstrativo "${selectedProject.title}" e gostaria de solicitar um orçamento semelhante.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Solicitar projecto semelhante</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-3 rounded-lg bg-[#102B4D] hover:bg-[#163864] text-white text-sm font-semibold transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
