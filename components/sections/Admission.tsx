"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { ADMISSION_STEPS } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Admission() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = ADMISSION_STEPS[activeStep];

  return (
    <section id="admission" className="section-padding section-paper">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <BlurFade delay={0}>
            <span className="gold-label">How to Join</span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display font-800 mb-3" style={{ fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>
              Our Admission Process
            </h2>
            <div className="gold-line" />
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="copy-lead mb-8">
              Our school team will guide you through a smooth entry from registration until your child joins the school through our clear 4-step process.
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10 items-start">
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col gap-3"
            >
              {ADMISSION_STEPS.map((s, index) => (
                <motion.div
                  key={s.step}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="rounded-[1.5rem] border transition-colors"
                  style={{
                    borderColor: index === activeStep ? "var(--border-gold)" : "var(--border)",
                    background: index === activeStep ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.8)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="flex w-full items-start gap-4 px-4 py-4 text-left"
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-display font-800 text-sm shrink-0"
                      style={{ background: "var(--gold-bg)", border: "1px solid var(--border-gold)", color: "var(--gold)" }}
                    >
                      {s.step}
                    </div>

                    <div>
                      <p className="font-display font-700 text-[1.14rem] mb-1" style={{ color: "var(--text-primary)" }}>
                        {s.title}
                      </p>
                      <p className="text-[0.96rem] leading-[1.65]" style={{ color: "var(--text-secondary)" }}>
                        {s.description.length > 110 ? `${s.description.slice(0, 110)}...` : s.description}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>

            <BlurFade delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-5 md:mt-6">
                <Link href="/admission" className="btn-gold">
                  Start Application <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact-us" className="btn-outline">
                  Contact School
                </Link>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.25}>
            <div className="space-y-4 lg:sticky lg:top-24 lg:pt-1">
              <div className="relative rounded-[2rem] overflow-hidden border h-[260px] sm:h-[300px] lg:h-[320px]" style={{ borderColor: "var(--border)" }}>
                <Image
                  src="https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg"
                alt="Students at Mount Mary Higher Secondary School"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="rounded-[1.75rem] border p-5" style={{ background: "rgba(255,255,255,0.92)", borderColor: "var(--border)" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-display font-800 text-sm shrink-0"
                    style={{ background: "var(--gold-bg)", border: "1px solid var(--border-gold)", color: "var(--gold)" }}
                  >
                    {currentStep.step}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                      Current Step
                    </p>
                    <h3 className="font-display text-[1.45rem] font-700 leading-[1.1]" style={{ color: "var(--text-primary)" }}>
                      {currentStep.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-[1rem] leading-[1.78]" style={{ color: "var(--text-secondary)" }}>
                  {currentStep.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.88)", border: "1px solid var(--border)" }}>
                  <p className="font-display font-700 text-lg" style={{ color: "var(--text-primary)" }}>
                    Office Hours
                  </p>
                  <p className="text-[0.98rem] mt-2 leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    Monday to Friday
                    <br />
                    8:30 AM - 2:30 PM
                  </p>
                </div>

                <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.88)", border: "1px solid var(--border-gold)" }}>
                  <p className="font-display font-700 text-lg" style={{ color: "var(--text-primary)" }}>
                    Admission Forms
                  </p>
                  <p className="text-[0.98rem] mt-2 leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    Available through the school office and official contact channels. Early submission is advised.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
