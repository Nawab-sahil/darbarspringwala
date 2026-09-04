import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Spring Catalogue Jamnagar | Compression, Torsion & Extension Springs",
  description:
    "Explore Jamnagar's most famous industrial spring catalogue. Precision Compression Springs, Torsion Springs, Extension Springs, Conical Springs, and Wire Forms manufactured by Darbar Springwala in Jamnagar GIDC.",
  keywords: [
    "Famous Spring Catalogue Jamnagar",
    "Spring in Jamnagar",
    "Compression Spring Manufacturer Jamnagar",
    "Torsion Spring Supplier Jamnagar",
    "Extension Springs Factory Jamnagar",
    "Wire Forms Manufacturer Jamnagar",
    "Darbar Springwala Catalogue",
  ],
  alternates: {
    canonical: "https://www.darbarspringwala.com/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
