"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn, LOGO_URL } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admission", href: "/admission" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md border-b"
          : "bg-transparent"
      )}
      style={scrolled ? { background: "rgba(255,255,255,0.92)", borderColor: "var(--border)" } : undefined}
    >
      <div className="section-x flex items-center justify-between h-16 md:h-[4.5rem] max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <Image src={LOGO_URL} alt="El-Shaddai Academy" fill className="object-contain" />
          </div>
          <div>
            <span className="font-display font-700 text-base leading-none block" style={{ color: "var(--text-primary)" }}>
              El-Shaddai
            </span>
            <span className="text-[10px] leading-none tracking-widest uppercase" style={{ color: "var(--gold)" }}>
              Academy
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors hover:text-[var(--gold)]"
              style={{ color: pathname === l.href ? "var(--text-primary)" : "var(--text-secondary)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/admission" className="hidden md:flex btn-gold text-sm py-2 px-4.5">
          Apply Now
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--text-secondary)" }}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t"
            style={{ background: "var(--bg-light)" }}
          >
            <div className="section-x py-4 flex flex-col gap-3.5">
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium hover:text-[var(--gold)] transition-colors"
                  style={{ color: pathname === l.href ? "var(--text-primary)" : "var(--text-secondary)" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/admission" onClick={() => setOpen(false)} className="btn-gold text-sm mt-1">Apply Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
