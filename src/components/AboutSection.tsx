import React from 'react';
import {
  Heart,
  Smile,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/daycareData';

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'Caring & Nurturing Care',
      text: 'Every child is greeted with warmth, patience, and attentive guidance to ensure they feel valued and emotionally secure.',
      color: 'rose',
    },
    {
      icon: Smile,
      title: 'Learning Through Play',
      text: 'We inspire natural curiosity through hands-on activities, sensory exploration, and creative storytelling.',
      color: 'teal',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Clean Environment',
      text: 'Our facility is designed with child safety, sanitization, and age-appropriate exploration as top priorities.',
      color: 'blue',
    },
    {
      icon: Sparkles,
      title: 'Social & Emotional Growth',
      text: 'We support children in making friendships, learning cooperative play, and developing self-expression.',
      color: 'amber',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage & Experience Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Main Photo */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                  alt="Young children engaging in collaborative play and creative learning at Little Saints Daycare"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center hover:scale-102 transition duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Secondary Photo */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80"
                  alt="Child doing artwork and painting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Quality Callout */}
              <div className="absolute -top-4 -left-4 sm:left-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-100 max-w-[240px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Edmonton Community</div>
                    <div className="text-[11px] text-slate-500">Committed to Local Families</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Hours Strip */}
            <div className="mt-12 sm:mt-14 p-4 rounded-2xl bg-[#F0F7FD] border border-blue-100/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0F4C81] shrink-0" />
                <span className="font-semibold">{BUSINESS_INFO.address}, Edmonton, AB</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F4C81] bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider">
                About Our Center
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Welcome to Little Saints Daycare &amp; OSC
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At <strong>Little Saints Daycare &amp; OSC</strong>, we are dedicated to providing a caring, safe, and welcoming environment where children can learn through play, participate in engaging daily activities, develop social skills, and feel supported at every step of their growth.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We understand that choosing childcare is one of the most important decisions parents make. Our center in Edmonton is designed to feel like a warm extension of home—where children are treated with respect, encouraged to ask questions, explore hands-on materials, and build meaningful friendships that last.
            </p>

            {/* Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-[#0F4C81] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Engaging Daily Activities</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Creative arts, music, storytelling, and sensory discovery.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Supportive Atmosphere</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Gentle guidance fostering self-esteem and independence.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Social Skills Development</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Learning sharing, communication, and empathy with peers.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Family-Focused Approach</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Close communication and true collaboration with parents.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Prompt */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                id="about-contact-btn"
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#0F4C81] hover:bg-[#0c3d68] shadow-sm transition"
              >
                Get in Touch with Us
              </a>
              <a
                id="about-call-link"
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C81] hover:underline"
              >
                <span>Call {BUSINESS_INFO.formattedPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
