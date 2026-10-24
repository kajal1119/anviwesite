"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GovtTrustSection from "./components/GovtTrustSection";
import PropertiesSection from "./components/PropertiesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import EmiCalculator from "./components/EmiCalculator";
import DirectorSection from "./components/DirectorSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";

export default function Home() {
  const [searchFilter, setSearchFilter] = useState<{
    location: string;
    type: string;
    budget: string;
  } | null>(null);

  const handleHeroSearch = (filters: {
    location: string;
    type: string;
    budget: string;
  }) => {
    setSearchFilter(filters);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Top Header & Navigation */}
      <Navbar />

      {/* Hero Section with Live Search & Statistics */}
      <Hero onSearch={handleHeroSearch} />

      {/* Government MSME Udyam Registration & Legal Assurance */}
      <GovtTrustSection />

      {/* Featured Properties, Residential Plots & Villas */}
      <PropertiesSection searchFilter={searchFilter} />

      {/* Why Choose Us & Trust Pillars */}
      <WhyChooseUs />

      {/* Smart Interactive Plot Budget & EMI Calculator */}
      <EmiCalculator />

      {/* Director's Profile & Message (Sudish Maurya) */}
      <DirectorSection />

      {/* Real Customer Reviews in Lucknow */}
      <TestimonialsSection />

      {/* Interactive Frequently Asked Questions */}
      <FaqSection />

      {/* Official Office Location & Free Site Visit Booking Form */}
      <ContactSection />

      {/* Comprehensive SEO Footer */}
      <Footer />

      {/* Floating Action Buttons for Instant WhatsApp & Phone Call */}
      <FloatingActions />
    </main>
  );
}
