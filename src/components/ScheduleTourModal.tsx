import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Phone,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Mail,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/daycareData';
import { GOOGLE_SCRIPT_URL } from '../config/contactForm';

interface ScheduleTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleTourModal: React.FC<ScheduleTourModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    program: 'Daycare Program',
    preferredDate: '',
    preferredTime: 'Morning (9:30 AM – 11:30 AM)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setError('Please provide a phone number or email.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const payload = new FormData();
      payload.append('parentName', formData.parentName);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('programInterest', formData.program);
      payload.append('preferredContactTime', formData.preferredTime);
      payload.append(
        'message',
        `Tour Request — Preferred Date: ${formData.preferredDate || 'Not specified'}, Preferred Time: ${formData.preferredTime}.${
          formData.notes ? ` Notes: ${formData.notes}` : ''
        }`
      );
      payload.append('formType', 'Schedule a Tour');

      // Google Apps Script web apps don't return CORS headers, so we send
      // the request in 'no-cors' mode. We can't read the response back,
      // but the submission still goes through and lands in the Sheet/email.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setError('Something went wrong sending your request. Please try again, or call/email us directly.');
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      program: 'Daycare Program',
      preferredDate: '',
      preferredTime: 'Morning (9:30 AM – 11:30 AM)',
      notes: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1D6FA5] p-6 text-white relative">
          <button
            id="close-tour-modal-btn"
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 text-xs font-bold mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>On-Site Visit</span>
          </div>
          <h3 className="font-display text-2xl font-extrabold">Schedule a Facility Tour</h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            Visit Little Saints Daycare &amp; OSC at 9425 76 Ave NW, Edmonton.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center space-y-4 py-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-slate-900">
                Tour Request Received!
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.parentName}</strong>. Our staff will contact you at <strong>{formData.phone || formData.email}</strong> to confirm your scheduled visit time.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0F4C81] hover:bg-[#0c3d68] transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs text-rose-700">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#0F4C81] text-xs sm:text-sm text-slate-800 bg-white"
                  >
                    <option value="Daycare Program">Daycare Program</option>
                    <option value="Out-of-School Care (OSC)">Out-of-School Care (OSC)</option>
                    <option value="Learning Through Play">Learning Through Play</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time of Day
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#0F4C81] text-xs sm:text-sm text-slate-800 bg-white"
                  >
                    <option value="Morning (9:30 AM – 11:30 AM)">Morning (9:30 AM – 11:30 AM)</option>
                    <option value="Afternoon (1:30 PM – 3:30 PM)">Afternoon (1:30 PM – 3:30 PM)</option>
                    <option value="Late Afternoon (3:30 PM – 5:30 PM)">Late Afternoon (3:30 PM – 5:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Questions / Specific Needs (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-[#0F4C81] text-xs sm:text-sm text-slate-900 transition resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-white bg-[#0F4C81] hover:bg-[#0c3d68] transition shadow-md shadow-blue-900/15 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <span>Request Facility Tour</span>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-1 text-xs text-slate-500">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#0F4C81] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <span className="hidden sm:inline text-slate-300">•</span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#0F4C81] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
