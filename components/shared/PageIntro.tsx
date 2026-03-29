import Image from "next/image";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export function PageIntro({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: PageIntroProps) {
  return (
    <section className="section-padding section-paper-soft pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-8 items-end">
        <div>
          <span className="gold-label">{eyebrow}</span>
          <h1
            className="font-display font-800 max-w-3xl text-[clamp(2.3rem,7vw,4.1rem)]"
            style={{ fontSize: "var(--text-hero)", color: "var(--text-primary)", lineHeight: 0.98 }}
          >
            {title}
          </h1>
          <div className="gold-line mt-4" />
          <p className="copy-lead mt-4 max-w-xl">
            {subtitle}
          </p>
        </div>

        <div className="relative h-[240px] sm:h-[300px] md:h-[380px] rounded-[1.75rem] overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image src={image} alt={imageAlt} fill className="object-cover" priority />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(12,18,24,0.18) 100%)" }}
          />
        </div>
      </div>
    </section>
  );
}
