"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import logo from "../../app/logo.png";
import { navLinks } from "../../lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface text-ink hover:text-bronze transition-colors"
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle navigation</span>
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
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-[#0d1d2f]/60 backdrop-blur-sm"
                  />

                  {/* Drawer Panel */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="relative z-10 flex h-full w-[80vw] max-w-[300px] flex-col bg-[#17324f] p-6 text-white shadow-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <Image src={logo} alt="Darbar Springwala" className="h-9 w-auto" />
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-md p-2 text-white/80 hover:text-white transition-colors"
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <nav className="mt-10 flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="border-b border-white/10 pb-3.5 text-[15px] font-medium tracking-wide text-white/90 transition-colors hover:text-bronze-2"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>

                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="btn-primary mt-8 w-full text-center"
                    >
                      Request Quote
                    </Link>
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
