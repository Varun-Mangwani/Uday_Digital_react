import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typingPhrases = [
  "A Digital Marketing Service",
  "WordPress Website Experts",
  "SEO & Lead Generation",
  "AI Video Creators",
  "Your Full Digital Presence",
];

function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = typingPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((p) => (p + 1) % typingPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span className="typewriter-text font-[Cormorant_Garamond] italic tracking-[0.3em] text-sm text-[#6b2c39]">
      — {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Decorative ornaments */}
      <div className="absolute top-28 right-8 md:right-16 animate-float-slow" style={{ ["--rot" as any]: "-8deg" }}>
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-[#c8a25b] opacity-60">
          <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <text x="60" y="68" textAnchor="middle" fontFamily="Pinyon Script" fontSize="30" fill="currentColor">Uday</text>
        </svg>
      </div>
      <div className="absolute bottom-24 left-6 md:left-16 text-[#6b2c39]/40 font-[Allura] text-7xl md:text-9xl animate-float-slow" style={{ ["--rot" as any]: "5deg" }}>
        &
      </div>
      <div className="absolute top-40 left-10 text-[#1a1512]/10 font-[Playfair_Display] italic text-[12rem] md:text-[18rem] leading-none pointer-events-none select-none">
        U
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="ornate-divider mb-8 max-w-sm"
        >
          <TypewriterText />
        </motion.div>

        <h1 className="font-[Playfair_Display] text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="block"
          >
            Growing
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="block italic"
          >
            <span className="brush-highlight">
              brands
            </span>{" "}
            <span className="font-[Allura] text-[#6b2c39] not-italic font-normal">digitally</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="block"
          >
            <span className="relative inline-block">
              <span className="relative z-10">since 2019</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="18"
                viewBox="0 0 400 18"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5 12 C 80 2, 160 16, 240 8 S 380 6, 395 12"
                  stroke="#c8a25b"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 1.2 }}
                />
              </svg>
            </span>
            .
          </motion.span>
        </h1>

        <div className="mt-12 grid md:grid-cols-3 gap-10 items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="md:col-span-1 font-[Cormorant_Garamond] text-xl md:text-2xl leading-relaxed text-[#2b241f]/85 max-w-md"
          >
            From powerful WordPress websites to strategic SEO, AI-driven videos, and full digital presence — we help your business dominate the digital space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="md:col-span-1 flex items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[#1a1512] text-[#f7f1e6] rounded-full font-[Cormorant_Garamond] italic text-lg tracking-wide hover:bg-[#6b2c39] transition-colors duration-500"
            >
              View our work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-4 border border-[#1a1512]/40 rounded-full font-[Cormorant_Garamond] italic text-lg hover:border-[#1a1512] hover:bg-[#1a1512]/5 transition-all"
            >
              Start a project
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="md:col-span-1 flex md:justify-end gap-8 text-center"
          >
            <div>
              <div className="font-[Playfair_Display] text-4xl">6<span className="text-[#6b2c39]">+</span></div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#1a1512]/60 mt-1">Years</div>
            </div>
            <div className="w-px bg-[#1a1512]/20" />
            <div>
              <div className="font-[Playfair_Display] text-4xl">150<span className="text-[#6b2c39]">+</span></div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#1a1512]/60 mt-1">Projects</div>
            </div>
            <div className="w-px bg-[#1a1512]/20" />
            <div>
              <div className="font-[Playfair_Display] text-4xl">98<span className="text-[#6b2c39]">%</span></div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#1a1512]/60 mt-1">Retention</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#1a1512]/60">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#1a1512]/60 to-transparent" />
      </motion.div>
    </section>
  );
}
