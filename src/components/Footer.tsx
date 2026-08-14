import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ArrowUp,
  Mail,
  ShieldCheck,
  Heart,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/daycareData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Daily Experience', href: '#experience' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Parent Trust', href: '#trust' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0F4C81] to-[#2563EB] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <span className="font-display text-xl font-bold text-white tracking-tight">
                Little Saints Daycare &amp; OSC
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A premier, safe, and nurturing daycare in Edmonton offering full-time daycare, out of school care in Edmonton, and play-based early childhood learning.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Safe Environment</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>Caring Atmosphere</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:underline transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business Information */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Location &amp; Operating Hours
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>{BUSINESS_INFO.name}</strong>
                  <br />
                  {BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.province}{' '}
                  {BUSINESS_INFO.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="font-bold text-white hover:text-amber-300 transition"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Monday – Friday | 7:00 AM – 6:00 PM</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                id="footer-google-maps-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:underline"
              >
                <span>Find Us on Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Local Edmonton SEO Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {currentYear} <strong>Little Saints Daycare &amp; OSC</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600">
              Edmonton Daycare • Out of School Care Edmonton • Early Childhood Learning in Alberta
            </p>
          </div>

          <button
            id="footer-back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl transition"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
