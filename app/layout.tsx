import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PanicButton } from "@/components/PanicButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "KYB Hercules | Private. Scientific. Male Sexual Health Guidance",
  description:
    "India's first structured male sexual health guidance platform. Confidential, evidence-backed support.",
  keywords: ["male sexual health", "confidential", "teleconsultation", "India", "KYB Hercules"],
  openGraph: {
    title: "KYB Hercules | Private. Scientific. Judgment-Free.",
    description: "Confidential male sexual health guidance. Evidence-backed. Discreet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${newsreader.variable}`}>
      <body>
        <div className="ed-grain" aria-hidden="true" />
        <Header />
        <PanicButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
