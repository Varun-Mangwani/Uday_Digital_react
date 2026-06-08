import { motion } from "framer-motion";
import { useState } from "react";

type Work = {
  title: string;
  client: string;
  year: string;
  type: string;
  color: string;
  accent: string;
  script: string;
  desc: string;
};

const works: Work[] = [
  {
    title: "Global E-Commerce Build",
    client: "Urban Retail",
    year: "2023",
    type: "WordPress Web",
    color: "#6b2c39",
    accent: "#e9c46a",
    script: "Shop beautifully",
    desc: "A high-converting custom WooCommerce platform that handled 5x traffic during peak sales with zero downtime.",
  },
  {
    title: "Organic Growth Surge",
    client: "MedHealth Clinics",
    year: "2024",
    type: "SEO & Content",
    color: "#1a1512",
    accent: "#c8a25b",
    script: "Found first",
    desc: "Comprehensive local SEO and content strategy that increased their organic search traffic by 320% in 6 months.",
  },
  {
    title: "Viral Ad Campaign",
    client: "TechStart SaaS",
    year: "2024",
    type: "AI Videos & Ads",
    color: "#3d4a3d",
    accent: "#e9c46a",
    script: "Scroll stopping",
    desc: "AI-generated video ads and Meta campaign that reduced cost-per-lead by 65% while tripling conversion volume.",
  },
  {
    title: "Complete Dominance",
    client: "Apex Real Estate",
    year: "2025",
    type: "Full Presence Pack",
    color: "#4a3a2a",
    accent: "#c8a25b",
    script: "Market leaders",
    desc: "The full stack: new WordPress site, daily social content, targeted lead gen, and top-ranking SEO for their key regions.",
  },
];

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="py-28 md:py-40 bg-[#f7f1e6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="ornate-divider mb-6 max-w-xs">
              <span className="font-[Cormorant_Garamond] italic tracking-[0.3em] text-sm text-[#6b2c39]">
                — Selected works
              </span>
            </div>
            <h2 className="font-[Playfair_Display] text-5xl md:text-7xl leading-[1.05]">
              From our <span className="italic brush-underline">ledger</span>.
            </h2>
          </div>
          <a href="#contact" className="font-[Allura] text-3xl text-[#6b2c39] hover:text-[#1a1512] transition-colors">
            see full archive →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((w, i) => (
            <motion.a
              href="#"
              key={w.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.15 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="group relative block rounded-sm overflow-hidden border border-[#1a1512]/10"
            >
              <div
                className="aspect-[4/3] relative transition-all duration-700"
                style={{ backgroundColor: w.color }}
              >
                {/* Decorative typography */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div
                      className="font-[Allura] text-[5rem] md:text-[7rem] leading-none transition-transform duration-700 group-hover:scale-110"
                      style={{ color: w.accent }}
                    >
                      {w.script}
                    </div>
                    <div
                      className="font-[Playfair_Display] italic text-lg tracking-[0.3em] mt-4 opacity-80"
                      style={{ color: w.accent }}
                    >
                      — {w.client} —
                    </div>
                  </div>
                </div>
                {/* Ornaments */}
                <svg className="absolute top-6 left-6" width="40" height="40" viewBox="0 0 40 40">
                  <path d="M2 38 Q 2 2, 38 2" stroke={w.accent} strokeWidth="1" fill="none" opacity="0.6" />
                </svg>
                <svg className="absolute bottom-6 right-6" width="40" height="40" viewBox="0 0 40 40">
                  <path d="M38 2 Q 38 38, 2 38" stroke={w.accent} strokeWidth="1" fill="none" opacity="0.6" />
                </svg>

                {/* Year badge */}
                <div className="absolute top-6 right-6 font-[Playfair_Display] italic text-sm" style={{ color: w.accent }}>
                  {w.year}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Description overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-[Cormorant_Garamond] text-lg text-white/90 max-w-md">{w.desc}</p>
                </div>
              </div>

              {/* Caption */}
              <div className="p-6 md:p-8 bg-[#f7f1e6] flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[#6b2c39] mb-2">{w.type}</div>
                  <h3 className="font-[Playfair_Display] text-2xl md:text-3xl">{w.title}</h3>
                  <div className="font-[Cormorant_Garamond] italic text-[#1a1512]/60 mt-1">{w.client}</div>
                </div>
                <motion.div
                  animate={{ rotate: hovered === i ? 45 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-full border border-[#1a1512] flex items-center justify-center shrink-0 group-hover:bg-[#1a1512] group-hover:text-[#f7f1e6] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
