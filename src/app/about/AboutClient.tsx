"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import { cn } from "@/lib/utils";

const coaches = [
  {
    name: "Josh Pretorius",
    role: "Head Instructor",
    bio: "Head BJJ and MMA technical advisor. Josh engineers the elite curriculum at Guerreiro, focusing on high-percentage competition techniques and the advanced physics of ground control.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtNNTE-LDb6ZS_VlVY0FCaK9DIUk2BNLgDmF-g3vJTYu_b9O34aIz1_N7eNQrdbrrjyJzNmLzXaBwYpYghS0d6FDuZQcxNi6EjeLMc9nV4_05sGTMTn-zTJ1ouETr0bhEr9pR0Z546s9-2sZyyiaWx0z0tMVa9ak0LwTc1IvNJLRxcoOalFFWQObGuhjZdRaVLivUNDWlgftH3DYcIlFg9Etc_t6p_xM3WPzVJPVmzEB6Kz0bUYvEg8cYg-NEzPzzYdyxSnP-0_SZe",
  },
  {
    name: "Annabelle Slabbert",
    role: "Coach",
    bio: "Specializing in the aggressive transitions of MMA and the precision of Kickboxing, Annabelle ensures every student develops the agility and striking logic required for high-stakes combat.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdd9d9uDvced2r3B8HWinO7AF3unmGlIDWSa1TG_ACN1H-PL1COxI0MCxmZa_4nxQjWyTpIHKt_jzdLCnSLCp8iYaxSIV7C0otwy7T6TFMIZT2mNLcsBUtYGpAiaI6PI9fPauwoJRmrT1_KTOy5tIEZBkh_AdhWGY8Sly2cdzLwyoxiL_pBfma5BUVLoZNoQ-uQWVqYF52sApBKTuyuZlXNwyLqvifU5j6wZ7UZhMo-Gaprn-ZCdaS6O13Gq9If7fmiGonJv8gdqQP",
  },
  {
    name: "Juanita Patten",
    role: "Coach // @nomad_jiujitsu000",
    bio: "The Technical Advisor with an obsession for fluidity. Juanita specializes in movement mechanics and ensuring that every practitioner masters the 'Flow' that serves as the foundation of our academy.",
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
    <main className="min-h-screen bg-background text-on-background font-body">
      <Navbar />

      {/* Hero Section - Synchronized with Home */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center pt-28 pb-10 md:pt-[104px] md:pb-12 px-4 md:px-8 overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <span className="font-headline font-black text-[30vw] leading-none tracking-tighter text-on-surface select-none uppercase">TRACE</span>
        </div>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 transition-all duration-500">
          <div className="space-y-4 md:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-headline font-black leading-[0.95] tracking-tighter uppercase whitespace-normal">
              OUR LEGACY: <br className="hidden sm:block" /> <span className="text-secondary italic">KINETIC</span> MASTERY
            </h1>
            <p className="text-sm md:text-lg max-w-lg mx-auto lg:mx-0 opacity-80 font-medium leading-relaxed">
              Founded on the principles of mechanical advantage and relentless discipline, Guerreiro Grappling is an engineering laboratory for the human body based in Gillitts.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-5">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
                className="torque-gradient text-white px-8 py-4 font-headline font-black text-lg md:text-xl skew-x-[-12deg] hover:skew-x-0 transition-all uppercase shadow-[6px_6px_0px_0px_rgba(0,89,187,0.3)] w-full sm:w-auto active:translate-y-1 active:shadow-none"
              >
                JOIN THE TRIBE
              </button>
            </div>
          </div>
          <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-[480px] mx-auto w-full mt-4 lg:mt-0">
            <div className="aspect-square bg-background relative -rotate-2 overflow-hidden border-4 md:border-8 border-white shadow-2xl">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://images.unsplash.com/photo-1552072047-399363238d71?q=80&w=2070&auto=format&fit=crop" 
                alt="The Guerreiro Mats"
              />
            </div>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-36 md:h-36 bg-primary skew-x-[-12deg] flex items-center justify-center p-3 shadow-xl z-20">
              <span className="font-headline font-black text-white text-center leading-tight text-[10px] md:text-sm uppercase tracking-tighter italic">EST. <br /> MMXXIV</span>
            </div>
          </div>
        </div>
      </section>

      {/* Origins & History Section */}
      <section className="py-16 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] bg-surface-container -rotate-3 overflow-hidden border-4 border-white shadow-xl">
                   <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-kinetic" src="https://images.unsplash.com/photo-1599058917233-35f999955363?q=80&w=2069&auto=format&fit=crop" alt="Historical BJJ" />
                </div>
                <div className="aspect-[4/5] bg-surface-container rotate-3 translate-y-6 md:translate-y-8 overflow-hidden border-4 border-white shadow-xl">
                   <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-kinetic" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" alt="The Mats" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-1 w-12 bg-secondary"></div>
                <span className="font-label font-bold text-secondary uppercase tracking-widest text-[10px] md:text-xs">Since MMXXIV</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-headline font-black uppercase tracking-tighter leading-tight">
                THE ROOTS OF <br/><span className="text-primary italic">GUERREIRO</span>
              </h2>
              <div className="space-y-4 text-sm md:text-lg opacity-70 leading-relaxed font-body">
                <p>
                  Established in 2024, Guerreiro Grappling was founded to fill a void in the Highway area's combat sports scene: the need for a precision-centric approach to Brazilian Jiu-Jitsu.
                </p>
                <p className="hidden sm:block">
                  What started as a vision to create a sanctuary for discipline in Gillitts has evolved into a thriving community engineering solutions under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision (The Method) Section */}
      <section className="py-16 md:py-32 bg-surface-container-low relative diagonal-divider-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12 md:mb-16 relative">
          <h2 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter opacity-[0.05] absolute left-1/2 -translate-x-1/2 -translate-y-8 md:-translate-y-12 select-none w-full">PRECISION</h2>
          <h2 className="text-3xl md:text-6xl font-headline font-black uppercase tracking-tighter relative z-10">THE GUERREIRO <span className="text-secondary italic">METHOD</span></h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center md:text-left">
          <div className="space-y-3">
             <h3 className="text-xl md:text-2xl font-headline font-black uppercase flex items-center justify-center md:justify-start gap-2">
               <span className="w-8 h-px bg-primary hidden md:block"></span>
               01. Technical Mastery
             </h3>
             <p className="opacity-70 text-sm md:text-base leading-relaxed">
               We believe every millimeter matters. Our curriculum is built on structural alignment, turning every grip into a mechanical advantage.
             </p>
          </div>
          <div className="space-y-3">
             <h3 className="text-xl md:text-2xl font-headline font-black uppercase flex items-center justify-center md:justify-start gap-2">
               <span className="w-8 h-px bg-secondary hidden md:block"></span>
               02. Adaptive Flow
             </h3>
             <p className="opacity-70 text-sm md:text-base leading-relaxed">
               Adaptability is the ultimate strength. We train students to remain responsive, merging instinct with logic until movement becomes autonomous.
             </p>
          </div>
        </div>
      </section>

      {/* Coaches Section - Fixed overlapping and sizing */}
      <section className="py-16 md:py-32 px-4 md:px-12 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-12 md:mb-20 text-center">THE ARCHITECTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {coaches.map((coach, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group max-w-[320px] mx-auto"
              >
                <div className="aspect-[5/6] relative overflow-hidden border-4 md:border-8 border-white shadow-2xl rotate-1 group-hover:rotate-0 transition-kinetic mb-6 md:mb-8">
                  <Image src={coach.img} alt={coach.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-kinetic scale-110 group-hover:scale-100" />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-headline font-black uppercase tracking-tighter">{coach.name}</h3>
                  <p className="font-label font-bold text-secondary uppercase tracking-[0.2em] text-[10px] md:text-xs pb-4 border-b border-primary/10">{coach.role}</p>
                  <p className="text-xs md:text-sm opacity-60 font-medium leading-relaxed pt-2">{coach.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Culture (Kinetic Family) */}
      <section className="pt-32 pb-16 md:py-32 bg-surface-container relative diagonal-divider-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20 space-y-2 md:space-y-4">
            <h2 className="text-2xl md:text-6xl font-headline font-black uppercase tracking-tighter">THE KINETIC <span className="text-primary italic">FAMILY</span></h2>
            <p className="font-label text-secondary font-bold tracking-[0.2em] md:tracking-[0.4em] text-[10px]">COMMUNITY FIRST · EGO LAST</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Cards remain the same but with smaller padding for mobile */}
            <div className="bg-background p-6 md:p-8 border-l-4 border-primary skew-x-[-2deg] hover:skew-x-0 transition-kinetic shadow-xl group">
               <span className="material-symbols-outlined text-3xl md:text-4xl text-primary mb-4 md:mb-6 block group-hover:scale-110 transition-transform">group</span>
               <h3 className="text-lg md:text-xl font-headline font-black uppercase mb-3 md:mb-4">Amazing People</h3>
               <p className="text-xs md:text-sm opacity-70 leading-relaxed font-body">"Jits people rock!" Earning your stripes builds camaraderie and a lifelong, supportive local community.</p>
            </div>
            <div className="bg-background p-6 md:p-8 border-l-4 border-secondary skew-x-[2deg] hover:skew-x-0 transition-kinetic shadow-xl group sm:translate-y-4 lg:translate-y-8">
               <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary mb-4 md:mb-6 block group-hover:scale-110 transition-transform">handyman</span>
               <h3 className="text-lg md:text-xl font-headline font-black uppercase mb-3 md:mb-4">Don't Break Toys</h3>
               <p className="text-xs md:text-sm opacity-70 leading-relaxed font-body">Everyone is family. We need each other to train—so do not break your teammates, you need them tomorrow!</p>
            </div>
            <div className="bg-background p-6 md:p-8 border-l-4 border-primary skew-x-[-2deg] hover:skew-x-0 transition-kinetic shadow-xl group">
               <span className="material-symbols-outlined text-3xl md:text-4xl text-primary mb-4 md:mb-6 block group-hover:rotate-12 transition-transform">soap</span>
               <h3 className="text-lg md:text-xl font-headline font-black uppercase mb-3 md:mb-4">The Gunk Master</h3>
               <p className="text-xs md:text-sm opacity-70 leading-relaxed font-body">Wash your Gi and gear after every session. Keep nails clipped. Hygiene is non-negotiable.</p>
            </div>
            <div className="bg-background p-6 md:p-8 border-l-4 border-secondary skew-x-[2deg] hover:skew-x-0 transition-kinetic shadow-xl group sm:translate-y-4 lg:translate-y-8">
               <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary mb-4 md:mb-6 block group-hover:scale-110 transition-transform">account_tree</span>
               <h3 className="text-lg md:text-xl font-headline font-black uppercase mb-3 md:mb-4">The Hierarchy</h3>
               <p className="text-xs md:text-sm opacity-70 leading-relaxed font-body">Lower belts move for higher belts when space is tight. Respect the mat tradition and senior belts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ascension Section - Optimized with Horizontal Snap on Mobile */}
      <section className="py-16 md:py-32 bg-background relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-12 md:mb-20 space-y-2 md:space-y-4 text-center">
            <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none">
              THE <span className="text-primary italic">ASCENSION</span>
            </h2>
            <p className="font-label font-bold text-secondary uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">YOUR ROADMAP TO MASTERY</p>
          </div>
          
          <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide px-4 -mx-4 md:px-0 md:mx-0">
            {belts.map((belt, i) => (
              <motion.div 
                key={belt.level}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-surface-container-low border-b-8 border-primary p-6 md:p-8 skew-x-[-2deg] hover:skew-x-0 transition-kinetic shadow-xl min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center"
              >
                <div className="absolute top-4 right-4 text-primary/5 font-headline font-black text-6xl group-hover:text-primary/10 transition-kinetic">0{i+1}</div>
                <div className={cn("w-16 h-4 mb-6 md:mb-8 skew-x-12", belt.color, belt.level === "White" && "border border-primary/20", belt.level === "Black" && "border-r-[24px] border-secondary")}></div>
                <h3 className="text-xl md:text-2xl font-headline font-black uppercase mb-1 md:mb-2 leading-tight">{belt.level} Belt</h3>
                <p className="text-[10px] font-label font-bold text-primary uppercase tracking-widest italic mb-4 md:mb-6">{belt.text}</p>
                <p className="text-sm opacity-70 leading-relaxed font-medium font-body">{belt.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {belts.map((_, i) => (
              <div key={i} className="h-1 w-4 bg-primary/20 rounded-full"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section (The Guerreiro Advantage) */}
      <section className="py-24 md:py-32 bg-surface-container-low relative diagonal-divider-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">THE GUERREIRO <span className="text-secondary italic">ADVANTAGE</span></h2>
             <p className="font-label font-bold text-primary uppercase tracking-[0.3em] text-xs">MORE THAN JUST MAT TIME</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             <div className="space-y-4">
               <div className="text-primary font-headline font-black text-5xl italic opacity-20">01</div>
               <h3 className="text-xl font-headline font-black uppercase italic">Self Defence</h3>
               <p className="text-sm opacity-70 leading-relaxed">BJJ is the most effective art for neutralizing larger opponents using leverage instead of power. Real-world skills for real-world scenarios.</p>
             </div>
             <div className="space-y-4">
               <div className="text-secondary font-headline font-black text-5xl italic opacity-20">02</div>
               <h3 className="text-xl font-headline font-black uppercase italic">Weight Loss</h3>
               <p className="text-sm opacity-70 leading-relaxed">A full-body metabolic engine. Our training sessions burn significant calories while building functional, adaptive strength.</p>
             </div>
             <div className="space-y-4">
               <div className="text-primary font-headline font-black text-5xl italic opacity-20">03</div>
               <h3 className="text-xl font-headline font-black uppercase italic">Cardio Engine</h3>
               <p className="text-sm opacity-70 leading-relaxed">Build elite cardiovascular endurance through live rolling. You won't just look fit; you'll have the gas tank to back it up.</p>
             </div>
             <div className="space-y-4">
               <div className="text-secondary font-headline font-black text-5xl italic opacity-20">04</div>
               <h3 className="text-xl font-headline font-black uppercase italic">Mental Focus</h3>
               <p className="text-sm opacity-70 leading-relaxed">Grappling is human chess. Develop the discipline to solve complex problems under intense physical and mental pressure.</p>
             </div>
           </div>
        </div>
      </section>

      {/* The Kinetic Gallery */}
      <section className="py-24 md:py-32 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-tight">FACILITY <br/><span className="text-primary italic">& TRAINING</span></h2>
            <p className="max-w-md opacity-60 font-medium text-sm md:text-right pb-2">Experience the high-velocity energy of the Guerreiro mats. From technical drilling to high-stakes rolling, this is where precision is engineered.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Gallery Item 1 */}
            <div className="col-span-2 row-span-2 relative aspect-[4/3] md:aspect-auto overflow-hidden border-4 border-white shadow-xl rotate-1 hover:rotate-0 transition-kinetic">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop" alt="The Gym" />
            </div>
            {/* Gallery Item 2 */}
            <div className="aspect-square relative overflow-hidden border-4 border-white shadow-xl -rotate-2 hover:rotate-0 transition-kinetic">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2069&auto=format&fit=crop" alt="Training 1" />
            </div>
            {/* Gallery Item 3 */}
            <div className="aspect-square relative overflow-hidden border-4 border-white shadow-xl rotate-3 hover:rotate-0 transition-kinetic">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop" alt="Training 2" />
            </div>
            {/* Gallery Item 4 */}
            <div className="col-span-2 aspect-[2/1] relative overflow-hidden border-4 border-white shadow-xl -rotate-1 hover:rotate-0 transition-kinetic">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" alt="Training 3" />
            </div>
            {/* Gallery Item 5 */}
            <div className="aspect-square relative overflow-hidden border-4 border-white shadow-xl -rotate-3 hover:rotate-0 transition-kinetic">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop" alt="Training 4" />
            </div>
            {/* Gallery Item 6 */}
            <div className="aspect-square relative overflow-hidden border-4 border-white shadow-xl rotate-1 hover:rotate-0 transition-kinetic">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" alt="Training 5" />
            </div>
            {/* Gallery Item 7 */}
            <div className="col-span-2 aspect-[2/1] relative overflow-hidden border-4 border-white shadow-xl rotate-2 hover:rotate-0 transition-kinetic">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1510832198440-a52376950479?q=80&w=2067&auto=format&fit=crop" alt="Training 6" />
            </div>
            {/* Gallery Item 8 */}
            <div className="aspect-square hidden md:block relative overflow-hidden border-4 border-white shadow-xl -rotate-2 hover:rotate-0 transition-kinetic">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1974&auto=format&fit=crop" alt="Training 7" />
            </div>
            {/* Gallery Item 9 */}
            <div className="aspect-square hidden md:block relative overflow-hidden border-4 border-white shadow-xl rotate-3 hover:rotate-0 transition-kinetic">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2070&auto=format&fit=crop" alt="Training 8" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-40 bg-surface-container relative overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
          <span className="font-headline font-black text-[40vw] leading-none tracking-tighter text-on-surface uppercase">JOIN</span>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
           <h2 className="text-6xl md:text-9xl font-headline font-black uppercase tracking-tighter leading-none italic">
             START THE <span className="text-secondary">JOURNEY</span>
           </h2>
           <p className="text-xl md:text-2xl font-label font-bold text-primary uppercase tracking-[0.2em]">Try a FREE class. No fancy kit – just you.</p>
           <button 
             onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
             className="torque-gradient text-white px-12 py-6 font-headline font-black text-2xl md:text-3xl skew-x-[-12deg] hover:skew-x-0 transition-all uppercase shadow-[10px_10px_0px_0px_rgba(0,89,187,0.3)] hover:shadow-none hover:translate-y-2"
           >
             CLAIM YOUR MAT SPACE
           </button>
        </div>
      </section>
    </main>
  );
}
