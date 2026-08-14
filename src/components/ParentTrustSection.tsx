import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  MessageCircleHeart,
  Sparkles,
  Phone,
} from 'lucide-react';
import { PARENT_TRUST_POINTS, BUSINESS_INFO } from '../data/daycareData';

export const ParentTrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-16 sm:py-20 lg:py-28 bg-[#F0F7FD] border-b border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F4C81] bg-white px-3.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 shadow-2xs">
                Parent Peace of Mind
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                A Place Where Children Can Feel Safe, Supported &amp; Welcome
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              At Little Saints Daycare &amp; OSC, we recognize that trust is the foundation of exceptional childcare. Our team is wholeheartedly committed to creating a positive, nurturing environment where every child feels secure, respected, and enthusiastic about coming through our doors each morning.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We work hand-in-hand with Edmonton families to foster an inclusive community. From consistent routines to warm daily encouragement, we ensure your child experiences joyful learning, builds genuine friendships, and thrives with confidence.
            </p>

            {/* 4 Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {PARENT_TRUST_POINTS.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-blue-100/80 shadow-xs space-y-2 hover:shadow-md transition"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0F4C81] flex items-center justify-center font-bold text-xs">
                    {idx === 0 && <ShieldCheck className="w-4 h-4 text-[#0F4C81]" />}
                    {idx === 1 && <MessageCircleHeart className="w-4 h-4 text-emerald-600" />}
                    {idx === 2 && <HeartHandshake className="w-4 h-4 text-amber-500" />}
                    {idx === 3 && <Sparkles className="w-4 h-4 text-indigo-600" />}
                  </div>
                  <h4 className="font-display text-sm font-bold text-slate-900">{point.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>

            {/* Direct Connect Link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                id="trust-call-btn"
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#0F4C81] hover:bg-[#0c3d68] shadow-sm transition"
              >
                <Phone className="w-4 h-4" />
                <span>Speak With Our Team ({BUSINESS_INFO.phone})</span>
              </a>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                  alt="Supportive and welcoming learning environment at Little Saints Daycare"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Testimonial/Trust Banner */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-100 shadow-xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Dedicated to Edmonton Families</h5>
                    <p className="text-xs text-slate-600">
                      Located at 9425 76 Ave NW | Open Monday–Friday, 7:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
