"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";


const tiers = [
  { name: "Adults", price: "800", features: ["Unlimited BJJ", "MMA & Kickboxing", "Precision Workshops", "Competition Prep"] },
  { name: "Teens", price: "600", features: ["Ages 7-14", "Anti-Bullying Prep", "Skill Building", "Discipline Focus"] },
  { name: "Kids", price: "500", features: ["Ages 4-7", "Coordination Training", "Safety First", "Fun & Respect"] },
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHero
        title="BJJ &"
        highlight="COMBAT CLASSES"
        eyebrow="Adults · Kids · Ladies Only · Gillitts, Durban"
        ghostWord="BJJ"
        accentColor="bg-secondary"
      />


      {/* Pricing Tiers */}
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 bg-foreground text-background relative diagonal-divider-top overflow-hidden">
        <div className="absolute inset-0 torque-gradient opacity-10 skew-y-12"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none italic">
              INVEST IN <span className="text-primary">MASTERY</span>
            </h2>
            <p className="font-label font-bold text-secondary uppercase tracking-widest text-sm">Monthly Memberships // No Long-term Contracts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border-t-8 border-primary p-10 skew-x-[-4deg] hover:scale-105 transition-kinetic shadow-2xl relative"
              >
                <div className="absolute top-4 right-4 text-primary font-headline font-black text-5xl">0{i + 1}</div>
                <h3 className="text-4xl font-headline font-black uppercase mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-headline font-black tracking-tighter text-primary">R{tier.price}</span>
                  <span className="text-sm font-label font-bold opacity-50 uppercase tracking-widest">/ Month</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm font-medium opacity-80 uppercase tracking-widest">
                      <Zap className="w-4 h-4 text-secondary fill-secondary" /> {feat}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
                  className="block w-full text-center bg-white text-black font-headline font-black px-8 py-5 text-xl skew-x-[8deg] hover:bg-primary hover:text-white transition-kinetic uppercase shadow-[8px_8px_0px_0px_rgba(0,89,187,0.3)] mt-auto"
                >
                  Join the Tribe
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
