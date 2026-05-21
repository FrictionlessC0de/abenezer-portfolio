import { motion } from "motion/react";

export function BackgroundField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden warm-bg">
      {/* Grid lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-[var(--ink)]" />
      </svg>

      {/* Floating warm orbs */}
      <motion.div
        className="orb absolute -left-20 top-20 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.16 50 / 0.55), transparent 70%)" }}
      />
      <motion.div
        className="orb absolute right-[-6rem] top-[40%] h-[22rem] w-[22rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.14 80 / 0.5), transparent 70%)", animationDelay: "-6s" }}
      />
      <motion.div
        className="orb absolute left-[30%] bottom-[-8rem] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.18 28 / 0.4), transparent 70%)", animationDelay: "-3s" }}
      />

      {/* Grain */}
      <div className="grain absolute inset-0" />
    </div>
  );
}