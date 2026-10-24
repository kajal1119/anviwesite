"use client";

import { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, IndianRupee, Sparkles, MessageCircle } from "lucide-react";

export default function EmiCalculator() {
  const [plotArea, setPlotArea] = useState<number>(1200);
  const [ratePerSqFt, setRatePerSqFt] = useState<number>(1500);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [tenureYears, setTenureYears] = useState<number>(10);
  const interestRate = 8.75; // Annual interest %

  // Calculations
  const totalCost = plotArea * ratePerSqFt;
  const downPayment = (totalCost * downPaymentPercent) / 100;
  const loanAmount = totalCost - downPayment;

  // Monthly EMI Calculation: [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi =
    loanAmount > 0
      ? Math.round(
          (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  // Estimated stamp duty in UP (~7%)
  const approxStampDuty = Math.round(totalCost * 0.07);

  const formattedTotalCost = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(totalCost);

  const formattedDownPayment = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(downPayment);

  const formattedLoanAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(loanAmount);

  const formattedEmi = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(emi);

  const formattedStampDuty = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(approxStampDuty);

  const loanWhatsAppQuery = encodeURIComponent(
    `Namaste Sudish Ji, maine Anvi Real Estate website par plot EMI calculate kiya:\n- Plot Area: ${plotArea} Sq.Ft\n- Total Budget: ${formattedTotalCost}\n- Down Payment: ${formattedDownPayment}\n- Monthly EMI: ${formattedEmi}/month\nKripya is budget me Nilmatha ya Shaheed Path ke paas verified plot batayein.`
  );

  return (
    <section id="emi-calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold mb-3">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span>Smart Plot Budget & EMI Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apna Plot Budget Aur Monthly EMI Calculate Karein
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Plot size aur rate chunein, turant dekhein kitna down payment lagega aur bank se kitni aasan kist (EMI) banegi.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sliders Input Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Slider 1: Plot Area */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Plot Area (Sq. Ft.)
                </label>
                <span className="text-base font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {plotArea.toLocaleString("en-IN")} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="3000"
                step="50"
                value={plotArea}
                onChange={(e) => setPlotArea(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>600 sq.ft</span>
                <span>1,200 sq.ft</span>
                <span>2,000 sq.ft</span>
                <span>3,000 sq.ft</span>
              </div>
            </div>

            {/* Slider 2: Rate per Sq. Ft. */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Estimated Rate Per Sq. Ft.
                </label>
                <span className="text-base font-extrabold text-orange-600 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
                  ₹{ratePerSqFt.toLocaleString("en-IN")} / sq.ft
                </span>
              </div>
              <input
                type="range"
                min="999"
                max="3500"
                step="100"
                value={ratePerSqFt}
                onChange={(e) => setRatePerSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>₹1,000 (Affordable)</span>
                <span>₹1,500 (Nilmatha Prime)</span>
                <span>₹2,500+ (Highway/Commercial)</span>
              </div>
            </div>

            {/* Slider 3: Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  {formattedDownPayment}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>10% Minimum</span>
                <span>20% Standard</span>
                <span>50%</span>
              </div>
            </div>

            {/* Slider 4: Loan Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Bank Loan Tenure (Years)
                </label>
                <span className="text-sm font-bold text-slate-800 bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {tenureYears} Years ({totalMonths} Months)
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>3 Years</span>
                <span>10 Years</span>
                <span>15 Years</span>
                <span>20 Years</span>
              </div>
            </div>

            <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center gap-3 text-xs text-blue-900">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>
                <strong>Bank Loan Partnership:</strong> SBI, HDFC, LIC Housing & PNB dwara 80% tak easy home & plot loan approved. Zero documentation hassle.
              </span>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                Estimated Breakdown
              </span>
              <h3 className="text-2xl font-black text-white">
                Total Plot Cost
              </h3>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mt-1">
                {formattedTotalCost}
              </div>

              <div className="space-y-4 mt-6 pt-6 border-t border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300">Down Payment Required ({downPaymentPercent}%):</span>
                  <span className="text-sm font-bold text-emerald-400">{formattedDownPayment}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300">Loan Amount Eligible (80%):</span>
                  <span className="text-sm font-bold text-blue-300">{formattedLoanAmount}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300">Est. UP Stamp Duty & Reg. (~7%):</span>
                  <span className="text-sm font-bold text-slate-300">{formattedStampDuty}</span>
                </div>

                {/* Big EMI Highlight Box */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 mt-4">
                  <span className="text-xs text-slate-300 block">Monthly Bank EMI (Est @ 8.75%)</span>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {formattedEmi} <span className="text-xs font-normal text-slate-300">/ month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={`https://wa.me/918004100085?text=${loanWhatsAppQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss This Plan on WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-slate-400">
                Direct guidance from Director Sudish Maurya (+91 8004100085)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
