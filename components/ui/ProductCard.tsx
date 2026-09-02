"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";
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
      className="group relative flex flex-col h-full overflow-hidden rounded-[28px] border border-line/80 bg-white p-5 shadow-xs transition-shadow duration-500 hover:shadow-xl hover:shadow-[#17324F]/10 hover:border-[#9C724A]/40"
    >
      {/* Top Gold Gradient Bar on Hover */}
      <motion.div 
        className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#9C724A] via-[#E5C158] to-[#9C724A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
      />

      {/* 1. UNIFORM ASPECT RATIO PRODUCT SHOWCASE FRAME */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-[#fbf9f5] to-[#f4efe6] border border-line/50 p-4 flex items-center justify-center">
        
        {/* Subtle Ambient Radial Lighting Behind Product */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,transparent_75%)] pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-line/60 font-mono text-[9px] font-bold uppercase tracking-wider text-[#17324F] shadow-xs">
            <ShieldCheck className="h-3 w-3 text-[#9C724A]" />
            ISO Certified
          </span>
          <span className="font-mono text-[10px] font-extrabold text-white bg-[#17324F] px-2.5 py-0.5 rounded-full shadow-xs">
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Floating Product Image with Framer Motion Micro-Interactions */}
        <motion.div 
          className="relative w-full h-40 sm:h-44 flex items-center justify-center"
          whileHover={{ scale: 1.08, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <Image
            src={mainImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-1.5 mx-auto drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl"
            priority={index < 3}
          />
        </motion.div>
      </div>

      {/* 2. CARD CONTENT BODY */}
      <div className="flex flex-col flex-grow pt-5 space-y-3">
        
        {/* Category Pill Tag */}
        <div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#9C724A]/10 text-[#825B36] border border-[#9C724A]/25">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9C724A] animate-pulse" />
            {product.applicationTag}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#17324F] tracking-tight font-display group-hover:text-[#9C724A] transition-colors duration-300">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-steel text-xs sm:text-sm leading-relaxed flex-grow line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Material Specification Badges */}
        <div className="pt-1 flex flex-wrap gap-1.5">
          {product.materials.slice(0, 3).map((mat) => (
            <span key={mat} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-surface-2 text-steel-2 text-[10px] font-mono font-medium border border-line/60">
              <Cpu className="h-2.5 w-2.5 text-[#9C724A]" />
              {mat}
            </span>
          ))}
        </div>

        {/* 3. FRAMER MOTION ACTION BUTTON */}
        <div className="pt-4 border-t border-line/60">
          <Link
            href={`/products/${product.slug}`}
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-between px-4.5 py-3 rounded-2xl bg-[#17324F] group-hover:bg-[#9C724A] text-white font-extrabold text-xs uppercase tracking-wider transition-colors duration-300 shadow-sm"
            >
              <span>View Specifications</span>
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowUpRight className="h-4 w-4 text-[#E5C158]" />
              </motion.span>
            </motion.div>
          </Link>
        </div>

      </div>
    </motion.article>
  );
}
