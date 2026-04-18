"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Classes", href: "/classes" },
  { name: "About", href: "/about" },
  { name: "Rules", href: "/rules" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
        "fixed top-0 w-full z-50 transition-kinetic",
        scrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl py-3 shadow-lg" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/logo.png"
              alt="Guerreiro Grappling Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-headline font-black text-xl md:text-2xl leading-none uppercase tracking-tighter hidden sm:block">
            Guerreiro <br /> <span className="text-primary">Grappling</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
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
          <Link
            href="/contact"
            className="torque-gradient text-white font-headline font-black px-6 py-2 skew-x-[-12deg] hover:skew-x-0 transition-kinetic text-sm uppercase"
          >
            Join the Fold
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-background lg:hidden transition-kinetic border-t border-primary/10",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-8 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-headline font-black text-4xl uppercase tracking-tighter hover:text-primary transition-kinetic"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="torque-gradient text-white font-headline font-black px-8 py-4 text-center text-xl skew-x-[-6deg] hover:skew-x-0 transition-kinetic uppercase"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </nav>
  );
}
