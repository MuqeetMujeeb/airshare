export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 h-16 bg-white/70 backdrop-blur-md z-50 border-b border-white/20 flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-slate-900">
          Airshare<span className="text-sky-500">.</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <button className="px-5 py-2 text-sm font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
            Get Access
          </button>
        </nav>
      </div>
    </header>
  );
}
