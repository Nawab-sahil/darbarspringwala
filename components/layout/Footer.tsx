"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import logo from "../../app/logo.png";
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
    { label: "Extension / Tension Springs", href: "/products/extension-tension-spring" },
    { label: "Torsion Springs", href: "/products/torsion-spring" },
    { label: "Conical Springs", href: "/products/conical-spring" },
    { label: "Wire Forms & Clips", href: "/products/wire-forms" },
    { label: "Garter Springs", href: "/products/garter-spring" },
    { label: "Spiral Springs", href: "/products/spiral-spring" },
    { label: "Die Springs", href: "/products/die-spring" },
    { label: "Custom Springs", href: "/products/custom-spring" },
  ],
};

export default function Footer() {
  return (
    <>
      {/* 1. Pre-Footer Call to Action Banner */}
      <PreFooterCta />

      {/* 2. Main Luxury Footer */}
      <footer className="relative bg-[#081423] text-white overflow-hidden border-t border-[#9C724A]/30">
        {/* Subtle Ambient Light Gradient Accent on Top Edge */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#9C724A] to-transparent opacity-60" />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            {/* Column 1: Brand Info & Identity (4 Cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 space-y-6"
            >
              <Link href="/" className="inline-block">
                <Image src={logo} alt="Darbar Springwala" className="h-12 w-auto object-contain" />
              </Link>

              <p className="text-steel-light text-sm leading-relaxed max-w-sm">
                Established in 1990 in Jamnagar, India. Darbar Springwala is an ISO-certified manufacturer of high-precision industrial springs, wire forms, and engineered tension assemblies for global OEMs.
              </p>

              {/* Quality Certification Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90">
                <ShieldCheck className="h-4 w-4 text-[#9C724A]" />
                <div>
                  <span className="block font-bold text-white">ISO 9001:2015 CERTIFIED</span>
                  <span className="text-[10px] text-white/60">Quality Management System</span>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Company Navigation (2 Cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-4"
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#9C724A]">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-[#C7CFD7]">
                {NAVIGATION_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#9C724A]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Products Catalog (3 Cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 space-y-4"
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#9C724A]">
                Product Lineup
              </h3>
              <ul className="grid grid-cols-1 gap-2 text-sm text-[#C7CFD7]">
                {NAVIGATION_LINKS.products.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9C724A]/40 transition-colors group-hover:bg-[#9C724A]" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Manufacturing Plant & Contact (3 Cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3 space-y-4"
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#9C724A]">
                Plant & Head Office
              </h3>
              <div className="space-y-3 text-sm text-[#C7CFD7]">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#9C724A] shrink-0 mt-1" />
                  <p className="leading-relaxed text-xs sm:text-sm">{contactInfo.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#9C724A] shrink-0" />
                  <Link 
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="transition-colors hover:text-white font-mono text-xs sm:text-sm"
                  >
                    {contactInfo.phone}
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#9C724A] shrink-0" />
                  <Link 
                    href={`mailto:${contactInfo.email}`}
                    className="transition-colors hover:text-white text-xs sm:text-sm"
                  >
                    {contactInfo.email}
                  </Link>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Clock className="h-4 w-4 text-[#9C724A] shrink-0" />
                  <span className="text-xs text-white/70">Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Copyright & Technical Standards Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8999a9]">
            <p>© {new Date().getFullYear()} Darbar Springwala. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-6">
              <span className="font-mono text-[11px] text-white/50">JAMNAGAR, GUJARAT, INDIA</span>
              <Link href="/about" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/contact" className="transition-colors hover:text-white">Terms of Supply</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
