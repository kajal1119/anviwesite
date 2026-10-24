"use client";

import Image from "next/image";
import {
  X,
  MapPin,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  ShieldCheck,
  Building,
  Road,
  Navigation,
  Share2,
} from "lucide-react";

export interface Property {
  id: string;
  title: string;
  category: "residential-plot" | "luxury-villa" | "commercial-land" | "farmhouse";
  locationKey: "nilmatha" | "shaheed-path" | "sultanpur-road" | "raebareli-road" | "gomti-nagar-ext";
  location: string;
  pricePerSqFt: string;
  startingPrice: string;
  sizeRange: string;
  roadWidth: string;
  possession: string;
  approval: string;
  image: string;
  featured: boolean;
  tag: string;
  description: string;
  amenities: string[];
  landmarks: { name: string; distance: string }[];
}

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyDetailModal({ property, onClose }: PropertyModalProps) {
  if (!property) return null;

  const whatsappMessage = encodeURIComponent(
    `Namaste Sudish Ji, mujhe "${property.title}" (${property.location}) ke bare me detail jankari aur site visit chahiye. Price: ${property.startingPrice}.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-slate-900">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-600 text-white shadow-md">
              {property.tag}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {property.approval}
            </span>
          </div>

          {/* Bottom Title in Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-1.5 text-amber-300 text-xs font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.location}</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              {property.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 font-medium">Rate / Sq.Ft</span>
              <p className="text-base sm:text-lg font-bold text-blue-900">{property.pricePerSqFt}</p>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Starting Total</span>
              <p className="text-base sm:text-lg font-bold text-orange-600">{property.startingPrice}</p>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Available Sizes</span>
              <p className="text-base sm:text-lg font-bold text-slate-800">{property.sizeRange}</p>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Road Width</span>
              <p className="text-base sm:text-lg font-bold text-slate-800">{property.roadWidth}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Property Overview</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{property.description}</p>
          </div>

          {/* Amenities & Project Facilities */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-3">Project Infrastructure & Amenities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connectivity & Distance from Major Lucknow Hubs */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-blue-600" />
              <span>Key Lucknow Landmarks & Distances</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {property.landmarks.map((lm, idx) => (
                <div key={idx} className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <div className="text-xs font-semibold text-slate-800">{lm.name}</div>
                  <div className="text-xs text-blue-700 font-bold mt-0.5">{lm.distance}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Free Site Visit and Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              <strong>Govt. Registered Developer:</strong> Anvi Real Estate (Director: Sudish Maurya)
              <br />Free pickup & drop for site inspection anywhere in Lucknow.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="tel:8004100085"
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-sm flex items-center justify-center gap-2 border border-blue-200 transition"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Call: 8004100085</span>
              </a>

              <a
                href={`https://wa.me/918004100085?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Site Visit on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
