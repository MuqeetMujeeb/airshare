import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section className="py-24 bg-white text-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 font-serif">
            Two ways Airshare makes <br className="hidden md:block"/> production better
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-[32px] p-6 lg:p-8 flex flex-col gap-8 shadow-xl shadow-slate-200/50"
          >
            {/* Mockup Area */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl h-[280px] p-5 flex flex-col gap-3 overflow-hidden relative shadow-inner">
              
              {/* Fake Search / Header Bar */}
              <div className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-xl mb-2 shadow-sm">
                <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" />
                </div>
                <span className="text-sm text-sky-600 font-medium tracking-wide">Syncing from Camera A</span>
                <span className="text-xs text-slate-500 ml-auto">84%</span>
              </div>

              {/* Fake List Items */}
              <div className="flex flex-col gap-2">
                {[
                  { name: 'A001_C012_0824FX.RAW', status: 'C', time: 'Just now' },
                  { name: 'A001_C011_0824FX.RAW', status: 'P', time: '2m ago' },
                  { name: 'A001_C010_0824FX.RAW', status: 'A', time: '5m ago' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-3 bg-white hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200 rounded-xl cursor-default shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 border border-slate-200">
                        {item.status}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-900 font-medium">{item.name}</div>
                        <div className="text-xs text-slate-500">1.2 GB • airshare.net/p/{item.status.toLowerCase()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gradient fade at bottom to simulate scroll */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
            </div>

            {/* Text Area */}
            <div className="flex flex-col gap-2 md:pr-12">
              <h3 className="text-xl font-semibold text-slate-900">Zero-wait footage sync</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Footage heads straight to the cloud while you're still rolling. No missing cards, no DIT bottlenecks, and no waiting to dump drives at wrap.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-[32px] p-6 lg:p-8 flex flex-col gap-8 shadow-xl shadow-slate-200/50"
          >
            {/* Mockup Area */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl h-[280px] p-5 flex flex-col gap-4 overflow-hidden relative shadow-inner">
              
              {/* Fake Tabs */}
              <div className="flex items-center gap-2 overflow-x-hidden">
                <div className="px-4 py-1.5 bg-sky-50 border border-sky-100 text-sky-600 text-xs font-medium rounded-lg shadow-sm">Premiere Pro</div>
                <div className="px-4 py-1.5 bg-white border border-slate-200 text-slate-500 hover:text-slate-900 text-xs font-medium rounded-lg transition-colors cursor-pointer shadow-sm">DaVinci Resolve</div>
                <div className="px-4 py-1.5 bg-white border border-slate-200 text-slate-500 hover:text-slate-900 text-xs font-medium rounded-lg transition-colors cursor-pointer shadow-sm">Final Cut</div>
              </div>

              {/* Fake List Items */}
              <div className="flex flex-col gap-2 mt-2">
                {[
                  { title: 'Proxy Media Ready', desc: '1080p ProRes Proxies generated', icon: '🎬', time: '1m ago' },
                  { title: 'XML Timeline Generated', desc: 'Auto-synced audio & video', icon: '📝', time: '12m ago' },
                  { title: 'LUTs applied to Proxies', desc: 'rec709 monitoring look', icon: '🎨', time: '1h ago' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="flex gap-4 items-center">
                      <div className="text-xl opacity-80">{item.icon}</div>
                      <div className="flex flex-col">
                        <span className="text-[14px] text-slate-900 font-medium">{item.title}</span>
                        <span className="text-[12px] text-slate-500">{item.desc}</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Area */}
            <div className="flex flex-col gap-2 md:pr-12">
              <h3 className="text-xl font-semibold text-slate-900">Instant editor handoff</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Airshare automatically groups your raw files, generates lightweight proxies, and structures your editor's timeline folders instantly.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
