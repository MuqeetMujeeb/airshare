import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-20 pb-32">

      {/* Background abstract gradients
      <div className="absolute top-0 w-full h-full overflow-hidden -z-10 bg-white">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 -left-20 w-96 h-96"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 -right-20 w-96 h-96"
        />
      </div> */}

      <motion.div
        className="w-full h-full mx-auto px-6 text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Gradient texture behind text */}
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/flow.mp4" type="video/mp4" />
          </video>
        </div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 mt-4 text-slate-900 relative">
          From Camera to Editor. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Instantly.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Airshare bypasses the hard drive. We sync your footage directly from the camera to the cloud, allowing editors to start working before you even say "cut."
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/10 w-full sm:w-auto">
            Get Early Access
          </button>
          <button className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-auto flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            Watch Demo
          </button>
        </motion.div>
      </motion.div>

      {/* Hero Visual (Mockup overlay abstractly) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, type: "spring" }}
        className="w-full max-w-5xl mx-auto mt-20 px-6 relative"
      >
        <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 relative flex items-center justify-center p-1">
          {/* Inner Interface mockup */}
          <div className="w-full h-full bg-slate-900/50 rounded-xl overflow-hidden backdrop-blur-xl border border-white/5 relative flex flex-col">
            {/* Header bar */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="flex gap-1.5 opacity-50"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
              <div className="mx-auto text-xs text-slate-400 font-medium">Airshare Workspace Dashboard</div>
            </div>
            {/* Body */}
            <div className="flex-1 flex p-4 gap-4">
              <div className="w-64 border-r border-white/10 pr-4 flex flex-col gap-2">
                <div className="h-8 rounded bg-white/5 w-full"></div>
                <div className="h-8 rounded bg-white/5 w-3/4"></div>
                <div className="h-8 rounded bg-white/5 w-4/5"></div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-1 rounded-lg border border-white/10 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center backdrop-blur-md border border-sky-400/30 text-sky-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                    </div>
                  </div>
                </div>
                <div className="h-20 flex gap-2">
                  <div className="w-1/4 h-full bg-sky-500/20 border border-sky-400/30 rounded-lg"></div>
                  <div className="w-1/3 h-full bg-blue-500/20 border border-blue-400/30 rounded-lg"></div>
                  <div className="w-1/2 h-full bg-purple-500/20 border border-purple-400/30 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section >
  );
}
