import Image from "next/image";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { GALLERY_IMAGES } from "@/lib/utils";

export default function GalleryPage() {
  const frames = [
    "aspect-[4/5.8]",
    "aspect-[4/3.2]",
    "aspect-[4/5.2]",
    "aspect-[4/3.5]",
    "aspect-[4/6.4]",
    "aspect-[4/3]",
    "aspect-[4/4.9]",
    "aspect-[4/3.35]",
    "aspect-[4/6.7]",
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="section-padding pt-28 md:pt-32" style={{ background: "var(--bg)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-10">
              <h1
                className="font-display font-800 tracking-[-0.03em]"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 4.5rem)", color: "var(--text-primary)" }}
              >
                Gallery
              </h1>
              <div className="mt-3 h-px w-24" style={{ background: "var(--accent)" }} />
            </div>

            <div className="columns-2 gap-3 md:columns-3 xl:columns-4 [column-fill:_balance]">
              {GALLERY_IMAGES.map((image, index) => (
                <div key={image.src} className="mb-3 break-inside-avoid">
                  <a
                    href={image.full ?? image.src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={image.alt}
                    className={`group relative block overflow-hidden rounded-[1.25rem] border ${frames[index % frames.length]} ${index % 3 === 1 ? "xl:-translate-y-2" : ""} ${index % 4 === 2 ? "xl:translate-y-2" : ""}`}
                    style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                    />
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: "linear-gradient(180deg, rgba(17,17,17,0) 0%, rgba(17,17,17,0.12) 100%)" }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
