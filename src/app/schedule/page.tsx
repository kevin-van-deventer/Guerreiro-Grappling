"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lock, Unlock, Plus, Trash2, Save, X, Edit3, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
type Category = "adults" | "ladies" | "juniors" | "private";

type ClassBlock = {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  discipline: string;
  instructor: string;
  level: "Fundamental" | "Advanced";
  category: Category;
};

const CATEGORY_THEME: Record<Category, {
  border: string;
  bg: string;
  label: string;
  badge: string;
  badgeText: string;
  dot: string;
}> = {
  adults:  { border: "border-[#0059bb]",  bg: "bg-blue-50 dark:bg-blue-950/40",    label: "Adults",  badge: "bg-[#0059bb] text-white",         dot: "bg-[#0059bb]",  badgeText: "text-white" },
  ladies:  { border: "border-rose-500",   bg: "bg-rose-50 dark:bg-rose-950/40",   label: "Ladies",  badge: "bg-rose-500 text-white",          dot: "bg-rose-500",  badgeText: "text-white" },
  juniors: { border: "border-amber-500",  bg: "bg-amber-50 dark:bg-amber-950/40", label: "Juniors", badge: "bg-amber-400 text-amber-900",      dot: "bg-amber-500", badgeText: "text-amber-900" },
  private: { border: "border-yellow-400", bg: "bg-yellow-50 dark:bg-yellow-950/40",label: "Private", badge: "bg-yellow-300 text-yellow-900",    dot: "bg-yellow-400",badgeText: "text-yellow-900" },
};

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const INITIAL_SCHEDULE: ClassBlock[] = [
  { id: "1", day: "MON", startTime: "06:00 AM", endTime: "07:00 AM", discipline: "Early Flow", instructor: "Elias Thorne", level: "Fundamental", category: "adults" },
  { id: "2", day: "MON", startTime: "06:30 PM", endTime: "07:30 PM", discipline: "Adv. No-Gi", instructor: "Sarah Vance", level: "Advanced", category: "adults" },
  { id: "3", day: "TUE", startTime: "05:00 PM", endTime: "06:00 PM", discipline: "Gi Basics", instructor: "Marcus Reyes", level: "Fundamental", category: "adults" },
  { id: "4", day: "TUE", startTime: "07:30 PM", endTime: "08:30 PM", discipline: "Black Belt Lab", instructor: "Elias Thorne", level: "Advanced", category: "adults" },
  { id: "5", day: "WED", startTime: "12:00 PM", endTime: "01:00 PM", discipline: "Noon Roll", instructor: "Julian West", level: "Fundamental", category: "adults" },
  { id: "6", day: "WED", startTime: "06:30 PM", endTime: "07:30 PM", discipline: "Submission Core", instructor: "Sarah Vance", level: "Advanced", category: "adults" },
  { id: "7", day: "THU", startTime: "05:00 PM", endTime: "06:00 PM", discipline: "Leg Lock Tech", instructor: "Sarah Vance", level: "Advanced", category: "adults" },
  { id: "8", day: "FRI", startTime: "06:00 PM", endTime: "08:00 PM", discipline: "Open Mat Live", instructor: "Staff", level: "Advanced", category: "adults" },
];

import { getSchedule, updateSchedule } from "@/app/actions/schedule";

