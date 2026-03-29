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
      "At El-Shaddai Academy, our philosophy is to provide a balanced education that nurtures both academic excellence and personal growth, empowering students to become ethical, confident, and well-rounded individuals who contribute positively to society.",
  },
  {
    title: "El-Shaddai's Principle",
    body:
      "Our guiding principle is to foster an environment where students are encouraged to think critically, act responsibly, and develop the skills necessary to lead purposeful and meaningful lives.",
  },
  {
    title: "Key to Success",
    body:
      "The key to our success lies in our commitment to holistic education, where academic rigor, life skills, and ethical values come together to prepare students for success in both personal and professional spheres.",
  },
];

const HIGHLIGHTS = [
  {
    title: "Our Campus",
    body:
      "El-Shaddai Academy’s campus offers a peaceful, modern, and vibrant learning environment, equipped with facilities that support academic and extracurricular growth.",
    image: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-21-768x512.jpg",
    icon: School,
  },
  {
    title: "Co-Curricular",
    body:
      "Our co-curricular activities help students explore interests, develop new talents, and build leadership and teamwork beyond the classroom.",
    image: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-20-768x512.jpg",
    icon: Leaf,
  },
  {
    title: "Academics",
    body:
      "With a strong focus on academic excellence, our curriculum inspires critical thinking, creativity, and a lifelong love of learning.",
    image: "https://elshaddaiacademy.org/wp-content/uploads/2024/10/Classroom-Uniform-4-768x512.jpg",
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
          subtitle="A school built on vision, discipline, and holistic development in Dimapur, Nagaland."
          image="https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-25-768x1154.jpg"
          imageAlt="Students on campus at El-Shaddai Academy"
        />

        <section className="section-padding section-paper-soft pt-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div>
              <span className="gold-label">History</span>
              <h2 className="font-display text-[1.9rem] md:text-[2.35rem] font-700" style={{ color: "var(--text-primary)" }}>
                El-Shaddai Academy's History
              </h2>
              <div className="gold-line mt-4" />
              <div className="mt-6 space-y-5 text-[1.04rem] leading-[1.85]" style={{ color: "var(--text-secondary)" }}>
                <p>
                  El-Shaddai Academy was founded in 1996 by the late Mayang Teka Tzudir, a visionary businessman,
                  with a dream to provide quality education. The journey began when the property of the renowned
                  Pilgrim School, owned by Mr. Kikon, was sold to Mayang Teka.
                </p>
                <p>
                  The Academy started with 87 students, 5 teachers, and a small support staff. Ms. Durpati Gurung,
                  our former long-serving administrator, played a crucial role in shaping the school through her
                  steady work and leadership.
                </p>
                <p>
                  Today, the school is recognized by the Nagaland Board of School Education under registration number
                  RR/5216/16 and serves over 700 students with 50 dedicated staff members.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative h-[260px] sm:h-[320px] md:h-[360px] rounded-[2rem] overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <Image
                  src="https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-24-768x511.jpg"
                  alt="Learning environment at El-Shaddai Academy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-[2rem] border p-6" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Vision</p>
                <p className="mt-3 text-[1.02rem] leading-[1.85] italic" style={{ color: "var(--text-secondary)" }}>
                  "At El-Shaddai Academy, we are committed to fostering confident, responsible, and ethically aware
                  individuals. Our vision is to inspire future generations of leaders who are both environmentally and
                  socially conscious, capable of driving positive change in our society and beyond."
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
                If the school fits what you are looking for, the admission page lays out the full process clearly.
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
