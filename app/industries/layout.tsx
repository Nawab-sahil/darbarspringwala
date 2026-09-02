import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries Served | Spring Supplier Jamnagar Gujarat",
  description:
    "Darbar Springwala supplies precision springs to Automotive, Electrical, Agricultural, Medical, and Heavy Machinery industries across Jamnagar, Gujarat, and India.",
  keywords: [
    "Automotive Springs Manufacturer Jamnagar",
    "Electrical Springs Factory Gujarat",
    "Agricultural Springs Jamnagar",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/industries",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
