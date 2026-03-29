"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { PILLARS, EASE_EXPO } from "@/lib/utils";

export function Pillars() {
  const [active, setActive] = useState(0);
  const current = PILLARS[active];

  return (
    <section id="pillars" className="section-padding" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <BlurFade delay={0}>
            <span className="gold-label">What We Offer</span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display font-800" style={{ fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>
              Three Pillars of Our School
            </h2>
            <div className="gold-line mt-3" />
          </BlurFade>
        </div>

        {/* Tab selector */}
        <BlurFade delay={0.15}>
          <div className="flex gap-2 mb-10 flex-wrap">
            {PILLARS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  color: active === i ? "var(--bg)" : "var(--text-secondary)",
                  background: active === i ? "var(--gold)" : "transparent",
                  border: `1px solid ${active === i ? "var(--gold)" : "var(--border)"}`,
                  minHeight: "44px",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </BlurFade>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: EASE_EXPO }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden order-2 lg:order-1" style={{ height: "420px" }}>
              <Image
                src={current.image}
                alt={current.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gold border glow on active */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(201,150,58,0.3)" }}
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="gold-label">{current.label}</span>
              <h3
                className="font-display font-800 mb-4"
                style={{ fontSize: "var(--text-xl)", color: "var(--text-primary)" }}
              >
                {current.title}
              </h3>
              <p className="copy-body mb-8">
                {current.description}
              </p>
              <Link href="/about" className="btn-gold text-sm">
                Learn More →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
