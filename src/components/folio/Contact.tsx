import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="relative px-5 md:px-10 py-24 md:py-40 pb-32 md:pb-40">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">(05) — Say hi</span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-4 font-display text-[12vw] md:text-[10vw] leading-[0.95] tracking-[-0.04em] font-light wrap-break-word"
        >
          Let's <span className="font-italic italic text-(--terracotta)">build</span>
          <br />
          something warm.
        </motion.h2>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-12">
          <a
            href="mailto:kalkidan.777el@gmail.com"
            className="group block rounded-3xl bg-(--ink) p-8 md:p-10 text-(--cream) ring-soft transition-transform hover:-translate-y-1"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-(--cream)/60">Email</div>
            <div className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl tracking-tight break-all">kalkidan.777el@gmail.com</div>
            <div className="mt-6 font-italic italic text-(--peach)">replies within a day, usually faster ↗</div>
          </a>
          <div className="rounded-3xl bg-(--peach)/60 p-8 md:p-10 ring-soft">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">Elsewhere</div>
            <ul className="mt-3 space-y-3 font-display text-2xl md:text-3xl tracking-tight">
              {[
                { label: "Code", name: "GitHub", href: "https://github.com/FrictionlessC0de" },
                { label: "Connect", name: "LinkedIn", href: "https://www.linkedin.com/in/abenezer-niguse" },
                { label: "Chat", name: "Telegram", href: "https://t.me/abenezer_niguse" },
              ].map(({ label, name, href }) => (
                <li key={name} className="flex items-baseline justify-between border-b border-(--ink)/15 pb-2">
                  <span className="font-italic italic text-foreground/60 text-base md:text-lg">{label}</span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-(--terracotta) transition-colors"
                  >
                    {name} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-(--ink)/15 pt-6 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
          <span>© 2026 Abenezer Niguse · Hand-coded with care</span>
          <span>Haramaya University · Ethiopia</span>
        </div>
      </div>
    </section>
  );
}