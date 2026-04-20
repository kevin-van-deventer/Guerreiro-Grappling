"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import { Phone, Mail, MapPin, Globe, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 torque-gradient opacity-[0.05] skew-y-6"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-9xl font-headline font-black uppercase tracking-tighter italic">
              COMMAND <span className="text-primary italic">CENTER</span>
            </h1>
            <p className="text-xl md:text-3xl font-medium opacity-80 max-w-4xl italic">
              Ready to evolve? Secure your place on the mats or inquire about our specialized combat programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-headline font-black uppercase tracking-tighter italic">DIRECT INQUIRY</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="font-label font-black text-xs uppercase tracking-widest opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">Full Name</label>
                  <input type="text" placeholder="John 'The Ripper' Doe" className="w-full bg-surface-container-low border-b-4 border-primary/20 focus:border-primary outline-none px-4 py-4 font-headline font-bold text-xl uppercase transition- kinetic skew-x-[-3deg] focus:skew-x-0" />
                </div>
                <div className="space-y-2 group">
                  <label className="font-label font-black text-xs uppercase tracking-widest opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">Email Address</label>
                  <input type="email" placeholder="john@kinetic.co.za" className="w-full bg-surface-container-low border-b-4 border-primary/20 focus:border-primary outline-none px-4 py-4 font-headline font-bold text-xl uppercase transition-all skew-x-[-3deg] focus:skew-x-0" />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="font-label font-black text-xs uppercase tracking-widest opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">Select Program</label>
                <select className="w-full bg-surface-container-low border-b-4 border-primary/20 focus:border-primary outline-none px-4 py-4 font-headline font-bold text-xl uppercase transition-all skew-x-[-3deg] focus:skew-x-0 appearance-none">
                  <option>Brazilian Jiu-Jitsu</option>
                  <option>MMA & Kickboxing</option>
                  <option>Kids Progression</option>
                  <option>Private Training</option>
                </select>
              </div>

              <div className="space-y-2 group">
                <label className="font-label font-black text-xs uppercase tracking-widest opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">Transmission</label>
                <textarea rows={4} placeholder="Tell us about your combat background or goals..." className="w-full bg-surface-container-low border-b-4 border-primary/20 focus:border-primary outline-none px-4 py-4 font-headline font-bold text-xl uppercase transition-all skew-x-[-3deg] focus:skew-x-0 resize-none"></textarea>
              </div>

              <button className="torque-gradient text-white w-full py-6 font-headline font-black text-2xl skew-x-[-6deg] hover:skew-x-0 transition-kinetic uppercase shadow-2xl flex items-center justify-center gap-4 group">
                Engage <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Location & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-black uppercase tracking-tighter italic text-right md:text-left">LOCATION HQ</h2>
              <div className="aspect-video w-full bg-neutral-200 border-8 border-white shadow-2xl skew-x-[3deg] relative overflow-hidden group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.528461538356!2d30.7958444!3d-29.7915222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6fbf3871801fb%3A0x8cc8771275dad9b9!2s9%20Old%20Main%20Rd%2C%20Gillitts%2C%20Durban%2C%203603!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza" 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-kinetic"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex gap-6 items-start">
                <MapPin className="text-secondary w-8 h-8 flex-shrink-0" />
                <p className="text-2xl font-headline font-black uppercase tracking-tighter italic">
                  Get Fit Studio, 9 Old Main Rd, <br/> Gillitts, Durban, 3603
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-primary/10">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-primary w-6 h-6" />
                  <a href="tel:+27824957760" className="text-xl font-headline font-black uppercase hover:text-primary transition-colors italic">082 495 7760</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-primary w-6 h-6" />
                  <a href="mailto:info@guerreirograppling.co.za" className="text-xl font-headline font-black uppercase hover:text-primary transition-colors italic">info@guerreiro.co.za</a>
                </div>
              </div>
              <div className="flex gap-8 justify-end">
                <a href="#" className="p-4 bg-primary text-white skew-x-[-12deg] hover:skew-x-0 transition-kinetic"><Globe className="w-8 h-8" /></a>
                <a href="#" className="p-4 bg-secondary text-white skew-x-[-12deg] hover:skew-x-0 transition-kinetic"><MessageCircle className="w-8 h-8" /></a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


    </main>
  );
}
