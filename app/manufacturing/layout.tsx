import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring Manufacturing Plant Jamnagar | CNC Coiling & Heat Treatment",
  description:
    "State-of-the-art spring manufacturing facility in Jamnagar GIDC, Gujarat. Featuring multi-axis CNC spring coilers, batch tempering furnaces, and 100% load testing for 0.2mm to 16.0mm wire gauge springs.",
  keywords: [
    "Spring Manufacturing Plant Jamnagar",
    "CNC Spring Coiling Jamnagar",
    "Spring Factory GIDC Jamnagar",
    "Industrial Spring Heat Treatment Gujarat",
    "Darbar Springwala Plant",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/manufacturing",
  },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
