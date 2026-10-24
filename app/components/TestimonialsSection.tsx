"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Subedar Major Rajesh Kumar Singh",
      role: "Retd. Army Personnel, Lucknow Cantt",
      text: "Sudish Maurya ji ne mujhe Nilmatha me 1,500 sq.ft ka plot dilwaya. Paperwork itna clean tha ki same week me registry ho gayi aur time par Dakhil Kharij mil gaya. Fauj ke logo ke liye vishwas sabse bada factor hai aur Anvi Real Estate ne pura vishwas jeeta.",
      plot: "1,500 sq.ft Plot • Nilmatha",
      stars: 5,
    },
    {
      name: "Dr. Neha Verma & Amit Verma",
      role: "Medical Consultant, Gomti Nagar",
      text: "Ek doctor hone ke naate mere paas Tehsil ya land verification ke liye samay nahi tha. Anvi Real Estate ka MSME certificate aur Director Sudish ji ki transparency dekh kar humne Shaheed Path ke paas villa plot liya. SBI se 80% loan bhi aasan kisto me sanction ho gaya.",
      plot: "1,800 sq.ft Plot • Shaheed Path Corridor",
      stars: 5,
    },
    {
      name: "Vipin Sharma",
      role: "Retail Businessman, Aminabad",
      text: "Commercial investment ke liye Sultanpur highway junction par showroom plot khareeda. Highway connectivity zabardast hai aur 1 saal me hi rate me 25% ka uchaal aaya hai. Sudish Maurya ji direct deal karte hain, koi beech ka broker jhanjhat nahi.",
      plot: "2,400 sq.ft Commercial Land • Sultanpur Road",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold mb-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lucknow Ke Khushhal Parivaaro Ka Vishwas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Janiye un parivaaron se jinhone Anvi Real Estate ke sath apne sapno ka aashiyana basaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {rev.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{rev.role}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                  {rev.plot}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
