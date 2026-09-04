import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISO 9001:2015 Quality Standards | Darbar Springwala Jamnagar",
  description:
    "ISO 9001:2015 certified spring quality auditing in Jamnagar, Gujarat. Standardized DIN 2095 Grade 1 spring rate load testing, wire tensile auditing, and flat-end grinding squareness.",
  keywords: [
    "ISO Certified Spring Manufacturer Jamnagar",
    "DIN 2095 Grade 1 Spring Rate",
    "Spring Quality Inspection Jamnagar",
    "Darbar Springwala Quality Standards",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/quality",
  },
};

export default function QualityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
