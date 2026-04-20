"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Classes", href: "/classes" },
  { name: "Schedule", href: "/schedule" },
  { name: "About", href: "/about" },
  { name: "Rules", href: "/rules" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto" };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500",
        isOpen 
          ? "bg-neutral-950 py-4 shadow-2xl border-b border-white/5" 
          : scrolled 
            ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl py-3 shadow-lg" 
            : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group relative z-50">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/Guerreiro-Grappling-Logo.png"
              alt="Guerreiro Grappling Logo"
              fill
              sizes="(max-width: 768px) 48px, 64px"
              className={cn(
                "object-contain transition-all duration-500",
                isOpen && "invert" // Forces the logo to turn white against the dark menu
              )}
              priority
            />
          </div>
          <span className={cn(
            "font-headline font-black text-xl md:text-2xl leading-none uppercase tracking-tighter hidden sm:block transition-colors duration-500",
            isOpen ? "text-white" : "text-foreground"
          )}>
            Guerreiro <br /> <span className="text-primary group-hover:text-secondary transition-colors">Grappling</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 relative z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-headline font-bold uppercase tracking-tighter transition-kinetic text-sm",
                "hover:text-primary hover:skew-x-[-12deg]",
                pathname === link.href ? "text-primary italic" : "text-foreground opacity-70 hover:opacity-100"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
            className="torque-gradient text-white font-headline font-black px-6 py-2 skew-x-[-12deg] hover:skew-x-0 transition-kinetic text-sm uppercase shadow-lg shadow-primary/20"
          >
            Join the Fold
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 relative z-50 transition-colors duration-300",
            isOpen ? "text-white" : "text-foreground"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[72px] h-[calc(100vh-72px)] z-40 bg-neutral-950 flex flex-col px-8 py-10 lg:hidden overflow-y-auto border-t-8 border-primary select-none w-full"
          >
            {/* The diagonal design motif in the background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
            
            <div className="flex flex-col gap-6 flex-grow relative z-10 pt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-headline font-black text-5xl uppercase tracking-tighter transition-all block w-full",
                      pathname === link.href 
                        ? "text-primary italic skew-x-[-4deg] translate-x-2" 
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA Array */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 space-y-8 relative z-10"
            >
              <div className="w-12 h-1 bg-primary skew-x-[-12deg]"></div>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent("open-lead-modal"));
                }}
                className="w-full bg-primary text-white font-headline font-black px-8 py-5 text-xl skew-x-[-4deg] hover:skew-x-0 transition-all uppercase shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] active:translate-y-1 active:shadow-none block"
              >
                Start Your Journey
              </button>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <p className="font-label text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold">Guerreiro Grappling</p>
                <div className="flex items-center gap-4 text-white/40">
                  <span className="font-headline text-[10px] uppercase font-bold tracking-widest">FB</span>
                  <span className="font-headline text-[10px] uppercase font-bold tracking-widest">IG</span>
                  <span className="font-headline text-[10px] uppercase font-bold tracking-widest">WA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
