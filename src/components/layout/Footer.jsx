export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-100 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-4 text-xl font-bold tracking-tighter text-slate-900">
        Airshare<span className="text-sky-500">.</span>
      </div>
      <p className="text-sm text-slate-500 mb-6">Built for editors who hate waiting.</p>
      <div className="flex gap-6 text-sm font-medium text-slate-400">
        <a href="#" className="hover:text-slate-600 transition-colors">Twitter</a>
        <a href="#" className="hover:text-slate-600 transition-colors">Contact</a>
        <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
      </div>
    </footer>
  );
}
