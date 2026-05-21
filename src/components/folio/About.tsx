import { motion } from "motion/react";

const stats = [
  { k: "B.Sc", v: "Software Engineering" },
  { k: "20+", v: "Projects shipped" },
  { k: "Full", v: "Stack — end to end" },
];

export function About() {
  return (
    <section id="about" className="relative px-5 md:px-10 py-24 md:py-40">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
            (01) — About
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-9 space-y-10"
        >
          <p className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight text-balance">
            I'm Abenezer — a full-stack engineer who turns rough ideas into <span className="font-italic italic text-[var(--terracotta)]">soft, confident</span> products people actually enjoy using.
          </p>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Software Engineering graduate from Haramaya University. I work across the whole stack — React, TypeScript and Motion on the front, Node.js, Python and Postgres on the back. Comfortable owning a feature from database schema to the last micro-interaction.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-[var(--ink)]/15">
            {stats.map((s) => (
              <div key={s.k}>
                <div className="font-display text-3xl sm:text-4xl md:text-6xl text-[var(--terracotta)] font-light">{s.k}</div>
                <div className="mt-1 font-mono text-[10px] md:text-xs uppercase tracking-wider text-foreground/60">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}