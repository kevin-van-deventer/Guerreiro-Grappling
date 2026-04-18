"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const coaches = [
  {
    name: "Josh Pretorius",
    role: "Head Instructor",
    bio: "Josh leads the BJJ and MMA technical curriculum, focusing on advanced leverage and competition-ready techniques.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtNNTE-LDb6ZS_VlVY0FCaK9DIUk2BNLgDmF-g3vJTYu_b9O34aIz1_N7eNQrdbrrjyJzNmLzXaBwYpYghS0d6FDuZQcxNi6EjeLMc9nV4_05sGTMTn-zTJ1ouETr0bhEr9pR0Z546s9-2sZyyiaWx0z0tMVa9ak0LwTc1IvNJLRxcoOalFFWQObGuhjZdRaVLivUNDWlgftH3DYcIlFg9Etc_t6p_xM3WPzVJPVmzEB6Kz0bUYvEg8cYg-NEzPzzYdyxSnP-0_SZe",
  },
  {
    name: "Annabelle Slabbert",
    role: "MMA Specialist",
    bio: "Focusing on dynamic transitions and explosive striking, Annabelle brings a precision-first approach to traditional MMA.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdd9d9uDvced2r3B8HWinO7AF3unmGlIDWSa1TG_ACN1H-PL1COxI0MCxmZa_4nxQjWyTpIHKt_jzdLCnSLCp8iYaxSIV7C0otwy7T6TFMIZT2mNLcsBUtYGpAiaI6PI9fPauwoJRmrT1_KTOy5tIEZBkh_AdhWGY8Sly2cdzLwyoxiL_pBfma5BUVLoZNoQ-uQWVqYF52sApBKTuyuZlXNwyLqvifU5j6wZ7UZhMo-Gaprn-ZCdaS6O13Gq9If7fmiGonJv8gdqQP",
  },
  {
    name: "Juanita Patten",
    role: "Technical Advisor",
    bio: "Specializing in grappling fundamentals and movement fluidity, Juanita ensures every practitioner masters the flow.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJuDoZH2-ai2R47f1lyHo-2jbX_p1iHz6LZne0U5KVTp7FqZnM0bABjopY_bl-aCcf81h46to4lrQXmzR5PEa2v_3zsG8ZUAoHVF2csn27Yj5HJ-3Oe_fdRNf0NP-m6zXGOR9-meEsAqqJ1BJEojsyd76g4LX5RE1wIM0HzLqrUdmp06w-4D-uHbCqSkS6CiL0ux0U4DJe7G550qE219cRR1lO8Fd4q7LNL3FOACWFZ_3B5KDK6nqrJoMOO8BypvHnxu_S_vWUoE3f",
  },
];

const belts = [
  { level: "White", color: "bg-white", text: "Foundation of Survival", desc: "Learning to breathe while the world collapses around you." },
  { level: "Blue", color: "bg-primary", text: "The Technical Blueprint", desc: "Where the scattered pieces begin to form a machine." },
  { level: "Purple", color: "bg-purple-600", text: "Architect of Flow", desc: "You no longer react; you orchestrate the outcome." },
  { level: "Brown", color: "bg-amber-900", text: "Refinement of Lethality", desc: "Every movement is heavy, every grip is final." },
  { level: "Black", color: "bg-black", text: "Absolute Mastery", desc: "The fusion of body and technique into a single entity." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 bg-surface-container relative overflow-hidden">
        <div className="absolute inset-0 torque-gradient opacity-[0.03] -rotate-12"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-headline font-black uppercase tracking-tighter italic mb-4"
          >
            KINETIC <span className="text-secondary italic">LEGACY</span>
          </motion.h1>
          <div className="h-2 w-32 bg-primary mx-auto mb-8"></div>
          <p className="font-label font-bold text-primary uppercase tracking-[0.4em] text-sm md:text-base italic">
            Expert BJJ Coaches · Gillitts, Durban · Est. 2024
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-headline font-black uppercase tracking-tighter mb-20 text-center">THE ARCHITECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {coaches.map((coach, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] relative overflow-hidden border-8 border-white shadow-2xl rotate-2 group-hover:rotate-0 transition-kinetic mb-8">
                  <Image src={coach.img} alt={coach.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-kinetic scale-110 group-hover:scale-100" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-headline font-black uppercase tracking-tighter">{coach.name}</h3>
                  <p className="font-label font-bold text-secondary uppercase tracking-[0.2em] text-xs pb-4 border-b border-primary/10">{coach.role}</p>
                  <p className="text-sm opacity-60 font-medium leading-relaxed pt-2">{coach.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ascension Section */}
      <section className="py-24 md:py-32 bg-surface-container relative diagonal-divider-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="mb-20 space-y-4">
            <h2 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none">
              THE ASCENSION: <br/><span className="text-primary italic">CLAIM YOUR BELT</span>
            </h2>
            <div className="h-2 w-32 bg-primary"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {belts.map((belt, i) => (
              <motion.div 
                key={belt.level}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-white dark:bg-neutral-900 border-l-8 border-primary p-8 skew-x-[-4deg] hover:skew-x-0 transition-kinetic shadow-xl"
              >
                <div className="absolute top-4 right-4 text-primary/5 font-headline font-black text-6xl group-hover:text-primary/10 transition-kinetic">0{i+1}</div>
                <div className={cn("w-20 h-4 mb-8 skew-x-12", belt.color, belt.level === "White" && "border border-primary/20", belt.level === "Black" && "border-r-[32px] border-secondary")}></div>
                <h3 className="text-2xl font-headline font-black uppercase mb-2">{belt.level} Belt</h3>
                <p className="text-[10px] font-label font-bold text-primary uppercase tracking-widest italic mb-6">{belt.text}</p>
                <p className="text-sm opacity-70 leading-relaxed font-medium">{belt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
