import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Lexend } from "next/font/google";
import { LeadModal } from "@/components/LeadModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guerreirograppling.co.za"),
  title: {
    default: "Guerreiro Grappling | BJJ & MMA Gym in Gillitts, Durban",
    template: "%s | Guerreiro Grappling",
  },
  description:
    "Durban's premier Brazilian Jiu-Jitsu gym in Gillitts. Expert BJJ, MMA, Kickboxing & No-Gi classes for adults and kids (ages 7–14). Serving Gillitts, Kloof, Hillcrest, Winston Park & Waterfall.",
  keywords: [
    "BJJ Durban",
    "Brazilian Jiu Jitsu Durban",
    "Jiu Jitsu Durban",
    "MMA gym Durban",
    "Kickboxing Durban",
    "BJJ Gillitts",
    "Jiu Jitsu Gillitts",
    "BJJ Kloof",
    "BJJ Hillcrest",
    "BJJ Waterfall",
    "BJJ Winston Park",
    "No-Gi Durban",
    "Grappling Durban",
    "BJJ for kids Durban",
    "martial arts Durban",
    "self-defense Durban",
    "submission grappling Durban",
    "Jiu Jitsu KwaZulu-Natal",
    "BJJ KZN",
    "competition BJJ Durban",
  ],
  openGraph: {
    title: "Guerreiro Grappling | BJJ & MMA Gym in Gillitts, Durban",
    description:
      "Durban's premier Brazilian Jiu-Jitsu gym in Gillitts. Expert BJJ, MMA, Kickboxing & No-Gi classes for adults and kids. Serving Gillitts, Kloof, Hillcrest & surrounding areas.",
    url: "https://guerreirograppling.co.za",
    siteName: "Guerreiro Grappling",
    images: [
      {
        url: "/Guerreiro-Grappling-Logo.png",
        width: 1200,
        height: 630,
        alt: "Guerreiro Grappling – BJJ & MMA Gym in Gillitts, Durban",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guerreiro Grappling | BJJ & MMA Gym in Gillitts, Durban",
    description:
      "Durban's premier Brazilian Jiu-Jitsu gym. BJJ, MMA, Kickboxing & No-Gi classes in Gillitts. Serving Kloof, Hillcrest, Winston Park & Waterfall.",
    images: ["/Guerreiro-Grappling-Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://guerreirograppling.co.za",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "SportsActivityLocation"],
      "@id": "https://guerreirograppling.co.za/#business",
      name: "Guerreiro Grappling",
      description:
        "Durban's premier Brazilian Jiu-Jitsu academy offering expert BJJ, MMA, Kickboxing, No-Gi, and Junior classes in Gillitts. Serving Kloof, Hillcrest, Winston Park, and Waterfall.",
      url: "https://guerreirograppling.co.za",
      telephone: "+27824957760",
      sport: [
        "Brazilian Jiu-Jitsu",
        "Mixed Martial Arts",
        "Kickboxing",
        "No-Gi Grappling",
      ],
      logo: {
        "@type": "ImageObject",
        url: "https://guerreirograppling.co.za/Guerreiro-Grappling-Logo.png",
      },
      image: "https://guerreirograppling.co.za/Guerreiro-Grappling-Logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Entrance in, 6 Old Main Road, Gillitts Hamilton Park, Hamilton Cres",
        addressLocality: "Gillitts",
        addressRegion: "KwaZulu-Natal",
        postalCode: "3610",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-29.8007",
        longitude: "30.8285",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "21:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+27824957760",
        contactType: "customer service",
        availableLanguage: "English",
      },
      areaServed: [
        { "@type": "City", name: "Durban" },
        { "@type": "AdministrativeArea", name: "Gillitts" },
        { "@type": "AdministrativeArea", name: "Kloof" },
        { "@type": "AdministrativeArea", name: "Hillcrest" },
        { "@type": "AdministrativeArea", name: "Winston Park" },
        { "@type": "AdministrativeArea", name: "Waterfall" },
        { "@type": "AdministrativeArea", name: "Durban North" },
      ],
      hasMap: "https://maps.google.com/?q=6+Old+Main+Road+Gillitts+Hamilton+Park+Durban+3610",
      priceRange: "$$",
      currenciesAccepted: "ZAR",
      paymentAccepted: "Cash, Bank Transfer",
    },
    {
      "@type": "WebSite",
      "@id": "https://guerreirograppling.co.za/#website",
      url: "https://guerreirograppling.co.za",
      name: "Guerreiro Grappling",
      description:
        "Brazilian Jiu-Jitsu, MMA, and Kickboxing gym in Gillitts, Durban.",
      publisher: {
        "@id": "https://guerreirograppling.co.za/#business",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://guerreirograppling.co.za/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${lexend.variable} min-h-full flex flex-col`}
      >
        {children}
        <LeadModal />
        <WhatsAppButton />
      </body>
    </html>
  );
}
