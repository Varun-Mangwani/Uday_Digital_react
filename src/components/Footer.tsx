export default function Footer() {
  return (
    <footer className="bg-[#1a1512] text-[#f7f1e6] py-20 relative overflow-hidden">
      {/* Giant wordmark */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="font-[Playfair_Display] text-[22vw] md:text-[18vw] leading-[0.85] tracking-tighter text-center mb-16 select-none">
          <span className="italic text-[#e9c46a]/30">Uday</span>
        </div>

        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-[#f7f1e6]/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-[#c8a25b] flex items-center justify-center">
                <span className="font-[Pinyon_Script] text-2xl text-[#c8a25b]">U</span>
              </div>
              <span className="font-[Playfair_Display] italic text-2xl">Uday Digital</span>
            </div>
            <p className="font-[Cormorant_Garamond] text-lg text-[#f7f1e6]/70 max-w-md leading-relaxed">
              Your complete digital presence partner. We build websites, drive traffic, generate leads, and create content that grows your business.
            </p>
            <p className="font-[Cormorant_Garamond] italic text-sm text-[#e9c46a] mt-4">
              Founded by Varun Mangwani
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#c8a25b] mb-5">Navigate</div>
            <ul className="space-y-3 font-[Cormorant_Garamond] italic text-lg">
              <li><a href="#about" className="hover:text-[#e9c46a]">The Agency</a></li>
              <li><a href="#services" className="hover:text-[#e9c46a]">Services</a></li>
              <li><a href="#work" className="hover:text-[#e9c46a]">Our Ledger</a></li>
              <li><a href="#contact" className="hover:text-[#e9c46a]">Commission</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#c8a25b] mb-5">Hours</div>
            <p className="font-[Cormorant_Garamond] text-lg text-[#f7f1e6]/70 leading-relaxed">
              Monday — Friday <br />
              10:00 — 19:00 IST <br />
              <span className="italic text-[#e9c46a]">Closed on weekends</span>
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-[Cormorant_Garamond] text-sm text-[#f7f1e6]/50 tracking-wider">
            © {new Date().getFullYear()} · Uday Digital Agency · All rights preserved
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="font-[Cormorant_Garamond] italic text-[#f7f1e6]/60 hover:text-[#e9c46a]">Privacy</a>
            <a href="#" className="font-[Cormorant_Garamond] italic text-[#f7f1e6]/60 hover:text-[#e9c46a]">Terms</a>
            <span className="font-[Allura] text-2xl text-[#c8a25b]">— Uday</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
