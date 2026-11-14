import React, { useState, useEffect, useCallback } from 'react';
import { AppView } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CinematicHero } from './components/home/CinematicHero';
import { ServicesOverviewSection } from './components/home/ServicesOverviewSection';
import { PortfolioSection } from './components/home/PortfolioSection';
import { WebsiteShowcaseSection } from './components/home/WebsiteShowcaseSection';
import { HostingPricingSection } from './components/home/HostingPricingSection';
import { AboutProcessSection } from './components/home/AboutProcessSection';
import { ContactSection } from './components/home/ContactSection';
import {
  ServicesPage,
  GraphicDesignPage,
  WebDevelopmentPage,
  HostingPage,
  DomainsPage,
  PortfolioPage,
  AboutPage,
  ContactPage,
  PrivacyPage,
} from './components/pages/PublicPages';
import { CustomerPortal } from './components/portal/CustomerPortal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ROUTE_SEO, VIEW_TO_PATH, pathToView } from './data/studioData';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(() =>
    typeof window !== 'undefined' ? pathToView(window.location.pathname) : 'home'
  );

  const navigateTo = useCallback((view: AppView) => {
    const normalizedView: AppView = view === 'website' ? 'home' : view;
    setCurrentView(normalizedView);

    const targetPath = VIEW_TO_PATH[normalizedView] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view: normalizedView }, '', targetPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sync browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(pathToView(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and meta description per route for SEO
  useEffect(() => {
    const seo = ROUTE_SEO[currentView] || ROUTE_SEO.home;
    document.title = seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.description);
    }
  }, [currentView]);

  const isHome = currentView === 'home' || currentView === 'website';

  return (
    <div className="min-h-screen flex flex-col bg-[#071A33] text-white selection:bg-[#4599FF] selection:text-white">
      {/* Global Navigation Bar */}
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Main Content */}
      <main className="flex-1">
        {isHome && (
          <>
            <CinematicHero onNavigate={navigateTo} />
            <ServicesOverviewSection onNavigate={navigateTo} />
            <PortfolioSection onNavigate={navigateTo} />
            <WebsiteShowcaseSection onNavigate={navigateTo} />
            <HostingPricingSection onNavigate={navigateTo} />
            <AboutProcessSection />
            <ContactSection />
          </>
        )}

        {currentView === 'services' && <ServicesPage onNavigate={navigateTo} />}

        {(currentView === 'design-grafico' || currentView === 'service-design') && (
          <GraphicDesignPage onNavigate={navigateTo} />
        )}

        {(currentView === 'criacao-de-websites' ||
          currentView === 'service-websites' ||
          currentView === 'service-apps') && <WebDevelopmentPage onNavigate={navigateTo} />}

        {(currentView === 'hospedagem' ||
          currentView === 'service-support' ||
          currentView === 'service-mail') && <HostingPage onNavigate={navigateTo} />}

        {(currentView === 'dominios' || currentView === 'service-domains') && (
          <DomainsPage onNavigate={navigateTo} />
        )}

        {currentView === 'portfolio' && <PortfolioPage onNavigate={navigateTo} />}

        {currentView === 'sobre' && <AboutPage onNavigate={navigateTo} />}

        {currentView === 'contactos' && <ContactPage onNavigate={navigateTo} />}

        {currentView === 'privacidade' && <PrivacyPage onNavigate={navigateTo} />}

        {/* Preserved Customer Portal */}
        {currentView === 'customer-portal' && <CustomerPortal onNavigate={navigateTo} />}

        {/* Preserved Administration Panel */}
        {currentView === 'admin-dashboard' && <AdminDashboard onNavigate={navigateTo} />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
