import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Agency", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Ledger", href: "#work" },
    { label: "Praise", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f7f1e6]/90 backdrop-blur-md border-b border-[#c8a25b]/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full border border-[#1a1512] flex items-center justify-center relative overflow-hidden">
            <span className="font-[Pinyon_Script] text-2xl leading-none relative z-10">U</span>
            <motion.div
              className="absolute inset-0 bg-[#c8a25b]"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <span className="font-[Pinyon_Script] text-2xl leading-none absolute group-hover:text-[#1a1512] transition-colors z-10">U</span>
          </div>
          <div className="leading-tight">
            <div className="font-[Playfair_Display] text-xl tracking-wide">Uday</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#6b2c39]">Digital · Est. 2019</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[Cormorant_Garamond] text-lg italic text-[#1a1512]/80 hover:text-[#6b2c39] relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#c8a25b] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1512] text-[#f7f1e6] text-sm tracking-widest uppercase hover:bg-[#6b2c39] transition-colors duration-500"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e9c46a] animate-pulse" />
          Commission
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`w-6 h-[2px] bg-[#1a1512] transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-[#1a1512] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-[#1a1512] transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden overflow-hidden bg-[#f7f1e6] border-t border-[#c8a25b]/30"
        >
          <div className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-[Cormorant_Garamond] text-2xl italic">
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
