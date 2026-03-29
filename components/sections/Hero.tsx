"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { LOGO_URL } from "@/lib/utils";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const HIGHLIGHTS = [
  { value: "3", label: "Core Pillars" },
  { value: "4", label: "Admission Steps" },
  { value: "1", label: "Campus" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(198,138,43,0.06), transparent 26%), linear-gradient(180deg, rgba(251,253,251,1) 0%, rgba(238,245,241,1) 100%)",
      }}
    >
      <div className="section-x relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_EXPO }}
              className="inline-flex items-center gap-3 rounded-full border px-4 py-2"
              style={{ borderColor: "var(--border-gold)", background: "rgba(251,253,251,0.76)" }}
            >
              <MapPin className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
                Dimapur, Nagaland
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: EASE_EXPO }}
              className="mt-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em]" style={{ color: "var(--text-muted)" }}>
                Mount Mary Higher Secondary School
              </p>
              <h1
                className="mt-4 max-w-[10ch] font-display font-800 leading-[0.96] text-[clamp(2.8rem,7vw,4.8rem)]"
                style={{ color: "var(--text-primary)" }}
              >
                Empowering future leaders.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE_EXPO }}
              className="mt-7 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              We equip our students with the knowledge, skills, and values they need to become
              confident, responsible leaders of tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: EASE_EXPO }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/admission" className="btn-gold">
                Apply for Admission <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-outline">
                Learn About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: EASE_EXPO }}
              className="mt-9 grid max-w-xl grid-cols-3 gap-3 md:gap-4"
            >
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border px-3 py-3.5 text-center md:px-4"
                  style={{ borderColor: "var(--border)", background: "rgba(251,253,251,0.8)" }}
                >
                  <p className="font-display text-2xl font-700 md:text-3xl" style={{ color: "var(--text-primary)" }}>
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: EASE_EXPO }}
            className="relative"
          >
            <div className="absolute inset-x-16 top-3 h-16 rounded-full blur-3xl" style={{ background: "rgba(198,138,43,0.08)" }} />

            <div className="relative overflow-hidden rounded-[2.2rem] border p-3 shadow-[0_18px_50px_rgba(24,57,43,0.08)] md:p-3.5" style={{ borderColor: "var(--border)", background: "rgba(251,253,251,0.76)" }}>
              <div className="relative h-[280px] overflow-hidden rounded-[1.7rem] sm:h-[340px] lg:h-[430px]">
                <Image
                  src="https://mountmaryhsschool.in/wp-content/uploads/2021/03/3.jpg"
                  alt="Campus life at Mount Mary Higher Secondary School"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 56vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(24,57,43,0.02) 24%, rgba(24,57,43,0.14) 100%)" }}
                />
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--text-muted)" }}>
                    Holistic Education for Every Child
                  </p>
                  <p className="mt-2 max-w-md text-[1rem] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
                    A balanced school life shaped by academics, co-curricular learning, values, and character formation.
                  </p>
                </div>

                <div
                  className="flex items-center gap-3 rounded-[1.2rem] border px-4 py-3"
                  style={{ borderColor: "var(--border)", background: "rgba(234,240,246,0.92)" }}
                >
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <Image src={LOGO_URL} alt="Mount Mary Higher Secondary School logo" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                      School City
                    </p>
                    <p className="mt-1 font-display text-lg font-700 leading-none" style={{ color: "var(--text-primary)" }}>
                      Dimapur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <div
                className="max-w-sm rounded-[1.4rem] border px-5 py-4"
                style={{ borderColor: "var(--border)", background: "rgba(251,253,251,0.78)" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--text-muted)" }}>
                  School Life
                </p>
                <p className="mt-2 text-[0.98rem] leading-[1.72]" style={{ color: "var(--text-secondary)" }}>
                  Excellence in academics, campus life, and student development in one caring learning environment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
