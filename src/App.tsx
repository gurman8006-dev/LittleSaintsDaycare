import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DailyExperience } from './components/DailyExperience';
import { GallerySection } from './components/GallerySection';
import { ParentTrustSection } from './components/ParentTrustSection';
import { QuickFaqSection } from './components/QuickFaqSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ScheduleTourModal } from './components/ScheduleTourModal';

export default function App() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 flex flex-col selection:bg-blue-100 selection:text-[#0F4C81]">
      {/* Sticky Header */}
      <Header onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Main Sections */}
      <main className="grow">
        <Hero onOpenTourModal={() => setIsTourModalOpen(true)} />
        <AboutSection />
        <ProgramsSection onOpenTourModal={() => setIsTourModalOpen(true)} />
        <WhyChooseUs />
        <DailyExperience />
        <GallerySection />
        <ParentTrustSection />
        <QuickFaqSection />
        <ContactSection />
        <FinalCTA onOpenTourModal={() => setIsTourModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ScheduleTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </div>
  );
}
