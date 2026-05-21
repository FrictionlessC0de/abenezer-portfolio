import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="relative px-5 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-12 md:mb-20">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">(02) — Selected work</span>
            <h2 className="mt-3 font-display text-5xl md:text-7xl tracking-tight font-light">
              Things <span className="font-italic italic text-[var(--terracotta)]">made</span> lately
            </h2>
          </div>
        </div>

        <ul className="divide-y divide-[var(--ink)]/15 border-y border-[var(--ink)]/15">
          {projects.map((p, i) => (
            <motion.li
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative"
            >
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="block py-6 md:py-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
                    <span className="font-mono text-xs text-foreground/50 shrink-0">{p.n}</span>
                    <motion.h3
                      layoutId={`project-title-${p.slug}`}
                      className="font-display text-2xl sm:text-3xl md:text-6xl tracking-tight font-light truncate transition-transform duration-500 group-hover:translate-x-2"
                    >
                      {p.title}
                    </motion.h3>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 md:gap-8 shrink-0">
                    <span className="hidden md:inline font-mono text-xs uppercase tracking-wider text-foreground/60">{p.tag}</span>
                    <span className="hidden sm:inline font-mono text-xs text-foreground/50">{p.year}</span>
                    <motion.span
                      layoutId={`project-dot-${p.slug}`}
                      className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full transition-transform duration-500 group-hover:rotate-45"
                      style={{ backgroundColor: p.color, color: "var(--ink)" }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </div>
                </div>
                <p className="mt-2 ml-7 md:ml-16 max-w-xl text-xs sm:text-sm md:text-base text-foreground/65">{p.desc}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}