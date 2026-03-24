import { X, Check } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-slate-900">The difference is clear</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional */}
          <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100 flex flex-col">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
               Old Workflow
            </h3>
            <ul className="space-y-4 flex-1">
              {['Shoot all day on set', 'Wait for SD cards to fill', 'Hand off to DIT', 'Copy to multiple drives', 'Ship drives to editor', 'Editor copies to local RAID', 'Finally start editing'].map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Airshare */}
          <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 shadow-xl shadow-emerald-500/5 relative overflow-hidden flex flex-col">
             <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-200/50 rounded-full blur-3xl" />
             <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2 relative z-10">
               Airshare Workflow
            </h3>
            <ul className="space-y-6 flex-1 relative z-10">
              {['Shoot on set', 'Files sync to cloud instantly in background', 'Editor starts editing immediately', 'Deliver ahead of schedule'].map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-800 font-medium">
                  <Check className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
