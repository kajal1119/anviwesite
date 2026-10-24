"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Search,
  Sparkles,
  ArrowRight,
  Building,
  Home,
  FileCheck2,
  Car,
} from "lucide-react";

interface HeroProps {
  onSearch: (filters: { location: string; type: string; budget: string }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location: selectedLocation,
      type: selectedType,
      budget: selectedBudget,
    });
    // Scroll to properties section smoothly
    const propSection = document.getElementById("properties");
    if (propSection) {
      propSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-8 pb-16">
      {/* Background Hero Image with Optimized Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-township.jpg"
          alt="Anvi Real Estate Lucknow Premium Township Plots and Villas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.38] scale-105 transform hover:scale-100 transition-transform duration-10000"
        />
        {/* Modern Radial Gradient & Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Trust Badges & Details */}
          <div className="lg:col-span-7 text-white space-y-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md text-blue-300 text-xs sm:text-sm font-medium animate-float">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Govt. MSME Reg: UDYAM-UP-50-0230039</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-emerald-300 font-semibold">100% Registry Safe</span>
            </div>

            {/* SEO-Optimized Main H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Lucknow Ke Prime Locations Par Apne{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                Sapno Ka Plot & Ghar
              </span>{" "}
              Payein
            </h1>

            {/* Subheading */}
            <p className="text-slate-200 text-base sm:text-lg sm:leading-relaxed max-w-2xl font-normal">
              Nilmatha, Hariharpur, Amar Shaheed Path aur Sultanpur Road par
              LDA/Zila Panchayat manak anusar verified residential & commercial
              plots. Turant Registry, Dakhil Kharij aur 80% tak Bank Loan suvidha.
            </p>

            {/* Key Assurance Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Turant Registry & Dakhil Kharij</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>30-40 Ft Wide Damar Sadak</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>80% Bank Loan Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Bijli, Paani & Sewer Line</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Gated Colony with Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-amber-300 font-semibold">Free Pick & Drop Visit</span>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#properties"
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base group"
              >
                <span>View Available Plots</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/918004100085?text=Namaste%20Sudish%20Ji%2C%20mujhe%20free%20site%20visit%20book%20karna%20hai."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-slate-100 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call Director: 8004100085</span>
              </a>
            </div>
          </div>

          {/* Right Column: Search Filter Box & Live Stats */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Search Card */}
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/40 text-slate-900">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Find Your Ideal Plot in Lucknow
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct developer pricing • Zero Brokerage
                  </p>
                </div>
                <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl">
                  <Search className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleSearchSubmit} className="space-y-4">
                {/* Location Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    Preferred Location in Lucknow
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  >
                    <option value="all">All Prime Locations (Lucknow)</option>
                    <option value="nilmatha">Nilmatha / Hariharpur (Near Power House)</option>
                    <option value="shaheed-path">Amar Shaheed Path Corridor</option>
                    <option value="sultanpur-road">Sultanpur Road (Kisan Path)</option>
                    <option value="raebareli-road">Raebareli Road (Near SGPGI)</option>
                    <option value="gomti-nagar-ext">Gomti Nagar Extension</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-orange-600" />
                    Property Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  >
                    <option value="all">All Property Categories</option>
                    <option value="residential-plot">Residential Plots (800 - 2400 sq.ft)</option>
                    <option value="luxury-villa">Luxury Duplex Villas (Ready / Under-const.)</option>
                    <option value="commercial-land">Commercial Showroom Land</option>
                    <option value="farmhouse">Farmhouse & Weekend Villa Land</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-emerald-600" />
                    Budget Range
                  </label>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  >
                    <option value="all">All Budgets (₹10 Lakh - ₹1 Crore+)</option>
                    <option value="under-15">Under ₹15 Lakh (Affordable Plots)</option>
                    <option value="15-30">₹15 Lakh - ₹30 Lakh (Prime Residential)</option>
                    <option value="30-60">₹30 Lakh - ₹60 Lakh (Luxury Plots/Villas)</option>
                    <option value="60-plus">₹60 Lakh+ (Commercial & High-end)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-lg shadow-blue-700/25 transition duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Verified Plots</span>
                </button>
              </form>

              {/* Free Pick-up note */}
              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center gap-3 text-xs text-amber-900">
                <Car className="w-5 h-5 text-orange-600 flex-shrink-0 animate-bounce" />
                <span>
                  <strong>Free Site Visit:</strong> Lucknow me kahin se bhi free
                  car pick-up & drop facility uplabdh hai. Call:{" "}
                  <a href="tel:8004100085" className="font-bold underline">
                    8004100085
                  </a>
                </span>
              </div>
            </div>

            {/* Quick Trust Highlights Counter */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">1,200+</div>
                <div className="text-[11px] text-slate-300">Plots Delivered</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                <div className="text-[11px] text-slate-300">Clear Registry</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-blue-400">0%</div>
                <div className="text-[11px] text-slate-300">Brokerage Direct</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
