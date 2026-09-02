"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "../../lib/products";

export default function ProductMarquee() {
  // Duplicate array items for seamless infinite horizontal loop
  const marqueeItems = [...products, ...products, ...products, ...products];

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-[#17324F] border-y border-[#9C724A]/40 py-4 sm:py-5 select-none shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      
      {/* Blueprint Technical Dot Matrix Background (Exact Theme Match) */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Subtle Ambient Bronze Lighting Bar */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#9C724A]/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#9C724A]/30 to-transparent" />

      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#17324F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#17324F] to-transparent z-10 pointer-events-none" />

      {/* Infinite Motion Track */}
      <motion.div
        className="flex items-center gap-8 sm:gap-12 w-max relative z-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {marqueeItems.map((product, idx) => (
          <div key={`${product.slug}-${idx}`} className="flex items-center gap-8 sm:gap-12 shrink-0">
            
            {/* Glowing Bronze Dot Separator */}
            <span className="h-2 w-2 rounded-full bg-[#9C724A] shadow-[0_0_8px_#9C724A] shrink-0" />

            {/* Product Category Link */}
            <Link
              href={`/products/${product.slug}`}
              className="group inline-flex items-center gap-2 font-display font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:text-[#E5C158] hover:scale-105"
            >
              <span className="whitespace-nowrap">{product.name}</span>
            </Link>

          </div>
        ))}
      </motion.div>
    </div>
  );
}
