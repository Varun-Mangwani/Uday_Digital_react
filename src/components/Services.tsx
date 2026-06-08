import { motion } from "framer-motion";

const items = [
  "WordPress Websites",
  "SEO Services",
  "AI Videos",
  "Lead Generation",
  "Digital Content Management",
  "Full Digital Presence Pack",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="py-10 border-y border-[#1a1512]/10 bg-[#ecdfc7]/60 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-16">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-16 shrink-0">
            <span className="font-[Playfair_Display] italic text-3xl md:text-5xl text-[#1a1512]/80">
              {it}
            </span>
            <span className="font-[Allura] text-4xl text-[#c8a25b]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      num: "I.",
      title: "WordPress Websites",
      script: "built to convert",
      desc: "Custom WordPress websites that are fast, beautiful, and built to turn visitors into paying customers. From landing pages to full e-commerce stores.",
      tags: ["WordPress", "UI/UX", "E-commerce"],
      icon: "🌐",
    },
    {
      num: "II.",
      title: "SEO Services",
      script: "rank & be found",
      desc: "Data-driven SEO strategies that push your business to the top of Google. Keyword research, on-page optimization, backlinks, and monthly reporting.",
      tags: ["On-Page SEO", "Backlinks", "Ranking"],
      icon: "📈",
    },
    {
      num: "III.",
      title: "AI Videos",
      script: "with impact",
      desc: "Cutting-edge AI-powered video content for reels, ads, and brand stories. Scroll-stopping visuals that engage your audience across every platform.",
      tags: ["Reels", "Ad Films", "AI Content"],
      icon: "🎬",
    },
    {
      num: "IV.",
      title: "Lead Generation",
      script: "clients, delivered",
      desc: "Targeted campaigns across Meta, Google, and WhatsApp that fill your pipeline with qualified leads ready to convert into real business.",
      tags: ["Meta Ads", "Google Ads", "WhatsApp"],
      icon: "🎯",
    },
    {
      num: "V.",
      title: "Content Management",
      script: "always fresh",
      desc: "Full digital content management — social media posts, blogs, graphics, and captions — so your brand stays active and consistent every day.",
      tags: ["Social Media", "Blogs", "Graphics"],
      icon: "✍️",
    },
    {
      num: "VI.",
      title: "Digital Presence Pack",
      script: "all-in-one",
      desc: "Our flagship full-stack offering: website + SEO + social + ads + AI videos. One partner. Complete digital dominance. Maximum ROI.",
      tags: ["Website", "SEO", "Ads", "Content"],
      icon: "🚀",
    },
  ];

  return (
    <section id="services" className="py-28 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <div className="ornate-divider mb-6 max-w-xs">
            <span className="font-[Cormorant_Garamond] italic tracking-[0.3em] text-sm text-[#6b2c39]">
              — Our services
            </span>
          </div>
          <h2 className="font-[Playfair_Display] text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Six ways we <br />
            <span className="italic brush-underline">grow your brand</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1512]/10 border border-[#1a1512]/10">
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group bg-[#f7f1e6] p-10 md:p-12 relative overflow-hidden cursor-pointer hover:bg-[#ecdfc7] transition-colors duration-700"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-[Playfair_Display] italic text-2xl text-[#6b2c39]">{s.num}</span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="w-10 h-10 rounded-full border border-[#1a1512]/30 flex items-center justify-center group-hover:bg-[#1a1512] group-hover:text-[#f7f1e6] transition-colors duration-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </div>
              <h3 className="font-[Playfair_Display] text-3xl md:text-4xl mb-2">{s.title}</h3>
              <p className="font-[Allura] text-2xl text-[#c8a25b] mb-5">{s.script}</p>
              <p className="font-[Cormorant_Garamond] text-lg leading-relaxed text-[#2b241f]/80 max-w-md mb-7">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs uppercase tracking-[0.2em] px-3 py-1.5 border border-[#1a1512]/20 rounded-full text-[#1a1512]/70">
                    {t}
                  </span>
                ))}
              </div>
              {/* Ornate corner */}
              <svg className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity" width="40" height="40" viewBox="0 0 40 40">
                <path d="M2 38 Q 2 2, 38 2" stroke="#c8a25b" strokeWidth="0.8" fill="none" />
                <path d="M8 38 Q 8 8, 38 8" stroke="#c8a25b" strokeWidth="0.8" fill="none" />
              </svg>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "linear-gradient(135deg, transparent 40%, rgba(200,162,91,0.07) 100%)" }} />
            </motion.article>
          ))}
        </div>

        {/* CTA below services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="font-[Cormorant_Garamond] italic text-2xl text-[#1a1512]/70 mb-6">
            Not sure where to start? Let us build your complete digital roadmap.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#6b2c39] text-[#f7f1e6] rounded-full font-[Cormorant_Garamond] italic text-lg tracking-wide hover:bg-[#1a1512] transition-colors duration-500"
          >
            Get your free strategy call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
