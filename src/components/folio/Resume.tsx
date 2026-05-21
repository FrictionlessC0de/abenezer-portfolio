import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { Download, Eye, FileText } from "lucide-react";

const RESUME_URL = "/abenezer-niguse-resume.pdf";

const stack = [
  { k: "Frontend", v: "React · TypeScript · Next.js · Tailwind · Motion" },
  { k: "Backend", v: "Node.js · NestJS · Python · FastAPI · REST · GraphQL" },
  { k: "Database", v: "PostgreSQL · MongoDB · Redis · Prisma · Supabase" },
  { k: "DevOps", v: "Docker · GitHub Actions · AWS · Vercel · Cloudflare" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Resume() {
  return (
    <section id="resume" className="relative px-5 md:px-10 py-24 md:py-40">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
            (04) — Résumé
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-9 space-y-10"
        >
          <h2 className="font-display text-5xl md:text-7xl tracking-tight font-light text-balance">
            The <span className="font-italic italic text-[var(--terracotta)]">short version</span>.
          </h2>

          <ResumeCard />
        </motion.div>
      </div>
    </section>
  );
}

function ResumeCard() {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, color-mix(in oklab, var(--terracotta) 28%, transparent), transparent 60%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    mx.set(x);
    my.set(y);
    ry.set((x - 50) / 12);
    rx.set(-(y - 50) / 14);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200, transformStyle: "preserve-3d" }}
      className="group relative rounded-3xl border border-[var(--ink)]/10 ring-soft overflow-hidden bg-card/70 backdrop-blur"
    >
      {/* Animated gradient border */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-60 [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] p-px"
        style={{
          background:
            "conic-gradient(from var(--angle,0deg), var(--terracotta), var(--peach), var(--gold), var(--terracotta))",
          animation: "spin-slow 8s linear infinite",
        }}
      />
      {/* Cursor spotlight */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: spotlight }} />
      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "var(--terracotta)", opacity: 0.25 }}
        animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "var(--gold)", opacity: 0.22 }}
        animate={{ y: [0, -14, 0], x: [0, 16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div style={{ transform: "translateZ(40px)" }} className="relative">
        <div className="flex items-center justify-between gap-3 px-5 md:px-8 py-5 border-b border-[var(--ink)]/10 bg-[var(--peach)]/40">
          <div className="flex items-center gap-3 min-w-0">
            <motion.span
              className="grid place-items-center h-10 w-10 rounded-full bg-[var(--terracotta)] text-[var(--cream)] shadow-lg"
              animate={{ rotate: [0, -6, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FileText className="h-4 w-4" />
            </motion.span>
            <div className="min-w-0">
              <div className="font-display text-base sm:text-lg md:text-xl tracking-tight truncate">
                Abenezer_Niguse_Resume.pdf
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 flex items-center gap-2">
                <motion.span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                Updated 2026 · 1 page
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-2">
            <ActionLink href={RESUME_URL} icon={<Eye className="h-3.5 w-3.5" />} label="View" />
            <ActionLink href={RESUME_URL} icon={<Download className="h-3.5 w-3.5" />} label="Download" primary download />
          </div>
        </div>

        <div className="p-5 md:p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 mb-2">
              Education
            </div>
            <div className="font-display text-xl sm:text-2xl md:text-3xl tracking-tight">
              Haramaya University —{" "}
              <span className="font-italic italic text-[var(--terracotta)]">
                B.Sc. Software Engineering
              </span>
            </div>
            <p className="mt-2 text-sm md:text-base text-foreground/70">
              Algorithms, distributed systems, databases, and software architecture — with a stack of side projects to match.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--ink)]/10">
            {stack.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.08 }}
                className="group/item relative rounded-xl p-3 -m-3 hover:bg-[var(--ink)]/5 transition-colors"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--terracotta)] flex items-center gap-2">
                  <span className="inline-block h-px w-4 bg-[var(--terracotta)] origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500" />
                  {s.k}
                </div>
                <div className="mt-1 text-sm md:text-base text-foreground/85">{s.v}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex md:hidden gap-2 pt-2">
            <ActionLink href={RESUME_URL} icon={<Eye className="h-3.5 w-3.5" />} label="View" full />
            <ActionLink href={RESUME_URL} icon={<Download className="h-3.5 w-3.5" />} label="Download" primary download full />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ActionLink({
  href,
  icon,
  label,
  primary,
  download,
  full,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
  download?: boolean;
  full?: boolean;
}) {
  return (
    <motion.a
      href={href}
      {...(download ? { download: true } : { target: "_blank", rel: "noreferrer" })}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={[
        "relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 md:py-2 text-xs font-mono uppercase tracking-wider overflow-hidden transition-colors",
        full ? "flex-1 py-3" : "",
        primary
          ? "bg-[var(--ink)] text-[var(--cream)] hover:bg-[var(--terracotta)]"
          : "border border-[var(--ink)]/20 hover:bg-[var(--ink)]/5",
      ].join(" ")}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {icon} {label}
      </span>
      {primary && (
        <motion.span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
        />
      )}
    </motion.a>
  );
}