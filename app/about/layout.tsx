import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Darbar Springwala | Famous Spring Manufacturer in Jamnagar since 1990",
  description:
    "Learn about Darbar Springwala's 35+ year legacy as Jamnagar's premier industrial spring manufacturer. Founded in 1990 in Jamnagar GIDC, Gujarat, producing ISO 9001:2015 certified precision springs.",
  keywords: [
    "Famous Spring Manufacturer Jamnagar",
    "About Darbar Springwala Jamnagar",
    "Spring Factory History Jamnagar",
    "Spring Wala in Jamnagar",
    "Jamnagar GIDC Spring Plant",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
