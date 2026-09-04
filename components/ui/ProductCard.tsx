"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import type { Product } from "../../lib/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const mainImage = product.images[0] || "/placeholder.jpg";
  const cardRef = useRef<HTMLElement>(null);
  const [canHover, setCanHover] = useState(false);

  // Check if pointer supports fine hover (Desktop) vs Touch
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      setCanHover(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // 3D Tilt Motion Values (max 4deg tilt on mouse position for Desktop only)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!canHover) return;
    x.set(0);
    y.set(0);
  };

  const catIdNumber = `CAT #${(index + 1).toString().padStart(2, "0")}`;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={canHover ? handleMouseMove : undefined}
      onMouseLeave={canHover ? handleMouseLeave : undefined}
      style={
        canHover
          ? {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
      className="group relative flex flex-col h-full rounded-[2px] bg-white border border-[#17324F]/15 transition-all duration-120 hover:border-[#17324F] hover:bg-[#FBFAF7] active:scale-[0.98]"
    >
      {/* Card Content Body - 22px spec sheet padding */}
      <div className="flex flex-col flex-grow p-[22px] space-y-3.5" style={canHover ? { transform: "translateZ(10px)" } : undefined}>
        
        {/* 1. TOP ROW TAG PAIR: ISO 9001:2015 + CAT #XX */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#9C724A]/10 text-[#825B36] border border-[#9C724A]/20 font-mono text-[10px] font-medium uppercase tracking-wider">
            <ShieldCheck className="h-3 w-3 text-[#9C724A]" />
            ISO 9001:2015
          </span>
          <span className="font-mono text-[11px] font-medium text-[#9C724A]/70 uppercase tracking-wider">
            {catIdNumber}
          </span>
        </div>

        {/* 2. BRONZE HEADER RULE & FRAUNCES 500 CARD TITLE */}
        <div className="space-y-1.5 pt-1">
          <div className="w-6 h-[1px] bg-[#9C724A]" />
          <h3 className="font-display font-medium text-[18px] text-[#17324F] leading-snug group-hover:text-[#9C724A] transition-colors duration-120">
            {product.name}
          </h3>
          <p className="text-steel text-xs sm:text-sm leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* 3. PURE CLEAN SHOWCASE STAGE */}
        <div className="relative aspect-[4/3] w-full rounded-[2px] bg-[#F4F0E8] border border-[#17324F]/10 p-4 flex flex-col items-center justify-center overflow-hidden">
          <div className="relative w-full h-36 sm:h-40 flex items-center justify-center z-10">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain p-2 mx-auto drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
              priority={index < 3}
            />
          </div>
          <div className="w-28 sm:w-36 h-2 bg-black/10 rounded-full blur-xs z-0 pointer-events-none" />
        </div>

        {/* 4. SPEC-FORWARD MATERIAL GRADE CHIPS */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {product.materials.slice(0, 3).map((mat) => (
            <span key={mat} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[2px] bg-surface-2 text-[#17324F] text-[10px] font-mono font-medium border border-line/60">
              <Cpu className="h-2.5 w-2.5 text-[#9C724A]" />
              {mat}
            </span>
          ))}
        </div>

        {/* 5. FOOTER: CTA LABEL EXPLORE SPECS WITH MIN 44px TOUCH TARGET */}
        <div className="pt-3.5 border-t border-[#17324F]/10 flex items-center justify-between flex-grow items-end min-h-[44px]">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#9C724A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9C724A]" />
            SPEC READY
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="group/btn inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-[#9C724A] hover:text-[#17324F] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-end"
          >
            <span>EXPLORE SPECS</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-120 group-hover/btn:translate-x-1" />
          </Link>
        </div>

      </div>
    </motion.article>
  );
}
