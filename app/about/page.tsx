import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Leaf, School } from "lucide-react";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { PageIntro } from "@/components/shared/PageIntro";

const VALUES = [
  {
    title: "Our Philosophy",
    body:
      "Mount Mary School believes in balanced education that nurtures academic growth, character, confidence, and responsibility in every student.",
  },
  {
    title: "Our Principle",
    body:
      "We encourage students to think clearly, act responsibly, and grow into purposeful individuals through discipline and care.",
  },
  {
    title: "Key to Success",
    body:
      "Our approach brings together learning, values, activities, and mentorship so students can grow holistically in school life.",
  },
];

const HIGHLIGHTS = [
  {
    title: "Our Campus",
    body:
      "Mount Mary School provides a lively and supportive learning environment in Chumukedima, helping students grow through academics and activities.",
    image: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/3.jpg",
    icon: School,
  },
  {
    title: "Co-Curricular",
    body:
      "Students are encouraged to participate in programmes and events that develop teamwork, confidence, creativity, and leadership.",
    image: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/19.jpg",
    icon: Leaf,
  },
  {
    title: "Academics",
    body:
      "A student-centered academic environment helps learners build strong foundations, curiosity, and readiness for the future.",
    image: "https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg",
    icon: GraduationCap,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageIntro
          eyebrow="About Us"
          title="Know Us Better"
          subtitle="A school shaped by holistic development, values, and purposeful learning in Chumukedima, Dimapur."
          image="https://mountmaryhsschool.in/wp-content/uploads/2021/03/11.jpg"
          imageAlt="Students and teachers at Mount Mary School"
        />

        <section className="section-padding section-paper-soft pt-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div>
              <span className="gold-label">Story</span>
              <h2 className="font-display text-[1.9rem] md:text-[2.35rem] font-700" style={{ color: "var(--text-primary)" }}>
                Mount Mary School at a Glance
              </h2>
              <div className="gold-line mt-4" />
              <div className="mt-6 space-y-5 text-[1.04rem] leading-[1.85]" style={{ color: "var(--text-secondary)" }}>
                <p>
                  Mount Mary Higher Secondary School serves students in Chumukedima, Dimapur with a clear focus on holistic education and meaningful personal growth.
                </p>
                <p>
                  The school experience is designed to support intellectual development, co-curricular participation, discipline, and a strong culture of sharing and caring.
                </p>
                <p>
                  Through academics, activities, and mentorship, the school aims to help students become confident, compassionate, and socially responsible individuals.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative h-[260px] sm:h-[320px] md:h-[360px] rounded-[2rem] overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <Image
                  src="https://mountmaryhsschool.in/wp-content/uploads/2021/03/19.jpg"
                  alt="Student event at Mount Mary School"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-[2rem] border p-6" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Vision</p>
                <p className="mt-3 text-[1.02rem] leading-[1.85] italic" style={{ color: "var(--text-secondary)" }}>
                  "Mount Mary School strives to help students become compassionate, progressive, and professionally prepared human beings in an environment of care and growth."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding section-paper pt-2">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="gold-label">Foundation</span>
              <h2 className="font-display text-[1.9rem] md:text-[2.35rem] font-700" style={{ color: "var(--text-primary)" }}>
                The thinking behind the school
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {VALUES.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border p-6"
                  style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
                >
                  <p className="font-display text-2xl font-700" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </p>
                  <p className="mt-4 text-[1.02rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding section-paper-soft pt-2">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="gold-label">School Life</span>
              <h2 className="font-display text-[1.9rem] md:text-[2.35rem] font-700" style={{ color: "var(--text-primary)" }}>
                Where growth takes shape
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="overflow-hidden rounded-[2rem] border" style={{ borderColor: "var(--border)" }}>
                    <div className="relative h-60">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-6" style={{ background: "var(--bg-light)" }}>
                      <div className="inline-flex rounded-2xl border p-3" style={{ borderColor: "var(--border-gold)", background: "var(--gold-bg)" }}>
                        <Icon className="h-4 w-4" style={{ color: "var(--gold)" }} />
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-700" style={{ color: "var(--text-primary)" }}>
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[1.02rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                        {item.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding section-paper pt-0">
          <div className="max-w-7xl mx-auto rounded-[2rem] border px-6 py-8 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div>
              <span className="gold-label">Next Step</span>
              <h2 className="font-display text-[1.9rem] md:text-[2.35rem] font-700" style={{ color: "var(--text-primary)" }}>
                See how admission works
              </h2>
              <p className="mt-3 max-w-2xl text-[1.04rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                If the school feels right for your child, the admission page lays out the process clearly.
              </p>
            </div>
            <Link href="/admission" className="btn-gold">
              Explore Admission
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
