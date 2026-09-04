import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import StickyMobileCta from "../components/layout/StickyMobileCta";
import Topbar from "../components/layout/Topbar";
import Preloader from "../components/Preloader";
import ScrollCoilRail from "../components/motion/ScrollCoilRail";
import WhatsAppFloat from "../components/layout/WhatsAppFloat";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.darbarspringwala.com"),
  title: {
    default: "Darbar Springwala | Famous Spring Manufacturer in Jamnagar, Gujarat",
    template: "%s | Darbar Springwala Jamnagar",
  },
  description:
    "Darbar Springwala is the most famous spring manufacturer in Jamnagar, Gujarat. ISO 9001:2015 certified factory producing precision Compression Springs, Extension Springs, Torsion Springs, Conical Springs, Wire Forms, and Custom Springs in Jamnagar since 1990.",
  keywords: [
    "Famous Spring in Jamnagar",
    "Famous Spring Manufacturer in Jamnagar",
    "Best Spring in Jamnagar",
    "Spring in Jamnagar",
    "Spring Manufacturer in Jamnagar",
    "Spring Factory Jamnagar Gujarat",
    "Spring Wala in Jamnagar",
    "Darbar Springwala Jamnagar",
    "Compression Spring Manufacturer Jamnagar",
    "Torsion Spring Supplier Jamnagar",
    "Extension Spring Factory Jamnagar",
    "Wire Forms Manufacturer Jamnagar",
    "Custom Springs Manufacturer Gujarat",
    "Industrial Spring Suppliers Jamnagar",
    "GIDC Spring Manufacturer Jamnagar",
  ],
  authors: [{ name: "Darbar Springwala", url: "https://www.darbarspringwala.com" }],
  creator: "Darbar Springwala",
  publisher: "Darbar Springwala",
  category: "Industrial Manufacturing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Darbar Springwala | Famous Spring Manufacturer in Jamnagar",
    description:
      "Jamnagar's most famous ISO 9001:2015 certified manufacturer of precision Compression, Extension, Torsion & Custom Springs since 1990.",
    url: "https://www.darbarspringwala.com",
    siteName: "Darbar Springwala Jamnagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Darbar Springwala Famous Spring Manufacturer Jamnagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darbar Springwala | Famous Spring Manufacturer in Jamnagar",
    description:
      "Famous Spring Manufacturer in Jamnagar, Gujarat. Precision Compression, Extension & Torsion Springs manufactured since 1990.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.darbarspringwala.com",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.darbarspringwala.com/#organization",
  name: "Darbar Springwala",
  alternateName: [
    "Famous Spring Manufacturer in Jamnagar",
    "Darbar Springwala Jamnagar Spring Factory",
    "Spring Wala in Jamnagar"
  ],
  description:
    "Famous spring manufacturer in Jamnagar, Gujarat, India. ISO 9001:2015 certified factory producing Compression Springs, Extension Springs, Torsion Springs, Wire Forms, and Custom Industrial Springs since 1990.",
  url: "https://www.darbarspringwala.com",
  telephone: "+919904212117",
  email: "darbarspringwala@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jamnagar Industrial GIDC Area",
    addressLocality: "Jamnagar",
    addressRegion: "Gujarat",
    postalCode: "361004",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.4707,
    longitude: 70.0577,
  },
  areaServed: [
    "Jamnagar",
    "Rajkot",
    "Ahmedabad",
    "Vadodara",
    "Surat",
    "Gujarat",
    "India",
    "Global",
  ],
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Famous Industrial Spring Manufacturing Catalog Jamnagar",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Compression Springs in Jamnagar",
          description: "Open-coil helical springs manufactured in Jamnagar, Gujarat.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Torsion Springs in Jamnagar",
          description: "Rotational spring components formed on multi-axis CNC coilers in Jamnagar.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Custom Springs in Jamnagar",
          description: "Application-specific spring solutions developed to exact drawing specifications in Jamnagar.",
        },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-bg text-ink font-body flex flex-col">
        <Preloader />
        <ScrollCoilRail />
        <WhatsAppFloat />
        <Topbar />
        <Header />
        {children}
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
