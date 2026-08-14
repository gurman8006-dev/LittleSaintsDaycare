import React, { useState } from 'react';
import {
  Palette,
  Boxes,
  Sun,
  BookOpen,
  Lightbulb,
  Users2,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { DAILY_EXPERIENCES } from '../data/daycareData';
import { DailyExperienceItem } from '../types';

export const DailyExperience: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(DAILY_EXPERIENCES[0].id);

  const activeItem: DailyExperienceItem =
    DAILY_EXPERIENCES.find((item) => item.id === activeTabId) || DAILY_EXPERIENCES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-4 h-4" />;
      case 'Boxes':
        return <Boxes className="w-4 h-4" />;
      case 'Sun':
        return <Sun className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      case 'Lightbulb':
        return <Lightbulb className="w-4 h-4" />;
      case 'Users2':
        return <Users2 className="w-4 h-4" />;
      default:
        return <Palette className="w-4 h-4" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F4C81] bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Everyday Exploration
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Daily Experiences &amp; Activities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every day is filled with opportunities for laughter, imagination, and learning. Explore examples of the activities and experiences children enjoy at Little Saints Daycare &amp; OSC.
          </p>
        </div>

        {/* Clear Notice / Transparency Banner */}
        <div className="mb-10 max-w-3xl mx-auto bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-amber-900 text-xs sm:text-sm shadow-xs">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Representative Experiences:</span> The activities shown below are examples of our varied play-based and educational experiences designed to stimulate children throughout the week. Daily routines adapt dynamically to weather, age groups, children’s emerging interests, and individual energy levels.
          </div>
        </div>

        {/* Interactive Experience Explorer */}
        {/* Tab Navigation for Desktop / Mobile Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {DAILY_EXPERIENCES.map((item) => {
            const isActive = item.id === activeTabId;
            return (
              <button
                key={item.id}
                id={`exp-tab-${item.id}`}
                type="button"
                onClick={() => setActiveTabId(item.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0F4C81] text-white shadow-md shadow-blue-900/10 scale-102'
                    : 'bg-white text-slate-700 hover:text-[#0F4C81] hover:bg-slate-50 border border-slate-200/80 shadow-xs'
                }`}
              >
                {getIcon(item.icon)}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Item Display Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0F4C81] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeItem.subtitle}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Elements &amp; Developmental Benefits
                </h4>
                <div className="space-y-2.5">
                  {activeItem.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-slate-50 group">
                <img
                  src={activeItem.image}
                  alt={activeItem.imageAlt}
                  className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{activeItem.title}</span>
                    <span className="text-[11px] font-semibold text-[#0F4C81] bg-blue-50 px-2 py-0.5 rounded-full">
                      Example Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Grid Quick Overview Cards for Mobile & At-a-Glance Scanning */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {DAILY_EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveTabId(exp.id)}
              className={`p-3.5 rounded-2xl text-left border transition text-xs font-medium flex flex-col justify-between gap-2 h-28 ${
                activeTabId === exp.id
                  ? 'bg-blue-50 border-[#0F4C81] text-[#0F4C81] ring-2 ring-[#0F4C81]/20'
                  : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#0F4C81]">
                {getIcon(exp.icon)}
              </div>
              <span className="font-bold leading-tight">{exp.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
