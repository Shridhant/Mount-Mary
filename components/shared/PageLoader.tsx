"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LOGO_URL } from "@/lib/utils";

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("mount-mary-loaded")) { setDone(true); return; }
    const start = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(pct);
      if (now - start < duration) requestAnimationFrame(tick);
      else setTimeout(() => { setDone(true); sessionStorage.setItem("mount-mary-loaded", "1"); }, 280);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "var(--bg)" }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Gold top progress bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-black/5">
            <div
              className="h-full transition-all duration-100"
              style={{ width: `${progress}%`, background: "var(--gold)" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo */}
            <div className="relative w-24 h-24">
              <Image
                src={LOGO_URL}
                alt="Mount Mary School"
                fill
                className="object-contain"
              />
            </div>

            {/* Name */}
            <div className="text-center">
              <p className="font-display font-700 text-2xl tracking-wide" style={{ color: "var(--text-primary)" }}>
                Mount Mary School
              </p>
              <p className="text-xs mt-1 tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                Empowering Future Leaders
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-48 mt-2">
              <div className="h-px bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-100"
                  style={{ width: `${progress}%`, background: "var(--gold)" }}
                />
              </div>
              <p className="text-center text-xs mt-2 tabular-nums" style={{ color: "var(--text-muted)" }}>
                {progress}%
              </p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Dimapur, Nagaland
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
