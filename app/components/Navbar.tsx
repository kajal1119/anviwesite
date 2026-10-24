"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Award, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Verified Plots & Villas", href: "#properties" },
    { name: "Govt. MSME Reg.", href: "#msme-trust" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "EMI Calculator", href: "#emi-calculator" },
    { name: "Director Desk", href: "#director" },
    { name: "Contact & Location", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Trust Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white text-xs py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-medium border border-amber-500/30">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              MSME Reg: UDYAM-UP-50-0230039
            </span>
            <span className="hidden sm:inline text-slate-300">
              | Govt. of India Recognized Real Estate in Lucknow
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 flex-wrap justify-center">
            <a
              href="tel:8004100085"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 8004100085</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="tel:6394103686"
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <span>+91 6394103686</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Nilmatha, Lucknow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5 py-3 border-b border-slate-200"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* SVG Logo Mark modeled after business card */}
            <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-1.5 border border-slate-200 shadow-sm group-hover:scale-105 transition-transform">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full filter drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Blue Roof 'A' */}
                <path
                  d="M48 10L14 74H32L48 40L64 74H82L48 10Z"
                  fill="#1E40AF"
                />
                {/* Window panes inside A */}
                <rect x="42" y="47" width="5" height="5" fill="#F97316" rx="1" />
                <rect x="49" y="47" width="5" height="5" fill="#F97316" rx="1" />
                <rect x="42" y="54" width="5" height="5" fill="#F97316" rx="1" />
                <rect x="49" y="54" width="5" height="5" fill="#F97316" rx="1" />
                {/* Orange 'R' Arc */}
                <path
                  d="M52 24C65 24 75 32 75 44C75 52 69 58 60 60L78 86H62L48 66H42V86H32V24H52ZM50 36H44V54H50C56 54 62 50 62 45C62 40 56 36 50 36Z"
                  fill="#EA580C"
                  opacity="0.95"
                />
                {/* Red Wave Swoosh */}
                <path
                  d="M10 88C30 76 60 98 90 84C70 92 40 82 10 88Z"
                  fill="#DC2626"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 font-sans">
                  ANVI <span className="text-blue-700">REAL</span> <span className="text-orange-600">ESTATE</span>
                </span>
              </div>
              <p className="text-[11px] font-semibold text-emerald-700 tracking-wider uppercase -mt-1 flex items-center gap-1">
                <span>Lucknow</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-normal">Sudish Maurya (Director)</span>
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:8004100085"
              className="px-4 py-2 text-xs md:text-sm font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-full border border-blue-200 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/918004100085?text=Namaste%20Sudish%20Ji%2C%20mujhe%20Anvi%20Real%20Estate%20Lucknow%20me%20plots%20aur%20free%20site%20visit%20ke%20baare%20me%20jankari%20chahiye."
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-4 py-2 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-full shadow-md shadow-orange-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Free Site Visit</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href="tel:8004100085"
                  className="w-full py-2.5 px-4 text-center text-sm font-bold text-blue-900 bg-blue-50 rounded-xl border border-blue-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span>Call Director: +91 8004100085</span>
                </a>
                <a
                  href="https://wa.me/918004100085?text=Namaste%20Sudish%20Ji%2C%20mujhe%20Anvi%20Real%20Estate%20me%20plot%20dekhna%20h."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span>Book Free Site Visit (WhatsApp)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
