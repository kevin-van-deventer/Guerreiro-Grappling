"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
export default function HomePage() {
  const dualityRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: dualityRef,
    offset: ["start end", "end start"]
  });

  // Roll Animations for Duality section
  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], ["-120%", "0%", "-120%"]);
  const leftRotate = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-180, -2, -2, -180]);
  
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], ["-150%", "0%", "-150%"]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-360, 2, 2, -360]);

  return (
    <div className="bg-background text-on-background font-body">
      <section className="relative min-h-[90vh] md:min-h-[85vh] lg:min-h-[100vh] flex items-center pt-28 pb-10 md:pt-[104px] md:pb-12 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
          <span className="font-headline font-black text-[30vw] leading-none tracking-tighter text-on-surface select-none uppercase">FLOW</span>
        </div>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-black leading-[0.95] tracking-tighter uppercase">
              DURBAN&apos;S PREMIER <br /> <span className="text-primary italic">BJJ</span> GYM
            </h1>
            <p className="text-base md:text-lg max-w-lg opacity-80 font-medium leading-relaxed">
              Brazilian Jiu-Jitsu, MMA &amp; Kickboxing in Gillitts, Durban. At Guerreiro Grappling, we engineer kinetic mastery through disciplined motion &mdash; for beginners, competitors, and kids (ages 7–14). Serving Kloof, Hillcrest, Winston Park &amp; Waterfall.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
                className="torque-gradient text-white px-8 py-4 font-headline font-black text-lg md:text-xl skew-x-[-12deg] hover:skew-x-0 transition-all uppercase shadow-[6px_6px_0px_0px_rgba(0,89,187,0.3)] w-full sm:w-auto active:translate-y-1 active:shadow-none"
              >
                START YOUR JOURNEY
              </button>
              <button className="font-headline font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors uppercase skew-x-[-12deg] hover:skew-x-0 mt-2 sm:mt-0">
                VIEW PROGRAMS
              </button>
            </div>
          </div>
          <div className="relative max-w-[320px] md:max-w-md lg:max-w-[480px] mx-auto w-full mt-6 lg:mt-0">
            <div className="aspect-square bg-surface-container relative rotate-2 overflow-hidden border-4 md:border-8 border-white shadow-2xl">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8w4uHNH31YXjIofepWciMWM-MS3JzU65mKIcfAqg7AU6fvfBPlq-Axf4k7vD-V4haI5l09Q0JGZQggCb-8uLEgf-QWQCZLEmL-aoN6gngoCOuvQXXBSq1i8fwDD9KmlbgkdczprgJHy-2xvAwJfrPHbc6vrCCtsm5-xDX5IaFw_TdDqY9_ue6DXxeVb3sy3E5ZQNnwvjroth3KH1qseU70hf6wGlVB_oUIbutassHt0B0qtVpDJjrVvLm8dYruhNNQoT6R_C7qpDs" 
                alt="High-level Brazilian Jiu-Jitsu training on the mats at Guerreiro Grappling in Gillitts, Durban"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-28 h-28 md:w-40 md:h-40 bg-secondary skew-x-[-12deg] flex items-center justify-center p-3 shadow-xl z-20">
              <span className="font-headline font-black text-white text-center leading-tight text-xs md:text-sm uppercase tracking-tighter">ESTABLISHED <br /> MMXXIV</span>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibility & Power Section */}
      <section ref={dualityRef} className="py-16 md:py-24 bg-surface-container-low relative diagonal-divider-top overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-12">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <motion.img 
                style={{ x: leftX, rotate: leftRotate }}
                className="w-full h-48 md:h-64 object-cover border-4 border-white shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbrInajy-N9sldJMErvdgJJjtu1MQT6meOKDr9WYs44d5HXVRykVPF7oWmAwP5g2WpX-wlOvyFtCu8yBcGYY8uuCsIaFtenJWj4_EKSU-GHF778hLElpDE1QHZNnulXhxMbhyK96_3ErhYbWph85dc5548A7zFjIoPed1r2eYnxjUN9UDLMg3y8BhK9ovdp4lieq6jNilOwPaZQ3MdAEgvajcczQQ2DprpF6qeQoyaaj87D84cLool6UOZt8hsQoyyo20dg6DofEiZ" 
                alt="Guerreiro Grappling students practicing BJJ drills in Durban" 
              />
              <motion.img 
                style={{ x: rightX, rotate: rightRotate }}
                className="w-full h-48 md:h-64 object-cover translate-y-4 md:translate-y-8 border-4 border-white shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRsnk9LnVRETZi0ELuA7-H0z-0Cy4i1SzI9nDBFZvHQyQRsFm2gvr7LggujL7L9F1D5XBYQdGDB4Hbs_K9lFES49G0nCwd6fTU1vF9ezy9E6c7y3auLwOs_mnwTCo4kn2JP5tAuqlPoLWMGPfrAxJ6TK0Qz96YeCbPveaoTu5-ODuot0KLuoOJCX4fco6vkm-G2aQiRj0PgC_E5IrFCHF9tPzb3DM3UfxdLJktK3oisv0pNsTQa-a4JNqcNyuBHnm-Y6eRyOh0_e_B" 
                alt="Brazilian Jiu-Jitsu sparring session in Gillitts gym" 
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-secondary"></div>
              <span className="font-label font-bold text-secondary uppercase tracking-widest text-xs md:text-sm">KINETIC SPECS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter">THE DUALITY OF <span className="italic text-primary">FORCE</span></h2>
            <p className="text-base md:text-lg opacity-70">
              Precision is the bridge between flexibility and power. Our curriculum focuses on the structural alignment of the human body, turning every movement into a mechanical advantage.
            </p>
            <ul className="space-y-4 font-label font-bold text-xs md:text-sm uppercase">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">bolt</span> Leverage-Based Systems</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">rebase_edit</span> Adaptive Flow Transitions</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">fitness_center</span> Explosive Counter-Control</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Arsenal Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter mb-12 md:text-center">CORE <span className="text-primary italic">ARSENAL</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden bg-black aspect-[4/5] skew-x-[-2deg] md:skew-x-[-4deg] hover:skew-x-0 transition-all duration-500">
              <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8w4uHNH31YXjIofepWciMWM-MS3JzU65mKIcfAqg7AU6fvfBPlq-Axf4k7vD-V4haI5l09Q0JGZQggCb-8uLEgf-QWQCZLEmL-aoN6gngoCOuvQXXBSq1i8fwDD9KmlbgkdczprgJHy-2xvAwJfrPHbc6vrCCtsm5-xDX5IaFw_TdDqY9_ue6DXxeVb3sy3E5ZQNnwvjroth3KH1qseU70hf6wGlVB_oUIbutassHt0B0qtVpDJjrVvLm8dYruhNNQoT6R_C7qpDs" alt="Expert joint lock technique demonstrated at BJJ classes in Hillcrest" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl md:text-4xl font-headline font-black text-white uppercase tracking-tighter font-headline">Joint Locks</h3>
                <p className="text-white/70 font-label text-[10px] md:text-xs uppercase mt-2">Maximum Efficiency // Minimum Effort</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative overflow-hidden bg-black aspect-[4/5] skew-x-[2deg] md:skew-x-[4deg] hover:skew-x-0 transition-all duration-500 md:translate-y-8">
              <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbrInajy-N9sldJMErvdgJJjtu1MQT6meOKDr9WYs44d5HXVRykVPF7oWmAwP5g2WpX-wlOvyFtCu8yBcGYY8uuCsIaFtenJWj4_EKSU-GHF778hLElpDE1QHZNnulXhxMbhyK96_3ErhYbWph85dc5548A7zFjIoPed1r2eYnxjUN9UDLMg3y8BhK9ovdp4lieq6jNilOwPaZQ3MdAEgvajcczQQ2DprpF6qeQoyaaj87D84cLool6UOZt8hsQoyyo20dg6DofEiZ" alt="Advanced guard passing strategy for competitive BJJ in Durban" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl md:text-4xl font-headline font-black text-white uppercase tracking-tighter">Guard Passing</h3>
                <p className="text-white/70 font-label text-[10px] md:text-xs uppercase mt-2">Dynamic Pressure // Structural Collapse</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative overflow-hidden bg-black aspect-[4/5] skew-x-[-2deg] md:skew-x-[-4deg] hover:skew-x-0 transition-all duration-500">
              <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRsnk9LnVRETZi0ELuA7-H0z-0Cy4i1SzI9nDBFZvHQyQRsFm2gvr7LggujL7L9F1D5XBYQdGDB4Hbs_K9lFES49G0nCwd6fTU1vF9ezy9E6c7y3auLwOs_mnwTCo4kn2JP5tAuqlPoLWMGPfrAxJ6TK0Qz96YeCbPveaoTu5-ODuot0KLuoOJCX4fco6vkm-G2aQiRj0PgC_E5IrFCHF9tPzb3DM3UfxdLJktK3oisv0pNsTQa-a4JNqcNyuBHnm-Y6eRyOh0_e_B" alt="Powerful MMA takedown sequence at Guerreiro Grappling Durban" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl md:text-4xl font-headline font-black text-white uppercase tracking-tighter">Takedowns</h3>
                <p className="text-white/70 font-label text-[10px] md:text-xs uppercase mt-2">Violent Intent // Precision Execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The VORTEX Method */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low diagonal-divider-bottom relative">
        <div className="max-w-7xl mx-auto py-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">THE GUERREIRO METHOD</h2>
            <p className="font-label text-secondary font-bold tracking-[0.1em] md:tracking-[0.3em] text-xs md:text-sm">ENGINEERING THE ULTIMATE HUMAN WEAPON</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-surface-container-lowest p-8 md:p-10 border-b-8 border-primary skew-x-[-2deg] md:skew-x-[-4deg] hover:skew-x-0 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl md:text-5xl text-primary mb-6 block">biotech</span>
              <h3 className="text-xl md:text-2xl font-headline font-black mb-4 uppercase">Technical Precision</h3>
              <p className="opacity-70 mb-8 text-sm md:text-base font-body">Every millimeter matters. We break down the mechanics of every grip, frame, and pivot to ensure maximum efficiency with minimum effort.</p>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
            </div>
            {/* Card 2 */}
            <div className="group bg-surface-container-lowest p-8 md:p-10 border-b-8 border-secondary skew-x-[2deg] md:skew-x-[4deg] hover:skew-x-0 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl md:text-5xl text-secondary mb-6 block">settings_accessibility</span>
              <h3 className="text-xl md:text-2xl font-headline font-black mb-4 uppercase">Adaptive Strength</h3>
              <p className="opacity-70 mb-8 text-sm md:text-base font-body">Strength is useless if it's static. We train your body to remain explosive and responsive from any position, especially under pressure.</p>
              <div className="h-1 w-0 group-hover:w-full bg-secondary transition-all duration-500"></div>
            </div>
            {/* Card 3 */}
            <div className="group bg-surface-container-lowest p-8 md:p-10 border-b-8 border-primary skew-x-[-2deg] md:skew-x-[-4deg] hover:skew-x-0 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl md:text-5xl text-primary mb-6 block">cyclone</span>
              <h3 className="text-xl md:text-2xl font-headline font-black mb-4 uppercase">Kinetic Mastery</h3>
              <p className="opacity-70 mb-8 text-sm md:text-base font-body">The final stage is flow. Merging instinct with technique until the movement becomes autonomous and the submission is inevitable.</p>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-16 italic text-right">VOICES FROM THE <span className="text-secondary">MATS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="relative group">
              <div className="bg-primary text-white p-8 md:p-10 skew-x-[-4deg] md:skew-x-[-8deg] shadow-2xl relative z-10 hover:skew-x-0 transition-all duration-500">
                <p className="text-xl md:text-2xl font-headline font-bold italic font-headline">"Guerreiro Grappling completely changed how I think about leverage. It's not about being the strongest; it's about being the smartest on the mats."</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-white"></div>
                  <p className="font-label font-bold uppercase tracking-widest text-[10px] md:text-sm italic">David Chen // Blue Belt</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-secondary skew-x-[-4deg] md:skew-x-[-8deg] -z-10 group-hover:skew-x-0 transition-all duration-500"></div>
            </div>
            {/* Testimonial 2 */}
            <div className="relative group mt-8 md:mt-24">
              <div className="bg-on-background text-background p-8 md:p-10 skew-x-[4deg] md:skew-x-[8deg] shadow-2xl relative z-10 hover:skew-x-0 transition-all duration-500">
                <p className="text-xl md:text-2xl font-headline font-bold italic font-headline">"The instructors here don't just show techniques; they explain the physics. My game has evolved more in 6 months here than 2 years elsewhere."</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-primary"></div>
                  <p className="font-label font-bold uppercase tracking-widest text-[10px] md:text-sm text-primary italic">Samantha Reed // Purple Belt</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary skew-x-[4deg] md:skew-x-[8deg] -z-10 group-hover:skew-x-0 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ascension Section */}
      <section className="py-16 md:py-24 bg-on-background text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center -rotate-12">
          <span className="font-headline font-black text-[20vw] leading-none tracking-tighter text-electric-blue uppercase tracking-widest">RANK</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none">
              THE ASCENSION: <br/><span className="text-electric-blue italic">CLAIM YOUR BELT,</span> CLAIM YOUR THRONE
            </h2>
            <div className="h-1 w-24 bg-electric-blue"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-background">
            {/* White Belt */}
            <div className="group relative bg-neutral-900 border-l-4 border-white p-8 skew-x-[-4deg] hover:skew-x-0 transition-all duration-500 hover:bg-neutral-800">
              <div className="absolute top-4 right-4 text-neutral-800 font-headline font-black text-6xl group-hover:text-white/10 transition-colors uppercase">01</div>
              <div className="w-16 h-4 bg-white mb-6 skew-x-12"></div>
              <h3 className="text-2xl font-headline font-black uppercase mb-4">White Belt</h3>
              <p className="text-sm font-label opacity-60 uppercase tracking-widest italic mb-4">Foundation of Survival</p>
              <p className="text-sm opacity-80 leading-relaxed font-body">The stage of chaos and discovery. Learning to breathe while the world collapses around you.</p>
            </div>
            {/* Blue Belt */}
            <div className="group relative bg-neutral-900 border-l-4 border-electric-blue p-8 skew-x-[4deg] hover:skew-x-0 transition-all duration-500 hover:bg-neutral-800">
              <div className="absolute top-4 right-4 text-neutral-800 font-headline font-black text-6xl group-hover:text-electric-blue/10 transition-colors uppercase tracking-widest">02</div>
              <div className="w-16 h-4 bg-electric-blue mb-6 -skew-x-12"></div>
              <h3 className="text-2xl font-headline font-black uppercase mb-4">Blue Belt</h3>
              <p className="text-sm font-label text-electric-blue uppercase tracking-widest italic mb-4">The Technical Blueprint</p>
              <p className="text-sm opacity-80 leading-relaxed font-body">Where the scattered pieces begin to form a machine. Precision replaces desperation.</p>
            </div>
            {/* Purple Belt */}
            <div className="group relative bg-neutral-900 border-l-4 border-purple-600 p-8 skew-x-[-4deg] hover:skew-x-0 transition-all duration-500 hover:bg-neutral-800 lg:translate-y-8">
              <div className="absolute top-4 right-4 text-neutral-800 font-headline font-black text-6xl group-hover:text-purple-600/10 transition-colors uppercase tracking-widest">03</div>
              <div className="w-16 h-4 bg-purple-600 mb-6 skew-x-12"></div>
              <h3 className="text-2xl font-headline font-black uppercase mb-4">Purple Belt</h3>
              <p className="text-sm font-label text-purple-400 uppercase tracking-widest italic mb-4">The Architect of Flow</p>
              <p className="text-sm opacity-80 leading-relaxed font-body">Developing a signature game. You no longer react; you orchestrate the outcome.</p>
            </div>
            {/* Brown Belt */}
            <div className="group relative bg-neutral-900 border-l-4 border-amber-900 p-8 skew-x-[4deg] hover:skew-x-0 transition-all duration-500 hover:bg-neutral-800">
              <div className="absolute top-4 right-4 text-neutral-800 font-headline font-black text-6xl group-hover:text-amber-900/10 transition-colors uppercase tracking-widest">04</div>
              <div className="w-16 h-4 bg-amber-900 mb-6 -skew-x-12"></div>
              <h3 className="text-2xl font-headline font-black uppercase mb-4">Brown Belt</h3>
              <p className="text-sm font-label text-amber-600 uppercase tracking-widest italic mb-4">Refinement of Lethality</p>
              <p className="text-sm opacity-80 leading-relaxed font-body">Trimming the fat. Every movement is heavy, every grip is final. The predator's peak.</p>
            </div>
            {/* Black Belt */}
            <div className="group relative bg-neutral-900 border-l-4 border-red-600 p-8 skew-x-[-4deg] hover:skew-x-0 transition-all duration-500 hover:bg-neutral-800 lg:translate-y-8">
              <div className="absolute top-4 right-4 text-neutral-800 font-headline font-black text-6xl group-hover:text-red-600/10 transition-colors uppercase tracking-widest">05</div>
              <div className="w-16 h-4 bg-black border border-red-600 mb-6 skew-x-12 relative flex">
                <div className="w-1/3 h-full bg-red-600 absolute right-0"></div>
              </div>
              <h3 className="text-2xl font-headline font-black uppercase mb-4">Black Belt</h3>
              <p className="text-sm font-label text-red-500 uppercase tracking-widest italic mb-4">Absolute Mastery</p>
              <p className="text-sm opacity-80 leading-relaxed font-body">A new beginning. The fusion of body and technique into a single, autonomous entity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-32 bg-background relative md:[clip-path:polygon(0_0,100%_10%,100%_100%,0_100%)] overflow-hidden">
        <div className="absolute inset-0 torque-gradient opacity-[0.03] skew-y-12 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16 space-y-3">
            <p className="font-label font-bold text-primary uppercase tracking-[0.4em] text-xs">Monthly Memberships · No Long-term Contracts</p>
            <h2 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none italic text-foreground">
              INVEST IN <span className="text-primary">MASTERY</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 items-end">
            {[
              { name: "Kids (4-7)",   price: "500",   features: ["Coordination & Balance", "Discipline & Respect", "Anti-Bullying System", "Safe Environment"],      highlight: false },
              { name: "Teens (7-14)", price: "600",   features: ["Self-Defense Skills", "Confidence Building", "Physical Fitness", "Competition Prep"],              highlight: false },
              { name: "Adult MMA",    price: "600",   features: ["MMA Fundamentals", "Striking & Takedowns", "Clinch Work", "Cardiovascular Health"],                highlight: false },
              { name: "Adult BJJ",    price: "800",   features: ["BJJ Gi & No-Gi", "Ground Control", "Submission Mastery", "All Levels Welcome"],                    highlight: false },
              { name: "All Inclusive",price: "1,000", features: ["Every Class Access", "BJJ · MMA · KB", "Priority Booking", "Ultimate Value"],                      highlight: true  },
            ].map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex flex-col p-7 border-t-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  tier.highlight
                    ? "bg-primary border-primary lg:scale-105 lg:-translate-y-2"
                    : "bg-surface-container-lowest border-primary hover:border-primary/80"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neutral-900 dark:bg-white dark:text-neutral-900 text-white font-headline font-black text-[10px] uppercase tracking-widest px-4 py-1 shadow-lg whitespace-nowrap">
                    Best Value
                  </div>
                )}

                {/* Card number */}
                <div className={`font-headline font-black text-6xl absolute top-3 right-4 leading-none select-none ${tier.highlight ? "text-white/10" : "text-black/5 dark:text-white/5"}`}>
                  0{i + 1}
                </div>

                {/* Tier name */}
                <h3 className={`text-xl font-headline font-black uppercase tracking-tight mb-4 leading-tight ${tier.highlight ? "text-white" : "text-foreground"}`}>
                  {tier.name}
                </h3>

                {/* Price */}
                <div className={`flex items-baseline gap-1 mb-6 border-b pb-6 ${tier.highlight ? "border-white/20" : "border-foreground/10"}`}>
                  <span className={`text-4xl font-headline font-black tracking-tighter ${tier.highlight ? "text-white" : "text-primary"}`}>
                    R{tier.price}
                  </span>
                  <span className={`text-[10px] font-label font-bold uppercase tracking-widest ${tier.highlight ? "text-white/70" : "text-foreground/40"}`}>/&nbsp;month</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feat) => (
                    <li key={feat} className={`flex items-center gap-3 text-[11px] font-headline font-bold uppercase tracking-wider ${tier.highlight ? "text-white/90" : "text-foreground/70"}`}>
                      <span className={`w-1.5 h-1.5 flex-shrink-0 ${tier.highlight ? "bg-white" : "bg-primary"}`}></span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
                  className={`block w-full text-center font-headline font-black text-xs uppercase tracking-widest px-4 py-4 transition-all duration-300 shadow-lg ${
                    tier.highlight
                      ? "bg-white text-primary hover:bg-neutral-100"
                      : "bg-neutral-900 text-white hover:bg-primary dark:bg-white dark:text-neutral-900 dark:hover:bg-primary dark:hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Coaches Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-16 text-center">THE ARCHITECTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Josh Pretorius */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-6 rotate-2 group-hover:rotate-0 transition-transform duration-500 border-4 border-white shadow-xl relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtNNTE-LDb6ZS_VlVY0FCaK9DIUk2BNLgDmF-g3vJTYu_b9O34aIz1_N7eNQrdbrrjyJzNmLzXaBwYpYghS0d6FDuZQcxNi6EjeLMc9nV4_05sGTMTn-zTJ1ouETr0bhEr9pR0Z546s9-2sZyyiaWx0z0tMVa9ak0LwTc1IvNJLRxcoOalFFWQObGuhjZdRaVLivUNDWlgftH3DYcIlFg9Etc_t6p_xM3WPzVJPVmzEB6Kz0bUYvEg8cYg-NEzPzzYdyxSnP-0_SZe" alt="Josh Pretorius - Head BJJ and MMA Coach at Guerreiro Grappling" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="torque-gradient text-white font-headline font-black px-6 py-2 skew-x-[-12deg] tracking-widest text-xs uppercase shadow-xl border border-white/20 pointer-events-auto">
                    <a href="https://wa.me/+27824957760" target="_blank" rel="noopener noreferrer">Contact via WhatsApp</a>
                  </span>
                </div>
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tighter">Josh Pretorius</h3>
              <p className="font-label text-[10px] font-bold text-secondary uppercase tracking-widest italic pt-1">Head Coach</p>
            </div>
            {/* Annabelle Slabbert */}
            <div className="group cursor-pointer pt-0 md:pt-12">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-6 -rotate-2 group-hover:rotate-0 transition-transform duration-500 border-4 border-white shadow-xl relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdd9d9uDvced2r3B8HWinO7AF3unmGlIDWSa1TG_ACN1H-PL1COxI0MCxmZa_4nxQjWyTpIHKt_jzdLCnSLCp8iYaxSIV7C0otwy7T6TFMIZT2mNLcsBUtYGpAiaI6PI9fPauwoJRmrT1_KTOy5tIEZBkh_AdhWGY8Sly2cdzLwyoxiL_pBfma5BUVLoZNoQ-uQWVqYF52sApBKTuyuZlXNwyLqvifU5j6wZ7UZhMo-Gaprn-ZCdaS6O13Gq9If7fmiGonJv8gdqQP" alt="Annabelle Slabbert - Brazilian Jiu-Jitsu Instructor at Guerreiro Grappling" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="torque-gradient text-white font-headline font-black px-6 py-2 skew-x-[-12deg] tracking-widest text-xs uppercase shadow-xl border border-white/20 pointer-events-auto">
                    <a href="https://wa.me/+27824957760" target="_blank" rel="noopener noreferrer">Contact via WhatsApp</a>
                  </span>
                </div>
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tighter">Annabelle Slabbert</h3>
              <p className="font-label text-[10px] font-bold text-primary uppercase tracking-widest italic pt-1">Coach</p>
            </div>
            {/* Juanita Patten */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-6 rotate-2 group-hover:rotate-0 transition-transform duration-500 border-4 border-white shadow-xl relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJuDoZH2-ai2R47f1lyHo-2jbX_p1iHz6LZne0U5KVTp7FqZnM0bABjopY_bl-aCcf81h46to4lrQXmzR5PEa2v_3zsG8ZUAoHVF2csn27Yj5HJ-3Oe_fdRNf0NP-m6zXGOR9-meEsAqqJ1BJEojsyd76g4LX5RE1wIM0HzLqrUdmp06w-4D-uHbCqSkS6CiL0ux0U4DJe7G550qE219cRR1lO8Fd4q7LNL3FOACWFZ_3B5KDK6nqrJoMOO8BypvHnxu_S_vWUoE3f" alt="Juanita Patten - Nomad Jiu Jitsu Coach at Guerreiro Grappling Durban" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="torque-gradient text-white font-headline font-black px-6 py-2 skew-x-[-12deg] tracking-widest text-xs uppercase shadow-xl border border-white/20 pointer-events-auto">
                    <a href="https://juanitart8b.setmore.com/" target="_blank" rel="noopener noreferrer">Book Waitlist</a>
                  </span>
                </div>
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tighter">Juanita Patten</h3>
              <p className="font-label text-[10px] font-bold text-secondary uppercase tracking-widest italic pt-1">Coach // @nomad_jiujitsu000</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Arsenal (Disciplines) Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-x-clip overflow-y-visible">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
            
            {/* Sticky Left Column */}
            <div className="lg:sticky lg:top-32 lg:w-1/3 flex-shrink-0 z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-primary skew-x-[-12deg]"></div>
                <span className="font-label font-bold text-secondary uppercase tracking-[0.3em] text-xs">The Arsenal</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black uppercase tracking-tighter leading-[0.9] italic hyphens-auto">
                CHOOSE YOUR <br /><span className="text-white torque-gradient px-1">WEAPON</span>
              </h2>
              <p className="text-lg opacity-80 font-medium leading-relaxed max-w-sm pt-4">
                As Durban's premier combat sports academy, Guerreiro Grappling engineers elite performance. Explore our specialized curriculums designed to forge unbreakable habits, whether you focus on leverage, striking logic, or complete cage control.
              </p>
            </div>

            {/* Scrollable Right Column */}
            <div className="lg:w-2/3 flex flex-col gap-10 md:gap-16 relative z-20">
              
              {/* BJJ Card */}
              <div className="bg-white text-neutral-950 p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,89,187,0.1)] skew-x-[-2deg] transition-all duration-500 hover:skew-x-0 border-l-[12px] border-primary group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter leading-none">Brazilian<br/>Jiu-Jitsu</h3>
                  <span className="text-primary font-headline font-black text-6xl opacity-10 group-hover:opacity-100 transition-opacity duration-500 italic">01</span>
                </div>
                <p className="text-lg md:text-xl font-black mb-4 opacity-90 tracking-tight uppercase">Leverage Over Brute Strength.</p>
                <p className="font-medium text-neutral-600 leading-relaxed mb-8">
                  Jiu Jitsu, also known as Brazilian Jiu-Jitsu (BJJ), is a martial art and combat sport that focuses on ground fighting and submission techniques. It emphasizes leverage and technique over brute strength, allowing smaller individuals to overcome larger opponents. The fastest growing sport is here in Hillcrest.
                </p>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
                  className="font-headline font-black uppercase text-sm tracking-widest text-primary border-b-2 border-primary pb-1 group-hover:pl-4 transition-all"
                >
                  Start BJJ Training →
                </button>
              </div>

              {/* MMA & Kickboxing Card */}
              <div className="bg-white text-neutral-950 p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(255,255,255,0.05)] skew-x-[2deg] transition-all duration-500 hover:skew-x-0 border-r-[12px] border-secondary group relative right-0 lg:-right-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter leading-none">MMA &<br/>Kickboxing</h3>
                  <span className="text-secondary font-headline font-black text-6xl opacity-10 group-hover:opacity-100 transition-opacity duration-500 italic">02</span>
                </div>
                <p className="text-lg md:text-xl font-black mb-4 opacity-90 tracking-tight uppercase">Strength, Agility, and Precision.</p>
                <p className="font-medium text-neutral-600 leading-relaxed mb-8">
                  Our MMA and Kickboxing sessions are the perfect way to challenge yourself, get in top shape, and learn powerful self-defense techniques. These dynamic, high-energy combat sports combine cardiovascular conditioning with razor-sharp striking mechanics.
                </p>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
                  className="font-headline font-black uppercase text-sm tracking-widest text-secondary border-b-2 border-secondary pb-1 group-hover:pr-4 transition-all"
                >
                  Start MMA Training →
                </button>
              </div>

              {/* Kids BJJ Card */}
              <div className="bg-white text-neutral-950 p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,89,187,0.1)] skew-x-[-2deg] transition-all duration-500 hover:skew-x-0 border-l-[12px] border-primary group">
                 <div className="flex justify-between items-start mb-6">
                  <h3 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter leading-none">Kids<br/>Jiu-Jitsu</h3>
                  <span className="text-primary font-headline font-black text-6xl opacity-10 group-hover:opacity-100 transition-opacity duration-500 italic">03</span>
                </div>
                <p className="text-lg md:text-xl font-black mb-4 opacity-90 tracking-tight uppercase">Anti-Bullying & Discipline.</p>
                <p className="font-medium text-neutral-600 leading-relaxed mb-8">
                  A specialized program designed to introduce children to the principles and techniques of BJJ in a safe and age-appropriate manner. We focus on building coordination, balance, and flexibility while instilling core values like respect, discipline, and teamwork.
                </p>
                <button
                   onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
                  className="font-headline font-black uppercase text-sm tracking-widest text-primary border-b-2 border-primary pb-1 group-hover:pl-4 transition-all"
                >
                  Enroll Your Child →
                </button>
              </div>
              
              {/* Ladies Only Card */}
              <div className="bg-white text-neutral-950 p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(255,255,255,0.05)] skew-x-[2deg] transition-all duration-500 hover:skew-x-0 border-r-[12px] border-secondary group relative right-0 lg:-right-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter leading-none">Ladies<br/>Only Classes</h3>
                  <span className="text-secondary font-headline font-black text-6xl opacity-10 group-hover:opacity-100 transition-opacity duration-500 italic">04</span>
                </div>
                <p className="text-lg md:text-xl font-black mb-4 opacity-90 tracking-tight uppercase">Empowerment & Self-Defense.</p>
                <p className="font-medium text-neutral-600 leading-relaxed mb-8">
                  Designed to create a supportive and empowering environment for women of all skill levels. We actively curate a safe space where women can build confidence, learn highly effective self-defense techniques, and become part of a strong local community.
                </p>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
                  className="font-headline font-black uppercase text-sm tracking-widest text-secondary border-b-2 border-secondary pb-1 group-hover:pr-4 transition-all"
                >
                  Join the Community →
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* The Yield (Benefits) Section */}
      <section className="pt-32 pb-24 md:py-32 bg-surface-container-low relative diagonal-divider-top overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl md:text-6xl font-headline font-black uppercase tracking-tighter">THE YIELD</h2>
            <p className="font-label text-secondary font-bold tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm">THE ROI ON YOUR PHYSICAL INVESTMENT</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-background p-8 md:p-10 border-l-8 border-primary shadow-lg skew-x-[-2deg] transition-all duration-300 hover:skew-x-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">group</span>
                <h3 className="text-2xl font-headline font-black uppercase">Amazing People</h3>
              </div>
              <p className="opacity-80 font-medium leading-relaxed">
                You will meet some amazing individuals on this journey. Jits people rock! Earning your stripes builds deep camaraderie and a lifelong, supportive local community.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group bg-background p-8 md:p-10 border-l-8 border-secondary shadow-lg skew-x-[2deg] transition-all duration-300 hover:skew-x-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-secondary">security</span>
                <h3 className="text-2xl font-headline font-black uppercase">Self Defence</h3>
              </div>
              <p className="opacity-80 font-medium leading-relaxed">
                Jiu jitsu has incredibly powerful real-world self-defence applications. While 3 classes won't make you indestructible, consistent training engineers a highly capable, confident response to physical threats.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group bg-background p-8 md:p-10 border-l-8 border-secondary shadow-lg skew-x-[-2deg] transition-all duration-300 hover:skew-x-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-secondary">favorite</span>
                <h3 className="text-2xl font-headline font-black uppercase">Cardio Engine</h3>
              </div>
              <p className="opacity-80 font-medium leading-relaxed">
                Like any extreme physical exertion, your cardiovascular health and dynamic fitness are bound to improve massively. Rolling builds a gas tank that traditional gym workouts simply cannot match.
              </p>
            </div>
            {/* Card 4 */}
            <div className="group bg-background p-8 md:p-10 border-l-8 border-primary shadow-lg skew-x-[2deg] transition-all duration-300 hover:skew-x-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">local_fire_department</span>
                <h3 className="text-2xl font-headline font-black uppercase">Weight Loss</h3>
              </div>
              <p className="opacity-80 font-medium leading-relaxed">
                Many of our members record wonderful weight loss and physical recomposition shifts. Work hard, stay consistent on the mats, and you will see undeniable physical results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 md:py-32 bg-on-background text-background relative overflow-hidden diagonal-divider-top">
        <div className="absolute inset-0 torque-gradient opacity-10 skew-y-12 translate-y-20"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10 py-12 md:py-20">
          <h2 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter mb-8 italic">
            JOIN THE <span className="text-primary">FOLD</span>
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-80 font-medium max-w-2xl mx-auto italic">
            Stop watching from the sidelines. Step into Guerreiro Grappling and experience the evolution of your own potential. Limited memberships available for this season.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
            className="torque-gradient text-white py-6 md:py-8 px-8 md:px-16 font-headline font-black text-2xl md:text-3xl skew-x-[-12deg] hover:skew-x-0 transition-all uppercase shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)] w-full sm:w-auto active:translate-y-1 active:shadow-none"
          >
            CLAIM YOUR MAT SPACE
          </button>
        </div>
      </section>

      {/* The Interrogation (FAQ) Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">THE INTERROGATION</h2>
            <p className="font-label text-primary font-bold tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm">FREQUENTLY ASKED QUESTIONS</p>
          </div>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-surface-container-low border-l-4 border-primary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[-2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                Is Jiu Jitsu only for young people?
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-primary/20 opacity-80 font-medium leading-relaxed font-body">
                No. Jiu Jitsu is for all people, all shapes, all sizes and all AGES. The mechanics of leverage allow anyone to excel. Grandmaster Hélio Gracie famously trained and rolled until he was 95 years old!
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-surface-container-low border-l-4 border-secondary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                Is Jiu Jitsu the same as MMA?
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-secondary/20 opacity-80 font-medium leading-relaxed font-body">
                No. While it's a foundational and critical skill for Mixed Martial Arts, pure Brazilian Jiu-Jitsu has no kicks or punches. It revolves entirely around mechanical leverage, joint manipulation, and dynamic ground control.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-surface-container-low border-l-4 border-primary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[-2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                Is it extremely hard to learn?
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-primary/20 opacity-80 font-medium leading-relaxed font-body">
                It is a complex art that takes years to truly master, but you will see physical and technical results from early on. You will be able to actively participate and experience the mechanics from day one on the mats.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-surface-container-low border-l-4 border-secondary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                Is it dangerous?
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-secondary/20 opacity-80 font-medium leading-relaxed font-body">
                Like any combat sport, it naturally comes with physical risks. However, BJJ is widely considered one of the safest martial arts because it completely minimizes striking damage and instead focuses on controlled technique and tapping out.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-surface-container-low border-l-4 border-primary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[-2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                Is BJJ 3 times a week enough?
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-primary/20 opacity-80 font-medium leading-relaxed font-body">
                Yes, three times a week is a sustainable goal for many people. At this rate, you can strike a good balance between improving on the mats and giving your body time to recover. Training three times a week is often considered the “sweet spot” for consistent improvement without overwhelming your body or personal schedule.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-surface-container-low border-l-4 border-secondary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                What is the 80/20 rule in BJJ?
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-secondary/20 opacity-80 font-medium leading-relaxed font-body">
                The 80/20 rule in Brazilian Jiu-Jitsu is simply that 80% of success on the mat comes from 20% of techniques. We teach real skills and focus on high-percentage techniques that work most often on the mat and in the real world.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-surface-container-low border-l-4 border-primary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[-2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                What is the hardest position to escape?
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-primary/20 opacity-80 font-medium leading-relaxed font-body">
                Mount and back control are considered the worst positions because they give your opponent the most control and submission opportunities. Learning solid escapes from these positions is crucial.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-surface-container-low border-l-4 border-secondary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                Why shower immediately after class?
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-secondary/20 opacity-80 font-medium leading-relaxed font-body">
                A quick rinse isn't enough—use soap designed to fight bacteria and fungus. Pay extra attention to areas prone to infections: feet, armpits, groin, and hairline. The sooner you shower after class, the better your chances of avoiding skin issues.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-surface-container-low border-l-4 border-primary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[-2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                What is not allowed in BJJ?
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-primary/20 opacity-80 font-medium leading-relaxed font-body">
                Brazilian jiu-jitsu does not allow any striking with the hands or feet. This includes punching, kicking, elbowing, kneeing, and head butting. No eye gouging, biting, or hair pulling. This is a rule that beginners often overlook.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-surface-container-low border-l-4 border-secondary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                What is the weakness of Jiu-Jitsu?
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-secondary/20 opacity-80 font-medium leading-relaxed font-body">
                Without knowing how to combat striking techniques, a BJJ practitioner may struggle to close the gap against a skilled striker. Striking is a fundamental aspect of many martial arts, and its absence in pure sport BJJ can leave practitioners vulnerable in stand-up confrontations.
              </div>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-surface-container-low border-l-4 border-primary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[-2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                What is the most powerful move?
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-primary/20 opacity-80 font-medium leading-relaxed font-body">
                The Rear Naked Choke is one of the most effective BJJ moves for self-defense. It involves choking the opponent from behind, cutting off their air supply until they submit or lose consciousness.
              </div>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-surface-container-low border-l-4 border-secondary p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-surface-container-low/80 skew-x-[2deg] hover:skew-x-0">
              <summary className="font-headline font-black text-xl md:text-2xl uppercase tracking-tighter list-none flex justify-between items-center outline-none">
                Why do kids quit jiu-jitsu?
                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
              </summary>
              <div className="pt-6 mt-6 border-t border-secondary/20 opacity-80 font-medium leading-relaxed font-body">
                Kids thrive in environments that are dynamic, interactive, and — above all — fun. If classes become repetitive or feel more like a chore than a challenge, young students might disengage. Brazilian Jiu Jitsu, when taught with too much formality or not enough variety, can start to feel monotonous for kids.
              </div>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
}
