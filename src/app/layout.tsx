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
    default: "Guerreiro Grappling | Kinetic Precision BJJ & MMA",
    template: "%s - Guerreiro Grappling"
  },
  description: "Experience the evolution of grappling in Durban. High-performance Brazilian Jiu-Jitsu, MMA, and Kickboxing training.",
  openGraph: {
    title: "Guerreiro Grappling | Kinetic Precision BJJ & MMA",
    description: "Experience the evolution of grappling in Durban. High-performance Brazilian Jiu-Jitsu, MMA, and Kickboxing training.",
    url: "https://guerreirograppling.co.za",
    siteName: "Guerreiro Grappling",
    images: [
      {
        url: "/Guerreiro-Grappling-Logo.png",
        width: 1200,
        height: 630,
        alt: "Guerreiro Grappling Logo",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guerreiro Grappling | Kinetic Precision BJJ & MMA",
    description: "Experience the evolution of grappling in Durban. High-performance Brazilian Jiu-Jitsu, MMA, and Kickboxing training.",
    images: ["/Guerreiro-Grappling-Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
