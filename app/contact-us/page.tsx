import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { PageIntro } from "@/components/shared/PageIntro";
import { ContactPageClient } from "@/components/pages/ContactPageClient";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageIntro
          eyebrow="Contact Us"
          title="Get In Touch"
          subtitle="Reach the school for admissions, campus visits, or general enquiries."
          image="https://elshaddaiacademy.org/wp-content/uploads/2024/10/a-23-768x512.jpg"
          imageAlt="Students at El-Shaddai Academy"
        />
        <ContactPageClient />
      </main>
      <Footer />
    </>
  );
}
