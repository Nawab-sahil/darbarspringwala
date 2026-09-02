import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISO 9001:2015 Spring Quality Assurance Jamnagar | Darbar Springwala",
  description:
    "Our Jamnagar spring manufacturing plant enforces ISO 9001:2015 quality assurance, automated load testing, dimension inspection, and fatigue life verification.",
  keywords: [
    "ISO Certified Spring Manufacturer Jamnagar",
    "Spring Quality Inspection Gujarat",
    "Spring Testing Laboratory Jamnagar",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/quality",
  },
};

export default function QualityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
