import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erectile Health | KYB Hercules",
  description:
    "Confidential erectile health assessment. Free, anonymous, evidence-based. For men 18+.",
};

export default function EdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
