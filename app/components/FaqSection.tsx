"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Kya Anvi Real Estate ke plots ki turant Registry aur Dakhil Kharij hoti hai?",
      a: "Haan, bilkul! Hamare sabhi projects 100% legal aur clear title zameen par sthit hain. Token amount aur plot boundary pillar lagwane ke baad aap turant Lucknow Tehsil me spot registry karwa sakte hain aur hum Dakhil Kharij (mutation) me poora support dete hain.",
    },
    {
      q: "Kya plots par bank se Home/Plot Loan milta hai?",
      a: "Ji haan! Leading nationalized aur private banks (SBI, HDFC, LIC Housing Finance, PNB) se hamare plots par 70% se 80% tak easy loan sanction hota hai. Hamari team loan file documentation aur process me aapki poori madad karti hai.",
    },
    {
      q: "Kya Anvi Real Estate Government Registered Enterprise hai?",
      a: "Haan! Anvi Real Estate Lucknow, Ministry of Micro, Small and Medium Enterprises (Govt. of India) ke tehat registered hai. Hamara official Udyam Registration Number 'UDYAM-UP-50-0230039' hai. Director Sudish Maurya ji ke netritva me transparent deals ki guarantee milti hai.",
    },
    {
      q: "Free site visit kaise book karein aur iske kya charges hain?",
      a: "Site visit 100% FREE hai! Hamara driver aapko aur aapke parivaar ko Lucknow me kisi bhi location se pick karega, sabhi plots dikhayega aur wapas ghar safely drop karega. Booking ke liye aap +91 8004100085 par call ya WhatsApp kar sakte hain.",
    },
    {
      q: "Colony me sadak, bijli aur paani ki kya suvidhayein hain?",
      a: "Hamare sabhi townships me 30 se 40 feet chaudi damar sadak, dedicated electricity transformers, street lights, covered drainage system, boundary wall, aur green family parks viksit kiye jate hain.",
    },
    {
      q: "Anvi Real Estate ka official office kahan sthit hai?",
      a: "Hamara office Hariharpur Power House, Gomti Diary, Nilmatha, Lucknow - 226002 par sthit hai. Aap somwar se raviwar subah 9:00 AM se raat 8:00 PM tak kisi bhi samay visit kar sakte hain.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold mb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Aapke Sawal, Hamare Sachhe Jawab
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Lucknow me plot khareedne se pehle sabhi jankari spasht roop se samjhein.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 text-left bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === idx ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-200 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-base">
              Koi aur sawal ya specific location chahiye?
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Director Sudish Maurya ji se seedhe call ya WhatsApp par baat karein.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:8004100085"
              className="px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 8004100085</span>
            </a>
            <a
              href="https://wa.me/918004100085?text=Namaste%20Sudish%20Ji%2C%20mujhe%20ek%20sawal%20puchhna%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
