import React from 'react';
import { PROCESS_STEPS } from '../../data/studioData';

export const AboutProcessSection: React.FC = () => {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-24 bg-[#06152B] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* About DESART STUDIO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4599FF]">
              Sobre a DESART STUDIO
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance"
            >
              Mais do que design. Criamos presença digital.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              A DESART STUDIO é uma empresa criativa e tecnológica dedicada a ajudar marcas e negócios a construir uma presença digital forte através do design gráfico, desenvolvimento de websites e soluções de hospedagem.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="studio-surface rounded-2xl p-6 space-y-2.5">
              <h3 className="text-base font-bold text-white font-display">Missão</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Capacitar marcas e empresas com identidade visual consistente, websites funcionais e alojamento confiável para comunicarem com credibilidade.
              </p>
            </div>

            <div className="studio-surface rounded-2xl p-6 space-y-2.5">
              <h3 className="text-base font-bold text-white font-display">Visão</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ser uma referência pela qualidade estética, rigor técnico e clareza na entrega de soluções integradas de design, web e hospedagem.
              </p>
            </div>

            <div className="studio-surface rounded-2xl p-6 space-y-2.5">
              <h3 className="text-base font-bold text-white font-display">Valores</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Transparência comercial, compromisso com prazos, respeito pela identidade de cada cliente e suporte técnico acessível.
              </p>
            </div>

            <div className="studio-surface rounded-2xl p-6 space-y-2.5">
              <h3 className="text-base font-bold text-white font-display">
                Abordagem Criativa e Tecnológica
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Combinamos direção visual cuidada com código limpo, design responsivo e infraestrutura DirectAdmin bem configurada do início ao fim.
              </p>
            </div>
          </div>
        </div>

        {/* Project Process (5 Stages) */}
        <div className="pt-16 border-t border-white/10 space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4599FF]">
              Método de Trabalho
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Como transformamos o seu pedido em realidade.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="studio-surface rounded-2xl p-6 flex flex-col justify-between space-y-4"
              >
                <div className="text-sm font-bold text-[#4599FF] font-display tabular-nums">
                  {step.number}.
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white font-display">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
