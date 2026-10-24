"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Call Button */}
      <a
        href="tel:8004100085"
        className="pointer-events-auto w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
        aria-label="Direct Call Sudish Maurya"
      >
        <Phone className="w-5 h-5 text-white animate-pulse" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Call: 8004100085
        </span>
      </a>

      {/* WhatsApp Button with Pulsing Ping Notification */}
      <a
        href="https://wa.me/918004100085?text=Namaste%20Sudish%20Ji%2C%20mujhe%20Anvi%20Real%20Estate%20plots%20ke%20bare%20me%20jankari%20chahiye."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group animate-pulse-glow"
        aria-label="Chat on WhatsApp with Sudish Maurya"
      >
        {/* Pulsing ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 text-[9px] text-emerald-950 font-bold items-center justify-center">
            1
          </span>
        </span>

        <MessageCircle className="w-7 h-7 text-white" />

        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          WhatsApp Instant Chat
        </span>
      </a>
    </div>
  );
}
