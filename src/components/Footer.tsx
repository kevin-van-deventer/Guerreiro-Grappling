"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const NAV_LINKS = [
  { name: "Classes", href: "/classes" },
  { name: "Schedule", href: "/schedule" },
  { name: "About Us", href: "/about" },
  { name: "Rules", href: "/rules" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const CLASSES = [
  "Brazilian Jiu-Jitsu",
  "No-Gi Grappling",
  "MMA",
  "Kickboxing",
  "Ladies Only",
  "Junior Classes (7–14)",
];

const SOCIAL = [
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/guerreirograppling/", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  { 
    name: "Facebook",  
    href: "https://www.facebook.com/profile.php?id=61550752611166",  
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ) 
  },
  { 
    name: "WhatsApp",  
    href: "https://wa.me/27824957760?text=Hi%20Guerreiro%20Grappling!%20I%27d%20like%20to%20find%20out%20more.", 
    icon: <span className="text-[12px] pt-0.5">WA</span> 
  },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden">

      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Column 1 · Brand ── */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/Guerreiro-Grappling-Logo.png"
                  alt="Guerreiro Grappling Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-headline font-black text-xl uppercase tracking-tight block leading-tight group-hover:text-primary transition-colors">
                  Guerreiro
                </span>
                <span className="font-headline font-black text-xl uppercase tracking-tight text-primary leading-tight block">
                  Grappling
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed font-medium max-w-xs">
              Engineering kinetic mastery through disciplined motion. Durban&apos;s premier BJJ, MMA &amp; Kickboxing academy in Gillitts.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-primary border border-white/10 hover:border-primary font-headline font-black tracking-widest transition-all duration-300 group-hover/social"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2 · Navigation ── */}
          <div className="space-y-6">
            <h4 className="font-headline font-black text-xs uppercase tracking-[0.3em] text-primary border-l-4 border-primary pl-3">
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-headline font-bold uppercase tracking-tight text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 bg-primary group-hover:w-3 transition-all duration-300 flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 · Classes ── */}
          <div className="space-y-6">
            <h4 className="font-headline font-black text-xs uppercase tracking-[0.3em] text-primary border-l-4 border-primary pl-3">
              Classes
            </h4>
            <ul className="space-y-3">
              {CLASSES.map((cls) => (
                <li key={cls}>
                  <Link
                    href="/schedule"
                    className="flex items-center gap-2 text-sm font-headline font-bold uppercase tracking-tight text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 bg-secondary group-hover:w-3 transition-all duration-300 flex-shrink-0" />
                    {cls}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4 · Contact & Hours ── */}
          <div className="space-y-6">
            <h4 className="font-headline font-black text-xs uppercase tracking-[0.3em] text-primary border-l-4 border-primary pl-3">
              Find Us
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+27824957760"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                    <Phone size={14} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-label font-bold uppercase tracking-widest text-white/30 mb-0.5">Phone</p>
                    <p className="text-sm font-headline font-bold text-white/70 group-hover:text-white transition-colors">082 495 7760</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@guerreirograppling.co.za"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                    <Mail size={14} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-label font-bold uppercase tracking-widest text-white/30 mb-0.5">Email</p>
                    <p className="text-sm font-headline font-bold text-white/70 group-hover:text-white transition-colors break-all">info@guerreirograppling.co.za</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://maps.google.com/?q=6+Old+Main+Road+Gillitts+Hamilton+Park+Durban+3610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                    <MapPin size={14} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-label font-bold uppercase tracking-widest text-white/30 mb-0.5">Address</p>
                    <p className="text-sm font-headline font-bold text-white/70 group-hover:text-white transition-colors leading-snug">
                      6 Old Main Road, Hamilton Cres<br />
                      Gillitts, Durban 3610
                    </p>
                    <span className="inline-flex items-center gap-1 text-[9px] font-label font-bold text-primary uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Open in Maps <ExternalLink size={9} />
                    </span>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-label font-bold uppercase tracking-widest text-white/30 mb-0.5">Hours</p>
                  <p className="text-sm font-headline font-bold text-white/70">Mon – Sun: 08:00 – 21:00</p>
                  <p className="text-[10px] font-label text-white/30 mt-0.5">Private training from 07:30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── CTA Strip ── */}
        <div className="mt-16 mb-12 bg-primary/10 border border-primary/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-headline font-black text-xl uppercase tracking-tight text-white">Ready to start your journey?</p>
            <p className="text-sm text-white/50 mt-1">Join Durban&apos;s fastest-growing grappling academy in Gillitts.</p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
            className="flex-shrink-0 bg-primary text-white font-headline font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-primary transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
          >
            Book a Free Trial
          </button>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-white/20">
            © {new Date().getFullYear()} Guerreiro Grappling · Gillitts, Durban · All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <Link href="/rules" className="text-[10px] font-label font-bold uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors">Gym Rules</Link>
            <Link href="/faqs" className="text-[10px] font-label font-bold uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors">FAQs</Link>
            <Link href="/contact" className="text-[10px] font-label font-bold uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Decorative background text */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 font-headline font-black text-[18vw] leading-none text-white/[0.015] uppercase tracking-tighter select-none pointer-events-none translate-x-8 translate-y-4"
      >
        GG
      </div>
    </footer>
  );
}
