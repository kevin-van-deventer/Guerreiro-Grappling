"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import { ShieldAlert, Droplets, UserCheck, Scale, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/PageHero";

const ruleSections = [
  {
    title: "Safety First",
    icon: <ShieldAlert className="w-12 h-12 text-primary" />,
    rules: [
      "Remove all jewellery before stepping onto the mat.",
      "Never attempt techniques outside your current skill level.",
      "Alert instructors immediately of any injury or discomfort.",
      "Maintain a pace that allows for technical execution, not brute force.",
    ]
  },
  {
    title: "Hygiene Standard",
    icon: <Droplets className="w-12 h-12 text-secondary" />,
    rules: [
      "Wash your Gi and rash guards after EVERY session.",
      "Keep finger and toe nails clipped short (no scratching).",
      "Do not train if you have any skin infection or contagious illness.",
      "Ensure hands and feet are clean before stepping on the mats.",
    ]
  },
  {
    title: "Mat Etiquette",
    icon: <UserCheck className="w-12 h-12 text-primary" />,
    rules: [
      "Respect the hierarchy: Lower ranks move for higher ranks on the mat.",
      "Be gracious in both victory and defeat.",
      "No coaching from the sidelines during sparring.",
      "Arrive on time and ready to train physically and mentally.",
    ]
  },
  {
    title: "Rolling Conduct",
    icon: <Heart className="w-12 h-12 text-secondary" />,
    rules: [
      "The junior partner sets the pace of the roll.",
      "Do not be a bully. Seek to learn, not to purely dominate.",
      "Respect the 'tap' instantly. It is a sign of mutual respect and learning.",
      "No bragging about submissions. What happens on the mat stays on the mat.",
    ]
  }
];

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      <Navbar />

      <PageHero
        title="MAT"
        highlight="COMMANDMENTS"
        eyebrow="PROTOCOL · SURVIVAL · RESPECT"
        ghostWord="LAW"
        accentColor="bg-secondary"
      />

      {/* Admin Protocol Section */}
      <section className="py-20 md:py-28 bg-background relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-secondary"></div>
                <span className="font-label font-bold text-secondary uppercase tracking-widest text-xs">ACADEMY LOGISTICS</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">THE ADMIN <br/><span className="text-primary italic">PROTOCOL</span></h2>
              <p className="text-lg opacity-70 leading-relaxed font-body">
                The mat requires discipline, but the academy requires protocol. To keep Guerreiro Grappling running as a precision engine, we adhere to the following business guidelines:
              </p>
            </div>
            <div className="space-y-6 bg-surface-container-low p-8 md:p-12 border-l-8 border-primary skew-x-[-2deg] shadow-2xl relative">
              <div className="absolute top-4 right-4 text-primary/10 font-headline font-black text-6xl">ADMIN</div>
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4 items-center">
                  <span className="text-primary font-headline font-black text-2xl italic">01.</span>
                  <p className="font-headline font-bold text-lg uppercase">Month-to-Month Contracts. No long-term traps.</p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-primary font-headline font-black text-2xl italic">02.</span>
                  <p className="font-headline font-bold text-lg uppercase text-secondary">One Month Termination Notice Required.</p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-primary font-headline font-black text-2xl italic">03.</span>
                  <p className="font-headline font-bold text-lg uppercase">Fees payable in advance by the 3rd of each month.</p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-primary font-headline font-black text-2xl italic">04.</span>
                  <p className="font-headline font-bold text-lg uppercase">No payment holidays for holidays or absences.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Mat Law (Safety & Etiquette) */}
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 bg-surface-container-low relative diagonal-divider-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter">THE MAT <span className="text-secondary italic">LAW</span></h2>
            <p className="font-label font-bold text-primary uppercase tracking-widest text-xs mt-4">TRADITION · SAFETY · RESPECT</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background p-10 border-t-8 border-primary skew-y-[-2deg] hover:skew-y-0 transition-kinetic shadow-2xl"
            >
              <h3 className="text-2xl font-headline font-black uppercase mb-6 border-b border-primary/20 pb-2">Don't Break Toys</h3>
              <p className="opacity-70 leading-relaxed font-body italic mb-6">"Everyone is family so be careful – we need each other to train, so do not break your toys, you need them tomorrow."</p>
              <ul className="space-y-3 font-headline font-bold text-sm uppercase opacity-90">
                <li className="flex gap-2"><span className="text-primary">/</span> Respect the tap instantly</li>
                <li className="flex gap-2"><span className="text-primary">/</span> Junior partner sets the pace</li>
                <li className="flex gap-2"><span className="text-primary">/</span> No ego-rolling</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background p-10 border-t-8 border-secondary skew-y-[2deg] hover:skew-y-0 transition-kinetic shadow-2xl md:-translate-y-8"
            >
              <h3 className="text-2xl font-headline font-black uppercase mb-6 border-b border-secondary/20 pb-2">The Hierarchy</h3>
              <p className="opacity-70 leading-relaxed font-body mb-6">Lower ranks move for higher ranks when space is tight. Higher-ranking teammates and instructors always have right-of-way.</p>
              <ul className="space-y-3 font-headline font-bold text-sm uppercase opacity-90">
                <li className="flex gap-2"><span className="text-secondary">/</span> Respect the Black Belts</li>
                <li className="flex gap-2"><span className="text-secondary">/</span> Clear the path for senior rolls</li>
                <li className="flex gap-2"><span className="text-secondary">/</span> Listen when the mat speaks</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background p-10 border-t-8 border-primary skew-y-[-2deg] hover:skew-y-0 transition-kinetic shadow-2xl"
            >
              <h3 className="text-2xl font-headline font-black uppercase mb-6 border-b border-primary/20 pb-2">Mat Safety</h3>
              <p className="opacity-70 leading-relaxed font-body mb-6">Remove all jewellery before training. Alert instructors of any injuries or medical conditions before the first whistle.</p>
              <ul className="space-y-3 font-headline font-bold text-sm uppercase opacity-90">
                <li className="flex gap-2"><span className="text-primary">/</span> Zero Jewellery Policy</li>
                <li className="flex gap-2"><span className="text-primary">/</span> Report injuries immediately</li>
                <li className="flex gap-2"><span className="text-primary">/</span> Clean mats after every session</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Gunk Master Standard (Hygiene) */}
      <section className="py-24 md:py-40 bg-background relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="relative">
             <div className="aspect-square bg-surface-container rotate-6 overflow-hidden border-8 border-white shadow-2xl skew-x-[-4deg]">
                <img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1582213726893-edc4446bbda3?q=80&w=2070&auto=format&fit=crop" alt="Clean Mats" />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 md:p-12 skew-x-[-12deg] shadow-2xl">
                <h3 className="text-4xl md:text-5xl font-headline font-black uppercase italic leading-none">THE GUNK <br/>MASTER</h3>
             </div>
           </div>
           <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">HYGIENE <br/><span className="text-secondary italic">NON-NEGOTIABLE</span></h2>
              <div className="space-y-6 font-body text-lg opacity-70">
                <p>
                  "Scratching is not a technique." Keep your finger and toe nails clipped short. We train hard, we sweat, but we stay clean.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-primary text-3xl">wash</span>
                    <p className="text-sm font-headline font-black uppercase">Wash all gear after EVERY session. No exceptions.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-secondary text-3xl">error</span>
                    <p className="text-sm font-headline font-black uppercase">No skin diseases allowed on the mats (Ringworm, Staph, etc).</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* The General Combat Law (Rules of Engagement) */}
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 bg-surface-container relative diagonal-divider-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter">RULES OF <span className="text-primary italic">ENGAGEMENT</span></h2>
            <p className="font-label font-bold text-secondary uppercase tracking-[0.3em] text-xs">BJJ · MMA · KICKBOXING</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-background p-10 border-l-8 border-primary skew-x-[-2deg] shadow-xl space-y-6">
              <h3 className="text-3xl font-headline font-black uppercase italic border-b border-primary/20 pb-2">The BJJ Law</h3>
              <p className="opacity-70 font-body text-lg leading-relaxed">
                Brazilian Jiu-Jitsu is a grappling art. In pure BJJ sessions, **zero striking** is permitted. No punches, kicks, elbows, or headbutts. The goal is mechanical leverage and submission, not impact.
              </p>
            </div>
            <div className="bg-background p-10 border-l-8 border-secondary skew-x-[2deg] shadow-xl space-y-6">
              <h3 className="text-3xl font-headline font-black uppercase italic border-b border-secondary/20 pb-2">MMA & Striking</h3>
              <p className="opacity-70 font-body text-lg leading-relaxed">
                During MMA and Kickboxing sessions, striking is controlled. Always wear appropriate protection (shin guards, mouthguards, headgear). "Light technical sparring" means 20-30% power. We are here to learn together, not win a world title on a Tuesday.
              </p>
            </div>
          </div>

          {/* The Forbidden 5 */}
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-primary/20 p-12 relative overflow-hidden bg-surface-container-low">
              <h3 className="text-4xl font-headline font-black uppercase italic mb-12 text-center relative z-10"><span className="text-primary">THE FORBIDDEN</span> 5</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                 <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center text-3xl font-headline font-black group-hover:bg-primary group-hover:text-white transition-all">01</div>
                    <p className="font-headline font-black uppercase tracking-tight text-sm">No Eye Gouging or Biting</p>
                 </div>
                 <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-16 h-16 rounded-full border-2 border-secondary flex items-center justify-center text-3xl font-headline font-black group-hover:bg-secondary group-hover:text-white transition-all">02</div>
                    <p className="font-headline font-black uppercase tracking-tight text-sm">No Small Joint Manipulation</p>
                 </div>
                 <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center text-3xl font-headline font-black group-hover:bg-primary group-hover:text-white transition-all">03</div>
                    <p className="font-headline font-black uppercase tracking-tight text-sm">No Striking in Pure Grappling</p>
                 </div>
                 <div className="flex flex-col items-center text-center gap-4 group">
                    <div className="w-16 h-16 rounded-full border-2 border-secondary flex items-center justify-center text-3xl font-headline font-black group-hover:bg-secondary group-hover:text-white transition-all">04</div>
                    <p className="font-headline font-black uppercase tracking-tight text-sm">No Hair Pulling or Fish Hooking</p>
                 </div>
                 <div className="flex flex-col items-center text-center gap-4 group md:col-span-2 lg:col-span-1">
                    <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center text-3xl font-headline font-black group-hover:bg-primary group-hover:text-white transition-all">05</div>
                    <p className="font-headline font-black uppercase tracking-tight text-sm">Never Ignore the "Tap"</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Law of the Tap (Longevity Philosophy) */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-surface-container -rotate-3 p-8 md:p-16 border-4 border-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-headline font-black text-8xl text-primary/5 uppercase rotate-12">TAP</div>
                <h3 className="text-4xl md:text-5xl font-headline font-black uppercase italic mb-8 relative z-10 leading-none">TAP EARLY. <br/><span className="text-primary italic">TAP OFTEN.</span></h3>
                <p className="text-lg opacity-70 leading-relaxed font-body relative z-10">
                  The tap is a sign of mutual trust. It is not a defeat; it is the reset button that allows you to train for another 20 years. Tapping means you've been caught and you've learned.
                </p>
                <div className="mt-8 space-y-4 font-headline font-black uppercase italic relative z-10">
                  <p className="flex items-center gap-3"><span className="w-6 h-px bg-secondary"></span> Physical Tap: 2+ taps on partner</p>
                  <p className="flex items-center gap-3"><span className="w-6 h-px bg-secondary"></span> Verbal Tap: Clear "Tap!" exclamation</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">THE CREED OF <br/><span className="text-secondary italic">LONGEVITY</span></h2>
              <div className="space-y-6 text-lg opacity-70 font-body">
                <p>
                  Combat sports are games of physical mathematics. We value longevity over momentary pride. If you are caught in a submission and cannot physically maneuver out, tap immediately. 
                </p>
                <p>
                  Refusing to tap out of ego leads to injury. Chronic ego leads to being banned from the mats. We need each other healthy to improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combat Equipment & No-Go Zones */}
      <section className="py-24 md:py-32 bg-surface-container relative diagonal-divider-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">EQUIPMENT & <span className="text-primary italic">PROTOCOL</span></h2>
            <p className="font-label font-bold text-secondary uppercase tracking-[0.3em] text-xs">READY FOR THE MATS</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Equipment Checklist */}
            <div className="space-y-10">
              <h3 className="text-3xl font-headline font-black uppercase italic tracking-tighter border-b-2 border-primary pb-2 inline-block">MANDATORY GEAR</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-background shadow-lg skew-x-[-2deg]">
                   <h4 className="font-headline font-black uppercase text-sm mb-2 text-primary">MMA / Striking</h4>
                   <ul className="text-xs space-y-2 opacity-70 font-bold uppercase tracking-wider">
                     <li>/ 16oz Boxing Gloves</li>
                     <li>/ MMA Sparring Gloves</li>
                     <li>/ Shin Guards</li>
                     <li>/ Mouth Guard (Essential)</li>
                   </ul>
                </div>
                <div className="p-6 bg-background shadow-lg skew-x-[2deg]">
                   <h4 className="font-headline font-black uppercase text-sm mb-2 text-secondary">Grappling / BJJ</h4>
                   <ul className="text-xs space-y-2 opacity-70 font-bold uppercase tracking-wider">
                     <li>/ Clean Gi (Kimono)</li>
                     <li>/ Rank-Specific Belt</li>
                     <li>/ Compression Rash Guard</li>
                     <li>/ Mouth Guard (Recommended)</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* No-Go Zones (MMA Rules) */}
            <div className="bg-foreground text-background p-10 skew-x-[-2deg] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 torque-gradient"></div>
              <h3 className="text-3xl font-headline font-black uppercase italic tracking-tighter mb-8 relative z-10">STRIKING <span className="text-secondary italic">NO-GO ZONES</span></h3>
              <ul className="space-y-4 relative z-10">
                 <li className="flex gap-4 items-center">
                   <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-black text-foreground">X</div>
                   <p className="font-headline font-bold uppercase">Back of the Head / Spine</p>
                 </li>
                 <li className="flex gap-4 items-center">
                   <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-black text-foreground">X</div>
                   <p className="font-headline font-bold uppercase">The Groin (Cup is mandatory)</p>
                 </li>
                 <li className="flex gap-4 items-center">
                   <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-black text-foreground">X</div>
                   <p className="font-headline font-bold uppercase">The Throat / Trachea Area</p>
                 </li>
                 <li className="flex gap-4 items-center">
                   <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-black text-foreground">X</div>
                   <p className="font-headline font-bold uppercase">Eye Poking & Fish Hooking</p>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Persistence Footer Quote */}
      <section className="py-24 md:py-32 bg-background flex justify-center text-center px-4">
        <h3 className="text-2xl md:text-4xl font-headline font-black italic uppercase max-w-4xl opacity-40">
          "The junior partner sets the pace. We need each other to train, so be a good teammate."
        </h3>
      </section>
    </div>
  );
}
