"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Eye,
  Maximize2,
  Sparkles,
  ArrowRight,
  Filter,
} from "lucide-react";
import PropertyDetailModal, { Property } from "./PropertyDetailModal";

const allProperties: Property[] = [
  {
    id: "prop-1",
    title: "Anvi Green Enclave (Nilmatha / Hariharpur)",
    category: "residential-plot",
    locationKey: "nilmatha",
    location: "Hariharpur, Near Gomti Diary & Power House, Nilmatha, Lucknow",
    pricePerSqFt: "₹1,499 / sq.ft",
    startingPrice: "₹14.99 Lakhs",
    sizeRange: "1000, 1250, 1500, 2000 sq.ft",
    roadWidth: "30 & 35 Ft Wide Damar Road",
    possession: "Immediate / Spot Possession",
    approval: "Zila Panchayat Approved & 143 Converted",
    image: "/images/prime-plots.jpg",
    featured: true,
    tag: "Most Popular in Nilmatha",
    description:
      "Gated residential plotting township located in the heart of Nilmatha / Hariharpur, just minutes from Gomti Diary and Shaheed Path. Equipped with boundary pillars, electricity transformers, proper drainage, and clear Registry with Dakhil Kharij.",
    amenities: [
      "Immediate Registry & Dakhil Kharij Guarantee",
      "35 Feet Wide Paved Damar Roads",
      "24x7 Electricity with Dedicated Transformer",
      "Covered Underground Drainage & Sewer System",
      "Gated Township with Security Guard Post",
      "80% Bank Loan Available from Leading Banks",
    ],
    landmarks: [
      { name: "Nilmatha Power House & Gomti Diary", distance: "2 Mins" },
      { name: "Amar Shaheed Path Highway", distance: "5 Mins" },
      { name: "Charbagh Railway Station", distance: "15 Mins" },
      { name: "Chaudhary Charan Singh Airport", distance: "18 Mins" },
      { name: "Phoenix Palassio Mall & Ekana", distance: "10 Mins" },
    ],
  },
  {
    id: "prop-2",
    title: "Shaheed Path Royal Boulevard Plots",
    category: "residential-plot",
    locationKey: "shaheed-path",
    location: "Amar Shaheed Path Corridor, Near Ekana Stadium, Lucknow",
    pricePerSqFt: "₹2,199 / sq.ft",
    startingPrice: "₹26.38 Lakhs",
    sizeRange: "1200, 1800, 2400 sq.ft",
    roadWidth: "40 Ft Main Boulevard",
    possession: "Ready for Construction",
    approval: "RERA & LDA Compliant Layout",
    image: "/images/hero-township.jpg",
    featured: true,
    tag: "High Appreciation Location",
    description:
      "Ultra-premium residential plotting project on the bustling Shaheed Path express corridor. Surrounded by top schools, hospitals (Medanta), IT city, and international sports complex. Rapidly appreciating investment.",
    amenities: [
      "Grand Entrance Gate with Boom Barrier",
      "40 Feet Wide Interlocking & Blacktop Roads",
      "Designer Street Lighting & Solar Lamps",
      "Lush Green Landscaped Family Park & Jogging Track",
      "Full Boundary Demarcation & Registry Ready",
      "Close to Medanta Hospital & Phoenix Palassio",
    ],
    landmarks: [
      { name: "Ekana International Cricket Stadium", distance: "7 Mins" },
      { name: "Phoenix Palassio & Lulu Mall", distance: "8 Mins" },
      { name: "Medanta Super Specialty Hospital", distance: "6 Mins" },
      { name: "HCL IT City Lucknow", distance: "10 Mins" },
    ],
  },
  {
    id: "prop-3",
    title: "Anvi Imperial 3BHK Luxury Duplex Villa",
    category: "luxury-villa",
    locationKey: "nilmatha",
    location: "Nilmatha Link Road, Cantt Vicinity, Lucknow",
    pricePerSqFt: "₹3,550 / sq.ft Built-up",
    startingPrice: "₹58.50 Lakhs (All-Inc)",
    sizeRange: "3 BHK (1650 sq.ft Built-Up Area)",
    roadWidth: "30 Ft Wide Front Road",
    possession: "Ready to Move / 30 Days",
    approval: "Bank Loan Approved (SBI, HDFC, LIC)",
    image: "/images/luxury-villa.jpg",
    featured: true,
    tag: "Ready To Move In",
    description:
      "Modern contemporary 3BHK independent duplex villa crafted with premium Italian-style vitrified tiles, false ceiling with ambient LED lighting, modular kitchen, luxury bath fittings, private balcony, and car porch.",
    amenities: [
      "Designer Modular Kitchen with Chimney Provision",
      "Spacious Car Porch with Covered Parking",
      "3 Large Bedrooms with Attached Modern Bathrooms",
      "Private Terrace Garden with Panoramic View",
      "Branded Electrical Fittings & False Ceiling",
      "Immediate Possession with Khatauni Verification",
    ],
    landmarks: [
      { name: "Hariharpur / Nilmatha Bazaar", distance: "3 Mins" },
      { name: "Lucknow Cantt Entry", distance: "5 Mins" },
      { name: "Alambagh Bus Terminal", distance: "15 Mins" },
      { name: "SGPGI Hospital", distance: "12 Mins" },
    ],
  },
  {
    id: "prop-4",
    title: "Sultanpur Highway Commercial Hub",
    category: "commercial-land",
    locationKey: "sultanpur-road",
    location: "Main Sultanpur Road at Kisan Path Junction, Lucknow",
    pricePerSqFt: "₹3,499 / sq.ft",
    startingPrice: "₹52.48 Lakhs",
    sizeRange: "1500 to 5000 sq.ft Plots",
    roadWidth: "60 & 100 Ft Highway Frontage",
    possession: "Immediate Registry",
    approval: "Commercial Conversion Compliant",
    image: "/images/commercial-hub.jpg",
    featured: false,
    tag: "Prime Commercial ROI",
    description:
      "Strategic commercial land and retail showroom plots with heavy vehicular traffic on Sultanpur National Highway and Kisan Path ring road. Ideal for shopping complexes, corporate offices, healthcare clinics, or automobile showrooms.",
    amenities: [
      "High Visibility Highway Frontage (100 ft road)",
      "High Return on Investment (15-20% projected growth)",
      "Dedicated Heavy Vehicle Parking Bay",
      "3-Phase Commercial Electric Line Ready",
      "Clear Land Title Guaranteed by Director Sudish Maurya",
      "Immediate Registry & Khatauni Transfer",
    ],
    landmarks: [
      { name: "Kisan Path (Outer Ring Road)", distance: "1 Min" },
      { name: "Purvanchal Expressway Start Point", distance: "12 Mins" },
      { name: "Gomti Nagar Extension", distance: "14 Mins" },
      { name: "Chhatrapati Shahu Ji Maharaj University", distance: "10 Mins" },
    ],
  },
  {
    id: "prop-5",
    title: "Green Meadows Farmhouse & Nature Plots",
    category: "farmhouse",
    locationKey: "raebareli-road",
    location: "Raebareli Road Outskirts, Near Kisan Path, Lucknow",
    pricePerSqFt: "₹899 / sq.ft",
    startingPrice: "₹44.95 Lakhs (5000 sq.ft)",
    sizeRange: "5000, 10,000 sq.ft Plots",
    roadWidth: "30 Ft Internal Green Lanes",
    possession: "Immediate Gated Handover",
    approval: "Clear Agricultural/Non-Zamidari Title",
    image: "/images/prime-plots.jpg",
    featured: false,
    tag: "Serene & Peaceful Living",
    description:
      "Escape the city congestion with spacious weekend farmhouse plots. Surrounded by organic farms, tree-lined boundaries, 24x7 sweet groundwater, and gated security. Perfect for weekend getaways and resort-style living.",
    amenities: [
      "Fenced Perimeter Around Entire Township",
      "Abundant Ground Water with Sweet Drinking Water",
      "Fruit Orchards & Organic Soil Ready for Landscaping",
      "24x7 Security & Caretaker Service",
      "Ideal for Pool Villa & Family Weekend Retreat",
      "Govt MSME Verified Ownership by Anvi Real Estate",
    ],
    landmarks: [
      { name: "Raebareli Highway (NH-30)", distance: "5 Mins" },
      { name: "SGPGI Lucknow", distance: "15 Mins" },
      { name: "Kisan Path Outer Ring Road", distance: "8 Mins" },
    ],
  },
];

