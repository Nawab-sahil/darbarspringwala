import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries Served | Famous Spring Supplier in Jamnagar",
  description:
    "Darbar Springwala supplies precision springs to automotive, electrical switchgear, industrial valve, hydraulic, and agricultural OEM machinery sectors in Jamnagar, Gujarat, and across India.",
  keywords: [
    "Automotive Springs Jamnagar",
    "Switchgear Springs Supplier Jamnagar",
    "Valve Springs Factory Gujarat",
    "Industrial Springs Jamnagar",
    "Darbar Springwala OEM Supply",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/industries",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
