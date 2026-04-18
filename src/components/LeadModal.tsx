"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, ArrowRight, Zap } from "lucide-react";

export const LeadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if shown in this session
    const hasBeenShown = sessionStorage.getItem("gg-lead-modal-shown");
    
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("gg-lead-modal-shown", "true");
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsOpen(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2, y: 50 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotate: 2, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-xl bg-neutral-950 text-white overflow-hidden border-t-[8px] border-primary shadow-[16px_16px_0px_0px_rgba(0,89,187,0.2)]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 text-white/30 hover:text-white hover:rotate-90 transition-all z-30"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>

            {/* Diagonal Branding Element */}
            <div className="absolute top-0 right-0 w-40 h-40 torque-gradient opacity-10 skew-x-[45deg] -translate-y-20 translate-x-20 pointer-events-none" />

            <div className="p-8 md:p-10 relative z-10">
              {!isSubmitted ? (
                <>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2">
                      <Zap className="text-secondary fill-secondary" size={20} />
                      <span className="font-label font-bold text-secondary uppercase tracking-[0.3em] text-[10px]">Limited Opportunity</span>
                    </div>
                    <h2 className="text-5xl font-headline font-black uppercase tracking-tighter leading-none italic text-white">
                      TRY A <span className="text-primary">FREE</span> CLASS
                    </h2>
                    <p className="text-sm md:text-base text-white/60 font-medium leading-relaxed pr-8">
                      Stop overthinking and step into the flow. No fancy gear required—just you and your determination.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="font-label font-bold uppercase text-[10px] tracking-widest text-white/40 ml-1">First Name *</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={18} />
                          <input
                            required
                            type="text"
                            placeholder="John"
                            className="w-full bg-neutral-900 text-white placeholder-white/20 pl-11 pr-5 py-4 font-headline font-bold text-base outline-none border-b-2 border-transparent focus:border-primary transition-all skew-x-[-3deg] focus:skew-x-0"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-label font-bold uppercase text-[10px] tracking-widest text-white/40 ml-1">Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full bg-neutral-900 text-white placeholder-white/20 px-5 py-4 font-headline font-bold text-base outline-none border-b-2 border-transparent focus:border-primary transition-all skew-x-[-3deg] focus:skew-x-0"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label font-bold uppercase text-[10px] tracking-widest text-white/40 ml-1">Email Address *</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={18} />
                        <input
                          required
                          type="email"
                          placeholder="john@doe.com"
                          className="w-full bg-neutral-900 text-white placeholder-white/20 pl-11 pr-5 py-4 font-headline font-bold text-base outline-none border-b-2 border-transparent focus:border-primary transition-all skew-x-[-3deg] focus:skew-x-0"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label font-bold uppercase text-[10px] tracking-widest text-white/40 ml-1">Phone Number *</label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={18} />
                        <input
                          required
                          type="tel"
                          placeholder="082 495 7760"
                          className="w-full bg-neutral-900 text-white placeholder-white/20 pl-11 pr-5 py-4 font-headline font-bold text-base outline-none border-b-2 border-transparent focus:border-primary transition-all skew-x-[-3deg] focus:skew-x-0"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 torque-gradient text-white py-5 font-headline font-black text-xl skew-x-[-8deg] hover:skew-x-0 transition-all uppercase flex items-center justify-center gap-3 shadow-[8px_8px_0px_0px_rgba(0,89,187,0.3)] active:translate-y-1 active:shadow-none"
                    >
                      CLAIM MY MAT SPACE <ArrowRight size={24} />
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16 space-y-6"
                >
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto shadow-2xl skew-x-[-12deg] hover:skew-x-0 transition-transform animate-pulse">
                    <Zap size={36} fill="currentColor" />
                  </div>
                  <h3 className="text-3xl font-headline font-black uppercase tracking-tighter text-white">PREPARE FOR BATTLE</h3>
                  <p className="text-base max-w-sm mx-auto text-white/60 leading-relaxed">
                    We've received your request. An instructor will contact you shortly to coordinate your trial session.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
