import React from 'react';
import {
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Heart,
  Sparkles,
  PhoneCall,
  CalendarCheck,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/daycareData';

interface HeroProps {
  onOpenTourModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTourModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FD] via-[#FAF9F6] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100"
    >
      {/* Soft background decorative blur circles */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-0 w-[400px] h-[300px] bg-emerald-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-blue-100 shadow-xs text-xs sm:text-sm font-medium text-[#0F4C81]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold">Welcoming New Enrollments in Edmonton</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Where Little Hearts <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] via-[#1D6FA5] to-[#0D9488]">
                  Learn, Grow &amp; Shine
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                A safe, caring, and welcoming environment where children can learn, play, build friendships, and grow.
              </p>
            </div>

            {/* Quick Location & Schedule Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0F4C81] shrink-0">
                  <MapPin className="w-5 h-5 text-[#0F4C81]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Location</div>
                  <div className="text-sm font-bold text-slate-800">Edmonton, Alberta</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Monday – Friday</div>
                  <div className="text-sm font-bold text-slate-800">7:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-contact-btn"
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#0F4C81] hover:bg-[#0c3d68] shadow-md shadow-blue-900/15 hover:shadow-lg transition active:scale-[0.98]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-explore-programs-btn"
                type="button"
                onClick={() => scrollTo('programs')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs transition active:scale-[0.98]"
              >
                <span>Explore Our Programs</span>
              </button>

              <button
                id="hero-book-tour-link-btn"
                type="button"
                onClick={onOpenTourModal}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F4C81] hover:text-[#0c3d68] py-2 px-3 hover:bg-blue-50 rounded-lg transition"
              >
                <CalendarCheck className="w-4 h-4 text-amber-500" />
                <span>Book a Facility Tour</span>
              </button>
            </div>

            {/* Value Indicators */}
            <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Safe &amp; Clean Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Nurturing Educators</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Play-Based Learning</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Main Daycare Image with Styled Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80"
                alt="Children happily engaging in colorful creative play at Little Saints Daycare"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

              {/* In-Image Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#0F4C81] shrink-0">
                    <Heart className="w-5 h-5 text-[#0F4C81] fill-[#0F4C81]/20" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Our Promise</div>
                    <div className="text-sm font-bold text-slate-900">A Welcoming Home Away From Home</div>
                  </div>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="hidden sm:inline-flex items-center gap-1.5 bg-[#0F4C81] text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-[#0c3d68] transition"
                  title="Call Little Saints Daycare"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Floating Supporting Mini Badge Top Left */}
            <div className="absolute -top-4 -left-4 bg-white py-2 px-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 animate-pulse-subtle">
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="text-xs font-bold text-slate-800">Daycare &amp; OSC in Edmonton</span>
            </div>

            {/* Floating Supporting Mini Badge Bottom Right */}
            <div className="hidden sm:flex absolute -bottom-3 -right-3 bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-slate-500 font-medium leading-none">Ages Served</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">Infants to School-Age</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
