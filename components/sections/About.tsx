"use client";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";

const VALUES = [
  {
    title: "Our Philosophy",
    body: "At El-Shaddai Academy, our philosophy is to provide a balanced education that nurtures both academic excellence and personal growth, empowering students to become ethical, confident, and well-rounded individuals who contribute positively to society.",
  },
  {
    title: "Our Principle",
    body: "Our guiding principle is to foster an environment where students are encouraged to think critically, act responsibly, and develop the skills necessary to lead purposeful and meaningful lives.",
  },
  {
    title: "Key to Success",
    body: "The key to our success lies in our commitment to holistic education, where academic rigor, life skills, and ethical values come together to prepare students for success in both personal and professional spheres.",
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
              El-Shaddai Academy&apos;s History
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
                El-Shaddai Academy was founded in 1996 by the late Mayang Teka Tzudir, a visionary businessman, with a dream to provide quality education. The journey began when the property of the renowned Pilgrim School, owned by Mr. Kikon, was sold to Mayang Teka. This marked the humble beginnings of our academy, starting with just 87 students, 5 teachers, and a small support staff. Ms. Durpati Gurung, our former long-serving administrator, played a crucial role in shaping the foundation and growth of the school through her tireless efforts.
              </p>
              <p className="copy-body mb-6">
                Over the past two decades, El-Shaddai Academy has grown steadily and earned a strong reputation for excellence. Today, the school is recognized by the Nagaland Board of School Education under registration number RR/5216/16 and is home to over 700 students and 50 dedicated staff members. We pride ourselves on providing a well-rounded education, focusing not only on academic excellence but also on holistic development. Our goal is to nurture each student&apos;s unique talents while equipping them with essential life skills to help them thrive and become self-sufficient.
              </p>
              <div className="rounded-2xl border px-5 py-4" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.88)" }}>
                <p className="text-[1.02rem] italic leading-[1.85]" style={{ color: "var(--text-secondary)" }}>
                  &ldquo;At El-Shaddai Academy, we are committed to fostering confident, responsible, and ethically aware individuals. Our vision is to inspire future generations of leaders who are both environmentally and socially conscious, capable of driving positive change in our society and beyond.&rdquo;
                </p>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.1}>
            <div className="space-y-4 lg:pt-1">
              <div className="relative rounded-[2rem] overflow-hidden border h-[280px] sm:h-[320px] lg:h-[360px]" style={{ borderColor: "var(--border)" }}>
                <Image
                  src="https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-25-768x1154.jpg"
                  alt="Students at El-Shaddai Academy"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(12,18,24,0.02) 35%, rgba(12,18,24,0.18) 100%)" }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  className="rounded-2xl border px-5 py-5"
                  style={{ background: "rgba(255,255,255,0.88)", borderColor: "var(--border)" }}
                >
                  <p className="font-display font-800 text-3xl mb-1" style={{ color: "var(--gold)" }}>
                    1996
                  </p>
                  <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                    Year Founded
                  </p>
                </div>

                <div
                  className="rounded-2xl border px-5 py-5"
                  style={{ background: "rgba(255,255,255,0.88)", borderColor: "var(--border)" }}
                >
                  <p className="font-display font-800 text-3xl mb-1" style={{ color: "var(--gold)" }}>
                    700+
                  </p>
                  <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                    Students Enrolled
                  </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden border min-h-[110px]" style={{ borderColor: "var(--border)" }}>
                  <Image
                    src="https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-24-768x511.jpg"
                    alt="Science classroom"
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
