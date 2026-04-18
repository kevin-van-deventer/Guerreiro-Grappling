"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Clock, Users, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const schedule = [
  { day: "MON", classes: [
    { time: "06:00 AM", name: "Early Flow (BJJ)", level: "Fundamental", type: "primary" },
    { time: "05:00 PM", name: "Kids BJJ", level: "All Levels", type: "primary" },
    { time: "06:30 PM", name: "Adv. No-Gi", level: "Advanced", type: "secondary" }
  ]},
  { day: "TUE", classes: [
    { time: "05:00 PM", name: "MMA Basics", level: "Fundamental", type: "secondary" },
    { time: "06:30 PM", name: "Gi Fundamentals", level: "Fundamental", type: "primary" },
    { time: "07:30 PM", name: "Black Belt Lab", level: "Invite Only", type: "secondary" }
  ]},
  { day: "WED", classes: [
    { time: "12:00 PM", name: "Noon Roll", level: "All Levels", type: "primary" },
    { time: "05:00 PM", name: "Teens MMA", level: "Fundamental", type: "secondary" },
    { time: "06:30 PM", name: "Submission Core", level: "Advanced", type: "primary" }
  ]},
  { day: "THU", classes: [
    { time: "05:00 PM", name: "Kickboxing", level: "All Levels", type: "secondary" },
    { time: "06:30 PM", name: "Leg Lock Tech", level: "Advanced", type: "primary" }
  ]},
  { day: "FRI", classes: [
    { time: "06:00 PM", name: "Open Mat Live", level: "All Levels", type: "secondary" }
  ]},
];

const tiers = [
  { name: "Adults", price: "800", features: ["Unlimited BJJ", "MMA & Kickboxing", "Precision Workshops", "Competition Prep"] },
  { name: "Teens", price: "550", features: ["Ages 7-14", "Anti-Bullying Prep", "Skill Building", "Discipline Focus"] },
  { name: "Kids", price: "500", features: ["Ages 4-7", "Coordination Training", "Safety First", "Fun & Respect"] },
];

export default function ClassesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-24 px-6 md:px-12 bg-surface-container relative overflow-hidden">
        <div className="absolute inset-0 torque-gradient opacity-[0.03] -rotate-12"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-headline font-black uppercase tracking-tighter italic mb-4"
          >
            COMBAT <span className="text-secondary italic">TIMELINE</span>
          </motion.h1>
          <div className="h-2 w-32 bg-primary mx-auto mb-8"></div>
          <p className="font-label font-bold text-primary uppercase tracking-[0.4em] text-sm md:text-base italic">
            Engineering Precision Every Session
          </p>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-primary/10 shadow-2xl overflow-hidden border border-primary/10">
            {schedule.map((day, idx) => (
              <motion.div 
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-neutral-900 min-h-[500px] p-6 space-y-8"
              >
                <h4 className="font-headline font-black text-3xl uppercase border-b-4 border-primary italic pb-2 inline-block">
                  {day.day}
                </h4>
                <div className="space-y-6">
                  {day.classes.map((cls, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "p-5 skew-x-[-3deg] border-l-8 transition-kinetic group hover:skew-x-0 relative overflow-hidden shadow-sm",
                        cls.type === "primary" ? "bg-surface-container-low border-primary" : "bg-neutral-100 dark:bg-neutral-800 border-secondary"
                      )}
                    >
                      <span className="font-label text-xs font-black uppercase opacity-40 mb-1 block italic">{cls.time}</span>
                      <p className="font-headline font-black text-lg uppercase leading-tight group-hover:text-primary transition-colors">{cls.name}</p>
                      <p className="text-[10px] font-bold opacity-30 uppercase tracking-widest mt-1">{cls.level}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 md:py-32 bg-foreground text-background relative diagonal-divider-top overflow-hidden">
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
                <div className="absolute top-4 right-4 text-primary font-headline font-black text-5xl">0{i+1}</div>
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
                <Link
                  href="/contact"
                  className="block text-center bg-white text-black font-headline font-black px-8 py-5 text-xl skew-x-[8deg] hover:bg-primary hover:text-white transition-kinetic uppercase shadow-[8px_8px_0px_0px_rgba(0,89,187,0.3)] mt-auto"
                >
                  Join the Tribe
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
