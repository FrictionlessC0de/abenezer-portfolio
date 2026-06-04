import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Sparkles, Telescope, Heart } from "lucide-react";
import type { Project } from "@/lib/projects";

const ease = [0.16, 1, 0.3, 1] as const;

function CardShell({
  children,
  color,
  delay = 0,
  as: As = "div" as any,
  ...rest
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <As
        {...rest}
        className="block h-full p-7 md:p-8 ring-soft transition-colors"
        style={{
          background: `linear-gradient(160deg, ${color} 0%, transparent 120%)`,
        }}
      >
        {children}
      </As>
    </motion.div>
  );
}

export function ProjectLinks({ project: p }: { project: Project }) {
  const [stars, setStars] = useState<number | null>(null);
  const [starred, setStarred] = useState(false);
  const [burst, setBurst] = useState(0);

  const storageKey = p.repo ? `gh-star:${p.repo}` : null;

  useEffect(() => {
    if (!p.repo) return;
    if (storageKey && localStorage.getItem(storageKey) === "1") {
      setStarred(true);
    }
    let cancelled = false;
    fetch(`https://api.github.com/repos/${p.repo}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && d?.stargazers_count != null) {
          setStars(d.stargazers_count);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [p.repo, storageKey]);

  const onStar = () => {
    if (!storageKey) return;
    setBurst((b) => b + 1);
    if (starred) {
      setStarred(false);
      setStars((s) => (s != null ? Math.max(0, s - 1) : s));
      localStorage.removeItem(storageKey);
    } else {
      setStarred(true);
      setStars((s) => (s != null ? s + 1 : 1));
      localStorage.setItem(storageKey, "1");
    }
  };

  return (
    <section className="relative z-10 px-5 md:px-10 mt-20 md:mt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 md:mb-8 flex items-baseline justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
            (04) — Take it for a spin
          </span>
          <span className="font-mono text-[11px] text-foreground/50">
            launch · peek · cheer
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Live demo */}
          <CardShell
            color={p.color}
            delay={0}
            as="a"
            href={p.demo ?? "#"}
            target={p.demo ? "_blank" : undefined}
            rel={p.demo ? "noopener noreferrer" : undefined}
            aria-disabled={!p.demo}
            onClick={(e: any) => !p.demo && e.preventDefault()}
          >
            <div className="flex items-start justify-between">
              <motion.span
                whileHover={{ rotate: -12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="grid place-items-center h-10 w-10 rounded-xl bg-[var(--ink)]/10 backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-[var(--ink)]" />
              </motion.span>
              <ExternalLink className="h-4 w-4 text-[var(--ink)]/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink)]/70">
                {p.demo ? "See it live" : "Not deployed yet"}
              </div>
              <div className="mt-2 font-display text-2xl md:text-3xl font-light italic text-[var(--ink)] truncate">
                {p.demo ? "Step inside →" : "—"}
              </div>
              {p.demo && (
                <div className="mt-1 font-mono text-[10px] text-[var(--ink)]/60 truncate">
                  {new URL(p.demo).hostname.replace(/^www\./, "")}
                </div>
              )}
            </div>
          </CardShell>

          {/* GitHub source */}
          <CardShell
            color={p.color}
            delay={0.08}
            as="a"
            href={p.repo ? `https://github.com/${p.repo}` : "#"}
            target={p.repo ? "_blank" : undefined}
            rel={p.repo ? "noopener noreferrer" : undefined}
            aria-disabled={!p.repo}
            onClick={(e: any) => !p.repo && e.preventDefault()}
          >
            <div className="flex items-start justify-between">
              <motion.span
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="grid place-items-center h-10 w-10 rounded-xl bg-[var(--ink)]/10 backdrop-blur-sm"
              >
                <Telescope className="h-5 w-5 text-[var(--ink)]" />
              </motion.span>
              <ExternalLink className="h-4 w-4 text-[var(--ink)]/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink)]/70">
                Peek under the hood
              </div>
              <div className="mt-2 font-display text-2xl md:text-3xl font-light italic text-[var(--ink)] truncate flex items-center gap-2">
                <Github className="h-5 w-5 shrink-0" />
                {p.repo?.split("/")[1] ?? "—"}
              </div>
            </div>
          </CardShell>

          {/* Star (stays on page) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <button
              type="button"
              onClick={onStar}
              disabled={!p.repo}
              className="block h-full w-full text-left p-7 md:p-8 ring-soft transition-colors disabled:opacity-60"
              style={{
                background: `linear-gradient(160deg, ${p.color} 0%, transparent 120%)`,
              }}
              aria-pressed={starred}
              aria-label={starred ? "Unstar repository" : "Star repository"}
            >
              <div className="flex items-start justify-between">
                <motion.span
                  animate={
                    starred
                      ? { scale: [1, 1.5, 1], rotate: [0, -15, 15, 0] }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.6, ease }}
                  className="relative inline-flex grid place-items-center h-10 w-10 rounded-xl bg-[var(--ink)]/10 backdrop-blur-sm"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      starred ? "fill-[var(--ink)] text-[var(--ink)]" : "text-[var(--ink)]"
                    }`}
                  />
                  <AnimatePresence>
                    {burst > 0 && starred && (
                      <motion.span
                        key={burst}
                        initial={{ scale: 0, opacity: 0.9 }}
                        animate={{ scale: 2.6, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease }}
                        className="absolute inset-0 rounded-full bg-[var(--ink)]/30"
                      />
                    )}
                  </AnimatePresence>
                </motion.span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink)]/70">
                  {starred ? "Loved" : "Tap to love"}
                </span>
              </div>
              <div className="mt-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink)]/70">
                  {starred ? "Thanks — it means a lot" : "Show some love"}
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={stars ?? "—"}
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="font-display text-4xl md:text-5xl font-light text-[var(--ink)]"
                    >
                      {stars ?? "—"}
                    </motion.span>
                  </AnimatePresence>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink)]/70">
                    hearts
                  </span>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}