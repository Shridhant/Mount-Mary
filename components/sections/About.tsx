"use client";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";

const VALUES = [
  {
    title: "Our Philosophy",
  body: "Mount Mary Higher Secondary School believes in balanced education that helps students grow academically, personally, socially, and morally in a caring environment.",
  },
  {
    title: "Our Principle",
    body: "We guide students to think clearly, act responsibly, and develop the discipline and confidence needed for purposeful lives.",
  },
  {
    title: "Key to Success",
    body: "Our strength lies in combining learning, values, activities, and supportive mentorship so students can discover their potential fully.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding section-paper-soft">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <BlurFade delay={0}>
            <span className="gold-label">About Us</span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display font-800 mb-3" style={{ fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>
            The Mount Mary Higher Secondary School Story
            </h2>
            <div className="gold-line" />
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>
              Know us better
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-10 items-start">
          <div>
            <BlurFade delay={0.2}>
              <p className="copy-body mb-4">
                Mount Mary Higher Secondary School in Chumukedima, Dimapur is shaped by a vision of holistic development, meaningful learning, and a strong sense of community.
              </p>
              <p className="copy-body mb-6">
                The school environment is designed to help students grow intellectually, socially, and personally through academics, co-curricular participation, and values-based formation.
              </p>
              <div className="rounded-2xl border px-5 py-4" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.88)" }}>
                <p className="text-[1.02rem] italic leading-[1.85]" style={{ color: "var(--text-secondary)" }}>
              &ldquo;At Mount Mary Higher Secondary School, we aim to help students become compassionate, progressive, and confident individuals who are ready to contribute positively to society.&rdquo;
                </p>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.1}>
            <div className="space-y-4 lg:pt-1">
              <div className="relative rounded-[2rem] overflow-hidden border h-[280px] sm:h-[320px] lg:h-[360px]" style={{ borderColor: "var(--border)" }}>
                <Image
                  src="https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg"
                alt="Students and teachers at Mount Mary Higher Secondary School"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(12,18,24,0.02) 35%, rgba(12,18,24,0.18) 100%)" }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border px-5 py-5" style={{ background: "rgba(255,255,255,0.88)", borderColor: "var(--border)" }}>
                  <p className="font-display font-800 text-3xl mb-1" style={{ color: "var(--gold)" }}>
                    3
                  </p>
                  <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                    Core Pillars
                  </p>
                </div>

                <div className="rounded-2xl border px-5 py-5" style={{ background: "rgba(255,255,255,0.88)", borderColor: "var(--border)" }}>
                  <p className="font-display font-800 text-3xl mb-1" style={{ color: "var(--gold)" }}>
                    4
                  </p>
                  <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                    Admission Steps
                  </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden border min-h-[110px]" style={{ borderColor: "var(--border)" }}>
                  <Image
                    src="https://mountmaryhsschool.in/wp-content/uploads/2021/03/19.jpg"
                alt="Student themed event at Mount Mary Higher Secondary School"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {VALUES.map((value) => (
          <motion.div
            key={value.title}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="card-dark px-5 py-5"
          >
            <p className="font-display font-700 text-lg mb-2" style={{ color: "var(--gold)" }}>
              {value.title}
            </p>
            <p className="text-[1rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
              {value.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
