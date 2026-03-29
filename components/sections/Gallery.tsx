"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES } from "@/lib/utils";

export function Gallery() {
  const frames = [
    "aspect-[4/5.8]",
    "aspect-[4/3.1]",
    "aspect-[4/5.1]",
    "aspect-[4/3.4]",
    "aspect-[4/6.2]",
    "aspect-[4/3]",
    "aspect-[4/4.8]",
    "aspect-[4/3.3]",
    "aspect-[4/6.8]",
  ];

  return (
    <section
      id="gallery"
      className="px-4 py-14 md:px-6 md:py-16 lg:px-8 lg:py-18"
      style={{ background: "var(--bg-light)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-7">
          <h2
            className="font-display font-800 tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)" }}
          >
            Gallery
          </h2>
          <div className="mt-3 h-px w-20" style={{ background: "var(--accent)" }} />
        </div>

        <div className="relative overflow-hidden max-h-[23rem] md:max-h-[27rem] xl:max-h-[31rem]">
          <motion.div
            className="columns-2 gap-3 md:columns-3 xl:columns-4 [column-fill:_balance]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          >
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.96 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="mb-3 break-inside-avoid"
              >
                <a
                  href={img.full ?? img.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={img.alt}
                  className={`group relative block overflow-hidden rounded-[1.25rem] border ${frames[i % frames.length]} ${i % 3 === 1 ? "xl:-translate-y-2" : ""} ${i % 4 === 2 ? "xl:translate-y-2" : ""}`}
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "linear-gradient(180deg, rgba(17,17,17,0) 0%, rgba(17,17,17,0.12) 100%)" }}
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 md:h-16"
            style={{ background: "linear-gradient(180deg, rgba(248,246,241,0) 0%, var(--bg-light) 100%)" }}
          />
        </div>

        <div className="mt-5 flex justify-center">
          <Link href="/gallery" className="btn-outline">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
}
