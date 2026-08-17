import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Mail,
  User,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/daycareData';
import { ContactFormData } from '../types';
import { GOOGLE_SCRIPT_URL } from '../config/contactForm';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    parentName: '',
    email: '',
    phone: '',
    programInterest: 'Daycare Program',
    preferredContactTime: 'Anytime',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.parentName.trim()) {
      setErrorMessage('Please enter your Parent/Guardian Name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage('Please provide either a phone number or email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter a brief message or question.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = new FormData();
      payload.append('parentName', formData.parentName);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('programInterest', formData.programInterest);
      payload.append('preferredContactTime', formData.preferredContactTime);
      payload.append('message', formData.message);

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
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(
        'Something went wrong sending your message. Please try again, or call/email us directly.'
      );
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      programInterest: 'Daycare Program',
      preferredContactTime: 'Anytime',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F4C81] bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Contact &amp; Location
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch With Little Saints
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We would love to hear from you. Reach out to inquire about daycare openings, out-of-school care, or schedule a tour of our center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Business Details & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            {/* Business Card Info Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C81]">Our Location &amp; Hours</span>
                <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0F4C81] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Address</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                    {BUSINESS_INFO.address}
                    <br />
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.province} {BUSINESS_INFO.postalCode}
                    <br />
                    {BUSINESS_INFO.country}
                  </div>
                  <a
                    id="contact-get-directions-link"
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] hover:underline mt-2"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Phone Number</div>
                  <a
                    id="contact-phone-link"
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="text-base font-bold text-[#0F4C81] hover:underline mt-0.5 block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Call us during business hours</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Address</div>
                  <a
                    id="contact-email-link"
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-[#0F4C81] hover:underline mt-0.5 block break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Send inquiries anytime</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Operating Hours</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {BUSINESS_INFO.days}
                  </div>
                  <div className="text-sm text-slate-700 font-medium">{BUSINESS_INFO.hours}</div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0F4C81]" />
                  <span className="text-xs font-bold text-slate-800">Map: 9425 76 Ave NW, Edmonton</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0F4C81] hover:underline"
                >
                  Open in Maps
                </a>
              </div>
              <div className="relative w-full h-64 bg-slate-200">
                <iframe
                  title="Little Saints Daycare & OSC Location Map"
                  src="https://maps.google.com/maps?q=9425+76+Ave+NW,+Edmonton,+AB+T6C+0J8,+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl">
              <div className="mb-6 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F4C81] uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send a Message</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  We'd Love to Hear From You
                </h3>
                <p className="text-sm text-slate-600">
                  Please fill out the form below and our team will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-100 animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-slate-900">
                    Thank You, {formData.parentName}!
                  </h4>
                  <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding Little Saints Daycare &amp; OSC has been received. Our team will contact you at <strong>{formData.phone || formData.email}</strong> shortly.
                  </p>
                  <div className="pt-3">
                    <button
                      id="contact-send-another-btn"
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-200/70 hover:bg-emerald-200 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs sm:text-sm text-rose-700">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Parent / Guardian Name */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Parent / Guardian Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 transition"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="programInterest"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Program of Interest
                      </label>
                      <select
                        id="programInterest"
                        name="programInterest"
                        value={formData.programInterest}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-white transition"
                      >
                        <option value="Daycare Program">Daycare Program</option>
                        <option value="Out-of-School Care (OSC)">Out-of-School Care (OSC)</option>
                        <option value="Learning Through Play">Learning Through Play</option>
                        <option value="General Question / Tour Request">General Question / Tour Request</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredContactTime"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Best Time to Reach You
                      </label>
                      <select
                        id="preferredContactTime"
                        name="preferredContactTime"
                        value={formData.preferredContactTime}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-white transition"
                      >
                        <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                        <option value="Evening (4:00 PM – 6:00 PM)">Evening (4:00 PM – 6:00 PM)</option>
                        <option value="Anytime">Anytime during business hours</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Message or Inquiry <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-[#0F4C81] hover:bg-[#0c3d68] active:scale-[0.99] transition shadow-md shadow-blue-900/15 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Sparkles className="w-5 h-5 animate-spin" />
                          <span>Sending Your Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2.5">
                      We respect your privacy and will never share your personal information.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
