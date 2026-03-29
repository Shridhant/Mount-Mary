"use client";
import { BlurFade } from "@/components/ui/blur-fade";

export function Newsletter() {
  return (
    <section id="newsletter" className="section-padding section-paper">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}>
          <div>
            <BlurFade delay={0}>
              <span className="gold-label">Newsletter</span>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h2 className="font-display font-800" style={{ fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>
                Subscribe To Our Newsletter
              </h2>
              <div className="gold-line mt-3" />
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="copy-body">
                Get updates on admissions, campus events, and student achievements directly in your inbox.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.25}>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none border"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "#fff" }}
              />
              <button type="button" className="btn-gold justify-center">
                Subscribe
              </button>
            </form>
            <p className="text-[0.95rem] mt-2" style={{ color: "var(--text-muted)" }}>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
