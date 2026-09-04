"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Phone, ShieldCheck, ArrowRight } from "lucide-react";
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
      {/* 44x44px Minimum Touch Target Button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[2px] border border-[#17324F]/20 bg-white text-[#17324F] active:bg-[#FBFAF7] active:scale-[0.98] shadow-xs transition-all"
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
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-[#17324F]/70 backdrop-blur-xs"
                  />

                  {/* Drawer Panel: h-[100dvh] overflow-y-auto to guarantee full visibility & scrollability on all screens */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 280 }}
                    className="relative z-10 flex h-[100dvh] w-[85vw] max-w-[340px] flex-col justify-between overflow-y-auto bg-[#17324F] p-5 sm:p-6 text-white shadow-2xl border-l border-white/10"
                  >
                    <div>
                      {/* Drawer Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10">
                        <Link href="/" onClick={() => setOpen(false)}>
                          <Image src={logo} alt="Darbar Springwala" className="h-8 sm:h-9 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="rounded-[2px] p-2 text-white/70 hover:text-white bg-white/5 active:bg-white/15 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                          aria-label="Close menu"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Eyebrow */}
                      <div className="mt-4 font-mono text-[9.5px] text-[#E5C158] font-medium uppercase tracking-widest">
                        № CATALOGUE NAVIGATION
                      </div>

                      {/* Navigation Links with 44px Touch Targets */}
                      <nav className="mt-2.5 flex flex-col gap-1">
                        {navLinks.map((link) => {
                          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className={`flex items-center justify-between px-3.5 min-h-[44px] rounded-[2px] text-sm font-display font-medium tracking-wide transition-all focus:outline-none outline-none select-none active:bg-white/10 [-webkit-tap-highlight-color:transparent] ${
                                isActive
                                  ? "bg-[#9C724A] text-white font-semibold shadow-xs"
                                  : "text-white/85"
                              }`}
                            >
                              <span>{link.label}</span>
                              <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? "translate-x-1 text-[#E5C158]" : "opacity-40"}`} />
                            </Link>
                          );
                        })}
                      </nav>
                    </div>

                    {/* Bottom CTA & Info */}
                    <div className="space-y-2.5 pt-4 mt-4 border-t border-white/10">
                      {/* ISO Badge */}
                      <div className="inline-flex items-center gap-2 px-3 min-h-[40px] sm:min-h-[44px] rounded-[2px] bg-white/5 border border-white/10 text-xs font-mono text-white/90 w-full">
                        <ShieldCheck className="h-4 w-4 text-[#9C724A] shrink-0" />
                        <span className="text-[10px] font-medium uppercase tracking-wider">ISO 9001:2015 AUDITED FACTORY</span>
                      </div>

                      {/* Direct Phone Call Button */}
                      <Link
                        href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                        onClick={() => setOpen(false)}
                        className="w-full inline-flex items-center justify-center gap-2 px-3.5 min-h-[44px] rounded-[2px] bg-white/10 active:bg-white/20 border border-white/15 text-white font-mono text-xs font-medium"
                      >
                        <Phone className="h-4 w-4 text-[#E5C158]" />
                        <span>{contactInfo.phone}</span>
                      </Link>

                      {/* Request Quote Button */}
                      <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="w-full inline-flex items-center justify-center gap-2 px-3.5 min-h-[44px] rounded-[2px] bg-[#9C724A] active:bg-[#825B36] text-white text-xs font-mono font-medium uppercase tracking-wider shadow-xs"
                      >
                        <span>REQUEST BLUEPRINT QUOTE</span>
                        <ArrowRight className="h-4 w-4 text-[#E5C158]" />
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
