import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Darbar Springwala | Spring Manufacturer Jamnagar",
  description:
    "Darbar Springwala has been Jamnagar's premier ISO 9001:2015 certified precision spring manufacturer since 1990. Delivering quality engineered springs across Gujarat & India.",
  keywords: [
    "About Darbar Springwala Jamnagar",
    "Spring Manufacturer History Jamnagar",
    "ISO Certified Spring Factory Gujarat",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
