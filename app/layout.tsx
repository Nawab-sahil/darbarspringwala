import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import StickyMobileCta from "../components/layout/StickyMobileCta";
import Topbar from "../components/layout/Topbar";
import Preloader from "../components/Preloader";
import ScrollCoilRail from "../components/motion/ScrollCoilRail";
import WhatsAppFloat from "../components/layout/WhatsAppFloat";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.darbarspringwala.com"),
  title: {
    default: "Darbar Springwala | Industrial Spring Manufacturer in Jamnagar, Gujarat",
    template: "%s | Darbar Springwala Jamnagar",
  },
  description:
    "Darbar Springwala is Jamnagar's premier ISO 9001:2015 certified industrial spring manufacturer & supplier. Producing precision Compression Springs, Extension Springs, Torsion Springs, Conical Springs, Wire Forms, and Custom Engineering Springs in Jamnagar, Gujarat since 1990.",
  keywords: [
    "Spring Manufacturer Jamnagar",
    "Spring Manufacturer in Jamnagar",
    "Spring Factory Jamnagar Gujarat",
    "Compression Springs Manufacturer Jamnagar",
    "Torsion Springs Supplier Jamnagar",
    "Extension Springs Factory Jamnagar",
    "Wire Forms Manufacturer Jamnagar",
    "Custom Springs Manufacturer Gujarat",
    "Industrial Spring Suppliers Jamnagar",
    "Darbar Springwala Jamnagar",
    "Spring Manufacturers near GIDC Jamnagar",
  ],
  authors: [{ name: "Darbar Springwala", url: "https://www.darbarspringwala.com" }],
  creator: "Nawab Sahil",
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
    title: "Darbar Springwala | Industrial Spring Manufacturer in Jamnagar",
    description:
      "Jamnagar's trusted ISO 9001:2015 certified manufacturer of high-precision Compression, Extension, Torsion & Custom Springs.",
    url: "https://www.darbarspringwala.com",
    siteName: "Darbar Springwala Jamnagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Darbar Springwala Industrial Spring Manufacturer Jamnagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darbar Springwala | Spring Manufacturer Jamnagar",
    description:
      "Precision Compression, Extension & Torsion Springs manufactured in Jamnagar, Gujarat, India.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.darbarspringwala.com/#organization",
  name: "Darbar Springwala",
  alternateName: "Darbar Springwala Jamnagar Spring Factory",
  description:
    "Leading ISO 9001:2015 certified industrial spring manufacturer in Jamnagar, Gujarat, India. Specializing in Compression Springs, Extension Springs, Torsion Springs, Wire Forms, and Custom Springs.",
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
    name: "Industrial Spring Manufacturing Catalog Jamnagar",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Compression Springs Jamnagar",
          description: "Open-coil helical springs engineered to resist axial compressive loads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Torsion Springs Jamnagar",
          description: "Rotational spring components formed on CNC coilers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Custom Springs Jamnagar",
          description: "Application-specific spring solutions developed to exact drawing specifications.",
        },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
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
