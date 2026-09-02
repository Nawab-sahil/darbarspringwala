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
  title: "Darbar Springwala | Precision Spring Manufacturer",
  description:
    "Darbar Springwala is a Jamnagar-based precision spring manufacturer delivering engineered spring solutions since 1990.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
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
