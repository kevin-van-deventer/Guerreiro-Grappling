"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, ArrowRight, Zap } from "lucide-react";

export const LeadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // 1. Listen for custom events to explicitly open modal
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener("open-lead-modal", handleOpenModal);

    // 2. Check if shown in this session (auto-open logic)
    const hasBeenShown = sessionStorage.getItem("gg-lead-modal-shown");
    let timer: NodeJS.Timeout;
    
    if (!hasBeenShown) {
      timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("gg-lead-modal-shown", "true");
      }, 10000); // 10 seconds
    }

    // 3. Focus Trap & Escape Key Logic
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      }

      if (e.key === "Tab") {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const modalElements = Array.from(focusableElements).filter(el => 
          document.getElementById("lead-modal-container")?.contains(el)
        );

        if (modalElements.length === 0) return;

        const firstElement = modalElements[0] as HTMLElement;
        const lastElement = modalElements[modalElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Set focus to the first input when opening
      setTimeout(() => {
        const firstInput = document.getElementById("lead-first-name");
        if (firstInput) firstInput.focus();
      }, 100);
    }

    return () => {
      window.removeEventListener("open-lead-modal", handleOpenModal);
      window.removeEventListener("keydown", handleKeyDown);
      if (timer) clearTimeout(timer);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsOpen(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          id="lead-modal-container"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
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
              className="absolute top-5 right-5 p-2 text-white/30 hover:text-white hover:rotate-90 transition-all z-30 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
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
                    <h2 id="modal-title" className="text-5xl font-headline font-black uppercase tracking-tighter leading-none italic text-white">
                      TRY A <span className="text-primary">FREE</span> CLASS
                    </h2>
                    <p className="text-sm md:text-base text-white/60 font-medium leading-relaxed pr-8">
                      Stop overthinking and step into the flow. No fancy gear required—just you and your determination.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="lead-first-name" className="font-label font-bold uppercase text-[10px] tracking-widest text-white/40 ml-1">First Name *</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={18} />
                          <input
                            required
                            type="text"
                            id="lead-first-name"
                            placeholder="John"
                            className="w-full bg-neutral-900 text-white placeholder-white/20 pl-11 pr-5 py-4 font-headline font-bold text-base outline-none border-b-2 border-transparent focus:border-primary transition-all skew-x-[-3deg] focus:skew-x-0"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lead-last-name" className="font-label font-bold uppercase text-[10px] tracking-widest text-white/40 ml-1">Last Name</label>
                        <input
                          type="text"
                          id="lead-last-name"
                          placeholder="Doe"
                          className="w-full bg-neutral-900 text-white placeholder-white/20 px-5 py-4 font-headline font-bold text-base outline-none border-b-2 border-transparent focus:border-primary transition-all skew-x-[-3deg] focus:skew-x-0"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="lead-email" className="font-label font-bold uppercase text-[10px] tracking-widest text-white/40 ml-1">Email Address *</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={18} />
                        <input
                          required
                          type="email"
                          id="lead-email"
                          placeholder="john@doe.com"
                          className="w-full bg-neutral-900 text-white placeholder-white/20 pl-11 pr-5 py-4 font-headline font-bold text-base outline-none border-b-2 border-transparent focus:border-primary transition-all skew-x-[-3deg] focus:skew-x-0"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="lead-phone" className="font-label font-bold uppercase text-[10px] tracking-widest text-white/40 ml-1">Phone Number *</label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={18} />
                        <input
                          required
                          type="tel"
                          id="lead-phone"
                          placeholder="082 495 7760"
                          className="w-full bg-neutral-900 text-white placeholder-white/20 pl-11 pr-5 py-4 font-headline font-bold text-base outline-none border-b-2 border-transparent focus:border-primary transition-all skew-x-[-3deg] focus:skew-x-0"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 torque-gradient text-white py-5 font-headline font-black text-xl skew-x-[-8deg] hover:skew-x-0 transition-all uppercase flex items-center justify-center gap-3 shadow-[8px_8px_0px_0px_rgba(0,89,187,0.3)] active:translate-y-1 active:shadow-none outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:skew-x-0"
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
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-white/40 hover:text-white uppercase font-label font-bold tracking-widest text-[10px] outline-none focus-visible:underline"
                  >
                    Dismiss
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
