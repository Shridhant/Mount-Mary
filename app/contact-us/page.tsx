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
          subtitle="Reach Mount Mary School for admissions, campus visits, or general enquiries."
          image="https://mountmaryhsschool.in/wp-content/uploads/2021/03/19.jpg"
          imageAlt="Students at a themed event at Mount Mary School"
        />
        <ContactPageClient />
      </main>
      <Footer />
    </>
  );
}
