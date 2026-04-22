"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/PageHero";

const faqs = [
  {
    question: "Is Jiu Jitsu only for young people?",
    answer: "No. Jiu Jitsu is for all people, all shapes, all sizes and all AGES. In fact Grand Master Helio Gracie trained until he was 95 years old!"
  },
  {
    question: "Is it hard to learn?",
    answer: "Truth be told it is not easy to master, but what is? However, you will see results from early on, be able to participate from day 1 and have fun through the entire journey."
  },
  {
    question: "Is it the same as MMA?",
    answer: "No. While it is a critical skill for MMA, BJJ has no kicks or punches. It revolves around using leverage and manipulation to gain the upper hand."
  },
  {
    question: "Is it dangerous for beginners?",
    answer: "Like any contact sport it comes with risks, but BJJ is one of the safest martial arts because it minimizes striking and focuses on controlled technique and leverage."
  },
  {
    question: "What should I wear to my first class?",
    answer: "Just wear comfortable athletic clothing (no zips or metal). If you're doing a Gi class, we can often lend you a suit for your first trial."
  },
  {
    question: "How often should I train?",
    answer: "Consistency is key. We recommend starting with 2-3 sessions a week to allow your body to adapt while making steady technical progress."
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen">

      <PageHero
        title="INTEL"
        highlight="CENTER"
        eyebrow="BJJ Questions Answered · Gillitts, Durban"
        ghostWord="FAQ"
        accentColor="bg-secondary"
      />

      {/* FAQ Accordion */}
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 px-6 md:px-12 bg-surface-container-low relative diagonal-divider-top">
        <div className="max-w-4xl mx-auto py-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter">FREQUENTLY ASKED <span className="text-primary italic">QUESTIONS</span></h2>
            <p className="font-label font-bold text-secondary uppercase tracking-[0.3em] text-xs">INTEL FOR THE NEW INITIATE</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "border-l-8 transition-kinetic overflow-hidden shadow-xl",
                  openIndex === idx ? "bg-white dark:bg-neutral-900 border-primary" : "bg-neutral-50 dark:bg-neutral-800 border-transparent opacity-[0.85] hover:opacity-100 hover:border-primary/20"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left p-8 flex justify-between items-center gap-6 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-white dark:focus-visible:bg-neutral-900 transition-all"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-content-${idx}`}
                  id={`faq-button-${idx}`}
                >
                  <h3 className="font-headline font-black text-2xl md:text-3xl uppercase tracking-tighter italic">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === idx ? <Minus className="w-8 h-8 text-primary" /> : <Plus className="w-8 h-8" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      role="region"
                      aria-labelledby={`faq-button-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <div className="pt-4 border-t border-primary/10">
                        <p className="text-lg md:text-xl opacity-80 font-medium leading-relaxed italic">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-headline font-black uppercase tracking-tighter mb-8 italic">STILL HAVE QUESTIONS?</h2>
          <Link
            href="/contact"
            className="torque-gradient text-white px-12 py-6 font-headline font-black text-xl skew-x-[-12deg] hover:skew-x-0 transition-kinetic uppercase inline-block"
          >
            Direct Inquiry
          </Link>
        </div>
      </section>


    </div>
  );
}
