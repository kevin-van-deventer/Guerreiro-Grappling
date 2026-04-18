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
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3, x: -100 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotate: 3, x: 100 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative w-full max-w-2xl bg-white dark:bg-neutral-950 overflow-hidden shadow-[32px_32px_0px_0px_rgba(0,123,255,0.2)] border-t-[12px] border-primary"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-on-surface/40 hover:text-secondary transition-colors z-30"
            >
              <X size={32} />
            </button>

            {/* Diagonal Branding Element */}
            <div className="absolute top-0 right-0 w-32 h-32 torque-gradient opacity-10 skew-x-[45deg] -translate-y-16 translate-x-16 pointer-events-none" />

            <div className="p-8 md:p-12 relative z-10">
              {!isSubmitted ? (
                <>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3">
                      <Zap className="text-secondary fill-secondary" size={24} />
                      <span className="font-label font-bold text-secondary uppercase tracking-[0.3em] text-xs">Limited Opportunity</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter leading-none italic">
                      TRY A <span className="text-primary">FREE</span> CLASS
                    </h2>
                    <p className="text-lg md:text-xl opacity-70 font-medium leading-tight">
                      We know you have questions. Stop overthinking and step into the flow. No fancy gear required—just you and your determination.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label font-bold uppercase text-[10px] tracking-widest opacity-60">First Name *</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:opacity-100 transition-opacity" size={18} />
                          <input
                            required
                            type="text"
                            placeholder="John"
                            className="w-full bg-surface-container-low px-12 py-5 font-headline font-bold text-lg outline-none border-b-4 border-transparent focus:border-primary transition-all skew-x-[-4deg] focus:skew-x-0"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="font-label font-bold uppercase text-[10px] tracking-widest opacity-60">Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full bg-surface-container-low px-6 py-5 font-headline font-bold text-lg outline-none border-b-4 border-transparent focus:border-primary transition-all skew-x-[-4deg] focus:skew-x-0"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-label font-bold uppercase text-[10px] tracking-widest opacity-60">Email Address *</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:opacity-100 transition-opacity" size={18} />
                        <input
                          required
                          type="email"
                          placeholder="john@doe.com"
                          className="w-full bg-surface-container-low px-12 py-5 font-headline font-bold text-lg outline-none border-b-4 border-transparent focus:border-primary transition-all skew-x-[-4deg] focus:skew-x-0"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-label font-bold uppercase text-[10px] tracking-widest opacity-60">Phone Number *</label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:opacity-100 transition-opacity" size={18} />
                        <input
                          required
                          type="tel"
                          placeholder="+27 31 555 1234"
                          className="w-full bg-surface-container-low px-12 py-5 font-headline font-bold text-lg outline-none border-b-4 border-transparent focus:border-primary transition-all skew-x-[-4deg] focus:skew-x-0"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full torque-gradient text-on-primary py-6 md:py-8 font-headline font-black text-2xl skew-x-[-12deg] hover:skew-x-0 transition-all uppercase flex items-center justify-center gap-4 shadow-[12px_12px_0px_0px_rgba(0,89,187,0.3)] active:scale-95"
                    >
                      CLAIM MY MAT SPACE <ArrowRight size={28} />
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20 space-y-8"
                >
                  <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto shadow-2xl skew-x-12 animate-pulse">
                    <Zap size={48} fill="currentColor" />
                  </div>
                  <h3 className="text-4xl font-headline font-black uppercase tracking-tighter">PREPARE FOR BATTLE</h3>
                  <p className="text-xl max-w-md mx-auto opacity-70">
                    We've received your inquiry. An instructor will contact you shortly to coordinate your infiltration.
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
