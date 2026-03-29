"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/utils";

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  return (
    <section
      className="section-x py-14 border-y"
      style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p
              className="font-display font-800 text-4xl md:text-5xl mb-1.5"
              style={{ color: "var(--gold)" }}
            >
              <CountUp target={s.value} suffix={s.suffix} />
            </p>
            <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
