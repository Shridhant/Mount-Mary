import type { Metadata } from "next";
import "./globals.css";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";
import { PageLoader } from "@/components/shared/PageLoader";

export const metadata: Metadata = {
  title: "El-Shaddai Academy | Empowering Future Leaders",
  description:
    "A premier NBSE-recognised school in Dimapur, Nagaland. Founded 1996. Holistic education for over 700 students — academics, sports, and life skills.",
  keywords: ["El-Shaddai Academy", "school Nagaland", "Dimapur school", "NBSE school", "admission Nagaland"],
  openGraph: {
    title: "El-Shaddai Academy | Empowering Future Leaders",
    description: "Premier NBSE-recognised school in Dimapur, Nagaland.",
    type: "website",
    url: "https://elshaddaiacademy.org",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
