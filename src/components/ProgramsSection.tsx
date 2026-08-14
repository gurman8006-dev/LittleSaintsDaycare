import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, BookOpen, Clock, Heart } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/daycareData';
import { ProgramItem } from '../types';
import { ProgramDetailModal } from './ProgramDetailModal';

interface ProgramsSectionProps {
  onOpenTourModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenTourModal }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'daycare':
        return <Heart className="w-5 h-5 text-rose-500" />;
      case 'out-of-school-care':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'learning-through-play':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F4C81] bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Our Childcare Programs
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nurturing Programs Designed for Every Stage
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether your child is starting their early childcare journey or needs safe, reliable before and after-school care, Little Saints Daycare &amp; OSC provides a loving, structured environment.
          </p>
        </div>

        {/* 3 Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PROGRAMS_DATA.map((program) => (
            <div
              key={program.id}
              id={`program-card-${program.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                    {getProgramIcon(program.id)}
                    <span>{program.badge}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#0F4C81] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0F4C81] mt-1">{program.tagline}</p>
                  </div>

                  {/* Prompt Required Exact Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    "{program.description}"
                  </p>

                  {/* Quick Feature Checklist */}
                  <div className="space-y-2 pt-1">
                    {program.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  id={`learn-more-${program.id}-btn`}
                  type="button"
                  onClick={() => setSelectedProgram(program)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-[#0F4C81] bg-blue-50 hover:bg-[#0F4C81] hover:text-white transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-100 max-w-2xl mx-auto shadow-xs">
          <p className="text-sm text-slate-600">
            Have questions about program schedules or space availability?
          </p>
          <div className="mt-3 flex flex-wrap justify-center items-center gap-3">
            <a
              id="programs-inquire-btn"
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0F4C81] hover:bg-[#0c3d68] px-4 py-2 rounded-xl transition"
            >
              Inquire About Enrollment
            </a>
            <button
              id="programs-tour-btn"
              onClick={onOpenTourModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl transition"
            >
              Schedule a Facility Tour
            </button>
          </div>
        </div>
      </div>

      {/* Program Detail Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenTourModal={onOpenTourModal}
      />
    </section>
  );
};
