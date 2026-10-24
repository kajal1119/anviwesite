import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#1e40af",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://anvirealestate.com"),
  title: {
    default: "Anvi Real Estate Lucknow | Verified Plots, Villas & Commercial Land",
    template: "%s | Anvi Real Estate Lucknow",
  },
  description:
    "Anvi Real Estate Lucknow - Trusted property dealer offering LDA & RERA compliant residential plots, luxury villas, and commercial land in Nilmatha, Shaheed Path, Sultanpur Road & Raebareli Road. Director: Sudish Maurya. Govt. MSME Reg: UDYAM-UP-50-0230039.",
  keywords: [
    "Anvi Real Estate",
    "Anvi Real Estate Lucknow",
    "Sudish Maurya",
    "Real Estate in Lucknow",
    "Plots in Nilmatha Lucknow",
    "Residential plots Lucknow",
    "Commercial land Lucknow",
    "Plots near Shaheed Path Lucknow",
    "Sultanpur Road plots",
    "Plots near Gomti Nagar Extension",
    "Buy plot in Lucknow",
    "Property dealer in Lucknow",
    "UDYAM-UP-50-0230039",
    "Anvi properties Lucknow",
  ],
  authors: [{ name: "Sudish Maurya", url: "https://anvirealestate.com" }],
  creator: "Sudish Maurya (Director, Anvi Real Estate)",
  publisher: "Anvi Real Estate Lucknow",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anvi Real Estate Lucknow | Verified Plots, Villas & Commercial Properties",
    description:
      "Looking for prime residential or commercial plots in Lucknow? Immediate registry, possession & 80% bank loan assistance. Govt MSME Registered: UDYAM-UP-50-0230039.",
    url: "https://anvirealestate.com",
    siteName: "Anvi Real Estate Lucknow",
    images: [
      {
        url: "/images/hero-township.jpg",
        width: 1200,
        height: 675,
        alt: "Anvi Real Estate - Premium Townships and Plots in Lucknow",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvi Real Estate Lucknow | Prime Residential & Commercial Plots",
    description:
      "Buy verified residential plots and luxury villas in Nilmatha, Shaheed Path & Sultanpur Road, Lucknow. Call Sudish Maurya: +91 8004100085.",
    images: ["/images/hero-township.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://anvirealestate.com/#realestate",
      "name": "Anvi Real Estate Lucknow",
      "legalName": "ANVI REAL ESTATE LUCKNOW",
      "url": "https://anvirealestate.com",
      "logo": "https://anvirealestate.com/images/hero-township.jpg",
      "image": "https://anvirealestate.com/images/hero-township.jpg",
      "description":
        "Anvi Real Estate is a premier Govt. MSME registered real estate consultancy in Lucknow, providing verified residential plots, luxury villas, and commercial property with immediate registry and possession.",
      "telephone": ["+918004100085", "+916394103686"],
      "email": "Sudish700maurya@gmail.com",
      "taxID": "UDYAM-UP-50-0230039",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hariharpur Power House, Gomti Diary, Nilmatha",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226002",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.7925,
        "longitude": 80.9632,
      },
      "founder": {
        "@type": "Person",
        "name": "Sudish Maurya",
        "jobTitle": "Director",
        "telephone": "+918004100085",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "09:00",
          "closes": "20:00",
        },
      ],
      "areaServed": [
        "Lucknow",
        "Nilmatha",
        "Hariharpur",
        "Amar Shaheed Path",
        "Sultanpur Road",
        "Raebareli Road",
        "Gomti Nagar Extension",
        "Kisan Path",
      ],
      "priceRange": "₹₹ - ₹₹₹₹",
    },
    {
      "@type": "WebSite",
      "@id": "https://anvirealestate.com/#website",
      "url": "https://anvirealestate.com",
      "name": "Anvi Real Estate Lucknow",
      "publisher": {
        "@id": "https://anvirealestate.com/#realestate",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
