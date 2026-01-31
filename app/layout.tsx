import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PanicButton } from "@/components/PanicButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KYB Hercules | Private. Scientific. Male Sexual Health Guidance",
  description:
    "India's first structured male sexual health guidance platform. Confidential, evidence-backed support. At-home kits, tele-consultations, and science-backed solutions.",
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
    <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-[var(--kyb-cream)] text-[var(--kyb-text)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PanicButton />
      </body>
    </html>
  );
}
