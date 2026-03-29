import Link from "next/link";
import { BookOpen, CheckCircle2, FileText, Handshake } from "lucide-react";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { PageIntro } from "@/components/shared/PageIntro";
import { ADMISSION_STEPS } from "@/lib/utils";

const STEP_ICONS = [FileText, CheckCircle2, BookOpen, Handshake];

export default function AdmissionPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageIntro
          eyebrow="Admission"
          title="Admission Process"
          subtitle="A clear four-step journey from registration to final offer, with guidance from the school team throughout."
          image="https://mountmaryhsschool.in/wp-content/uploads/2021/03/3.jpg"
      imageAlt="Students at Mount Mary Higher Secondary School"
        />

        <section className="section-padding section-paper-soft pt-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-10 items-start">
            <div className="rounded-[2rem] border p-6 md:p-7 lg:sticky lg:top-24" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.7)" }}>
              <span className="gold-label">Overview</span>
              <h2 className="font-display text-[1.9rem] md:text-[2.35rem] font-700" style={{ color: "var(--text-primary)" }}>
      Mount Mary Higher Secondary School Admission Process
              </h2>
              <div className="gold-line mt-4" />
              <p className="mt-5 text-[1.02rem] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
                Our school team will help you through registration, document submission, assessment, and final confirmation in a clear 4-step process.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                <div className="rounded-[1.5rem] border p-4" style={{ borderColor: "var(--border)", background: "rgba(251,253,251,0.9)" }}>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Office Hours</p>
                  <p className="mt-2 text-[0.98rem]" style={{ color: "var(--text-primary)" }}>8:30 AM to 2:30 PM</p>
                  <p className="mt-1 text-[0.98rem]" style={{ color: "var(--text-secondary)" }}>Monday to Friday</p>
                </div>
                <div className="rounded-[1.5rem] border p-4" style={{ borderColor: "var(--border)", background: "rgba(251,253,251,0.9)" }}>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Important</p>
                  <p className="mt-2 text-[0.98rem] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    Forms are processed on a first come, first served basis.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-10">
              {ADMISSION_STEPS.map((step, index) => {
                const Icon = STEP_ICONS[index];
                return (
                  <article
                    key={step.step}
                    className="relative rounded-[1.6rem] border px-5 py-5 shadow-[0_10px_30px_rgba(30,42,57,0.04)] md:px-6 md:py-6"
                    style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.9)" }}
                  >
                    <div className="pr-2 md:pr-4">
                      <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--text-muted)" }}>
                        Step {step.step}
                      </p>
                      <div className="mt-3 flex items-start gap-3">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border"
                          style={{ borderColor: "var(--border-gold)", background: "var(--gold-bg)" }}
                        >
                          <Icon className="h-4 w-4" style={{ color: "var(--gold)" }} />
                        </div>
                        <h3 className="pt-1 font-display text-[1.42rem] md:text-[1.68rem] font-700 leading-[1.08]" style={{ color: "var(--text-primary)" }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-4 max-w-[52rem] text-[0.98rem] leading-[1.78]" style={{ color: "var(--text-secondary)" }}>
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding section-paper pt-2">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[2rem] border p-6 md:p-8" style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}>
              <span className="gold-label">Before You Apply</span>
              <h2 className="font-display text-[1.9rem] md:text-[2.35rem] font-700" style={{ color: "var(--text-primary)" }}>
                What to prepare
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                <p>Please refer to the checklist of documents attached with the admission form for the documents required for the applicant.</p>
                <p>Applicants may be guided through written assessment, interaction, and document review depending on the class level.</p>
                <p>Parents may also be invited for an interaction during the admission process where required.</p>
              </div>
            </div>

            <div className="rounded-[2rem] border p-6 md:p-8" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <span className="gold-label">Support</span>
              <h2 className="font-display text-[1.9rem] md:text-[2.35rem] font-700" style={{ color: "var(--text-primary)" }}>
                Need clarification first?
              </h2>
              <p className="mt-6 text-[1.02rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                If you need help with timings, Saturday office availability, or document requirements, reach the school directly before submitting the form.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://mountmaryhsschool.in/contact-us/" target="_blank" rel="noreferrer" className="btn-gold">Open Contact Page</a>
                <Link href="/contact-us" className="btn-outline">Contact From Website</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding section-paper-soft pt-0">
          <div className="max-w-7xl mx-auto rounded-[2rem] border px-6 py-8 md:px-12 md:py-14" style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}>
            <span className="gold-label">Official Page</span>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="font-display text-[1.9rem] md:text-[2.35rem] font-700" style={{ color: "var(--text-primary)" }}>
                  Continue to the official school website
                </h2>
                <p className="mt-3 max-w-2xl text-[1.02rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
      The official Mount Mary Higher Secondary School site remains the source for current notices, school updates, and contact details.
                </p>
              </div>
              <a
                href="https://mountmaryhsschool.in/"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                Open Official Website
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
