import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { MarqueeBanner } from "@/components/shared/Marquee";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Pillars } from "@/components/sections/Pillars";
import { Admission } from "@/components/sections/Admission";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { SchoolVideos } from "@/components/sections/SchoolVideos";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <Stats />
        <About />
        <Pillars />
        <Admission />
        <SchoolVideos />
        <Gallery />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
