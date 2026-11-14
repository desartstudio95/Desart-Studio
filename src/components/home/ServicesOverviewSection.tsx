import React from 'react';
import { ArrowRight, Palette, Laptop, Server } from 'lucide-react';
import { AppView } from '../../types';
import { SERVICE_PILLARS } from '../../data/studioData';

interface ServicesOverviewSectionProps {
  onNavigate: (view: AppView) => void;
}

const PILLAR_ICONS = {
  'design-grafico': Palette,
  'criacao-de-websites': Laptop,
  hospedagem: Server,
} as const;

export const ServicesOverviewSection: React.FC<ServicesOverviewSectionProps> = ({
  onNavigate,
}) => {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="py-24 bg-[#06152B] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4599FF]">
            Áreas de Atuação
          </p>
          <h2
            id="servicos-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance"
          >
            Tudo o que a sua marca precisa para crescer.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Unimos criatividade, tecnologia e estratégia para construir uma presença digital profissional.
          </p>
        </div>

        {/* Three Exclusive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {SERVICE_PILLARS.map((pillar) => {
            const Icon =
              PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS] || Palette;

            return (
              <article
                key={pillar.id}
                className="studio-surface studio-surface-hover rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Identity Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#041022]">
                    <img
                      src={pillar.image}
                      alt={`${pillar.codeName} — ${pillar.categoryLabel}`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/35 to-transparent" />
                    <div className="absolute bottom-3 left-6 flex items-center gap-2 text-xs font-semibold text-slate-200">
                      <span className="text-[#4599FF] font-display">{pillar.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pillar.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight">
                        {pillar.codeName}
                      </h3>
                      <div className="w-10 h-10 rounded-lg bg-[#102B4D] border border-[#4599FF]/25 flex items-center justify-center text-[#4599FF] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>

                    <ul className="pt-4 border-t border-white/10 space-y-2.5 text-sm text-slate-200">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span
                            aria-hidden="true"
                            className="w-1.5 h-1.5 rounded-full bg-[#4599FF] shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 sm:px-7 pb-7 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate(pillar.id)}
                    className="w-full py-3.5 px-5 rounded-lg bg-[#102B4D] hover:bg-[#4599FF] border border-white/10 hover:border-[#4599FF] text-white text-sm font-bold transition-colors flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4599FF]"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
