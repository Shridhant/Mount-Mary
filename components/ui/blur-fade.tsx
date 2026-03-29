"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function BlurFade({
  children, className, delay = 0, yOffset = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.65, delay: 0.04 + delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
