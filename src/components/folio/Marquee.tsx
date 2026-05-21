const words = [
  "React", "✺", "TypeScript", "✦", "Node.js", "✺",
  "TanStack", "✦", "Python", "✺", "PostgreSQL", "✦", "Tailwind", "✺",
  "Docker", "✦", "Full-Stack", "✺",
];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <section className="relative py-10 md:py-14 overflow-hidden border-y border-[var(--ink)]/10 bg-[var(--peach)]/40">
      <div className="flex marquee whitespace-nowrap font-display text-3xl md:text-5xl tracking-tight">
        {row.map((w, i) => (
          <span key={i} className="mx-6 flex items-center text-[var(--ink)]/85">
            {w === "✺" || w === "✦" ? (
              <span className="text-[var(--terracotta)]">{w}</span>
            ) : (
              <span className={i % 4 === 0 ? "font-italic italic" : ""}>{w}</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}