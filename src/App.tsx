import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutInspection } from './components/AboutInspection';
import { PaintAndStructure } from './components/PaintAndStructure';
import { ServicesIncluded } from './components/ServicesIncluded';
import { Credibility } from './components/Credibility';
import { GoogleOfficialCertificate } from './components/GoogleOfficialCertificate';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { LocalServicePelotas } from './components/LocalServicePelotas';
import { BusinessOpportunity } from './components/BusinessOpportunity';
import { FAQAndSEO } from './components/FAQAndSEO';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-600 selection:text-white relative">
      {/* 1. Header Fixo */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section (primeira dobra) */}
        <Hero />

        {/* 3. Sobre a Vistoria */}
        <AboutInspection />

        {/* 4. Análise de Pintura e Estrutura */}
        <PaintAndStructure />

        {/* 5. Serviços Inclusos (12 itens) */}
        <ServicesIncluded />

        {/* 6. Credibilidade (Os melhores vistoriadores do Brasil & Jaleco com Logo) */}
        <Credibility />

        {/* 7. Certificado Oficial Google 5.0 (Avaliações verificadas de Pelotas) */}
        <GoogleOfficialCertificate />

        {/* 8. Preços e Opções (Cards com fotos completas sem corte e MAIS PROCURADO) */}
        <Pricing />

        {/* 8. Como Funciona (4 passos numerados) */}
        <HowItWorks />

        {/* 9. Atendimento Rápido (Unidade Pelotas - RS) */}
        <LocalServicePelotas />

        {/* 10. Expansão / Oportunidade de Negócio */}
        <BusinessOpportunity />

        {/* 11. FAQ & SEO Local Pelotas */}
        <FAQAndSEO />

        {/* 12. Contato & Agendamento */}
        <ContactSection />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating Action Elements (WhatsApp, Instagram, Assistente Virtual) */}
      <FloatingElements />
    </div>
  );
}
