"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Award,
  ShieldCheck,
  ChevronRight,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-1 shadow">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M48 10L14 74H32L48 40L64 74H82L48 10Z" fill="#1E40AF" />
                  <rect x="42" y="47" width="5" height="5" fill="#F97316" rx="1" />
                  <rect x="49" y="47" width="5" height="5" fill="#F97316" rx="1" />
                  <path
                    d="M52 24C65 24 75 32 75 44C75 52 69 58 60 60L78 86H62L48 66H42V86H32V24H52ZM50 36H44V54H50C56 54 62 50 62 45C62 40 56 36 50 36Z"
                    fill="#EA580C"
                  />
                  <path d="M10 88C30 76 60 98 90 84C70 92 40 82 10 88Z" fill="#DC2626" />
                </svg>
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">
                  ANVI <span className="text-blue-500">REAL</span> <span className="text-orange-500">ESTATE</span>
                </span>
                <span className="block text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                  Lucknow • Sudish Maurya (Director)
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Anvi Real Estate Lucknow is a trusted, Govt. of India MSME Registered
              enterprise offering LDA & Zila Panchayat compliant residential plots,
              luxury duplex villas, and commercial property with immediate registry and spot possession.
            </p>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
              <span className="text-amber-400 font-bold block flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                MSME Reg: UDYAM-UP-50-0230039
              </span>
              <span className="text-slate-400 block mt-0.5">
                Ministry of Micro, Small and Medium Enterprises, Govt. of India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#properties" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Verified Plots</span>
                </a>
              </li>
              <li>
                <a href="#msme-trust" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>MSME Verification</span>
                </a>
              </li>
              <li>
                <a href="#emi-calculator" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>EMI Calculator</span>
                </a>
              </li>
              <li>
                <a href="#director" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Director&apos;s Desk</span>
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Why Choose Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Book Free Visit</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Lucknow SEO Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Popular Lucknow Areas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#properties" className="hover:text-white transition">
                  • Plots in Nilmatha & Hariharpur
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition">
                  • Residential Plots near Shaheed Path
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition">
                  • Sultanpur Road Plots near Kisan Path
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition">
                  • Raebareli Road Plots near SGPGI
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition">
                  • Commercial Land & Showroom Plots
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition">
                  • 3BHK Luxury Duplex Villas Lucknow
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Official Head Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>
                  Hariharpur Power House, Gomti Diary, Nilmatha, Lucknow - 226002 (UP)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:8004100085" className="hover:text-emerald-400 font-bold">
                  +91 8004100085 (Primary)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:6394103686" className="hover:text-emerald-400">
                  +91 6394103686
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:Sudish700maurya@gmail.com"
                  className="hover:text-blue-400 break-all"
                >
                  Sudish700maurya@gmail.com
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-500">
                Timings: Mon – Sun: 9:00 AM – 8:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center md:text-left">
          <p>
            © 2025–2026 Anvi Real Estate Lucknow. All rights reserved.
            MSME Reg: UDYAM-UP-50-0230039.
          </p>

          <p className="flex items-center justify-center gap-1 text-slate-400">
            <span>Crafted for</span>
            <span className="font-bold text-slate-200">Sudish Maurya (Director)</span>
            <span>with transparency & trust</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