interface PropertiesSectionProps {
  searchFilter?: { location: string; type: string; budget: string } | null;
}

export default function PropertiesSection({ searchFilter }: PropertiesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Filter properties based on active tab or hero search filter
  const filteredProperties = allProperties.filter((property) => {
    // Tab category filter
    if (activeCategory !== "all" && property.category !== activeCategory) {
      return false;
    }

    // Hero search filter if present
    if (searchFilter) {
      if (searchFilter.location !== "all" && property.locationKey !== searchFilter.location) {
        return false;
      }
      if (searchFilter.type !== "all" && property.category !== searchFilter.type) {
        return false;
      }
    }

    return true;
  });

  const categories = [
    { id: "all", label: "All Properties" },
    { id: "residential-plot", label: "Residential Plots" },
    { id: "luxury-villa", label: "Luxury Villas" },
    { id: "commercial-land", label: "Commercial Plots" },
    { id: "farmhouse", label: "Farmhouses" },
  ];

  return (
    <section id="properties" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Verified Lucknow Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Verified Plots & Properties
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Nilmatha, Hariharpur, Shaheed Path aur Sultanpur Road par turant registry
              aur dakhil kharij ke sath uplabdh prime plots.
            </p>
          </div>

          {/* Director Assistance Pill */}
          <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              SM
            </div>
            <div className="text-xs">
              <p className="text-slate-500">Need personal plot guidance?</p>
              <a
                href="tel:8004100085"
                className="font-bold text-slate-900 hover:text-blue-600 transition flex items-center gap-1"
              >
                <span>Call Sudish Maurya: +91 8004100085</span>
              </a>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-blue-700 text-white shadow-lg shadow-blue-700/25"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-xl mx-auto">
            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800">No properties found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Selected filters ke anusar koi plot nahi mila. Please try resetting the filters or call us directly.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-5 px-5 py-2.5 bg-blue-700 text-white rounded-xl text-xs font-bold"
            >
              Show All Properties
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Property Image with Badges */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-orange-600 text-white shadow-md">
                        {prop.tag}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 text-emerald-800 backdrop-blur-md shadow-md flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Verified Title
                      </span>
                    </div>

                    {/* Price tag on image */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-xs text-amber-300 font-semibold block">
                        Rate: {prop.pricePerSqFt}
                      </span>
                      <span className="text-lg font-black text-white">
                        {prop.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Property Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-slate-500 text-xs font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                      <span className="line-clamp-1">{prop.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {prop.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>

                    {/* Key Attributes Bar */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-xl">
                        <span className="text-slate-400 block text-[10px]">ROAD WIDTH</span>
                        <span className="font-bold text-slate-800">{prop.roadWidth}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl">
                        <span className="text-slate-400 block text-[10px]">POSSESSION</span>
                        <span className="font-bold text-emerald-700">{prop.possession}</span>
                      </div>
                    </div>

                    {/* Checklist of highlights */}
                    <div className="mt-4 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>Immediate Registry & Dakhil Kharij</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>80% Bank Loan Approved</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProperty(prop)}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-600" />
                      <span>Details & Map</span>
                    </button>

                    <a
                      href={`https://wa.me/918004100085?text=Namaste%20Sudish%20Ji%2C%20mujhe%20"${encodeURIComponent(
                        prop.title
                      )}"%20ke%20bare%20me%20site%20visit%20book%20karna%20hai.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Free Visit</span>
                    </a>
                  </div>

                  <a
                    href="tel:8004100085"
                    className="w-full py-2 text-center text-xs text-slate-600 hover:text-blue-700 font-semibold block transition"
                  >
                    Direct Call: +91 8004100085
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Free Pick & Drop Banner below Properties */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30">
              NO OBLIGATION • 100% FREE OF COST
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Lucknow Me Kahin Se Bhi Free Site Visit Book Karein
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Hum aapko aapke ghar se pick karke sabhi approved plots aur villas ka visit
              karwayenge aur safely wapas drop karenge.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="tel:8004100085"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-blue-950 font-bold text-sm text-center hover:bg-slate-100 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call: 8004100085</span>
            </a>
            <a
              href="https://wa.me/918004100085?text=Namaste%20Sudish%20Ji%2C%20mujhe%20Lucknow%20me%20Free%20Car%20Site%20Visit%20book%20karna%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center transition shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Car Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
}
