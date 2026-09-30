import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemsAndProcessSection } from './components/ProblemsAndProcessSection';
import { BreathingExercise } from './components/BreathingExercise';
import { TeamProfilePage } from './components/TeamProfilePage';
import { ServicesSection } from './components/ServicesSection';
import { MindAssessmentQuiz } from './components/MindAssessmentQuiz';
import { AiConsultAdvisor } from './components/AiConsultAdvisor';
import { PricingSection } from './components/PricingSection';
import { TestimonialsAndFaqSection } from './components/TestimonialsAndFaqSection';
import { Footer } from './components/Footer';
import { CertificationDetailModal } from './components/CertificationDetailModal';
import { BookingModal } from './components/BookingModal';
import { PaymentModal } from './components/PaymentModal';
import { CertificationProgram } from './types';
import { initMetaPixel, trackMetaEvent } from './utils/metaPixel';

export default function App() {
  const [isProfilePage, setIsProfilePage] = useState(() => window.location.pathname === '/profil');
  const [selectedCertification, setSelectedCertification] = useState<CertificationProgram | null>(null);
  const [activeEcosystemTab, setActiveEcosystemTab] = useState<'development' | 'public_learning' | 'certification' | 'personal'>('development');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);
  const [bookingCategory, setBookingCategory] = useState<string | undefined>(undefined);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentServiceTitle, setPaymentServiceTitle] = useState<string | undefined>(undefined);
  const [paymentCategory, setPaymentCategory] = useState<string | undefined>(undefined);
  const [paymentNominal, setPaymentNominal] = useState<number | string | undefined>(undefined);

  useEffect(() => {
    initMetaPixel();
    const handleRouteChange = () => setIsProfilePage(window.location.pathname === '/profil');
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const handleOpenBooking = (serviceName?: string, categoryName?: string) => {
    trackMetaEvent('Lead', { content_name: serviceName || 'Konsultasi Umum', content_category: categoryName || 'Layanan Umum' });
    setBookingService(serviceName); setBookingCategory(categoryName); setIsBookingOpen(true);
  };
  const handleTrackViewContent = (contentName: string, categoryName: string) => trackMetaEvent('ViewContent', { content_name: contentName, content_category: categoryName });
  const handleCloseBooking = () => { setIsBookingOpen(false); setBookingService(undefined); setBookingCategory(undefined); };
  const handleOpenPayment = (serviceTitle?: string, category?: string, nominal?: number | string) => {
    trackMetaEvent('InitiateCheckout', { content_name: serviceTitle || 'Layanan Transformasi Indonesia', content_category: category || 'Layanan Umum', value: typeof nominal === 'number' ? nominal : undefined, currency: 'IDR' });
    setPaymentServiceTitle(serviceTitle || 'Layanan Transformasi Indonesia'); setPaymentCategory(category || 'Hipnoterapi & Sertifikasi'); setPaymentNominal(nominal); setIsPaymentOpen(true);
  };
  const handleClosePayment = () => { setIsPaymentOpen(false); setPaymentServiceTitle(undefined); setPaymentCategory(undefined); setPaymentNominal(undefined); };
  const handleSelectQuizRecommendation = (category: string, title: string) => {
    trackMetaEvent('Search', { search_string: title, content_category: category });
    if (category.includes('Sertifikasi')) { setActiveEcosystemTab('certification'); handleTrackViewContent(title, category); const el = document.getElementById('ekosistem-layanan') || document.getElementById('sertifikasi'); if (el) el.scrollIntoView({ behavior: 'smooth' }); } else handleOpenBooking(title, category);
  };
  const handleSelectEcosystemTab = (key: 'development' | 'public_learning' | 'certification' | 'personal') => {
    setActiveEcosystemTab(key);
    const tabNames = { development: 'Development Solutions', public_learning: 'Public Learning', certification: 'Professional Certification', personal: 'Personal Transformation' } as const;
    handleTrackViewContent(tabNames[key], 'Ecosystem Tab'); const el = document.getElementById('ekosistem-layanan'); if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white"
    >
      <Navbar onOpenBooking={(service, cat) => handleOpenBooking(service, cat)} onOpenPayment={(service, nominal) => handleOpenPayment(service, 'Layanan Umum', nominal)} activeEcosystemTab={activeEcosystemTab} onSelectEcosystemTab={handleSelectEcosystemTab} onOpenCertificationDetail={(program) => { if (program) handleTrackViewContent(program.title, 'Certification Detail'); setSelectedCertification(program); }} />
      {isProfilePage ? <TeamProfilePage onOpenBooking={() => handleOpenBooking()} /> : <main>
        <Hero onOpenBooking={() => handleOpenBooking()} onOpenPayment={(service, nominal) => handleOpenPayment(service, 'Hipnoterapi Klinis', nominal)} onExploreCertification={() => { setActiveEcosystemTab('certification'); const el = document.getElementById('ekosistem-layanan'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} />
        <ProblemsAndProcessSection onOpenBooking={(service, category) => handleOpenBooking(service, category || 'Hipnoterapi Klinis')} onOpenPayment={(service, category, nominal) => handleOpenPayment(service, category || 'Hipnoterapi Klinis', nominal)} />
        <BreathingExercise />
        <ServicesSection activeEcosystemTab={activeEcosystemTab} onTabChange={(tab) => setActiveEcosystemTab(tab)} onSelectServiceForBooking={(serviceName, category) => handleOpenBooking(serviceName, category)} onSelectServiceForPayment={(serviceName, category, nominal) => handleOpenPayment(serviceName, category, nominal)} onOpenSyllabusModal={(program) => { if (program) handleTrackViewContent(program.title, 'Certification Detail'); setSelectedCertification(program); }} />
        <MindAssessmentQuiz onSelectRecommendation={handleSelectQuizRecommendation} />
        <AiConsultAdvisor onOpenBookingWithQuery={(query) => handleOpenBooking(`Konsultasi: ${query}`, 'Hipnoterapi Klinis')} />
        <PricingSection onSelectPackage={(packageName) => handleOpenBooking(packageName)} onSelectPayment={(packageName, nominal) => handleOpenPayment(packageName, 'Paket Investasi', nominal)} />
        <TestimonialsAndFaqSection />
      </main>}
      <Footer onOpenBooking={(service) => handleOpenBooking(service)} onOpenPayment={(service, nominal) => handleOpenPayment(service, 'Layanan Umum', nominal)} />
      <CertificationDetailModal program={selectedCertification} onClose={() => setSelectedCertification(null)} onSelectBooking={(programName) => { setSelectedCertification(null); handleOpenBooking(`Pendaftaran ${programName}`, 'Sertifikasi NGH'); }} onOpenPayment={(programName, price) => { setSelectedCertification(null); handleOpenPayment(`Pendaftaran ${programName}`, 'Sertifikasi NGH', price); }} />
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} preselectedService={bookingService} preselectedCategory={bookingCategory} onOpenPayment={(service, nominal) => { setIsBookingOpen(false); handleOpenPayment(service || bookingService, bookingCategory, nominal); }} />
      <PaymentModal isOpen={isPaymentOpen} onClose={handleClosePayment} serviceTitle={paymentServiceTitle} serviceCategory={paymentCategory} nominal={paymentNominal} />
    </div>
  );
}
