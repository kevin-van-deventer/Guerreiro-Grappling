"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lock, Unlock, Plus, Trash2, Save, X, Edit3, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
type ClassBlock = {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  discipline: string;
  instructor: string;
  level: "Fundamental" | "Advanced";
};

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const INITIAL_SCHEDULE: ClassBlock[] = [
  { id: "1", day: "MON", startTime: "06:00 AM", endTime: "07:00 AM", discipline: "Early Flow", instructor: "Elias Thorne", level: "Fundamental" },
  { id: "2", day: "MON", startTime: "06:30 PM", endTime: "07:30 PM", discipline: "Adv. No-Gi", instructor: "Sarah Vance", level: "Advanced" },
  { id: "3", day: "TUE", startTime: "05:00 PM", endTime: "06:00 PM", discipline: "Gi Basics", instructor: "Marcus Reyes", level: "Fundamental" },
  { id: "4", day: "TUE", startTime: "07:30 PM", endTime: "08:30 PM", discipline: "Black Belt Lab", instructor: "Elias Thorne", level: "Advanced" },
  { id: "5", day: "WED", startTime: "12:00 PM", endTime: "01:00 PM", discipline: "Noon Roll", instructor: "Julian West", level: "Fundamental" },
  { id: "6", day: "WED", startTime: "06:30 PM", endTime: "07:30 PM", discipline: "Submission Core", instructor: "Sarah Vance", level: "Advanced" },
  { id: "7", day: "THU", startTime: "05:00 PM", endTime: "06:00 PM", discipline: "Leg Lock Tech", instructor: "Sarah Vance", level: "Advanced" },
  { id: "8", day: "FRI", startTime: "06:00 PM", endTime: "08:00 PM", discipline: "Open Mat Live", instructor: "Staff", level: "Advanced" },
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
      level: "Fundamental"
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

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 bg-on-background text-background overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center -rotate-12">
          <span className="font-headline font-black text-[25vw] leading-none tracking-tighter text-electric-blue uppercase">RHYTHM</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-8 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="font-label font-bold text-primary uppercase tracking-widest text-sm">Combat Timeline</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.9] italic">
              TRANSFORM IN <br/><span className="text-primary">THE FLOW</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-medium max-w-3xl italic">
              Precision is a discipline, and discipline requires a timeline. Every session at Guerreiro Grappling is engineered to push your mechanical limits. 
              <br/><br/>
              <span className="text-primary font-black">PRIVATE TRAINING:</span> Available with Coach Josh or Coach Alex from 07:30 – 11:00 (Mon–Sun).
              <br/>
              <span className="text-primary font-black">JUNIOR CLASSES (7–14):</span> R550 Monthly membership.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Header & Controls */}
      <section className="py-12 bg-surface-container-low border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-headline font-black uppercase tracking-tighter">Weekly Operations</h2>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center gap-2 font-label text-[10px] font-bold uppercase"><div className="w-3 h-3 bg-primary"></div> Fundamental</div>
              <div className="flex items-center gap-2 font-label text-[10px] font-bold uppercase"><div className="w-3 h-3 bg-secondary"></div> Advanced</div>
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
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-outline-variant/20 shadow-2xl overflow-hidden">
            {DAYS.map(day => (
              <div key={day} className="bg-surface-container-lowest min-h-[400px] flex flex-col group">
                <div className="p-6 border-b-2 border-primary bg-surface-container-low sticky top-0 md:relative">
                  <h4 className="font-headline font-black text-2xl uppercase italic tracking-tighter">{day}</h4>
                </div>
                
                <div className="p-4 space-y-4 flex-grow">
                  {schedule.filter(block => block.day === day).map(block => (
                    <div 
                      key={block.id}
                      className={cn(
                        "relative p-4 bg-surface-container border-l-4 transition-all duration-300 group/item",
                        block.level === "Fundamental" ? "border-primary" : "border-secondary",
                        isAdmin && "cursor-pointer hover:translate-x-2"
                      )}
                      onClick={() => isAdmin && setEditBlock(block)}
                    >
                      <p className="font-label text-[10px] font-bold opacity-60 italic uppercase tracking-widest">{block.startTime} - {block.endTime}</p>
                      <p className="font-headline font-bold text-base uppercase leading-tight mt-1">{block.discipline}</p>
                      <p className="text-[10px] font-bold opacity-40 uppercase mt-1">{block.instructor}</p>
                      
                      {isAdmin && (
                        <div className="absolute top-2 right-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                          <Edit3 size={14} className="text-primary" />
                        </div>
                      )}
                    </div>
                  ))}

                  {isAdmin && (
                    <button 
                      onClick={() => addClass(day)}
                      className="w-full py-4 border-2 border-dashed border-primary/20 text-primary/30 hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center gap-2"
                    >
                      <Plus size={20} />
                    </button>
                  )}
                </div>
              </div>
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
