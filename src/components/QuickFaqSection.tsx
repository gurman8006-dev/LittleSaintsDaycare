import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MapPin, Mail } from 'lucide-react';
import { QUICK_FAQS, BUSINESS_INFO } from '../data/daycareData';

export const QuickFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F4C81] bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Parent Inquiries
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear information for families considering Little Saints Daycare &amp; OSC.
          </p>
        </div>

        <div className="space-y-3.5">
          {QUICK_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF9F6] border-blue-200 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-900 text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-[#0F4C81]' : 'text-slate-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0F4C81]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note */}
        <div className="mt-8 text-center p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-1.5 font-medium">
            <Phone className="w-4 h-4 text-[#0F4C81]" />
            <span>Call us at <strong>{BUSINESS_INFO.phone}</strong></span>
          </div>
          <div className="hidden sm:block text-slate-300">•</div>
          <div className="flex items-center gap-1.5 font-medium">
            <Mail className="w-4 h-4 text-[#0F4C81]" />
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#0F4C81] hover:underline font-bold">
              {BUSINESS_INFO.email}
            </a>
          </div>
          <div className="hidden sm:block text-slate-300">•</div>
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-4 h-4 text-[#0F4C81]" />
            <span><strong>{BUSINESS_INFO.address}, Edmonton</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
