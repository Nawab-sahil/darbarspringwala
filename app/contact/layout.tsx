import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Spring Factory Jamnagar | Darbar Springwala",
  description:
    "Contact Darbar Springwala in Jamnagar, Gujarat for custom spring manufacturing quotes, CAD drawing review, and bulk OEM spring orders. Call +91 99042 12117.",
  keywords: [
    "Contact Spring Manufacturer Jamnagar",
    "Jamnagar Spring Factory Contact",
    "Spring Quotation Jamnagar",
    "Custom Spring Order Jamnagar Gujarat",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
