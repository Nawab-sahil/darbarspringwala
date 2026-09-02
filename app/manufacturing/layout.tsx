import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring Manufacturing Plant Jamnagar | CNC Coiling Factory",
  description:
    "Explore Darbar Springwala's advanced CNC coiling machinery, wire forming equipment, and heat treatment plant in Jamnagar, Gujarat. High precision spring manufacturing.",
  keywords: [
    "Spring Manufacturing Plant Jamnagar",
    "CNC Coiling Factory Jamnagar",
    "Heat Treatment Spring Plant Gujarat",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/manufacturing",
  },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
