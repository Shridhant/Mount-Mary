import type { Metadata } from "next";
import "./globals.css";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";
import { PageLoader } from "@/components/shared/PageLoader";
import { LOGO_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mount Mary Higher Secondary School | Chumukedima, Dimapur",
  description:
    "Mount Mary Higher Secondary School in Chumukedima, Dimapur, offering holistic education, academics, student life, and all-round development in Nagaland.",
  keywords: ["Mount Mary Higher Secondary School", "school Nagaland", "Dimapur school", "admission Nagaland"],
  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  },
  openGraph: {
    title: "Mount Mary Higher Secondary School | Chumukedima, Dimapur",
    description: "Mount Mary Higher Secondary School in Chumukedima, Dimapur, Nagaland.",
    type: "website",
    url: "https://mountmaryhsschool.in",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageLoader />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
