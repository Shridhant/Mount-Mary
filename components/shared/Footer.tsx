import Image from "next/image";
import Link from "next/link";
import { Globe, MapPin } from "lucide-react";
import { LOGO_URL } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admission", href: "/admission" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Footer() {
  return (
    <footer
      className="section-x py-10 md:py-12 border-t"
      style={{ background: "var(--bg-light)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-3">
              <div className="relative w-9 h-9">
            <Image src={LOGO_URL} alt="Mount Mary Higher Secondary School" fill className="object-contain" />
              </div>
              <div>
                <span className="font-display font-700 text-base block" style={{ color: "var(--text-primary)" }}>
            Mount Mary Higher Secondary School
                </span>
                <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                  Chumukedima, Dimapur
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Nurturing compassionate, responsible, and confident learners through holistic education and a caring school environment.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--gold)" }}>
              Navigate
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-xs hover:text-[var(--gold)] transition-colors" style={{ color: "var(--text-muted)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--gold)" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Chumukedima,
                  <br />
                  Dimapur - 797103, Nagaland, India
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <a
                  href="https://mountmaryhsschool.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs hover:text-[var(--gold)] transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  mountmaryhsschool.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <a
                  href="https://mountmaryhsschool.in/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs hover:text-[var(--gold)] transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  Official Contact Page
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-5 border-t flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Mount Mary Higher Secondary School. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Chumukedima, Dimapur · Nagaland, India
          </p>
        </div>
      </div>
    </footer>
  );
}
