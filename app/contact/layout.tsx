import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Darbar Springwala | Spring Manufacturer in Jamnagar GIDC",
  description:
    "Contact Darbar Springwala in Jamnagar, Gujarat. Factory location: Radar Rd, Gokul Nagar, Jamnagar 361004. Call +91 99741 55963 for fast custom spring quotations and technical CAD reviews.",
  keywords: [
    "Contact Spring Manufacturer Jamnagar",
    "Spring Factory Address Jamnagar GIDC",
    "Darbar Springwala Phone Number",
    "Custom Spring Quotation Jamnagar",
    "Spring Wala in Jamnagar Contact",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
