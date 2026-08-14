import React, { useState, useEffect } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  Sparkles,
  Calendar,
  Mail,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/daycareData';

interface HeaderProps {
  onOpenTourModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTourModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'programs', 'why-us', 'experience', 'gallery', 'trust', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Daily Life', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar with Business Info */}
      <div className="bg-[#0F4C81] text-white text-xs sm:text-sm py-2 px-4 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-blue-100 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>9425 76 Ave NW, Edmonton, AB</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-blue-100 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Mon – Fri: 7:00 AM – 6:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              id="header-email-link"
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden lg:inline-flex items-center gap-1.5 font-medium text-white hover:text-amber-200 transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full text-xs"
            >
              <Mail className="w-3 h-3 text-cyan-300" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <a
              id="header-call-link"
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-200 transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full text-xs"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>780-777-8047</span>
            </a>
            <button
              id="header-top-tour-btn"
              onClick={onOpenTourModal}
              className="hidden md:inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-3 py-1 rounded-full text-xs transition shadow-sm"
            >
              <Calendar className="w-3 h-3" />
              <span>Book a Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0F4C81] via-[#1D6FA5] to-[#2563EB] flex items-center justify-center text-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-[#0F4C81] transition-colors">
                Little Saints
              </span>
              <span className="text-xs font-semibold text-[#0F4C81] tracking-wider uppercase">
                Daycare &amp; OSC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#0F4C81] bg-blue-50 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-[#0F4C81] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-contact-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0F4C81] hover:bg-[#0c3d68] active:scale-[0.98] transition shadow-sm hover:shadow"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-call-action"
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="p-2 rounded-lg text-[#0F4C81] bg-blue-50 hover:bg-blue-100 transition"
              aria-label="Call Daycare"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-[#0F4C81] hover:bg-blue-50 active:bg-blue-100 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              id="mobile-book-tour-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTourModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Facility Tour</span>
            </button>
            <a
              id="mobile-contact-submit-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#0F4C81] hover:bg-[#0c3d68] transition"
            >
              Contact Us
            </a>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-600">
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-slate-600 hover:text-[#0F4C81] font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#0F4C81]" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 text-slate-600 hover:text-[#0F4C81] font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#0F4C81]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
