import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // height of the fixed header (h-16 is 64px)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 h-16 z-50 flex items-center px-6 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-slate-900">
          Ashare<span className="text-sky-500">.</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <a href="#get-access" onClick={(e) => scrollToSection(e, 'get-access')} className="px-5 py-2 text-sm font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
            Get Access
          </a>
        </nav>
      </div>
    </header>
  );
}
