"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import MobileNav from "./MobileNav";
import MagneticButton from "../motion/MagneticButton";
import logo from "@/public/logo.png";
import { navLinks, contactInfo } from "../../lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Mini Utility Bar */}
      <div className="hidden md:block bg-[#081423] text-white/80 text-[11px] font-mono border-b border-white/10 py-2">
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#E5C158] font-bold">
              <ShieldCheck className="h-3.5 w-3.5 text-[#9C724A]" />
              ISO 9001:2015 CERTIFIED
            </span>
            <span className="text-white/30">|</span>
            <span className="text-white/70">Industrial Spring Manufacturer • Jamnagar, Gujarat</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-[#9C724A]" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
            </div>
            <Link
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3 text-[#9C724A]" />
              <span>{contactInfo.email}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Glassmorphic Navbar */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md border-line/80 py-3"
            : "bg-[#f7f5f1]/90 backdrop-blur-md border-line/60 py-4"
        }`}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center group">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <Image
                src={logo}
                alt="Darbar Springwala"
                className="h-10 sm:h-11 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Links with Smooth Active/Hover States & Animated Underline */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 p-1.5 rounded-[2px] border border-[#17324F]/15 shadow-xs">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-120 rounded-[2px] focus:outline-none select-none ${
                    isActive
                      ? "bg-[#17324F] text-white font-medium"
                      : "text-[#17324F] hover:text-[#9C724A]"
                  }`}
                >
                  <span>{link.label}</span>
                  {!isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#9C724A] origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Call Button */}
            <Link
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 h-10 px-3.5 rounded-[2px] bg-white border border-[#17324F]/15 hover:border-[#17324F] text-[#17324F] text-xs font-mono font-medium transition-all duration-120 whitespace-nowrap shrink-0"
            >
              <Phone className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
              <span className="whitespace-nowrap">{contactInfo.phone}</span>
            </Link>

            {/* Magnetic Primary Request Quote Button */}
            <MagneticButton>
              <Link
                href="/contact"
                className="btn-primary flex items-center gap-2 h-10 px-5 text-xs uppercase tracking-wider whitespace-nowrap shrink-0"
              >
                <span>Request Quote</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#E5C158]" />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Drawer Trigger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
