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
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`group relative rounded-2xl border border-line bg-surface overflow-hidden shadow-sm hover:border-navy hover:shadow-xl transition-colors duration-350 flex flex-col justify-between h-full ${className}`}
      >
        <div>
          {/* Top 4:3 Image Showcase with Navy Background */}
          <div className="relative w-full aspect-[4/3] bg-[#17324F] overflow-hidden flex items-center justify-center">
            {image ? (
              <Image
                src={image}
                alt={title || "Product"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="text-white/30 font-mono text-xs uppercase tracking-widest">
                [ Spring Coil ]
              </div>
            )}

            {tag && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#17324F]/90 backdrop-blur-md text-[#E5C158] font-mono text-[10px] font-bold uppercase tracking-wider border border-white/10 z-10">
                {tag}
              </span>
            )}
          </div>

          {/* Content Body */}
          <div className="p-5 space-y-2">
            {tag && !image && (
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-bronze/10 text-bronze font-mono text-[10px] uppercase font-bold tracking-wider">
                {tag}
              </span>
            )}
            <h3 className="text-lg font-bold text-navy group-hover:text-bronze transition-colors leading-snug">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-steel line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Footer Link */}
        <div className="px-5 pb-5 pt-3 border-t border-line/40 flex items-center justify-between text-xs font-bold text-navy group-hover:text-bronze transition-colors">
          <span>View Details →</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </motion.div>
    );

    return href ? <Link href={href} className="block h-full">{cardInner}</Link> : cardInner;
  }

  // --- 2. INDUSTRY VARIANT ---
  if (variant === "industry") {
    const cardInner = (
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`group relative rounded-2xl overflow-hidden border border-line bg-surface hover:border-navy hover:shadow-xl transition-colors duration-350 flex-shrink-0 w-72 sm:w-80 select-none flex flex-col justify-between h-full ${className}`}
      >
        <div>
          {/* Top 16:10 Image Container */}
          <div className="relative w-full aspect-[16/10] bg-[#0d1d2f] overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt={title || "Industry"}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/30 font-mono text-xs uppercase">
                Industry Scope
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            {tag && (
              <span className="font-mono text-[10px] font-bold text-bronze uppercase tracking-wider mb-1.5 block">
                {tag}
              </span>
            )}
            <h3 className="text-base font-bold text-navy group-hover:text-bronze transition-colors leading-tight">
              {title}
            </h3>
            {description && (
              <p className="mt-1 text-xs text-steel line-clamp-1 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        {href && (
          <div className="px-5 pb-4 pt-1 flex items-center gap-1.5 text-xs font-semibold text-navy group-hover:text-bronze transition-colors">
            <span>Explore Industry</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </div>
        )}
      </motion.div>
    );

    return href ? <Link href={href}>{cardInner}</Link> : cardInner;
  }

  // --- 3. FEATURE VARIANT (CALM SPEC SHEET GRID CELL) ---
  if (variant === "feature") {
    return (
      <div
        className={`border-r border-b border-line/60 bg-surface/50 p-6 sm:p-8 flex flex-col justify-between h-full ${className}`}
      >
        <div>
          {number !== undefined && (
            <span className="font-mono text-xs font-bold text-bronze tracking-widest uppercase mb-3 block">
              {typeof number === "number" ? number.toString().padStart(2, "0") : number}
            </span>
          )}
          <h3 className="text-base sm:text-lg font-bold text-navy mb-2 leading-tight">
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
        className={`border-r border-b border-white/10 bg-[#081423] p-6 sm:p-8 flex flex-col justify-center items-center text-center ${className}`}
      >
        <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#9C724A] tracking-tight">
          {value}
        </span>
        {label && (
          <span className="font-mono text-xs uppercase tracking-wider text-steel-2/80 mt-2 font-semibold">
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
      <div className={`border-b border-line/80 py-4 sm:py-5 ${className}`}>
        <button
          type="button"
          onClick={toggleFaq}
          className="w-full flex items-center justify-between gap-4 text-left font-bold text-navy hover:text-bronze transition-colors focus:outline-none py-1"
          aria-expanded={isFaqOpen}
        >
          <span className="text-base sm:text-lg leading-snug">{question || title}</span>
          <motion.span
            animate={{ rotate: isFaqOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex-shrink-0 text-bronze p-1 rounded-full bg-bronze/10"
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
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
        className={`rounded-2xl border border-line bg-surface p-6 sm:p-7 flex flex-col justify-between h-full shadow-sm ${className}`}
      >
        <div>
          <Quote className="h-6 w-6 text-bronze/40 mb-3" />
          <p className="text-xs sm:text-sm text-steel italic leading-relaxed mb-6">
            &ldquo;{quote || description}&rdquo;
          </p>
        </div>
        <div className="pt-4 border-t border-line/50">
          <h4 className="text-xs sm:text-sm font-bold text-navy">{author || title}</h4>
          {company && (
            <p className="text-[11px] font-mono text-steel-2 mt-0.5">{company}</p>
          )}
        </div>
      </div>
    );
  }

  // Fallback default container
  return (
    <div className={`rounded-2xl border border-line bg-surface p-6 ${className}`}>
      {children}
    </div>
  );
}
