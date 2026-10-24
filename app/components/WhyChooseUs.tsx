"use client";

import {
  ShieldCheck,
  Award,
  TrendingUp,
  Landmark,
  Car,
  Users,
  Compass,
  FileCheck2,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Govt. MSME Certified Enterprise",
      desc: "UDYAM-UP-50-0230039 registration ensures complete regulatory accountability and authentic operations under Ministry of MSME.",
      badge: "Govt. Verified",
    },
    {
      icon: FileCheck2,
      title: "100% Clear Title & Dakhil Kharij",
      desc: "Khatauni verified registry with immediate mutation (Dakhil Kharij) in Lucknow Tehsil. No legal complications, zero dispute.",
      badge: "Legal Safety",
    },
    {
      icon: TrendingUp,
      title: "Fastest Appreciating Corridors",
      desc: "Our plots are situated along Shaheed Path, Nilmatha, and Sultanpur Road which have delivered 20-30% yearly ROI to investors.",
      badge: "High Returns",
    },
    {
      icon: Landmark,
      title: "80% Bank Loan Approved",
      desc: "Smooth loan sanction through nationalized and leading private banks (SBI, HDFC, LIC Housing Finance, PNB).",
      badge: "Easy Finance",
    },
    {
      icon: Compass,
      title: "Modern Gated Infrastructure",
      desc: "30-40 ft wide blacktop damar roads, underground drainage, 24x7 electricity lines, lush parks, and security boundary.",
      badge: "Ready Infrastructure",
    },
    {
      icon: Car,
      title: "Free Pick & Drop Site Visit",
      desc: "We pick you and your family up from anywhere in Lucknow, show you all site layouts, and drop you back free of charge.",
      badge: "Free Service",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs sm:text-sm font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span>Why Choose Anvi Real Estate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lucknow Me Plot Khareedne Ke Liye Sabse Bharosemand Sathhi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Sudish Maurya ke netritva me Anvi Real Estate aapko deta hai 100% legal suraksha, vishwas aur behtareen prime location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-200/70 text-slate-700 group-hover:bg-orange-100 group-hover:text-orange-800 transition">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
                  <span>Learn more about verification</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
