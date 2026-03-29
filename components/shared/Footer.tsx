import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Facebook } from "lucide-react";
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

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-3">
              <div className="relative w-9 h-9">
                <Image src={LOGO_URL} alt="El-Shaddai Academy" fill className="object-contain" />
              </div>
              <div>
                <span className="font-display font-700 text-base block" style={{ color: "var(--text-primary)" }}>
                  El-Shaddai Academy
                </span>
                <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                  Est. 1996
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Committed to fostering confident, responsible, and ethically aware individuals — inspiring future generations of leaders.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--gold)" }}>
              Navigate
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-xs hover:text-[var(--gold)] transition-colors"
                    style={{ color: "var(--text-muted)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--gold)" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  138, Duncan Rd, Duncan Basti,<br />Dimapur, Nagaland 797113
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <a href="tel:+913862355024" className="text-xs hover:text-[var(--gold)] transition-colors"
                  style={{ color: "var(--text-muted)" }}>
                  +91 3862 355024
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Facebook className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <a href="https://www.facebook.com/esadmr98/" target="_blank" rel="noreferrer"
                  className="text-xs hover:text-[var(--gold)] transition-colors"
                  style={{ color: "var(--text-muted)" }}>
                  facebook.com/esadmr98
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-5 border-t flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} El-Shaddai Academy. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            NBSE Reg. No. RR/5216/16 · Dimapur, Nagaland
          </p>
        </div>
      </div>
    </footer>
  );
}