export default function SchedulePage() {
  const [schedule, setSchedule] = useState<ClassBlock[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [editBlock, setEditBlock] = useState<ClassBlock | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load schedule from server
  useEffect(() => {
    async function loadData() {
      const data = await getSchedule();
      setSchedule(data);
      setIsLoading(false);
    }
    loadData();
  }, []);

  const handleLogin = () => {
    if (password === "gg2024") {
      setIsAdmin(true);
      setShowLogin(false);
      setPassword("");
    } else {
      alert("Unauthorized Access Attempt");
    }
  };

  const syncSchedule = async (newSchedule: ClassBlock[]) => {
    // Optimistic Update
    const previousSchedule = schedule;
    setSchedule(newSchedule);

    try {
      // Use "gg2024" as the hardcoded key for this demo/local setup
      await updateSchedule(newSchedule, "gg2024");
    } catch (error) {
      console.error(error);
      alert("Failed to sync schedule with server.");
      setSchedule(previousSchedule); // Rollback on failure
    }
  };

  const addClass = (day: string) => {
    const newClass: ClassBlock = {
      id: Math.random().toString(36).substr(2, 9),
      day,
      startTime: "05:00 PM",
      endTime: "06:00 PM",
      discipline: "New Class",
      instructor: "Staff",
      level: "Fundamental",
      category: "adults" as Category,
    };
    syncSchedule([...schedule, newClass]);
    setEditBlock(newClass);
  };

  const deleteClass = (id: string) => {
    syncSchedule(schedule.filter(s => s.id !== id));
    setEditBlock(null);
  };

  const updateClass = (updated: ClassBlock) => {
    syncSchedule(schedule.map(s => s.id === updated.id ? updated : s));
    setEditBlock(null);
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 bg-surface-container relative overflow-hidden">
        <div className="absolute inset-0 torque-gradient opacity-[0.03] -rotate-12"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-headline font-black uppercase tracking-tighter italic mb-4"
          >
            COMBAT <span className="text-secondary italic">TIMELINE</span>
          </motion.h1>
          <div className="h-2 w-32 bg-primary mx-auto mb-8"></div>
          <p className="font-label font-bold text-primary uppercase tracking-[0.4em] text-sm md:text-base italic">
            BJJ · No-Gi · MMA · Kickboxing · Gillitts, Durban
          </p>
        </div>
      </section>

      {/* Schedule Header & Controls */}
      <section className="py-12 bg-surface-container-low border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-headline font-black uppercase tracking-tighter">Weekly Operations</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {(Object.entries(CATEGORY_THEME) as [Category, typeof CATEGORY_THEME[Category]][]).map(([key, t]) => (
                <span key={key} className={cn("flex items-center gap-2 px-3 py-1 text-[10px] font-headline font-black uppercase tracking-widest", t.badge)}>
                  <span className="w-2 h-2 rounded-full bg-white/50 inline-block"></span>
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {!isAdmin ? (
              <button 
                onClick={() => setShowLogin(true)}
                className="flex items-center gap-2 font-label font-bold text-xs uppercase opacity-40 hover:opacity-100 transition-opacity"
              >
                <Lock size={14} /> Admin Login
              </button>
            ) : (
              <div className="flex items-center gap-4 animate-in fade-in slide-in-from-right-4">
                <span className="font-label font-bold text-xs uppercase text-green-500 flex items-center gap-2">
                  <Unlock size={14} /> Owner Mode
                </span>
                <button 
                  onClick={() => setIsAdmin(false)}
                  className="px-4 py-2 border border-primary/20 font-label font-bold text-[10px] uppercase hover:bg-primary transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-primary/10 shadow-2xl overflow-hidden border border-primary/10">
            {DAYS.map((day, idx) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white dark:bg-neutral-900 min-h-[500px] p-6 space-y-8"
              >
                <h4 className="font-headline font-black text-3xl uppercase border-b-4 border-primary italic pb-2 inline-block">
                  {day}
                </h4>

                <div className="space-y-4">
                  {schedule.filter(block => block.day === day).map(block => {
                    const theme = CATEGORY_THEME[block.category as Category] ?? CATEGORY_THEME.adults;
                    return (
                      <div
                        key={block.id}
                        className={cn(
                          "relative p-4 skew-x-[-3deg] border-l-8 transition-kinetic group/item hover:skew-x-0 overflow-hidden shadow-sm",
                          theme.border,
                          theme.bg,
                          isAdmin && "cursor-pointer"
                        )}
                        onClick={() => isAdmin && setEditBlock(block)}
                      >
                        {/* Category badge */}
                        <span className={cn("inline-block px-1.5 py-0.5 text-[9px] font-headline font-black uppercase tracking-widest mb-2 rounded-sm", theme.badge)}>
                          {theme.label}
                        </span>
                        <span className="font-label text-[10px] font-black uppercase opacity-50 mb-1 block italic">
                          {block.startTime} – {block.endTime}
                        </span>
                        <p className="font-headline font-black text-base uppercase leading-tight group-hover/item:opacity-80 transition-opacity">
                          {block.discipline}
                        </p>
                        <p className="text-[9px] font-bold opacity-30 uppercase tracking-widest mt-1">
                          {block.instructor}
                        </p>

                        {isAdmin && (
                          <div className="absolute top-2 right-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                            <Edit3 size={14} className="text-primary" />
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {isAdmin && (
                    <button
                      onClick={() => addClass(day)}
                      className="w-full py-4 border-2 border-dashed border-primary/20 text-primary/30 hover:border-primary/60 hover:text-primary transition-all flex items-center justify-center gap-2 font-headline font-bold text-sm uppercase"
                    >
                      <Plus size={20} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setShowLogin(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
              className="relative w-full max-w-md bg-foreground p-12 text-background shadow-2xl skew-x-[-4deg]"
            >
              <h3 className="text-4xl font-headline font-black uppercase tracking-tighter italic mb-8 underline decoration-primary decoration-8">Access Verification</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label font-bold uppercase text-[10px] tracking-widest opacity-60">Admin Key</label>
                  <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    placeholder="Enter Secret Mat Key"
                    className="w-full bg-background/10 border-b-4 border-primary p-4 font-headline font-bold text-xl outline-none focus:bg-background/20 transition-all text-white"
                    autoFocus
                  />
                </div>
                <button 
                  onClick={handleLogin}
                  className="w-full torque-gradient py-6 font-headline font-black text-xl uppercase skew-x-[-12deg] active:translate-y-1 transition-all"
                >
                  Confirm Infiltration
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Block Drawer/Modal */}
      <AnimatePresence>
        {editBlock && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setEditBlock(null)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-md h-full bg-surface-container-lowest shadow-2xl p-8 border-l-8 border-primary overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-3xl font-headline font-black uppercase italic tracking-tighter">Edit Component</h3>
                <button onClick={() => setEditBlock(null)} className="p-2 hover:text-primary transition-colors"><X size={24}/></button>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-label font-bold text-[10px] uppercase opacity-40">Day</label>
                    <select 
                      value={editBlock.day}
                      onChange={(e) => setEditBlock({...editBlock, day: e.target.value})}
                      className="w-full p-4 bg-surface-container font-headline font-bold uppercase outline-none focus:ring-2 ring-primary"
                    >
                      {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label font-bold text-[10px] uppercase opacity-40">Start Time</label>
                    <input 
                      type="text" 
                      value={editBlock.startTime}
                      onChange={(e) => setEditBlock({...editBlock, startTime: e.target.value})}
                      className="w-full p-4 bg-surface-container font-headline font-bold outline-none focus:ring-2 ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label font-bold text-[10px] uppercase opacity-40">End Time</label>
                    <input 
                      type="text" 
                      value={editBlock.endTime}
                      onChange={(e) => setEditBlock({...editBlock, endTime: e.target.value})}
                      className="w-full p-4 bg-surface-container font-headline font-bold outline-none focus:ring-2 ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label font-bold text-[10px] uppercase opacity-40">Discipline</label>
                  <input 
                    type="text" 
                    value={editBlock.discipline}
                    onChange={(e) => setEditBlock({...editBlock, discipline: e.target.value})}
                    className="w-full p-4 bg-surface-container font-headline font-bold outline-none focus:ring-2 ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label font-bold text-[10px] uppercase opacity-40">Instructor</label>
                  <input 
                    type="text" 
                    value={editBlock.instructor}
                    onChange={(e) => setEditBlock({...editBlock, instructor: e.target.value})}
                    className="w-full p-4 bg-surface-container font-headline font-bold outline-none focus:ring-2 ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label font-bold text-[10px] uppercase opacity-40">Category</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.entries(CATEGORY_THEME) as [Category, typeof CATEGORY_THEME[Category]][]).map(([key, t]) => (
                      <button
                        key={key}
                        onClick={() => setEditBlock({...editBlock, category: key})}
                        className={cn(
                          "py-3 font-headline font-black text-xs uppercase tracking-widest transition-all border-2",
                          editBlock.category === key
                            ? cn(t.badge, "border-transparent")
                            : "bg-surface-container text-foreground/40 border-transparent hover:border-primary/30"
                        )}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label font-bold text-[10px] uppercase opacity-40">Level</label>
                  <div className="flex gap-4">
                    {["Fundamental", "Advanced"].map(l => (
                      <button
                        key={l}
                        onClick={() => setEditBlock({...editBlock, level: l as any})}
                        className={cn(
                          "flex-1 py-4 font-headline font-bold uppercase transition-all",
                          editBlock.level === l ? "bg-primary text-white" : "bg-surface-container text-foreground/40"
                        )}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex flex-col gap-4">
                  <button 
                    onClick={() => updateClass(editBlock)}
                    className="w-full bg-primary text-white py-6 font-headline font-black text-xl uppercase skew-x-[-12deg] hover:skew-x-0 transition-all flex items-center justify-center gap-2"
                  >
                    <Save size={20} /> Update Record
                  </button>
                  <button 
                    onClick={() => deleteClass(editBlock.id)}
                    className="w-full text-red-500 font-label font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-neutral-100 py-4 transition-all"
                  >
                    Delete Permanent Record
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
