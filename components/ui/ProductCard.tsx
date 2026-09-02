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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-[24px] border border-gray-200/80 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(23,50,79,0.12)] hover:border-[#9C724A]/40"
    >
      {/* Top Gold Accent Highlight */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#9C724A] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* 1. Uniform Aspect Ratio Showcase Window */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-gradient-to-b from-gray-50/90 to-gray-100/50 border border-gray-100 p-4 flex items-center justify-center">
        
        {/* Subtle Blueprint Dot Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #17324F 1px, transparent 1px)`,
            backgroundSize: '14px 14px'
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 font-mono text-[9px] font-bold uppercase tracking-wider text-[#17324F] shadow-sm">
            <ShieldCheck className="h-3 w-3 text-[#9C724A]" />
            ISO Certified
          </span>
          <span className="font-mono text-[10.5px] font-bold text-white bg-[#17324F] px-2.5 py-0.5 rounded-full shadow-sm">
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Uniform Sized & Scaled Image Container */}
        <motion.div 
          className="relative w-full h-36 sm:h-40 flex items-center justify-center"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={mainImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-2 mx-auto drop-shadow-sm"
            priority={index < 3}
          />
        </motion.div>
      </div>

      {/* 2. Card Content Body */}
      <div className="flex flex-col flex-grow pt-5 space-y-3">
        
        {/* Application Tag Pill */}
        <div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#9C724A]/10 text-[#825B36] border border-[#9C724A]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9C724A]" />
            {product.applicationTag}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-xl font-bold text-[#17324F] tracking-tight font-display group-hover:text-[#9C724A] transition-colors duration-300">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Material Tags Strip */}
        <div className="pt-1 flex flex-wrap gap-1.5">
          {product.materials.slice(0, 3).map((mat) => (
            <span key={mat} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium border border-slate-200/80">
              <Cpu className="h-2.5 w-2.5 text-[#9C724A]" />
              {mat}
            </span>
          ))}
        </div>

        {/* 3. Framer Motion Action Button */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="group/btn w-full inline-flex items-center justify-between px-4.5 py-2.5 rounded-xl bg-[#17324F] hover:bg-[#9C724A] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
          >
            <span>View Specifications</span>
            <motion.span
              whileHover={{ x: 3, y: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </div>

      </div>
    </motion.article>
  );
}
