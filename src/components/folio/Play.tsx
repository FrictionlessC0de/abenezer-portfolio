import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import opensourceImg from "@/assets/play-opensource.jpg";
import sideprojectsImg from "@/assets/play-sideprojects.jpg";
import readingImg from "@/assets/play-reading.jpg";
import coffeeImg from "@/assets/play-coffee.jpg";

const cards = [
  {
    t: "Open source",
    s: "small PRs to tools I use daily",
    img: opensourceImg,
    accent: "oklch(0.78 0.14 50)",
  },
  {
    t: "Side projects",
    s: "weekend prototypes in React + Go",
    img: sideprojectsImg,
    accent: "oklch(0.72 0.16 35)",
  },
  {
    t: "Reading",
    s: "currently: 'Designing Data-Intensive Apps'",
    img: readingImg,
    accent: "oklch(0.68 0.12 75)",
  },
  {
    t: "Coffee",
    s: "Ethiopian Yirgacheffe, hand-poured",
    img: coffeeImg,
    accent: "oklch(0.55 0.1 110)",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Play() {
  return (
    <section id="play" className="relative px-5 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 flex items-baseline gap-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
            (03) — Off the clock
          </span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl tracking-tight font-light max-w-3xl text-balance">
          When I'm{" "}
          <span className="font-italic italic text-[var(--terracotta)]">
            not at the desk
          </span>
          , you'll find me —
        </h2>

        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {cards.map((c, i) => (
            <PlayCard key={c.t} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayCard({
  card,
  index,
}: {
  card: (typeof cards)[number];
  index: number;
}) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mx}% ${my}%, color-mix(in oklab, var(--terracotta) 22%, transparent), transparent 70%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    mx.set(x);
    my.set(y);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: isEven ? -1.5 : 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: isEven ? -0.8 : 0.8 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease, delay: index * 0.12 }}
      onMouseMove={onMove}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden ring-soft cursor-pointer"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.8, ease }}
      >
        <img
          src={card.img}
          alt={card.t}
          loading="lazy"
          width={768}
          height={1024}
          className="h-full w-full object-cover transition-[filter] duration-700 group-hover:brightness-110"
        />
      </motion.div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-[var(--ink)]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/30 via-transparent to-transparent" />

      {/* Cursor spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlight }}
      />

      {/* Animated accent border on hover */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--terracotta)]/40 transition-colors duration-500"
      />

      {/* Top-left index */}
      <motion.div
        className="absolute top-4 left-4 md:top-5 md:left-5"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease, delay: 0.3 + index * 0.12 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--cream)]/60">
          0{index + 1}
        </span>
      </motion.div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.4 + index * 0.12 }}
        >
          {/* Title */}
          <motion.div
            className="font-display text-xl sm:text-2xl md:text-3xl tracking-tight text-[var(--cream)]"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease }}
          >
            {card.t}
          </motion.div>

          {/* Subtitle with slide-up reveal on hover */}
          <motion.div
            className="mt-1.5 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            whileHover={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.4, ease }}
          >
            <p className="text-xs md:text-sm font-italic italic text-[var(--cream)]/75 leading-relaxed">
              {card.s}
            </p>
          </motion.div>

          {/* Accent dot */}
          <motion.div
            className="mt-3 h-1 w-8 rounded-full"
            style={{ backgroundColor: card.accent }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.55 + index * 0.12 }}
          />
        </motion.div>
      </div>

      {/* Floating particles on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-3 right-3 h-2 w-2 rounded-full opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: card.accent }}
        animate={{
          y: [0, -8, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
