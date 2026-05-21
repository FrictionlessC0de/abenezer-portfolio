import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Home, User, Briefcase, Mail, FileText } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "resume", label: "Résumé", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Desktop top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 hidden md:flex justify-between items-center px-10 py-6">
        <a href="#home" className="font-display text-xl font-semibold tracking-tight">
          ☀ abenezer<span className="font-italic text-[var(--terracotta)]">.dev</span>
        </a>
        <nav className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-card/70 backdrop-blur-md px-2 py-2 ring-soft">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className="relative px-4 py-1.5 text-sm font-mono uppercase tracking-wider"
            >
              {active === i.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-[var(--terracotta)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative ${active === i.id ? "text-[var(--primary-foreground)]" : "text-foreground/70"}`}>
                {i.label}
              </span>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-mono uppercase tracking-wider text-[var(--cream)] hover:bg-[var(--terracotta)] transition-colors"
        >
          Let's talk →
        </a>
      </header>

      {/* Mobile floating dock */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-1rem)]">
        <ul className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-[var(--border)] bg-card/85 backdrop-blur-xl px-1.5 sm:px-2 py-1.5 sm:py-2 ring-soft">
          {items.map((i) => {
            const Icon = i.icon;
            const isActive = active === i.id;
            return (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  aria-label={i.label}
                  className="relative flex items-center justify-center"
                >
                  <motion.div
                    animate={{
                      width: isActive ? 88 : 36,
                      backgroundColor: isActive ? "var(--terracotta)" : "rgba(0,0,0,0)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="h-9 sm:h-10 rounded-full flex items-center justify-center gap-1.5 overflow-hidden"
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-[var(--primary-foreground)]" : "text-foreground/70"}`} />
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[11px] font-mono uppercase tracking-wider text-[var(--primary-foreground)]"
                      >
                        {i.label}
                      </motion.span>
                    )}
                  </motion.div>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}