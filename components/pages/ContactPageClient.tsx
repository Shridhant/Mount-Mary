"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

const inputClass =
  "w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--gold)]";

export function ContactPageClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  return (
    <section className="section-padding section-paper-soft pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div className="space-y-6">
          <div className="rounded-[2rem] border p-6 md:p-8" style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}>
            <h2 className="font-display text-2xl md:text-3xl font-700" style={{ color: "var(--text-primary)" }}>
              Visit or Call
            </h2>
            <div className="gold-line mt-4" />
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-2xl border p-3" style={{ borderColor: "var(--border-gold)", background: "var(--gold-bg)" }}>
                  <MapPin className="h-4 w-4" style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Location</p>
                  <p className="mt-1 text-[1rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    138, Duncan Rd, Duncan Basti, Dimapur, Nagaland 797113
                  </p>
                  <a
                    href="https://www.google.com/maps/place/El-Shaddai+Academy/@25.912707,93.7054598,17z/data=!3m1!4b1!4m6!3m5!1s0x3745e19b60c00ee3:0x1a5ac8f5f6d42bc7!8m2!3d25.9127022!4d93.7080401!16s%2Fg%2F1tftjkwn?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm hover:text-[var(--gold)]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    View on Google Map
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-2xl border p-3" style={{ borderColor: "var(--border-gold)", background: "var(--gold-bg)" }}>
                  <Phone className="h-4 w-4" style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Phone</p>
                  <a href="tel:+913862355024" className="mt-1 inline-block text-sm" style={{ color: "var(--text-secondary)" }}>
                    +91 3862 355024
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-2xl border p-3" style={{ borderColor: "var(--border-gold)", background: "var(--gold-bg)" }}>
                  <Facebook className="h-4 w-4" style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Facebook</p>
                  <a
                    href="https://www.facebook.com/esadmr98/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    facebook.com/esadmr98
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border p-6 md:p-8" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Office Hours</p>
            <div className="mt-5 space-y-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-b pb-3" style={{ borderColor: "var(--border)" }}>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Monday to Friday</span>
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>8:30 AM to 2:30 PM</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-b pb-3" style={{ borderColor: "var(--border)" }}>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Saturday</span>
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>Please confirm with office</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Response</span>
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>Within one working day</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border p-6 md:p-10" style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Send Us A Message
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-700" style={{ color: "var(--text-primary)" }}>
            And we will get back to you
          </h2>
          <div className="gold-line mt-4" />

          {sent ? (
            <div className="mt-8 rounded-[1.5rem] border p-6" style={{ borderColor: "var(--border-gold)", background: "var(--gold-bg)" }}>
              <p className="font-display text-2xl font-700" style={{ color: "var(--text-primary)" }}>Message received</p>
              <p className="mt-2 text-[1rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                This form is currently front-end only. The layout is ready, but it still needs a real submission endpoint.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="btn-outline mt-5"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className="mt-8 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <input
                className={inputClass}
                style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "#fff" }}
                placeholder="Full Name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
              <input
                className={inputClass}
                style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "#fff" }}
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
              <input
                className={inputClass}
                style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "#fff" }}
                placeholder="Subject"
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
              />
              <textarea
                className={`${inputClass} min-h-40 resize-none`}
                style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "#fff" }}
                placeholder="Message"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
              <button type="submit" className="btn-gold">
                Submit Now
              </button>
            </form>
          )}

          <div className="mt-10 rounded-[1.5rem] border p-5" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4" style={{ color: "var(--gold)" }} />
              <div>
                <p className="text-sm" style={{ color: "var(--text-primary)" }}>Prefer admissions first?</p>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                  Review the full admission steps before writing to the team.
                </p>
                <Link href="/admission" className="mt-3 inline-block text-sm hover:text-[var(--gold)]" style={{ color: "var(--text-primary)" }}>
                  Go to Admission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
