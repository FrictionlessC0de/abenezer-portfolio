import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects, type Project } from "@/lib/projects";
import { BackgroundField } from "@/components/folio/BackgroundField";
import { ProjectLinks } from "@/components/folio/ProjectLinks";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    const title = p ? `${p.title} — Abenezer Niguse` : "Project — Abenezer Niguse";
    const desc = p?.desc ?? "Selected work by Abenezer Niguse.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-5xl">Project not found</h1>
        <Link to="/" className="mt-6 inline-block underline">Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <p className="text-sm text-foreground/60">{error.message}</p>
        <button onClick={reset} className="mt-4 underline">Try again</button>
      </div>
    </div>
  ),
  component: ProjectPage,
});

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectPage() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const nextIndex = (projects.findIndex((x) => x.slug === p.slug) + 1) % projects.length;
  const next = projects[nextIndex];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundField />

      {/* Cinematic color wash that sweeps in */}
      <motion.div
        aria-hidden
        initial={{ scaleY: 1, transformOrigin: "top" }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.05 }}
        className="pointer-events-none fixed inset-0 z-50"
        style={{ backgroundColor: p.color }}
      />
      <motion.div
        aria-hidden
        initial={{ scaleY: 1, transformOrigin: "top" }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease, delay: 0.18 }}
        className="pointer-events-none fixed inset-0 z-40 bg-[var(--ink)]/90"
      />

      <div className="relative z-10 px-5 md:px-10 pt-8 md:pt-10">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to work
          </Link>
        </div>
      </div>

      <section className="relative z-10 px-5 md:px-10 pt-10 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <motion.span
              layoutId={`project-dot-${p.slug}`}
              className="grid place-items-center h-12 w-12 rounded-full"
              style={{ backgroundColor: p.color, color: "var(--ink)" }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
              {p.n} · {p.year}
            </span>
          </div>

          <motion.h1
            layoutId={`project-title-${p.slug}`}
            className="mt-6 font-display text-5xl sm:text-6xl md:text-[9rem] leading-[0.95] tracking-tight font-light break-words"
          >
            {p.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease, delay: 1.0 }}
            className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-foreground/75 font-serif italic"
          >
            {p.desc}
          </motion.p>
        </div>
      </section>

      {/* Cinematic hero band */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 1.15 }}
        className="relative z-10 mt-16 md:mt-24 px-5 md:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="relative aspect-[4/3] sm:aspect-[16/8] md:aspect-[16/7] rounded-2xl overflow-hidden ring-soft"
            style={{
              background: `radial-gradient(120% 80% at 20% 20%, ${p.color} 0%, transparent 60%), radial-gradient(120% 80% at 80% 80%, var(--peach) 0%, transparent 55%), var(--ink)`,
            }}
          >
            <div className="absolute inset-0 grain opacity-40" />
            <div className="absolute inset-0 grid place-items-center">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease, delay: 1.4 }}
                className="font-display text-[20vw] md:text-[12vw] leading-none text-background/15 select-none"
              >
                {p.title.split(" ")[0]}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Meta grid */}
      <section className="relative z-10 px-5 md:px-10 mt-20 md:mt-28">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { label: "Role", value: p.role },
            { label: "Timeline", value: p.timeline },
            { label: "Stack", value: p.stack.join(" · ") },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.3 + i * 0.08 }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55">
                {m.label}
              </div>
              <div className="mt-2 text-base md:text-lg text-foreground/90">{m.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-5 md:px-10 mt-20 md:mt-28">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
              Overview
            </span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="md:col-span-8 font-display text-2xl md:text-4xl font-light leading-[1.25] text-foreground/90"
          >
            {p.overview}
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-10 px-5 md:px-10 mt-20 md:mt-28">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
              Highlights
            </span>
          </div>
          <ul className="md:col-span-8 space-y-6">
            {p.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="flex gap-4 text-lg md:text-xl text-foreground/85"
              >
                <span className="font-mono text-xs text-foreground/50 mt-2 shrink-0">
                  0{i + 1}
                </span>
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Links: Live demo · Source · Star */}
      <ProjectLinks project={p} />

      {/* Next */}
      <section className="relative z-10 px-5 md:px-10 mt-24 md:mt-32 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group block rounded-3xl p-6 sm:p-8 md:p-14 ring-soft transition-transform hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${next.color} 0%, var(--peach) 100%)`,
            }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink)]/70">
              Next project — {next.n}
            </div>
            <div className="mt-4 flex items-end justify-between gap-4 sm:gap-6">
              <h3 className="font-display text-3xl sm:text-4xl md:text-7xl font-light text-[var(--ink)] tracking-tight break-words min-w-0">
                {next.title}
              </h3>
              <span className="grid place-items-center h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full bg-[var(--ink)] text-background transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}