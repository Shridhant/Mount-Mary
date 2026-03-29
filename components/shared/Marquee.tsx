"use client";
import { motion } from "framer-motion";

const ITEMS = [
  "Academic Excellence", "Holistic Education", "Mount Mary School",
  "Student-Centered Learning", "4-Step Admission", "Campus Events",
  "Co-Curricular Activities", "Chumukedima, Dimapur", "Nagaland, India",
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
