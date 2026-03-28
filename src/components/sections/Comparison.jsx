import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  {
    old: "Wait 24 hours for daily rushes",
    new: "View exact takes the second you call cut",
  },
  {
    old: "Ship physical drives across the world",
    new: "Collaborate from anywhere with cloud sync",
  },
  {
    old: "Pay for double the storage and backups",
    new: "Redundant, secure cloud storage built in",
  },
  {
    old: "Require a dedicated DIT on every set",
    new: "Zero manual ingest or data wrangling",
  }
];

export default function Comparison() {
  return (
    <section id="features" className="py-20 px-6 bg-slate-50 relative overflow-hidden flex flex-col items-center border-t border-slate-100">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-red-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-slate-400 uppercase bg-slate-100 rounded-full border border-slate-200"
          >
            Breaking the Bottleneck
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight"
          >
            The old way is <span className="text-red-500 line-through decoration-red-200">broken</span>.<br className="hidden md:block"/>
            Airshare is <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">instant</span>.
          </motion.p>
        </div>

        <div className="space-y-12 md:space-y-14">
          {comparisons.map((pair, idx) => (
            <div key={idx} className="relative group">
              
              {/* The Problem (Old Workflow) */}
              <div className="relative mb-4 md:mb-6 flex items-start md:items-center gap-3 md:gap-4">
                <div className="shrink-0 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-100 mt-0.5 md:mt-0">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <div className="relative inline-block">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-slate-400 opacity-60 transition-opacity whitespace-pre-wrap md:whitespace-nowrap leading-tight">
                    {pair.old}.
                  </h3>
                  {/* Animated Red Strikethrough Line */}
                  <motion.div 
                    className="absolute left-0 top-1/2 -ml-2 -mt-[2px] md:-mt-[3px] h-[4px] md:h-1.5 bg-red-500 origin-left rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)] z-10 hidden md:block"
                    style={{ width: "calc(100% + 1rem)" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  />
                  {/* Mobile Strikethrough */}
                  <motion.div 
                    className="absolute left-0 top-[40%] -ml-1 h-[3px] bg-red-500 origin-left rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)] z-10 md:hidden"
                    style={{ width: "calc(100% + 0.5rem)" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
              
              {/* The Solution (Airshare) */}
              <motion.div
                className="pl-4 md:pl-12"
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-start md:items-center gap-3 md:gap-4 bg-white p-4 md:p-6 rounded-2xl border border-emerald-100 shadow-lg shadow-emerald-500/5 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 group-hover:-translate-y-1">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 border border-emerald-200">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                   </div>
                   <h4 className="text-lg md:text-xl font-serif font-medium text-emerald-900 leading-snug">
                     {pair.new}.
                   </h4>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


