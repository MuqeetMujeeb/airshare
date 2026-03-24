export default function CTA() {
  return (
    <section className="py-32 bg-slate-900 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/20 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Ready to skip the transfer?</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto">Join the exclusive early access list and be the first to experience zero-wait workflows.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all font-medium" 
            required 
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20 whitespace-nowrap"
          >
            Request Access
          </button>
        </form>
      </div>
    </section>
  );
}
