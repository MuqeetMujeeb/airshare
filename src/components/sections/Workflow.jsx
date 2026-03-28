import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Cloud, Scissors, Send } from 'lucide-react';

const steps = [
  {
    id: '01',
    icon: <Camera className="w-6 h-6 text-sky-600" />,
    colorTheme: {
      lightBg: 'bg-sky-50',
      border: 'border-sky-100',
      strongBg: 'bg-sky-100/50',
      glow: 'bg-sky-400'
    },
    title: "Capture",
    description: "Shoot in high resolution on your smartphone. Airshare runs in the background, chunking files the second you hit record.",
  },
  {
    id: '02',
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    colorTheme: {
      lightBg: 'bg-blue-50',
      border: 'border-blue-100',
      strongBg: 'bg-blue-100/50',
      glow: 'bg-blue-400'
    },
    title: "Sync",
    description: "Multi-threaded upload pushes footage to a secure cloud server instantly. No waiting for the card to fill up.",
  },
  {
    id: '03',
    icon: <Scissors className="w-6 h-6 text-purple-600" />,
    colorTheme: {
      lightBg: 'bg-purple-50',
      border: 'border-purple-100',
      strongBg: 'bg-purple-100/50',
      glow: 'bg-purple-400'
    },
    title: "Edit",
    description: "Editors access proxy or original files directly from the cloud drive in their NLE. Zero download time.",
  },
  {
    id: '04',
    icon: <Send className="w-6 h-6 text-emerald-600" />,
    colorTheme: {
      lightBg: 'bg-emerald-50',
      border: 'border-emerald-100',
      strongBg: 'bg-emerald-100/50',
      glow: 'bg-emerald-400'
    },
    title: "Deliver",
    description: "Push changes back to the client instantly. Real-time feedback overlay on the video itself.",
  }
];

export default function Workflow() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-20 px-6 bg-white relative overflow-hidden flex flex-col items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-50/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-slate-500 uppercase bg-slate-100 rounded-full border border-slate-200"
          >
            How it works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight mb-4"
          >
            Seamless from <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-sky-700 to-blue-600">Capture to Delivery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500"
          >
            The fastest workflow you've never experienced. Turn hours of DIT work into literally zero with our continuous background sync.
          </motion.p>
        </div>

        <div className="relative py-12" ref={containerRef}>
          {/* Central Connecting Line (Desktop) / Left Line (Mobile) Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 rounded-full" />
          
          {/* Animated fill line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-purple-400 to-emerald-400 -translate-x-1/2 rounded-full origin-top"
            style={{ height: pathHeight }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />

          <div className="space-y-16 md:space-y-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0; // True means left side on desktop
              
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20 w-14 h-14 mt-6 md:mt-0">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-white relative"
                    >
                       <div className={`w-full h-full rounded-full flex items-center justify-center ${step.colorTheme.lightBg}`}>
                         {step.icon}
                       </div>
                       {/* Subtle outer glow that pulses */}
                       <div className={`absolute -inset-1 rounded-full ${step.colorTheme.glow} opacity-20 blur-sm -z-10`} />
                    </motion.div>
                  </div>

                  {/* Content Card container - alternating sides */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-20' : 'md:justify-start md:pl-20'} pl-20 pr-4 md:pr-0 md:pl-0`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="group w-full max-w-lg mt-2 md:mt-0"
                    >
                      <div className="relative p-6 md:p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/40 transition-all duration-500 overflow-hidden group-hover:-translate-y-1">
                        {/* Decorative Gradient Background On Hover */}
                        <div className={`absolute -inset-2 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl ${step.colorTheme.glow}`} />
                        
                        <div className="relative z-10">
                          {/* Large faded background number */}
                          <span className="text-5xl font-serif font-black text-slate-50 absolute -top-4 -right-2 select-none pointer-events-none transition-colors duration-500 group-hover:text-slate-100">
                            {step.id}
                          </span>
                          
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative z-10 ${step.colorTheme.strongBg} border ${step.colorTheme.border} group-hover:scale-110 transition-transform duration-500`}>
                             {step.icon}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight relative z-10">{step.title}</h3>
                          <p className="text-slate-500 md:text-base leading-relaxed relative z-10">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
