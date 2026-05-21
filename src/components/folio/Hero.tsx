import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import portrait from "@/assets/portrait.png";

const headline = ["Building", "warm,", "human", "software"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen px-5 md:px-10 pt-28 md:pt-36 pb-20">
      <div className="mx-auto max-w-6xl">
        {/* Status row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 md:mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--terracotta)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--terracotta)]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70">
            Open to work · 2026
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-[13vw] sm:text-[12vw] md:text-[8.5vw] leading-[0.92] tracking-[-0.04em] font-light text-balance break-words">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.18em]"
            >
              {word === "warm," ? (
                <span className="font-italic italic text-[var(--terracotta)] font-normal">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Sub row */}
        <div className="mt-10 md:mt-16 grid md:grid-cols-12 gap-8 items-start md:items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="md:col-span-4 relative aspect-[4/5] w-full max-w-[240px] sm:max-w-[280px] rounded-3xl overflow-hidden ring-soft"
          >
            <img src={portrait} alt="Portrait" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--terracotta)]/30 to-transparent mix-blend-multiply" />
            <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] uppercase tracking-widest text-[var(--cream)] flex justify-between">
              <span>● Abenezer N.</span>
              <span>Ethiopia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-7 md:col-start-6 space-y-6"
          >
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-foreground/80 text-pretty max-w-xl">
              <span className="font-italic italic text-[var(--terracotta)]">Full-stack software engineer</span> and Haramaya University graduate — shipping end-to-end web apps with React, Node.js and a love for the small details.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--cream)]">
                See selected work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a href="#resume" className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/20 bg-card/60 backdrop-blur px-5 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider">
                View résumé
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}