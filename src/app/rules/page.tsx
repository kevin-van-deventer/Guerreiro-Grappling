"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldAlert, Droplets, UserCheck, Scale, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0 torque-gradient opacity-[0.03] skew-y-12"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-9xl font-headline font-black uppercase tracking-tighter italic">
              CODE OF <span className="text-primary italic">CONDUCT</span>
            </h1>
            <p className="text-xl md:text-3xl font-medium opacity-70 max-w-4xl italic">
              Guerreiro Grappling is built on mutual respect, technical discipline, and absolute safety. These are our non-negotiables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-low relative diagonal-divider-top">
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ruleSections.map((section, idx) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-neutral-900 p-10 skew-x-[-3deg] hover:skew-x-0 transition-kinetic shadow-2xl border-b-8 border-primary group"
              >
                <div className="mb-8">{section.icon}</div>
                <h3 className="text-3xl font-headline font-black uppercase tracking-tighter mb-8 border-b-2 border-primary pb-2 inline-block italic">
                  {section.title}
                </h3>
                <ul className="space-y-6">
                  {section.rules.map((rule, i) => (
                    <li key={i} className="flex gap-4 items-start group/item">
                      <div className="h-6 w-1 bg-secondary mt-1 group-hover/item:h-full transition-kinetic"></div>
                      <p className="font-headline font-bold text-lg uppercase tracking-tight leading-tight opacity-70 group-hover/item:opacity-100 transition-opacity">
                        {rule}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 bg-foreground text-background text-center skew-x-[3deg] relative overflow-hidden"
          >
            <div className="absolute inset-0 torque-gradient opacity-10"></div>
            <h4 className="text-3xl md:text-4xl font-headline font-black italic uppercase relative z-10">
              "RESPECT THE MAT, RESPECT YOUR PARTNER, RESPECT THE ART."
            </h4>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
