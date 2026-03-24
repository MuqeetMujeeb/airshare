export default function Integrations() {
  return (
    <section className="py-12 border-b border-slate-100 bg-white overflow-hidden flex flex-col items-center">
      <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8 text-center">Seamlessly integrates with your NLEs</p>
      <div className="flex gap-8 md:gap-16 items-center justify-center opacity-40 flex-wrap px-6 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
        {['Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro X', 'Frame.io', 'Avid Media Composer'].map(tool => (
           <div key={tool} className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">{tool}</div>
        ))}
      </div>
    </section>
  );
}
