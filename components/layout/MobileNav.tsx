"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Phone, ShieldCheck, ArrowRight, Mail } from "lucide-react";
import logo from "@/public/logo.png";
import { navLinks, contactInfo } from "../../lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-navy hover:text-bronze shadow-sm transition-all active:scale-95"
        aria-expanded={open}
        aria-label="Toggle navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mounted && typeof document !== "undefined" && (
        <>
          {createPortal(
            <AnimatePresence>
              {open && (
                <div className="fixed inset-0 z-[9999] flex justify-end">
                  {/* Backdrop */}
                  <motion.button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-[#06101c]/70 backdrop-blur-md"
                  />

                  {/* Drawer Panel */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 28, stiffness: 240 }}
                    className="relative z-10 flex h-full w-[85vw] max-w-[340px] flex-col justify-between bg-[#081423] p-6 text-white shadow-2xl border-l border-white/10"
                  >
                    <div>
                      {/* Drawer Header */}
                      <div className="flex items-center justify-between pb-6 border-b border-white/10">
                        <Link href="/" onClick={() => setOpen(false)}>
                          <Image src={logo} alt="Darbar Springwala" className="h-10 w-auto object-contain" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="rounded-xl p-2.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                          aria-label="Close menu"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Navigation Links */}
                      <nav className="mt-6 flex flex-col gap-2">
                        {navLinks.map((link) => {
                          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all focus:outline-none outline-none select-none [-webkit-tap-highlight-color:transparent] ${
                                isActive
                                  ? "bg-[#9C724A] text-white font-bold shadow-md shadow-[#9C724A]/30"
                                  : "text-white/80 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              <span>{link.label}</span>
                              <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? "translate-x-1" : "opacity-40"}`} />
                            </Link>
                          );
                        })}
                      </nav>
                    </div>

                    {/* Bottom CTA & Info */}
                    <div className="space-y-4 pt-6 border-t border-white/10">
                      {/* ISO Badge */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90 w-full">
                        <ShieldCheck className="h-4 w-4 text-[#9C724A] shrink-0" />
                        <span className="text-[11px] font-bold">ISO 9001:2015 CERTIFIED</span>
                      </div>

                      {/* Direct Phone Call Button */}
                      <Link
                        href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                        onClick={() => setOpen(false)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-mono text-xs font-bold"
                      >
                        <Phone className="h-4 w-4 text-[#9C724A]" />
                        <span>{contactInfo.phone}</span>
                      </Link>

                      {/* Request Quote Button */}
                      <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#9C724A] to-[#825B36] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#9C724A]/30"
                      >
                        <span>REQUEST QUOTE</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>,
            document.body
          )}
        </>
      )}
    </div>
  );
}
