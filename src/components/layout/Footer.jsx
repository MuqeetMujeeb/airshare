export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 py-20 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-16 md:gap-0">

          {/* Logo and Socials */}
          <div className="flex flex-col gap-8">
            <div className="text-xl font-bold tracking-tighter text-slate-900">
              {/* Link icon */}
              {/* <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg> */}
              Ashare<span className="text-sky-500">.</span>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="hover:text-slate-900 transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors" aria-label="Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors" aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links grid */}
          <div className="flex flex-wrap md:flex-nowrap gap-16 md:gap-24 text-[15px]">

            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-1">Resources</h3>
              <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Features</a>
              <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">How it works</a>
              <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">FAQ</a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-1">Support</h3>
              <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Help Center</a>
              <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Contact Us</a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-1">Legal</h3>
              <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>

          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-100 text-[13.5px] text-slate-500 font-medium">
          <p>© 2026 Airshare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
