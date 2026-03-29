import type { Metadata } from "next";
import "./globals.css";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";
import { PageLoader } from "@/components/shared/PageLoader";

export const metadata: Metadata = {
  title: "Mount Mary School | Chumukedima, Dimapur",
  description:
    "Mount Mary Higher Secondary School in Chumukedima, Dimapur, offering holistic education, academics, student life, and all-round development in Nagaland.",
  keywords: ["Mount Mary School", "Mount Mary Higher Secondary School", "school Nagaland", "Dimapur school", "admission Nagaland"],
  openGraph: {
    title: "Mount Mary School | Chumukedima, Dimapur",
    description: "Mount Mary Higher Secondary School in Chumukedima, Dimapur, Nagaland.",
    type: "website",
    url: "https://mountmaryhsschool.in",
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
