"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Facebook, Send, CheckCircle } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all border bg-transparent focus:border-[var(--gold)]";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding section-paper-soft">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <BlurFade delay={0}>
            <span className="gold-label">Get In Touch</span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display font-800" style={{ fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>
              Contact El-Shaddai Academy
            </h2>
            <div className="gold-line mt-3 mx-auto" />
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — form */}
          <BlurFade delay={0.15}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-dark p-10 flex flex-col items-center text-center gap-5"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "var(--gold-bg)", border: "1px solid var(--border-gold)" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="font-display font-700 text-xl" style={{ color: "var(--text-primary)" }}>
                  Message Received
                </h3>
                <p className="text-[1rem] leading-[1.8] max-w-xs" style={{ color: "var(--text-secondary)" }}>
                  Thank you for reaching out. Our team will contact you within one working day.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="btn-outline text-sm mt-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="card-dark p-8">
                <h3 className="font-display font-700 text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                  Send Us A Message
                </h3>
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>
                  And we will get back to you
                </p>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Full Name
                      </label>
                      <input
                        name="name" value={form.name} onChange={handle}
                        placeholder="Your name"
                        className={cn(inputClass, "border-[var(--border)]")}
                        style={{ color: "var(--text-primary)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Phone
                      </label>
                      <input
                        name="phone" value={form.phone} onChange={handle}
                        placeholder="+91 XXXXX XXXXX"
                        className={cn(inputClass, "border-[var(--border)]")}
                        style={{ color: "var(--text-primary)" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Email
                    </label>
                    <input
                      name="email" value={form.email} onChange={handle}
                      type="email" placeholder="you@example.com"
                      className={cn(inputClass, "border-[var(--border)]")}
                      style={{ color: "var(--text-primary)" }}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Message
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handle}
                      rows={4} placeholder="Your enquiry or message..."
                      className={cn(inputClass, "border-[var(--border)] resize-none")}
                      style={{ color: "var(--text-primary)" }}
                    />
                  </div>
                  <button onClick={submit} disabled={loading} className="btn-gold justify-center mt-1">
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[var(--bg)]/40 border-t-[var(--bg)] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </div>
              </div>
            )}
          </BlurFade>

          {/* Right — contact details */}
          <BlurFade delay={0.25}>
            <div className="flex flex-col gap-5">

              {/* Address card */}
              <div className="card-dark p-6">
                <h3 className="font-display font-700 text-base mb-5" style={{ color: "var(--text-primary)" }}>
                  Find Us
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "var(--gold-bg)", border: "1px solid var(--border-gold)" }}>
                      <MapPin className="w-4 h-4" style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Address</p>
                      <p className="text-[1rem] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                        138, Duncan Rd, Duncan Basti,<br />
                        Dimapur, Nagaland 797113
                      </p>
                      <a
                        href="https://www.google.com/maps/place/El-Shaddai+Academy/@25.912707,93.7054598,17z/data=!3m1!4b1!4m6!3m5!1s0x3745e19b60c00ee3:0x1a5ac8f5f6d42bc7!8m2!3d25.9127022!4d93.7080401!16s%2Fg%2F1tftjkwn?entry=ttu"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs mt-2 inline-block hover:text-[var(--gold)] transition-colors"
                        style={{ color: "var(--text-muted)" }}
                      >
                        View on Google Map
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--gold-bg)", border: "1px solid var(--border-gold)" }}>
                      <Phone className="w-4 h-4" style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Phone</p>
                      <a href="tel:+913862355024" className="text-sm hover:text-[var(--gold)] transition-colors"
                        style={{ color: "var(--text-secondary)" }}>
                        +91 3862 355024
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--gold-bg)", border: "1px solid var(--border-gold)" }}>
                      <Facebook className="w-4 h-4" style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Social</p>
                      <a href="https://www.facebook.com/esadmr98/" target="_blank" rel="noreferrer"
                        className="text-sm hover:text-[var(--gold)] transition-colors"
                        style={{ color: "var(--text-secondary)" }}>
                        facebook.com/esadmr98
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office hours */}
              <div className="card-dark p-6">
                <h3 className="font-display font-700 text-base mb-4" style={{ color: "var(--text-primary)" }}>
                  Office Hours
                </h3>
                {[
                  { day: "Monday – Friday", hours: "8:30 AM – 2:30 PM" },
                  { day: "Saturday", hours: "Please confirm with office" },
                  { day: "Sunday & Holidays", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-baseline py-2.5 border-b last:border-0" style={{ borderColor: "var(--border)" }}>
                    <span className="text-[1rem] font-medium" style={{ color: "var(--text-secondary)" }}>{day}</span>
                    <span className="text-[0.95rem]" style={{ color: "var(--text-muted)" }}>{hours}</span>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                className="rounded-2xl h-36 flex items-center justify-center border"
                style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-muted)" }}
              >
                <div className="text-center">
                  <MapPin className="w-6 h-6 mx-auto mb-1" style={{ color: "var(--gold)" }} />
                  <p className="text-xs">Duncan Rd, Dimapur, Nagaland</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
