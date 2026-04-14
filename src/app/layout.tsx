import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://www.sutimhealthcare.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sutim Healthcare Services Ltd | Home Care & Cleaning in Pembrokeshire",
    template: "%s | Sutim Healthcare Services Ltd",
  },
  description:
    "Looking for a cleaner or support worker near you in Pembrokeshire? Sutim Healthcare Services Ltd provides compassionate home care, cleaning, companionship, meal preparation, and support worker services in Narberth and across Pembrokeshire, Wales.",
  keywords: [
    "cleaner near me Pembrokeshire",
    "support worker near me Pembrokeshire",
    "home care Pembrokeshire",
    "home help Narberth",
    "cleaning services Pembrokeshire",
    "domiciliary care Wales",
    "elderly care Pembrokeshire",
    "companionship care Narberth",
    "meal preparation home care",
    "domestic support Pembrokeshire",
    "personal care worker Wales",
    "home cleaning Pembrokeshire",
    "support worker Wales",
    "care at home Pembrokeshire",
    "non-regulated care services",
    "Sutim Healthcare",
  ],
  authors: [{ name: "Sutim Healthcare Services Ltd" }],
  creator: "Sutim Healthcare Services Ltd",
  publisher: "Sutim Healthcare Services Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Sutim Healthcare Services Ltd",
    title: "Sutim Healthcare Services Ltd | Home Care & Cleaning in Pembrokeshire",
    description:
      "Compassionate home care, cleaning, and support worker services in Pembrokeshire & Narberth. Person-centred care delivered with professionalism. Free consultation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sutim Healthcare Services Ltd — Caring for Pembrokeshire",
      },
      {
        url: "/logo-icon.png",
        width: 258,
        height: 228,
        alt: "Sutim Healthcare Services Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutim Healthcare Services Ltd | Home Care in Pembrokeshire",
    description:
      "Compassionate home care, cleaning, and support worker services in Pembrokeshire & Narberth. Free initial consultation.",
    images: ["/og-image.jpg", "/logo-icon.png"],
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteUrl,
    name: "Sutim Healthcare Services Ltd",
    description:
      "Person-centred home care services including cleaning, companionship, meal preparation, domestic support, and support worker services in Pembrokeshire, Wales.",
    url: siteUrl,
    telephone: "+447881189990",
    email: "Info@timothysutimservices.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Narberth",
      addressRegion: "Pembrokeshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.7683,
      longitude: -4.7353,
    },
    areaServed: [
      { "@type": "City", name: "Narberth" },
      { "@type": "AdministrativeArea", name: "Pembrokeshire" },
      { "@type": "AdministrativeArea", name: "Wales" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "££",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Care Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Companionship Care" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Domestic Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopping Assistance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meal Preparation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Appointment Escort" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sitting Services" } },
      ],
    },
    sameAs: [],
  };

  return (
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
      </head>
      <body className="min-h-full antialiased font-[var(--font-inter)]">{children}</body>
    </html>
  );
}
