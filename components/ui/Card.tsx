"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Quote } from "lucide-react";

export type CardVariant =
  | "product"
  | "industry"
  | "feature"
  | "stat"
  | "faq"
  | "testimonial";

export interface CardProps {
  variant: CardVariant;
  /** Title or Header */
  title?: string;
  /** Subtitle or Description */
  description?: string;
  /** Image URL or StaticImageData */
  image?: string | any;
  /** Tag label / Category badge */
  tag?: string;
  /** Navigation link URL */
  href?: string;

  /** Feature variant number (e.g. "01", "02") */
  number?: string | number;

  /** Stat variant value (e.g. "34+", "10M") */
  value?: string | number;
  /** Stat variant label */
  label?: string;

  /** FAQ variant question */
  question?: string;
  /** FAQ variant answer */
  answer?: string;
  /** Optional controlled FAQ state */
  isOpen?: boolean;
  /** Optional controlled FAQ toggle callback */
  onToggle?: () => void;

  /** Testimonial variant quote */
  quote?: string;
  /** Testimonial variant author name */
  author?: string;
  /** Testimonial variant author company/role */
  company?: string;

  /** Additional CSS classes */
  className?: string;
  /** Optional children override */
  children?: React.ReactNode;
}

export default function Card({
  variant,
  title,
  description,
  image,
  tag,
  href,
  number,
  value,
  label,
  question,
  answer,
  isOpen: controlledIsOpen,
  onToggle,
  quote,
  author,
  company,
  className = "",
  children,
}: CardProps) {
  // Local accordion state for FAQ if uncontrolled
  const [internalOpen, setInternalOpen] = useState(false);
  const isFaqOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;
  const toggleFaq = onToggle || (() => setInternalOpen((prev) => !prev));

  // --- 1. PRODUCT VARIANT ---
  if (variant === "product") {
    const cardInner = (
      <div
        className={`group relative rounded-[2px] border border-[#17324F]/15 bg-white transition-all duration-120 hover:border-[#17324F] hover:bg-[#FBFAF7] flex flex-col justify-between h-full p-[22px] ${className}`}
      >
        <div>
          {/* Header Info Strip */}
          <div className="flex items-center justify-between mb-3">
            {tag ? (
              <span className="inline-block px-2 py-0.5 rounded-[2px] bg-[#9C724A]/10 text-[#9C724A] font-mono text-[10px] uppercase font-medium tracking-wider">
                {tag}
              </span>
            ) : <span />}
            {number !== undefined && (
              <span className="font-mono text-[11px] font-medium text-[#9C724A]/60">
                {typeof number === "number" ? number.toString().padStart(2, "0") : number}
              </span>
            )}
          </div>

          {/* Top Image Showcase */}
          {image && (
            <div className="relative w-full aspect-[4/3] bg-[#F4F0E8] border border-[#17324F]/10 rounded-[2px] overflow-hidden flex items-center justify-center mb-4">
              <Image
                src={image}
                alt={title || "Product"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}

          {/* Content Body */}
          <div className="space-y-1.5">
            <div className="w-6 h-[1px] bg-[#9C724A]" />
            <h3 className="font-display font-medium text-[18px] text-[#17324F] leading-snug group-hover:text-[#9C724A] transition-colors duration-120">
              {title}
            </h3>
            {description && (
              <p className="text-xs sm:text-sm text-steel line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-4 pt-3 border-t border-[#17324F]/10 flex items-center justify-between font-mono text-xs font-medium text-[#17324F] group-hover:text-[#9C724A] transition-colors">
          <span>VIEW DETAILS</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-120 group-hover:translate-x-1" />
        </div>
      </div>
    );

    return href ? <Link href={href} className="block h-full">{cardInner}</Link> : cardInner;
  }

  // --- 2. INDUSTRY VARIANT ---
  if (variant === "industry") {
    const cardInner = (
      <div
        className={`group relative rounded-[2px] overflow-hidden border border-[#17324F]/15 bg-white transition-all duration-120 hover:border-[#17324F] hover:bg-[#FBFAF7] flex-shrink-0 w-72 sm:w-80 select-none flex flex-col justify-between h-full p-[22px] ${className}`}
      >
        <div>
          {/* Top Image Container */}
          <div className="relative w-full aspect-[16/10] bg-[#0d1d2f] rounded-[2px] overflow-hidden mb-3.5">
            {image ? (
              <Image
                src={image}
                alt={title || "Industry"}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/30 font-mono text-xs uppercase">
                Scope
              </div>
            )}
            {number !== undefined && (
              <span className="absolute top-2 right-2 font-mono text-[11px] font-medium text-[#9C724A] bg-[#0d1d2f]/90 px-1.5 py-0.5 rounded-[2px]">
                {typeof number === "number" ? number.toString().padStart(2, "0") : number}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="space-y-1.5">
            {tag && (
              <span className="font-mono text-[10px] font-medium text-[#9C724A] uppercase tracking-wider block">
                {tag}
              </span>
            )}
            <div className="w-6 h-[1px] bg-[#9C724A]" />
            <h3 className="font-display font-medium text-[18px] text-[#17324F] leading-snug group-hover:text-[#9C724A] transition-colors duration-120">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-steel line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        {href && (
          <div className="mt-4 pt-3 border-t border-[#17324F]/10 flex items-center gap-1.5 font-mono text-xs font-medium text-[#17324F] group-hover:text-[#9C724A] transition-colors">
            <span>EXPLORE SCOPE</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-120 group-hover:translate-x-1" />
          </div>
        )}
      </div>
    );

    return href ? <Link href={href}>{cardInner}</Link> : cardInner;
  }

  // --- 3. FEATURE VARIANT ---
  if (variant === "feature") {
    return (
      <div
        className={`group relative rounded-[2px] border border-[#17324F]/15 bg-white transition-all duration-120 hover:border-[#17324F] hover:bg-[#FBFAF7] p-[22px] flex flex-col justify-between h-full ${className}`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="w-6 h-[1px] bg-[#9C724A]" />
            {number !== undefined && (
              <span className="font-mono text-[11px] font-medium text-[#9C724A]/60">
                {typeof number === "number" ? number.toString().padStart(2, "0") : number}
              </span>
            )}
          </div>
          <h3 className="font-display font-medium text-[18px] text-[#17324F] mb-2 leading-snug group-hover:text-[#9C724A] transition-colors duration-120">
            {title}
          </h3>
          {description && (
            <p className="text-xs sm:text-sm text-steel leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    );
  }

  // --- 4. STAT VARIANT (TECHNICAL NAVY GRID CELL) ---
  if (variant === "stat") {
    return (
      <div
        className={`rounded-[2px] border border-white/10 bg-[#081423] p-[22px] flex flex-col justify-center items-center text-center ${className}`}
      >
        {number !== undefined && (
          <span className="font-mono text-[11px] font-medium text-[#9C724A]/60 self-end mb-1">
            {typeof number === "number" ? number.toString().padStart(2, "0") : number}
          </span>
        )}
        <span className="font-display text-4xl sm:text-5xl font-semibold text-[#9C724A] tracking-tight">
          {value}
        </span>
        {label && (
          <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-steel-2/80 mt-2 font-medium">
            {label}
          </span>
        )}
        {children}
      </div>
    );
  }

  // --- 5. FAQ VARIANT (ACCORDION ITEM) ---
  if (variant === "faq") {
    return (
      <div className={`border-b border-[#17324F]/15 py-4 ${className}`}>
        <button
          type="button"
          onClick={toggleFaq}
          className="w-full flex items-center justify-between gap-4 text-left font-display font-medium text-[18px] text-[#17324F] hover:text-[#9C724A] transition-colors focus:outline-none py-1"
          aria-expanded={isFaqOpen}
        >
          <span className="leading-snug">{question || title}</span>
          <motion.span
            animate={{ rotate: isFaqOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex-shrink-0 text-[#9C724A] p-1 rounded-[2px] bg-[#9C724A]/10"
          >
            <Plus className="h-4 w-4" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isFaqOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pt-3 pb-2 text-xs sm:text-sm text-steel leading-relaxed">
                {answer || description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // --- 6. TESTIMONIAL VARIANT ---
  if (variant === "testimonial") {
    return (
      <div
        className={`rounded-[2px] border border-[#17324F]/15 bg-white transition-all duration-120 hover:border-[#17324F] hover:bg-[#FBFAF7] p-[22px] flex flex-col justify-between h-full ${className}`}
      >
        <div>
          <div className="flex items-center justify-between mb-3">
            <Quote className="h-5 w-5 text-[#9C724A]/50" />
            {number !== undefined && (
              <span className="font-mono text-[11px] font-medium text-[#9C724A]/60">
                {typeof number === "number" ? number.toString().padStart(2, "0") : number}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-steel italic leading-relaxed mb-6">
            &ldquo;{quote || description}&rdquo;
          </p>
        </div>
        <div className="pt-3.5 border-t border-[#17324F]/10">
          <div className="w-6 h-[1px] bg-[#9C724A] mb-1.5" />
          <h4 className="font-display text-sm font-medium text-[#17324F]">{author || title}</h4>
          {company && (
            <p className="text-[11px] font-mono text-steel-2 mt-0.5">{company}</p>
          )}
        </div>
      </div>
    );
  }

  // Fallback default container
  return (
    <div className={`rounded-[2px] border border-[#17324F]/15 bg-white p-[22px] ${className}`}>
      {children}
    </div>
  );
}
