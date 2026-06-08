import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#f7f1e6] relative overflow-hidden">
      <div className="absolute top-10 right-10 font-[Allura] text-[10rem] text-[#6b2c39]/10 pointer-events-none select-none">
        write us
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5"
          >
            <div className="ornate-divider mb-6 max-w-xs">
              <span className="font-[Cormorant_Garamond] italic tracking-[0.3em] text-sm text-[#6b2c39]">
                — Begin a dialogue
              </span>
            </div>
            <h2 className="font-[Playfair_Display] text-5xl md:text-7xl leading-[1.02] mb-8">
              Let us <br />
              <span className="italic font-[Allura] text-[#6b2c39] text-[1.15em]">converse</span>.
            </h2>
            <p className="font-[Cormorant_Garamond] text-xl leading-relaxed text-[#2b241f]/80 max-w-md mb-12">
              A good project begins with a good letter. Tell us of your house, your hopes, and the work you wish to make. We reply within two working days.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#1a1512]/60 mb-1">Correspondence</div>
                <a href="mailto:hello@uday.studio" className="font-[Playfair_Display] italic text-2xl hover:text-[#6b2c39] transition-colors">
                  hello@uday.studio
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#1a1512]/60 mb-1">The Atelier</div>
                <div className="font-[Cormorant_Garamond] text-lg text-[#2b241f]/80">
                  14, Gopal Bari Road <br />
                  Jaipur, Rajasthan 302001 <br />
                  Bharat
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#1a1512]/60 mb-3">Elsewhere</div>
                <div className="flex gap-3">
                  {["Instagram", "LinkedIn", "Behance", "Are.na"].map((s) => (
                    <a key={s} href="#" className="px-4 py-2 border border-[#1a1512]/30 rounded-full text-sm hover:bg-[#1a1512] hover:text-[#f7f1e6] transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-7"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-[#ecdfc7]/70 border border-[#1a1512]/10 p-8 md:p-12 rounded-sm relative"
            >
              {/* Corner flourishes */}
              <svg className="absolute top-3 left-3" width="30" height="30" viewBox="0 0 30 30">
                <path d="M2 28 Q 2 2, 28 2" stroke="#c8a25b" strokeWidth="1" fill="none" />
              </svg>
              <svg className="absolute top-3 right-3" width="30" height="30" viewBox="0 0 30 30">
                <path d="M28 28 Q 28 2, 2 2" stroke="#c8a25b" strokeWidth="1" fill="none" />
              </svg>
              <svg className="absolute bottom-3 left-3" width="30" height="30" viewBox="0 0 30 30">
                <path d="M2 2 Q 2 28, 28 28" stroke="#c8a25b" strokeWidth="1" fill="none" />
              </svg>
              <svg className="absolute bottom-3 right-3" width="30" height="30" viewBox="0 0 30 30">
                <path d="M28 2 Q 28 28, 2 28" stroke="#c8a25b" strokeWidth="1" fill="none" />
              </svg>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="font-[Allura] text-7xl text-[#6b2c39] mb-4">Thank you</div>
                  <p className="font-[Cormorant_Garamond] italic text-xl text-[#2b241f]/80">
                    Your letter has reached our desk. We shall reply by the next full moon, or sooner.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Your name" placeholder="Ms. Priya Sharma" />
                    <Field label="Your house" placeholder="Company or brand" />
                  </div>
                  <Field label="Correspondence (email)" placeholder="priya@company.com" type="email" />
                  <div>
                    <label className="block text-xs uppercase tracking-[0.3em] text-[#1a1512]/60 mb-2">
                      The discipline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Brand", "Web", "Editorial", "Motion", "All of the above"].map((t, i) => (
                        <label key={t} className="cursor-pointer">
                          <input type="radio" name="disc" defaultChecked={i === 0} className="peer sr-only" />
                          <span className="block px-4 py-2 border border-[#1a1512]/20 rounded-full text-sm font-[Cormorant_Garamond] italic peer-checked:bg-[#1a1512] peer-checked:text-[#f7f1e6] peer-checked:border-[#1a1512] hover:border-[#1a1512] transition-colors">
                            {t}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.3em] text-[#1a1512]/60 mb-2">
                      Your letter
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us of your project, your timeline, your dreams…"
                      className="w-full bg-transparent border-b border-[#1a1512]/30 focus:border-[#6b2c39] outline-none py-3 font-[Cormorant_Garamond] text-lg placeholder:text-[#1a1512]/40 placeholder:italic resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full mt-4 inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#1a1512] text-[#f7f1e6] rounded-full font-[Playfair_Display] italic text-lg hover:bg-[#6b2c39] transition-colors duration-500"
                  >
                    Send the letter
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.3em] text-[#1a1512]/60 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#1a1512]/30 focus:border-[#6b2c39] outline-none py-3 font-[Cormorant_Garamond] text-lg placeholder:text-[#1a1512]/40 placeholder:italic"
      />
    </div>
  );
}
