"use client";

import { Award, ShieldCheck, CheckCircle2, FileCheck, Building2, ExternalLink, HelpCircle } from "lucide-react";

export default function GovtTrustSection() {
  return (
    <section id="msme-trust" className="py-20 bg-gradient-to-b from-white to-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Certified & Transparent Deals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Government of India MSME Registered Enterprise
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real estate me vishwas aur legal suraksha sabse pehle. Anvi Real Estate
            Lucknow poori tarah Bharat Sarkar ke Ministry of MSME se pramanit hai.
          </p>
        </div>

        {/* Certificate Feature Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Certificate Details & Metadata Badge */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                        Official Government Verification
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        ANVI REAL ESTATE LUCKNOW
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">
                    ACTIVE & VERIFIED
                  </span>
                </div>

                <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                  Registered under the Ministry of Micro, Small and Medium
                  Enterprises, Government of India (Udyam Registration). We strictly
                  adhere to real estate compliance, clear land titling, immediate
                  possession, and verified legal documentation in Lucknow.
                </p>

                {/* Grid of Verified Records from Certificate */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <span className="text-xs text-slate-500 font-medium">Udyam Registration No.</span>
                    <p className="text-sm font-bold text-blue-900 mt-0.5 tracking-wide">
                      UDYAM-UP-50-0230039
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <span className="text-xs text-slate-500 font-medium">Enterprise Type & Activity</span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">
                      Micro Enterprise (Services)
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <span className="text-xs text-slate-500 font-medium">NIC 5 Digit Code</span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">
                      68100 - Real Estate Activities
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <span className="text-xs text-slate-500 font-medium">Official Contact & Email</span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">
                      Sudish700maurya@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Address Bar from Certificate */}
              <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-200/60 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-blue-950 font-semibold">Registered Office Address:</strong>{" "}
                  Hariharpur Power House, Gomti Diary, Nilmatha, Lucknow, Uttar Pradesh - 226002
                </div>
              </div>
            </div>

            {/* Right: The 5 Pillars of Legal Security */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-6 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-4">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>ANVI REAL ESTATE LEGAL PROMISE</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-6">
                  Aapki Mehnat Ki Kamayi Ka 100% Surakshit Nivesh
                </h4>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-white">
                        Clear Title & Spot Registry
                      </strong>
                      <span className="text-xs text-slate-300">
                        Pehle paper check kariye, Tehsil me Dakhil Kharij aur spot registry suvidha.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-white">
                        Free Demarcation & Boundary Pillar
                      </strong>
                      <span className="text-xs text-slate-300">
                        Aapke plot ka exact naap aur pakka pillar booking ke baad turant lagwaya jata hai.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-white">
                        Nationalized & Private Bank Loans
                      </strong>
                      <span className="text-xs text-slate-300">
                        SBI, HDFC, PNB aur LIC se 80% tak home & plot loan assistance.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-white">
                        No Hidden Charges & Zero Brokerage
                      </strong>
                      <span className="text-xs text-slate-300">
                        Direct owner/developer deals without any third-party commissions.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Want to inspect registration doc?</span>
                <a
                  href="https://wa.me/918004100085?text=Namaste%20Sudish%20Ji%2C%20mujhe%20Anvi%20Real%20Estate%20ka%20MSME%20certificate%20aur%20land%20documents%20dekhna%20hai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
                >
                  <span>Request Docs on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
