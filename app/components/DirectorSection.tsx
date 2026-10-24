"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Award, CheckCircle2, ShieldCheck, MessageCircle, Quote } from "lucide-react";

export default function DirectorSection() {
  return (
    <section id="director" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Director Photo Column */}
            <div className="lg:col-span-5 relative h-96 sm:h-[480px] lg:h-full min-h-[440px] bg-slate-900">
              <Image
                src="/images/sudish-maurya.jpg"
                alt="Sudish Maurya - Director Anvi Real Estate Lucknow"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Director Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900">
                      Sudish Maurya
                    </h4>
                    <p className="text-xs font-bold text-orange-600 tracking-wide uppercase">
                      Director • Anvi Real Estate Lucknow
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5 text-blue-700" />
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Govt. MSME Reg Enterprise</span>
                  <span className="font-semibold text-emerald-600">Verified Leader</span>
                </div>
              </div>
            </div>

            {/* Director's Message & Credentials Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 text-orange-600" />
                <span>Director&apos;s Message</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                &ldquo;Lucknow Me Har Parivaar Ko Transparent Aur Safe Land Dilana Hamara Sankalp Hai.&rdquo;
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Namaskar, main <strong>Sudish Maurya</strong>, Director of Anvi Real Estate.
                  Mera manna hai ki zameen ya makaan khareedna kisi bhi vyakti ke jeevan ka sabse bada nivesh hota hai. Aksar log broker ke chakkar me ya bina paper verify kiye pareshan hote hain.
                </p>
                <p>
                  Anvi Real Estate me hum <strong>100% legal transparency, clear Khatauni, turant Dakhil Kharij</strong> aur spot possession ke sath deal karte hain. Hamare sabhi projects Nilmatha, Hariharpur, Amar Shaheed Path aur Sultanpur Road par high-growth corridors me sthit hain.
                </p>
              </div>

              {/* Sudish Maurya's Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Personal Consultation with Director</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Free Legal Title Verification</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Spot Registry & Possession Handover</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Bank Loan & Registry Support</span>
                </div>
              </div>

              {/* Direct Contact Cards */}
              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Direct Contact with Sudish Maurya
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:8004100085"
                    className="p-3 bg-blue-50/70 hover:bg-blue-100/70 rounded-2xl border border-blue-200/80 flex items-center gap-3 transition group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-blue-700 font-medium block">Direct Mobile / Call</span>
                      <strong className="text-sm text-slate-900 group-hover:text-blue-700">
                        +91 8004100085
                      </strong>
                    </div>
                  </a>

                  <a
                    href="tel:6394103686"
                    className="p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200 flex items-center gap-3 transition group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Secondary Contact</span>
                      <strong className="text-sm text-slate-900 group-hover:text-blue-700">
                        +91 6394103686
                      </strong>
                    </div>
                  </a>
                </div>

                {/* Office Address Snippet */}
                <div className="mt-3 p-3 bg-amber-50/60 rounded-2xl border border-amber-200/60 flex items-start gap-2.5 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Director&apos;s Office:</strong> Hariharpur Power House, Gomti Diary, Nilmatha, Lucknow - 226002
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
