"use client";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export function SchoolVideos() {
  return (
    <section id="videos" className="section-padding section-paper-soft">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <BlurFade delay={0}>
            <span className="gold-label">Campus Highlights</span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display font-800" style={{ fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>
          Celebrations From Mount Mary Higher Secondary School
            </h2>
            <div className="gold-line mt-3" />
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="copy-body">
          Explore moments from themed programmes, student participation, and festive celebrations that bring warmth and energy to campus life at Mount Mary Higher Secondary School.
            </p>
          </BlurFade>
          <BlurFade delay={0.25}>
            <a
              href="https://mountmaryhsschool.in/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-sm mt-6 inline-flex"
            >
              Visit Official Website
            </a>
          </BlurFade>
        </div>

        <div className="w-full">
          <div className="relative w-full overflow-hidden rounded-2xl border h-[280px] sm:h-[360px] lg:h-[420px]" style={{ borderColor: "var(--border)" }}>
            <Image
              src="https://mountmaryhsschool.in/wp-content/uploads/2021/03/15.jpg"
              alt="Christmas event at Mount Mary Higher Secondary School"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
