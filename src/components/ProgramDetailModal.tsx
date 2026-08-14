import React from 'react';
import { X, Check, ArrowRight, Phone, Calendar } from 'lucide-react';
import { ProgramItem } from '../types';
import { BUSINESS_INFO } from '../data/daycareData';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onOpenTourModal: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onOpenTourModal,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Photo & Close Button */}
        <div className="relative h-48 sm:h-56 w-full bg-slate-100">
          <img
            src={program.image}
            alt={program.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
          
          <button
            id="close-program-modal-btn"
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 transition shadow-md focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-900 mb-1.5 shadow-sm">
              {program.badge}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
              {program.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">{program.tagline}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Primary Statement */}
          <div className="p-4 rounded-2xl bg-[#F0F7FD] border border-blue-100 text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
            "{program.description}"
          </div>

          {/* Long Description */}
          <div className="space-y-2">
            <h4 className="font-display text-base font-bold text-slate-900">About this Program</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {program.longDescription}
            </p>
          </div>

          {/* Key Program Features */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold text-slate-900">What Children Experience</h4>
            <div className="grid grid-cols-1 gap-2.5">
              {program.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F4C81]">Program Highlights</div>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
              {program.keyHighlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F4C81] hover:underline"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.formattedPhone}</span>
          </a>

          <div className="flex items-center gap-2.5">
            <button
              id="program-modal-tour-btn"
              type="button"
              onClick={() => {
                onClose();
                onOpenTourModal();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-amber-400 hover:bg-amber-300 transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Tour</span>
            </button>
            <a
              id="program-modal-contact-btn"
              href="#contact"
              onClick={() => onClose()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0F4C81] hover:bg-[#0c3d68] transition"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
