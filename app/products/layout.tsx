import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Springs Catalog Jamnagar | Darbar Springwala",
  description:
    "Explore Compression Springs, Extension Springs, Torsion Springs, Conical Springs, Wire Forms & Custom Springs manufactured in Jamnagar, Gujarat by Darbar Springwala.",
  keywords: [
    "Industrial Springs Catalog Jamnagar",
    "Compression Springs Manufacturer Jamnagar",
    "Torsion Springs Factory Gujarat",
    "Wire Forms Jamnagar",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
