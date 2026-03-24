import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HowItWorks() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 1. Phone scales up [0 - 0.2]
  const phoneScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const phoneY = useTransform(scrollYProgress, [0, 0.2, 0.4], [50, 0, 0]);
  const phoneX = useTransform(scrollYProgress, [0.4, 0.6], [0, -150]);

  // 2. Chunks flowing up [0.2 - 0.4]
  const chunksOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.4, 0.45], [0, 1, 1, 0]);
  const chunksY = useTransform(scrollYProgress, [0.2, 0.4], [0, -100]);

  // 3. Cloud scales up [0.4 - 0.6]
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const scanPosition = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const cloudOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const cloudScale = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);
  const cloudX = useTransform(scrollYProgress, [0.4, 0.6], [0, 0]);

  // 4. Desktop slides in [0.6 - 0.8]
  const desktopOpacity = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);
  const desktopX = useTransform(scrollYProgress, [0.6, 0.8], [150, 150]); // Adjusted to stay next to cloud

  // 5. Avatars & Badges popup [0.8 - 1.0]
  const badgesOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const badgesScale = useTransform(scrollYProgress, [0.8, 0.9], [0.5, 1]);

  return (
    <section className="bg-slate-50 w-full relative">
      {/* 
        Mobile View (Stacked Cards) 
      */}
      <div className="md:hidden flex flex-col items-center justify-center gap-12 py-24 px-6 w-full">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl mb-4">How It Works</h2>
          <p className="text-slate-600">The seamless creator-to-editor pipeline.</p>
        </div>
        
        {/* Step 1: Record */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 w-full max-w-sm flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
          </div>
          <h3 className="font-bold text-lg mb-2">1. Record & Upload</h3>
          <p className="text-slate-600 text-center text-sm">Capture footage on your phone and chunks upload instantly.</p>
        </div>

        {/* Step 2: Cloud */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 w-full max-w-sm flex flex-col items-center">
          <div className="w-16 h-16 bg-sky-500 text-white rounded-2xl flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
          </div>
          <h3 className="font-bold text-lg mb-2">2. Real-Time Sync</h3>
          <p className="text-slate-600 text-center text-sm">Footage appears in the cloud securely before you even stop recording.</p>
        </div>

        {/* Step 3: Edit */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 w-full max-w-sm flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="15" x2="15" y1="3" y2="21"/><line x1="9" x2="9" y1="3" y2="21"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
          </div>
          <h3 className="font-bold text-lg mb-2">3. Edit Instantly</h3>
          <p className="text-slate-600 text-center text-sm">Editors pull footage directly into their timeline, seconds after capture.</p>
        </div>
      </div>

      {/* 
        Desktop Cinematic Scroll 
      */}
      <div 
        ref={containerRef}
        className="hidden md:block h-[400vh] w-full"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50">
          
          {/* Central Stage */}
          <div className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-center">
            
            {/* 1. Phone UI */}
            <motion.div 
              style={{ scale: phoneScale, y: phoneY, x: phoneX }}
              className="absolute z-30 w-64 h-[500px] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Phone Content - Recording UI */}
              <div className="flex-1 bg-slate-800 relative flex items-center justify-center">
                {/* Camera Viewfinder Mockup */}
                <div className="absolute inset-4 rounded-3xl border border-white/10" />
                
                {/* Recording indicator */}
                <div className="absolute top-6 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                  <motion.div 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-2 h-2 rounded-full bg-red-500" 
                  />
                  <span className="text-white text-xs font-mono">00:14:32</span>
                </div>
              </div>
            </motion.div>

            {/* 2. Upload Chunks Stream */}
            <motion.div 
              style={{ opacity: chunksOpacity, y: chunksY }}
              className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4"
            >
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ y: [0, -40, -80], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.6 }}
                  className="w-12 h-8 bg-sky-200 rounded-lg border border-sky-300 shadow-sm flex items-center justify-center"
                >
                  <div className="w-6 h-1 bg-sky-400 rounded-full" />
                </motion.div>
              ))}
            </motion.div>

            {/* 3. Cloud Storage UI */}
            <motion.div
              style={{ opacity: cloudOpacity, scale: cloudScale, x: cloudX }}
              className="absolute z-10 w-80 h-96 bg-white rounded-3xl border border-slate-200 shadow-xl flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-sky-600 font-semibold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                  <span>Airshare Cloud</span>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                {/* File list mocks */}
                <div className="h-12 w-full bg-slate-50 rounded-xl flex items-center px-4 gap-3 border border-slate-100">
                  <div className="w-8 h-8 rounded bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-600">MP4</div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-slate-200 rounded mb-1"></div>
                    <div className="h-1 w-12 bg-slate-200 rounded"></div>
                  </div>
                </div>
                <div className="h-12 w-full bg-slate-50 rounded-xl flex items-center px-4 gap-3 border border-slate-100">
                  <div className="w-8 h-8 rounded bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-600">MP4</div>
                  <div className="flex-1">
                    <div className="h-2 w-32 bg-slate-200 rounded mb-1"></div>
                    <div className="h-1 w-16 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4. Desktop Editor UI */}
            <motion.div
              style={{ opacity: desktopOpacity, x: desktopX }}
              className="absolute z-20 w-[400px] h-[300px] bg-slate-900 rounded-xl border border-slate-800 shadow-2xl p-4 flex flex-col"
            >
              {/* Fake UI Header */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              
              {/* Timeline Mockup */}
              <div className="flex-1 bg-slate-800 rounded-lg p-3 flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="w-1/4 h-8 bg-sky-500 rounded flex items-center px-2"><span className="text-[10px] text-white">Clip_01</span></div>
                  <div className="w-1/2 h-8 bg-blue-500 rounded flex items-center px-2"><span className="text-[10px] text-white">Clip_02</span></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-1/3 h-6 bg-purple-500 rounded"></div>
                  <div className="w-1/4 h-6 bg-purple-500 rounded"></div>
                </div>
              </div>

              {/* 5. Avatar/Badges Overlay */}
              <motion.div 
                style={{ opacity: badgesOpacity, scale: badgesScale }}
                className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span className="text-sm font-semibold text-slate-800 border-l border-slate-200 pl-2">V2 Approved</span>
              </motion.div>

            </motion.div>

          </div>

          {/* Guide Text at bottom of screen */}
          <div className="absolute bottom-12 left-0 right-0 text-center text-slate-400 font-medium tracking-wide text-sm flex flex-col items-center gap-2">
            Keep Scrolling
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
