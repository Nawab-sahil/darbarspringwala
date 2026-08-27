"use client";

import Link from "next/link";

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <Link href="/contact" className="btn-primary w-full shadow-[0_14px_26px_rgba(13,29,47,0.28)]">
        Request a Quote
      </Link>
    </div>
  );
}
