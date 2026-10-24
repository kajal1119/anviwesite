"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Car,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Nilmatha / Hariharpur",
    size: "1200 sq.ft",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = encodeURIComponent(
      `Namaste Sudish Ji,\nMain Anvi Real Estate website se contact kar raha hoon:\n- Naam: ${formData.name}\n- Mobile: ${formData.phone}\n- Preferred Location: ${formData.location}\n- Plot Size: ${formData.size}\n- Note: ${formData.message || "Free site visit arrange karein"}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/918004100085?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold mb-3">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>Visit Office or Book Site Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sampark Karein Aur Free Site Visit Book Karein
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Director Sudish Maurya ji se seedhe baat karein ya apna visit schedule karein.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-6">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Direct Developer Office
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  ANVI REAL ESTATE
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Udyam Reg: UDYAM-UP-50-0230039 (MSME, Govt. of India)
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm text-white">Office Address</strong>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Hariharpur Power House, Gomti Diary, Nilmatha, Lucknow, Uttar Pradesh - 226002
                    </p>
                  </div>
                </div>

                {/* Mobile Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm text-white">Director Sudish Maurya</strong>
                    <div className="flex flex-col gap-0.5 mt-0.5 text-xs">
                      <a href="tel:8004100085" className="text-emerald-400 hover:underline font-bold">
                        M: +91 8004100085 (Primary / WhatsApp)
                      </a>
                      <a href="tel:6394103686" className="text-slate-300 hover:underline">
                        M: +91 6394103686
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm text-white">Official Email</strong>
                    <a
                      href="mailto:Sudish700maurya@gmail.com"
                      className="text-xs text-blue-300 hover:underline block mt-0.5"
                    >
                      Sudish700maurya@gmail.com
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm text-white">Working Hours</strong>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Open 7 Days: 9:00 AM – 8:00 PM (Site Visits Every Day)
                    </p>
                  </div>
                </div>
              </div>

              {/* Free Pick & Drop Notice */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/30 flex items-center gap-3">
                <Car className="w-6 h-6 text-orange-400 flex-shrink-0 animate-bounce" />
                <div className="text-xs text-slate-200">
                  <strong className="text-amber-300">Free Car Pickup:</strong> Lucknow me kahin se bhi aapke ghar se site visit ki suvidha uplabdh hai.
                </div>
              </div>
            </div>

            {/* Google Map Directions Button */}
            <a
              href="https://maps.google.com/?q=Nilmatha+Lucknow+Uttar+Pradesh+226002"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-between text-xs font-bold text-slate-200 transition"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Open Nilmatha Office in Google Maps</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Instant Response
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Book A Free Site Inspection
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Apni pasand ka plot chunein, hamari team aapse 15 minute ke andar sampark karegi.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950">
                  Dhanyawad! Booking Request Sent
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Aapki inquiry WhatsApp par Director Sudish Maurya ji tak pahunch chuki hai. Hum jald hi aapse call par sampark karenge.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold"
                >
                  Book Another Visit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Aapka Naam (Your Full Name) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Preferred Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white"
                    >
                      <option value="Nilmatha / Hariharpur">Nilmatha / Hariharpur (Near Power House)</option>
                      <option value="Amar Shaheed Path Corridor">Amar Shaheed Path Corridor</option>
                      <option value="Sultanpur Road / Kisan Path">Sultanpur Road / Kisan Path</option>
                      <option value="Raebareli Road">Raebareli Road (Near SGPGI)</option>
                      <option value="Gomti Nagar Extension">Gomti Nagar Extension</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Plot Size Required
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) =>
                        setFormData({ ...formData, size: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white"
                    >
                      <option value="1000 sq.ft (Standard 3BHK Plot)">1000 sq.ft (Standard)</option>
                      <option value="1200 - 1500 sq.ft (Family Size)">1200 - 1500 sq.ft</option>
                      <option value="1800 - 2400 sq.ft (Corner / Big Plot)">1800 - 2400 sq.ft</option>
                      <option value="Commercial / Farmhouse Size">Commercial / Farmhouse</option>
                      <option value="Ready Duplex Villa">Ready Duplex Villa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Any specific requirement or pickup location? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Free car pickup from Alambagh / Charbagh on Sunday at 11 AM..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 text-sm transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Free Site Visit (Send on WhatsApp)</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 pt-1">
                  🔒 Aapki privacy surakshit hai. Hum koi spam call nahi karte. Direct consultation with Director Sudish Maurya.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
