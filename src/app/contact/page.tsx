"use client";

import React from "react";
import { motion } from "framer-motion";

import { Phone, Mail, MapPin, Globe, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <div className="min-h-screen">

      <PageHero
        title="COMMAND"
        highlight="CENTER"
        eyebrow="Secure Your Spot · Inquire About Programs · Get In Touch"
        ghostWord="HQ"
        accentColor="bg-primary"
      />

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
                  <label htmlFor="contact-name" className="font-label font-black text-xs uppercase tracking-widest opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">Full Name</label>
                  <input id="contact-name" type="text" placeholder="John 'The Ripper' Doe" className="w-full bg-surface-container-low border-b-4 border-primary/20 focus:border-primary outline-none px-4 py-4 font-headline font-bold text-xl uppercase transition-kinetic skew-x-[-3deg] focus:skew-x-0 focus-visible:ring-2 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="contact-email" className="font-label font-black text-xs uppercase tracking-widest opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">Email Address</label>
                  <input id="contact-email" type="email" placeholder="john@kinetic.co.za" className="w-full bg-surface-container-low border-b-4 border-primary/20 focus:border-primary outline-none px-4 py-4 font-headline font-bold text-xl uppercase transition-all skew-x-[-3deg] focus:skew-x-0 focus-visible:ring-2 focus-visible:ring-primary" />
                </div>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="contact-program" className="font-label font-black text-xs uppercase tracking-widest opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">Select Program</label>
                <select id="contact-program" className="w-full bg-surface-container-low border-b-4 border-primary/20 focus:border-primary outline-none px-4 py-4 font-headline font-bold text-xl uppercase transition-all skew-x-[-3deg] focus:skew-x-0 appearance-none focus-visible:ring-2 focus-visible:ring-primary">
                  <option>Brazilian Jiu-Jitsu</option>
                  <option>MMA & Kickboxing</option>
                  <option>Kids Progression</option>
                  <option>Private Training</option>
                </select>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="contact-message" className="font-label font-black text-xs uppercase tracking-widest opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">Transmission</label>
                <textarea id="contact-message" rows={4} placeholder="Tell us about your combat background or goals..." className="w-full bg-surface-container-low border-b-4 border-primary/20 focus:border-primary outline-none px-4 py-4 font-headline font-bold text-xl uppercase transition-all skew-x-[-3deg] focus:skew-x-0 resize-none focus-visible:ring-2 focus-visible:ring-primary"></textarea>
              </div>

              <button className="torque-gradient text-white w-full py-6 font-headline font-black text-2xl skew-x-[-6deg] hover:skew-x-0 transition-kinetic uppercase shadow-2xl flex items-center justify-center gap-4 group outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:skew-x-0">
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
                  title="Guerreiro Grappling Location Map"
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


    </div>
  );
}
