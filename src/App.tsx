import React, { useState, useEffect } from 'react';
import { AppView } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { EtherealHero } from './components/home/EtherealHero';
import { InvestmentCalculator } from './components/home/InvestmentCalculator';
import { InfrastructureProof } from './components/home/InfrastructureProof';
import { CustomerPortal } from './components/portal/CustomerPortal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ServiceDetailPage } from './components/services/ServiceDetailPage';
import { AiAssistantModal } from './components/ai/AiAssistantModal';
import { Bot } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('website');
  const [aiModalOpen, setAiModalOpen] = useState(false);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col bg-[#040812] text-slate-100 selection:bg-[#4599FF] selection:text-white">
      
      {/* Global Navbar */}
      <Navbar 
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        onOpenAi={() => setAiModalOpen(true)}
      />

      {/* Main Content Area based on View */}
      <main className="flex-1">
        
        {/* VIEW 1: Main Corporate Website & Ecosystem */}
        {currentView === 'website' && (
          <>
            <EtherealHero 
              onNavigate={(view) => setCurrentView(view)}
              onOpenAi={() => setAiModalOpen(true)}
            />
            <InvestmentCalculator onNavigate={(view) => setCurrentView(view)} />
            <InfrastructureProof onNavigate={(view) => setCurrentView(view)} />
          </>
        )}

        {/* VIEW 2: Dedicated Service Detail Pages */}
        {currentView.startsWith('service-') && (
          <ServiceDetailPage 
            serviceId={currentView}
            onNavigate={(view) => setCurrentView(view)}
            onOpenAi={() => setAiModalOpen(true)}
          />
        )}

        {/* VIEW 3: Customer Portal (clientes.desartstudio.co.mz) */}
        {currentView === 'customer-portal' && (
          <CustomerPortal onNavigate={(view) => setCurrentView(view)} />
        )}

        {/* VIEW 4: Admin Dashboard (admin.desartstudio.co.mz) */}
        {currentView === 'admin-dashboard' && (
          <AdminDashboard onNavigate={(view) => setCurrentView(view)} />
        )}

      </main>

      {/* Global Footer */}
      <Footer onNavigate={(view) => setCurrentView(view)} />

      {/* Persistent Floating AI Core Trigger Button */}
      <button
        onClick={() => setAiModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#0B1528] hover:bg-[#102447] text-white shadow-2xl border border-blue-500/40 flex items-center space-x-2.5 transition-all transform hover:scale-105 group"
        title="Falar com o DESART AI Core"
      >
        <div className="relative">
          <div className="w-2.5 h-2.5 rounded-full bg-[#4599FF] animate-ping absolute -top-0.5 -right-0.5"></div>
          <Bot className="w-5 h-5 text-[#4599FF]" />
        </div>
        <span className="hidden sm:inline text-xs font-bold font-display tracking-wider">
          DESART AI CORE
        </span>
      </button>

      {/* AI Assistant Modal Window */}
      <AiAssistantModal 
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />

    </div>
  );
}
