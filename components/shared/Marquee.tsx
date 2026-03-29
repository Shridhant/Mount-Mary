"use client";
import { motion } from "framer-motion";

const ITEMS = [
  "Academic Excellence", "NBSE Recognised", "Est. 1996",
  "700+ Students", "50+ Staff", "Holistic Education",
  "Sports & Athletics", "Co-Curricular Activities", "Dimapur, Nagaland",
];

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden py-3.5 border-y" style={{ background: "var(--bg-light)", borderColor: "var(--border)" }}>
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--gold)", opacity: 0.6 }} />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
