import React from 'react';
import {
  ShieldCheck,
  Heart,
  Sparkles,
  Smile,
  Users,
  Home,
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/daycareData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-teal-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-indigo-600" />;
      case 'Home':
        return <Home className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 border-blue-100';
      case 'rose':
        return 'bg-rose-50 border-rose-100';
      case 'amber':
        return 'bg-amber-50 border-amber-100';
      case 'teal':
        return 'bg-teal-50 border-teal-100';
      case 'indigo':
        return 'bg-indigo-50 border-indigo-100';
      case 'emerald':
        return 'bg-emerald-50 border-emerald-100';
      default:
        return 'bg-slate-50 border-slate-100';
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F4C81] bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Why Parents Trust Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Little Saints Daycare &amp; OSC
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We are committed to delivering the highest quality childcare experience, pairing safety and structure with heart and warmth.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.id}
              id={`why-choose-${item.id}`}
              className="bg-[#FAF9F6] rounded-3xl p-7 sm:p-8 border border-slate-100 hover:border-blue-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Modern Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${getBgColor(
                    item.accentColor
                  )} shadow-xs group-hover:scale-105 transition-transform`}
                >
                  {getIcon(item.iconName, item.accentColor)}
                </div>

                {/* Card Title */}
                <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#0F4C81] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-200/50 flex items-center text-xs font-semibold text-[#0F4C81]">
                <span>Our Core Value</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Trust Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F0F7FD] border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0F4C81] shadow-xs shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#0F4C81]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Safety &amp; Peace of Mind First</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Operating Monday to Friday, 7:00 AM to 6:00 PM at 9425 76 Ave NW, Edmonton, AB.
              </p>
            </div>
          </div>

          <a
            id="why-us-contact-cta"
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0F4C81] hover:bg-[#0c3d68] shadow-sm transition"
          >
            Connect With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};
