import React from 'react';
import { ArrowRight, MessageCircle, Layers } from 'lucide-react';
import { AppView } from '../../types';
import { getWhatsAppUrl } from '../../data/studioData';

interface CinematicHeroProps {
  onNavigate: (view: AppView) => void;
}

const LIGHT_PARTICLES = [
  { top: '18%', left: '12%', size: 'w-1.5 h-1.5', delay: '0s', duration: '8s' },
  { top: '28%', left: '42%', size: 'w-1 h-1', delay: '1.2s', duration: '9s' },
  { top: '68%', left: '16%', size: 'w-2 h-2', delay: '2.4s', duration: '7s' },
  { top: '22%', left: '78%', size: 'w-1.5 h-1.5', delay: '0.8s', duration: '10s' },
  { top: '74%', left: '62%', size: 'w-1 h-1', delay: '1.9s', duration: '8.5s' },
  { top: '46%', left: '88%', size: 'w-1.5 h-1.5', delay: '3.1s', duration: '9.5s' },
  { top: '82%', left: '34%', size: 'w-1.5 h-1.5', delay: '0.4s', duration: '7.5s' },
];

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onNavigate }) => {
  const handleExploreServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('services');
    }
  };

  return (
    <section
      aria-label="Apresentação DESART STUDIO"
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-[#071A33]"
    >
      {/* Layered Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/hero_cinematic_studio_1794614226933.jpg"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45"
        />

        {/* Deep Navy & Electric Blue Atmospheric Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A33]/85 via-[#071A33]/70 to-[#071A33]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A33]/95 via-[#071A33]/75 to-[#071A33]/55" />

        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 studio-grid opacity-35" />

        {/* Soft Blue Energy Waves & Volumetric Glows */}
        <div className="animate-wave-drift absolute -top-24 left-1/4 w-[680px] h-[420px] rounded-full bg-[#4599FF]/16 blur-[130px]" />
        <div
          className="animate-wave-drift absolute bottom-0 right-1/6 w-[540px] h-[340px] rounded-full bg-[#102B4D]/80 blur-[120px]"
          style={{ animationDelay: '-6s' }}
        />

        {/* Animated Blue Light Particles */}
        {LIGHT_PARTICLES.map((particle, idx) => (
          <span
            key={idx}
            aria-hidden="true"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
            className={`animate-particle absolute rounded-full bg-[#4599FF] ${particle.size} shadow-[0_0_12px_rgba(69,153,255,0.8)]`}
          />
        ))}
      </div>

      {/* Foreground Split Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 space-y-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#4599FF]">
              DESART Design · DESART Web · DESART Host
            </p>

            <h1 className="text-[clamp(2.25rem,4vw,3.75rem)] font-extrabold text-white tracking-tight leading-[1.08] font-display text-balance">
              Transformamos ideias em experiências digitais extraordinárias.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Design gráfico, criação de websites e soluções de hospedagem para marcas que querem crescer no mundo digital.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl('Olá DESART STUDIO, gostaria de começar um projecto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-sm font-bold tracking-wide transition-colors shadow-lg shadow-[#4599FF]/25 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Começar um projecto</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#102B4D]/70 hover:bg-[#102B4D] border border-white/15 hover:border-[#4599FF]/50 text-white text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4599FF]"
              >
                <span>Explorar serviços</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Devices & Connectivity Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Subtle 3D Orbital Connectivity Ring Behind Devices */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -inset-6 rounded-2xl border border-[#4599FF]/15 pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-10 -right-10 w-48 h-48 rounded-full border border-[#4599FF]/20 border-dashed animate-orbit-slow pointer-events-none"
              />

              {/* Primary 3D Device Showcase Card */}
              <div className="relative rounded-2xl overflow-hidden studio-glass p-3 sm:p-4">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#041022]">
                  <img
                    src="/src/assets/images/hero_devices_showcase_1794614229276.jpg"
                    alt="Portátil e smartphone apresentando website corporativo e interface mobile responsiva criados pela DESART STUDIO"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/85 via-transparent to-transparent" />

                  {/* Clean Connectivity Caption Inside Frame */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/15">
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <Layers className="w-4 h-4 text-[#4599FF] shrink-0" />
                      <span className="font-medium">
                        Interfaces web responsivas · Identidade visual · Alojamento seguro
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
