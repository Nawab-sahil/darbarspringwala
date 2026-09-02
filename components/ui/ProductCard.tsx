"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import type { Product } from "../../lib/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const mainImage = product.images[0] || "/placeholder.jpg";

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-[28px] bg-white border border-line/80 shadow-xs transition-all duration-500 hover:shadow-2xl hover:shadow-[#17324F]/12 hover:border-[#9C724A]/40"
    >
      {/* Top Gold Accent Highlight Line on Hover */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#9C724A] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Card Content Body */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        
        {/* 1. TOP HEADER INFO STRIP */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9C724A]/10 text-[#825B36] border border-[#9C724A]/20 font-mono text-[9.5px] font-bold uppercase tracking-wider">
            <ShieldCheck className="h-3 w-3 text-[#9C724A]" />
            ISO 9001:2015
          </span>
          <span className="font-mono text-[10px] font-extrabold text-[#17324F] bg-surface-2 px-2.5 py-0.5 rounded-full border border-line/60">
            CAT #{(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* 2. PRODUCT TITLE & APPLICATION TAG */}
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-[#17324F] tracking-tight font-display group-hover:text-[#9C724A] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-steel text-xs sm:text-sm leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* 3. PURE CLEAN SHOWCASE STAGE (NO DIAGONAL CUTS) */}
        <div className="relative aspect-[4/3] w-full rounded-[22px] bg-gradient-to-b from-[#fbf9f5] to-[#f4efe6] border border-line/60 p-4 flex flex-col items-center justify-center overflow-hidden shadow-xs group-hover:border-[#9C724A]/30 transition-colors duration-300">
          
          {/* Subtle Ambient Radial Lighting Spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0%,transparent_80%)] pointer-events-none" />

          {/* Floating Product Image (Transparent via mix-blend-multiply) */}
          <motion.div 
            className="relative w-full h-36 sm:h-40 flex items-center justify-center z-10"
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
          >
            <Image
              src={mainImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain p-2 mx-auto mix-blend-multiply drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl"
              priority={index < 3}
            />
          </motion.div>

          {/* Soft Ground Ellipse Drop Shadow */}
          <div className="w-28 sm:w-36 h-2.5 bg-black/12 rounded-full blur-xs z-0 pointer-events-none transition-all duration-300 group-hover:w-32 group-hover:bg-black/20" />
        </div>

        {/* 4. MATERIAL SPECIFICATIONS STRIP */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {product.materials.slice(0, 3).map((mat) => (
            <span key={mat} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-2 text-steel-2 text-[10px] font-mono font-medium border border-line/60">
              <Cpu className="h-2.5 w-2.5 text-[#9C724A]" />
              {mat}
            </span>
          ))}
        </div>

        {/* 5. FOOTER: STATUS DOTS + EXPLORE BUTTON */}
        <div className="pt-4 border-t border-line/60 flex items-center justify-between flex-grow items-end">
          {/* Status Indicator Dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#9C724A] animate-pulse" />
            <span className="h-2 w-2 rounded-full bg-[#17324F]/30" />
            <span className="h-2 w-2 rounded-full bg-[#17324F]/20" />
            <span className="h-2 w-2 rounded-full bg-[#17324F]/10" />
          </div>

          {/* Explore Action Button */}
          <Link
            href={`/products/${product.slug}`}
            className="group/btn inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-wider text-[#17324F] hover:text-[#9C724A] transition-colors"
          >
            <span>EXPLORE SPECS</span>
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface-2 group-hover/btn:bg-[#9C724A] group-hover/btn:text-white group-hover/btn:border-[#9C724A] transition-all duration-300 shadow-xs"
            >
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </motion.div>
          </Link>
        </div>

      </div>
    </motion.article>
  );
}
