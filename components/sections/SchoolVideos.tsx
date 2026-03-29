"use client";
import { BlurFade } from "@/components/ui/blur-fade";

export function SchoolVideos() {
  return (
    <section id="videos" className="section-padding section-paper-soft">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <BlurFade delay={0}>
            <span className="gold-label">School Videos</span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display font-800" style={{ fontSize: "var(--text-2xl)", color: "var(--text-primary)" }}>
              Stories From Our Campus
            </h2>
            <div className="gold-line mt-3" />
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="copy-body">
              Explore highlights from school events, classroom moments, and student achievements. These
              videos capture the energy, discipline, and joy that define El-Shaddai Academy.
            </p>
          </BlurFade>
          <BlurFade delay={0.25}>
            <a
              href="https://www.facebook.com/esadmr98/videos_by"
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-sm mt-6 inline-flex"
            >
              Watch More
            </a>
          </BlurFade>
        </div>

        <div className="w-full">
          <div className="relative w-full overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)" }}>
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Fesadmr98%2Fvideos%2F414011627485081%2F&show_text=false&width=560&t=0"
              style={{ border: "none" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="El-Shaddai Academy Video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
