import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, ArrowRight, Check } from 'lucide-react';
import { AppView } from '../../types';

interface WebsiteShowcaseSectionProps {
  onNavigate: (view: AppView) => void;
}

type DevicePreviewMode = 'desktop' | 'tablet' | 'mobile';

export const WebsiteShowcaseSection: React.FC<WebsiteShowcaseSectionProps> = ({
  onNavigate,
}) => {
  const [activeDevice, setActiveDevice] = useState<DevicePreviewMode>('desktop');

  const webCapabilities = [
    'Landing pages de apresentação comercial',
    'Websites corporativos e institucionais',
    'Websites empresariais personalizados',
    'Portfólios profissionais',
    'Websites de e-commerce',
    'Redesign e modernização de interfaces',
    'Manutenção técnica e atualizações',
  ];

  return (
    <section
      aria-labelledby="website-showcase-heading"
      className="py-24 bg-[#06152B] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4599FF]">
              DESART Web · Desenvolvimento Multi-Dispositivo
            </p>

            <h2
              id="website-showcase-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance"
            >
              Websites que trabalham pelo seu negócio.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Cada projecto é concebido para oferecer leitura clara, navegação fluida e resposta consistente em computadores, tablets e telemóveis.
            </p>

            <ul className="space-y-2.5 pt-2 text-sm text-slate-200">
              {webCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4599FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => onNavigate('criacao-de-websites')}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-lg bg-[#4599FF] hover:bg-[#3185eb] text-white text-sm font-bold transition-colors shadow-lg shadow-[#4599FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Quero criar o meu website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Multi-Device Mockup Showcase */}
          <div className="lg:col-span-7 space-y-5">
            {/* Interactive Device Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div
                role="tablist"
                aria-label="Pré-visualização por dispositivo"
                className="inline-flex items-center gap-1 p-1 rounded-lg bg-[#041022] border border-white/10"
              >
                {[
                  { id: 'desktop' as const, label: 'Desktop', icon: Monitor },
                  { id: 'tablet' as const, label: 'Tablet', icon: Tablet },
                  { id: 'mobile' as const, label: 'Smartphone', icon: Smartphone },
                ].map((device) => {
                  const Icon = device.icon;
                  const active = activeDevice === device.id;
                  return (
                    <button
                      key={device.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveDevice(device.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-[#4599FF] text-white'
                          : 'text-slate-300 hover:text-white hover:bg-[#102B4D]/60'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{device.label}</span>
                    </button>
                  );
                })}
              </div>

              <span className="text-xs text-slate-400">
                Design responsivo · Estrutura semântica
              </span>
            </div>

            {/* Device Stage */}
            <div className="studio-glass rounded-2xl p-5 sm:p-8 min-h-[420px] flex items-center justify-center relative">
              {/* Desktop Mockup */}
              {activeDevice === 'desktop' && (
                <div className="w-full space-y-4">
                  <div className="rounded-xl overflow-hidden border border-white/15 bg-[#041022] shadow-2xl">
                    {/* Browser Chrome */}
                    <div className="px-4 py-2.5 bg-[#071A33] border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                      </div>
                      <span className="text-xs text-slate-400 font-mono truncate max-w-[200px]">
                        https://suaempresa.co.mz
                      </span>
                      <span className="text-[11px] text-[#4599FF] font-semibold">HTTPS / SSL</span>
                    </div>

                    {/* Desktop Preview Screen */}
                    <div className="relative aspect-[16/10] w-full">
                      <img
                        src="/src/assets/images/portfolio_web_platform_1794614230066.jpg"
                        alt="Pré-visualização desktop de website corporativo"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#041022]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                        <span className="font-semibold">Layout Desktop Panorâmico</span>
                        <span className="text-slate-400">1440px Grid</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tablet Mockup */}
              {activeDevice === 'tablet' && (
                <div className="w-full max-w-md mx-auto">
                  <div className="rounded-2xl p-3 bg-[#041022] border-2 border-white/20 shadow-2xl">
                    <div className="w-12 h-1 rounded-full bg-white/20 mx-auto mb-3" />
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#071A33]">
                      <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                        <span className="font-bold font-display">DESART WEB</span>
                        <span className="text-[#4599FF]">Tablet View</span>
                      </div>
                      <div className="p-4 space-y-4">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#041022]">
                          <img
                            src="/src/assets/images/hero_devices_showcase_1794614229276.jpg"
                            alt="Pré-visualização tablet de website responsivo"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-lg bg-[#102B4D]/60 border border-white/10">
                            <div className="font-bold text-white">Navegação Tátil</div>
                            <div className="text-slate-400 mt-0.5">Alvos de toque ≥ 44px</div>
                          </div>
                          <div className="p-3 rounded-lg bg-[#102B4D]/60 border border-white/10">
                            <div className="font-bold text-white">Grelha Fluida</div>
                            <div className="text-slate-400 mt-0.5">Adaptação automática</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Mockup */}
              {activeDevice === 'mobile' && (
                <div className="w-full max-w-[270px] mx-auto">
                  <div className="rounded-[28px] p-3 bg-[#041022] border-2 border-white/25 shadow-2xl">
                    <div className="w-16 h-1.5 rounded-full bg-white/20 mx-auto mb-3" />
                    <div className="rounded-2xl overflow-hidden bg-[#071A33] border border-white/10">
                      <div className="aspect-[9/12] relative">
                        <img
                          src="/src/assets/images/hero_devices_showcase_1794614229276.jpg"
                          alt="Pré-visualização smartphone de website mobile"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-right"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/35 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 space-y-2">
                          <div className="text-xs font-bold text-white font-display">
                            Experiência Mobile-First
                          </div>
                          <p className="text-[11px] text-slate-300 leading-snug">
                            Carregamento leve, leitura legível e botão direto para WhatsApp.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mt-3" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
