import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Lexend } from "next/font/google";
import dynamic from "next/dynamic";

const LeadModal = dynamic(() => import("@/components/LeadModal").then(mod => mod.LeadModal));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton").then(mod => mod.WhatsAppButton));
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
  },
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
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Jiu Jitsu only for young people?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Jiu Jitsu is for all people, all shapes, all sizes and all AGES. The mechanics of leverage allow anyone to excel. Grandmaster Hélio Gracie famously trained and rolled until he was 95 years old!"
          }
        },
        {
          "@type": "Question",
          "name": "Is Jiu Jitsu the same as MMA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. While it's a foundational and critical skill for Mixed Martial Arts, pure Brazilian Jiu-Jitsu has no kicks or punches. It revolves entirely around mechanical leverage, joint manipulation, and dynamic ground control."
          }
        },
        {
          "@type": "Question",
          "name": "Is it extremely hard to learn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is a complex art that takes years to truly master, but you will see physical and technical results from early on. You will be able to actively participate and experience the mechanics from day one on the mats."
          }
        },
        {
          "@type": "Question",
          "name": "Is it dangerous?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Like any combat sport, it naturally comes with physical risks. However, BJJ is widely considered one of the safest martial arts because it completely minimizes striking damage and instead focuses on controlled technique and tapping out."
          }
        },
        {
          "@type": "Question",
          "name": "Is BJJ 3 times a week enough?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, three times a week is a sustainable goal for many people. At this rate, you can strike a good balance between improving on the mats and giving your body time to recover. Training three times a week is often considered the 'sweet spot' for consistent improvement without overwhelming your body or personal schedule."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 80/20 rule in BJJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 80/20 rule in Brazilian Jiu-Jitsu is simply that 80% of success on the mat comes from 20% of techniques. We teach real skills and focus on high-percentage techniques that work most often on the mat and in the real world."
          }
        },
        {
          "@type": "Question",
          "name": "What is the hardest position to escape in BJJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mount and back control are considered the worst positions because they give your opponent the most control and submission opportunities. Learning solid escapes from these positions is crucial."
          }
        },
        {
          "@type": "Question",
          "name": "Why shower immediately after BJJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A quick rinse isn't enough—use soap designed to fight bacteria and fungus. Pay extra attention to areas prone to infections: feet, armpits, groin, and hairline. The sooner you shower after class, the better your chances of avoiding skin issues."
          }
        },
        {
          "@type": "Question",
          "name": "What is not allowed in BJJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brazilian jiu-jitsu does not allow any striking with the hands or feet. This includes punching, kicking, elbowing, kneeing, and head butting. No eye gouging, biting, or hair pulling. This is a rule that beginners often overlook."
          }
        },
        {
          "@type": "Question",
          "name": "What is the weakness of Jiu-Jitsu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Without knowing how to combat striking techniques, a BJJ practitioner may struggle to close the gap against a skilled striker. Striking is a fundamental aspect of many martial arts, and its absence in pure sport BJJ can leave practitioners vulnerable in stand-up confrontations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the most powerful move in Jiu-Jitsu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Rear Naked Choke is one of the most effective BJJ moves for self-defense. It involves choking the opponent from behind, cutting off their air supply until they submit or lose consciousness."
          }
        },
        {
          "@type": "Question",
          "name": "Why do kids quit jiu-jitsu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kids thrive in environments that are dynamic, interactive, and — above all — fun. If classes become repetitive or feel more like a chore than a challenge, young students might disengage. Brazilian Jiu Jitsu, when taught with too much formality or not enough variety, can start to feel monotonous for kids."
          }
        }
      ]
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

import { Footer } from "@/components/Footer";

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
        className={`${spaceGrotesk.variable} ${manrope.variable} ${lexend.variable} min-h-full flex flex-col pt-[72px] lg:pt-[88px] overflow-x-clip`}
      >
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <LeadModal />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
