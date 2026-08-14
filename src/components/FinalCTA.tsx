import React from 'react';
import { Phone, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/daycareData';

interface FinalCTAProps {
  onOpenTourModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTourModal }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0F4C81] via-[#1D6FA5] to-[#0F4C81] text-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-300 border border-white/10">
          <Sparkles className="w-4 h-4" />
          <span>Serving Families in Edmonton, AB</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Ready to Learn More?
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
          Get in touch with Little Saints Daycare &amp; OSC today.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            id="final-cta-contact-btn"
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition shadow-lg shadow-amber-900/20"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            id="final-cta-tour-btn"
            type="button"
            onClick={onOpenTourModal}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-white/15 hover:bg-white/25 border border-white/20 active:scale-[0.98] transition"
          >
            <Calendar className="w-5 h-5 text-amber-300" />
            <span>Book a Facility Tour</span>
          </button>

          <a
            id="final-cta-call-btn"
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white hover:text-amber-200 transition"
          >
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="pt-6 border-t border-white/10 max-w-2xl mx-auto text-xs text-blue-200 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>9425 76 Ave NW, Edmonton, AB T6C 0J8</span>
          <span className="hidden sm:inline">•</span>
          <span>Mon – Fri: 7:00 AM – 6:00 PM</span>
          <span className="hidden sm:inline">•</span>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="text-amber-300 hover:underline font-medium"
          >
            {BUSINESS_INFO.email}
          </a>
        </div>
      </div>
    </section>
  );
};
