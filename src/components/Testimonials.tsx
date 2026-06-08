import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Uday didn't design a brand — they composed one. Every detail sings. Our clients now speak of us the way they speak of old friends.",
    author: "Aarav Mehta",
    role: "Founder, Saffron & Silk Co.",
    signature: "Aarav",
  },
  {
    quote: "In an industry of noise, Uday is a hymn. Their patience, their prose, their pixels — we have never been prouder of a launch.",
    author: "Léa Rousseau",
    role: "Creative Director, Nocturne",
    signature: "Léa R.",
  },
  {
    quote: "Working with Uday is like hiring a master calligrapher and a software architect at once. They are irreplaceable.",
    author: "Dr. Ishita Banerjee",
    role: "Editor, The Ganges Review",
    signature: "Ishita",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-28 md:py-40 bg-[#ecdfc7] relative overflow-hidden">
      {/* Background monogram */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Playfair_Display] italic text-[25rem] text-[#1a1512]/[0.03] pointer-events-none select-none">
        “
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="ornate-divider mb-6 max-w-xs mx-auto">
            <span className="font-[Cormorant_Garamond] italic tracking-[0.3em] text-sm text-[#6b2c39]">
              — Kind words
            </span>
          </div>
          <h2 className="font-[Playfair_Display] text-5xl md:text-6xl leading-[1.05]">
            In praise of <span className="italic brush-underline">our patrons</span>.
          </h2>
        </motion.div>

        <div className="relative min-h-[340px]">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: active === i ? 1 : 0,
                y: active === i ? 0 : 30,
              }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className={`${active === i ? "relative" : "absolute inset-0 pointer-events-none"}`}
            >
              <div className="text-center">
                <div className="font-[Allura] text-8xl text-[#c8a25b] leading-none mb-4">“</div>
                <blockquote className="font-[Playfair_Display] italic text-3xl md:text-4xl leading-[1.3] text-[#1a1512] max-w-3xl mx-auto">
                  {item.quote}
                </blockquote>
                <div className="mt-10 flex flex-col items-center gap-2">
                  <div className="font-[Allura] text-4xl text-[#6b2c39]">{item.signature}</div>
                  <div className="font-[Cormorant_Garamond] text-base tracking-[0.2em] uppercase text-[#1a1512]/70">
                    {item.author} · {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[2px] transition-all duration-500 ${
                active === i ? "w-12 bg-[#1a1512]" : "w-6 bg-[#1a1512]/30"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
