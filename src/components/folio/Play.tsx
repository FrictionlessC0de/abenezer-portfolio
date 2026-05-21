import { motion } from "motion/react";

const cards = [
  { t: "Open source", s: "small PRs to tools I use daily", bg: "oklch(0.84 0.1 60)" },
  { t: "Side projects", s: "weekend prototypes in React + Go", bg: "oklch(0.78 0.13 45)" },
  { t: "Reading", s: "currently: 'Designing Data-Intensive Apps'", bg: "oklch(0.88 0.08 95)" },
  { t: "Coffee", s: "Ethiopian Yirgacheffe, hand-poured", bg: "oklch(0.72 0.14 35)" },
];

export function Play() {
  return (
    <section id="play" className="relative px-5 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 flex items-baseline gap-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">(03) — Off the clock</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl tracking-tight font-light max-w-3xl text-balance">
          When I'm <span className="font-italic italic text-[var(--terracotta)]">not at the desk</span>, you'll find me —
        </h2>

        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -8, rotate: 0 }}
              className="aspect-[3/4] rounded-2xl p-4 md:p-6 flex flex-col justify-between ring-soft"
              style={{ backgroundColor: c.bg }}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink)]/70">0{i + 1}</span>
              <div>
                <div className="font-display text-2xl md:text-3xl tracking-tight text-[var(--ink)]">{c.t}</div>
                <div className="mt-1 text-xs md:text-sm font-italic italic text-[var(--ink)]/75">{c.s}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}