"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../app/logo.png";
import { navLinks } from "../../lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface text-ink"
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all ${open ? "top-[7px] rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-all ${open ? "top-[7px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-40">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-[rgba(13,29,47,0.45)]"
          />
          <div className="absolute right-0 top-0 flex h-full w-[84vw] max-w-[340px] flex-col bg-navy p-6 text-white">
            <Image src={logo} alt="Darbar Springwala" className="h-10 w-auto" />
            <nav className="mt-8 grid gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 pb-3 text-[15px] tracking-wide text-white/90 hover:text-bronze-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-8">
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
