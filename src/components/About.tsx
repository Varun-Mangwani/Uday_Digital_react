import { motion } from "framer-motion";

const values = [
  { title: "Results", desc: "Every campaign, every website — built to generate real leads and real revenue." },
  { title: "Precision", desc: "Data-driven SEO, pixel-perfect design, and AI-powered content — all intentional." },
  { title: "Partnership", desc: "We grow alongside you. Your digital success is our only metric that matters." },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-[#1a1512] text-[#f7f1e6] relative overflow-hidden">
      <div className="absolute -top-20 -right-20 font-[Allura] text-[20rem] leading-none text-[#c8a25b]/10 pointer-events-none select-none">
        Uday
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left: image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-[#ecdfc7]">
              {/* Layered ornamental frame */}
              <div className="absolute inset-6 border border-[#c8a25b]/60 rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-[Allura] text-[6rem] leading-none text-[#6b2c39]">Varun</div>
                  <div className="font-[Playfair_Display] italic text-lg tracking-[0.2em] text-[#1a1512]/70 mt-2">Mangwani</div>
                  <div className="font-[Cormorant_Garamond] text-sm tracking-[0.3em] uppercase text-[#1a1512]/50 mt-1">CEO & Founder</div>
                  <div className="w-16 h-px bg-[#c8a25b] mx-auto mt-4" />
                  <div className="font-[Cormorant_Garamond] italic text-base text-[#1a1512]/60 mt-4">Uday Digital</div>
                </div>
              </div>
              {/* Paper texture */}
              <div className="absolute inset-0 paper-texture opacity-40" />
            </div>
            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:-right-10 bg-[#c8a25b] text-[#1a1512] px-6 py-4 rounded-full rotate-[-6deg] shadow-2xl"
            >
              <div className="font-[Pinyon_Script] text-3xl leading-none">Since 2019</div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="ornate-divider mb-6 max-w-xs">
              <span className="font-[Cormorant_Garamond] italic tracking-[0.3em] text-sm text-[#c8a25b]">
                — The agency
              </span>
            </div>
            <h2 className="font-[Playfair_Display] text-5xl md:text-6xl leading-[1.05] mb-8">
              Full digital <br />
              <span className="italic text-[#e9c46a]">presence, built</span>.
            </h2>
            <div className="space-y-5 font-[Cormorant_Garamond] text-xl leading-relaxed text-[#f7f1e6]/80 max-w-xl">
              <p>
                Founded in 2019 by <span className="brush-underline text-[#f7f1e6]">Varun Mangwani</span>, Uday Digital is a results-driven digital marketing agency that helps businesses build a commanding presence online — from websites to search rankings to viral content.
              </p>
              <p>
                We partner with businesses of all sizes — startups, established brands, and local businesses — crafting digital strategies that don't just look good, but convert visitors into loyal customers.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="border-l border-[#c8a25b]/40 pl-4"
                >
                  <div className="font-[Playfair_Display] italic text-2xl text-[#e9c46a] mb-2">{v.title}</div>
                  <div className="font-[Cormorant_Garamond] text-[#f7f1e6]/70">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
