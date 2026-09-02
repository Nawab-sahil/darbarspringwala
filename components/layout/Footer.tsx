"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  ArrowUp,
  Cpu,
} from "lucide-react";
import logo from "@/public/logo.png";
import { contactInfo } from "../../lib/site";
import PreFooterCta from "./PreFooterCta";

const NAVIGATION_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Manufacturing Plant", href: "/manufacturing" },
    { label: "Quality Standards", href: "/quality" },
    { label: "Target Industries", href: "/industries" },
    { label: "Request Quote", href: "/contact" },
  ],
  products: [
    { label: "Compression Springs", href: "/products/compression-spring" },
    { label: "Extension / Tension", href: "/products/extension-tension-spring" },
    { label: "Torsion Springs", href: "/products/torsion-spring" },
    { label: "Conical Springs", href: "/products/conical-spring" },
    { label: "Wire Forms & Clips", href: "/products/wire-forms" },
    { label: "Garter Springs", href: "/products/garter-spring" },
    { label: "Spiral Springs", href: "/products/spiral-spring" },
    { label: "Die Springs", href: "/products/die-spring" },
    { label: "Custom Springs", href: "/products/custom-spring" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

import { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  const [isCoilHovered, setIsCoilHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Pre-Footer Call to Action Banner */}
      <PreFooterCta />

      {/* 2. Modern Framer-Powered Luxury Footer */}
      <footer className="relative bg-[#06101c] text-white overflow-hidden border-t border-[#9C724A]/30">
        {/* Subtle Ambient Light Gradient Accent on Top Edge */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#9C724A] to-transparent opacity-80" />

        {/* Ambient Radial Background Glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9C724A]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#17324F]/30 rounded-full blur-[140px] pointer-events-none" />

        {/* Blueprint Dot Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 relative z-10">

          {/* Grand Brand Display Header */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pb-10 sm:pb-12 text-center select-none border-b border-white/10"
          >
            <h2 className="text-[clamp(32px,7.5vw,94px)] font-black uppercase tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-white/35 via-[#E5C158]/45 to-white/25 font-display leading-none">
              DARBAR SPRINGWALA
            </h2>
            <p className="mt-3 font-mono text-[10px] sm:text-xs text-[#9C724A] uppercase tracking-[0.22em] font-bold">
              Precision Industrial Spring Manufacturer • Jamnagar, India
            </p>
          </motion.div>

          {/* Main Footer Links & Info Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-14 border-b border-white/10"
          >
            {/* Column 1: Brand Info & Identity (4 Cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
              <Link href="/" className="inline-block group">
                <Image
                  src={logo}
                  alt="Darbar Springwala"
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <p className="text-[#A4B3C6] text-xs sm:text-sm leading-relaxed max-w-sm">
                Established in 1990 in Jamnagar, India. Darbar Springwala is an ISO-certified manufacturer delivering high-precision industrial springs, wire forms, and engineered spring assemblies to global OEMs.
              </p>

              {/* Quality & Manufacturing Cert Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90 shadow-sm">
                  <ShieldCheck className="h-4 w-4 text-[#9C724A]" />
                  <div>
                    <span className="block font-bold text-white text-[11px]">ISO 9001:2015</span>
                    <span className="text-[9px] text-white/60">Quality System</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90 shadow-sm">
                  <Cpu className="h-4 w-4 text-[#9C724A]" />
                  <div>
                    <span className="block font-bold text-white text-[11px]">CNC MULTI-AXIS</span>
                    <span className="text-[9px] text-white/60">Automated Coiling</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Quick Links (2 Cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#9C724A]">
                Company
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#C7CFD7]">
                {NAVIGATION_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <motion.div
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#9C724A]/40 transition-colors group-hover:bg-[#9C724A]" />
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#9C724A]" />
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Products Catalog (3 Cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#9C724A]">
                Spring Catalog
              </h3>
              <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-[#C7CFD7]">
                {NAVIGATION_LINKS.products.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <motion.div
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#9C724A]/40 transition-colors group-hover:bg-[#9C724A]" />
                        <span>{link.label}</span>
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Plant & Contact Details (3 Cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#9C724A]">
                Plant & Office
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm text-[#C7CFD7]">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#9C724A] shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-xs">{contactInfo.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#9C724A] shrink-0" />
                  <Link
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="transition-colors hover:text-white font-mono text-xs"
                  >
                    {contactInfo.phone}
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#9C724A] shrink-0" />
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="transition-colors hover:text-white text-xs"
                  >
                    {contactInfo.email}
                  </Link>
                </div>

                {/* Live Plant Hours Badge */}
                <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-white/80">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>JAMNAGAR PLANT • ONLINE NOW</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Framer Motion Spring Graphic Bar & Scroll-To-Top */}
          <div className="pt-8 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Interactive Spring SVG Banner with Hover Motion */}
            <motion.div
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 cursor-pointer select-none"
              onHoverStart={() => setIsCoilHovered(true)}
              onHoverEnd={() => setIsCoilHovered(false)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-8 flex items-center justify-center">
                <svg viewBox="0 0 80 30" className="w-full h-full overflow-visible">
                  <motion.path
                    d="M 5 15 Q 15 -5 25 15 Q 35 35 45 15 Q 55 -5 65 15 Q 75 35 80 15"
                    fill="none"
                    stroke="#9C724A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    animate={{
                      d: isCoilHovered
                        ? "M 5 15 Q 12 5 20 15 Q 28 25 35 15 Q 42 5 50 15 Q 58 25 65 15 Q 72 5 80 15"
                        : "M 5 15 Q 15 -5 25 15 Q 35 35 45 15 Q 55 -5 65 15 Q 75 35 80 15"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
                  Precision Spring Coil Technology
                </p>
                <p className="text-[10px] text-white/50">
                  {isCoilHovered ? "Dynamic Load Simulation Applied" : "Hover to test coil compression dynamics"}
                </p>
              </div>
            </motion.div>

            {/* Framer Scroll To Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/10 hover:bg-[#9C724A] border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
            >
              <span>Back to Top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp className="h-4 w-4 text-[#9C724A] group-hover:text-white transition-colors" />
              </motion.div>
            </motion.button>
          </div>

          {/* Bottom Copyright & Technical Standards Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8999a9] border-t border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <p>© {new Date().getFullYear()} Darbar Springwala. All rights reserved.</p>
              <span className="hidden sm:inline text-white/20">|</span>
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <span className="text-[#A4B3C6]">Created by</span>
                <motion.a
                  href="https://nawabsahil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  className="inline-flex items-center gap-1 font-extrabold text-[#E5C158] hover:text-white transition-colors underline decoration-[#E5C158]/40 underline-offset-4"
                >
                  <span>Nawab Sahil</span>
                  <ArrowUpRight className="h-3 w-3" />
                </motion.a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <span className="font-mono text-[11px] text-white/40">JAMNAGAR, GUJARAT, INDIA</span>
              <Link href="/about" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/contact" className="transition-colors hover:text-white">Terms of Supply</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
