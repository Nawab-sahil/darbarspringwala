"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  SlidersHorizontal, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles,
  ShieldCheck,
  X
} from "lucide-react";
import ProductCard from "../../components/ui/ProductCard";
import ProductMarquee from "../../components/ui/ProductMarquee";
import MagneticButton from "../../components/motion/MagneticButton";
import { products } from "../../lib/products";

const CATEGORIES = [
  { id: "all", label: "All Springs" },
  { id: "compression", label: "Compression Springs" },
  { id: "extension", label: "Tension & Extension" },
  { id: "torsion", label: "Torsion & Spiral" },
  { id: "specialty", label: "Wire Forms & Specialty" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "compression" && product.slug.includes("compression")) ||
        (selectedCategory === "extension" && (product.slug.includes("extension") || product.slug.includes("garter"))) ||
        (selectedCategory === "torsion" && (product.slug.includes("torsion") || product.slug.includes("spiral"))) ||
        (selectedCategory === "specialty" && (product.slug.includes("wire") || product.slug.includes("conical") || product.slug.includes("die") || product.slug.includes("custom")));

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.applicationTag.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#f7f9fa] py-14 lg:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const }}
            className="space-y-4"
          >
            {/* Eyebrow badge */}
            <div>
              <div className="eyebrow">
                № 01 — ISO 9001:2015 CERTIFIED CATALOGUE
              </div>
            </div>

            <h1 className="text-[clamp(32px,4vw,52px)] font-semibold text-[#17324F] leading-tight font-display tracking-tight">
              Engineering-Grade <em className="italic font-normal text-bronze">Spring Solutions</em>
            </h1>

            <p className="text-steel text-base sm:text-lg leading-relaxed max-w-xl">
              Precision-coiled industrial springs and wire-formed assemblies manufactured for automotive, electrical switchgear, heavy machinery, and OEM applications.
            </p>

            {/* Quick Technical Parameter Badges */}
            <div className="pt-3 flex flex-wrap gap-3 text-xs font-mono font-medium text-[#17324F]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white border border-[#17324F]/15">
                <Cpu className="h-3.5 w-3.5 text-[#9C724A]" />
                <span>0.2mm – 16.0mm Wire Range</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white border border-[#17324F]/15">
                <Layers className="h-3.5 w-3.5 text-[#9C724A]" />
                <span>High-Fatigue Steel Alloys</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white border border-[#17324F]/15">
                <Sparkles className="h-3.5 w-3.5 text-[#9C724A]" />
                <span>DIN 2095 Grade 1 Tolerances</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Catalogue Technical Specs Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] as const }}
            className="rounded-[2px] border border-[#17324F]/15 p-[22px] bg-white space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#17324F]/10 pb-3">
              <h3 className="font-medium text-[#17324F] text-base sm:text-lg font-display flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#9C724A]" />
                Catalogue Quick Specs
              </h3>
              <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-[#9C724A] bg-[#9C724A]/10 px-2 py-0.5 rounded-[2px]">
                B2B OEM Ready
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-steel">
              <li className="flex justify-between border-b border-[#17324F]/10 pb-2">
                <span className="font-medium text-[#17324F]">Coiling Capacity</span>
                <span className="font-mono text-[#9C724A] font-medium">0.2mm to 16.0mm wire</span>
              </li>
              <li className="flex justify-between border-b border-[#17324F]/10 pb-2">
                <span className="font-medium text-[#17324F]">Raw Alloys</span>
                <span className="font-mono text-[#9C724A] font-medium">IS 4454, SS 302/316, Inconel</span>
              </li>
              <li className="flex justify-between border-b border-[#17324F]/10 pb-2">
                <span className="font-medium text-[#17324F]">Quality Standards</span>
                <span className="font-mono text-[#9C724A] font-medium">DIN 2095 / ISO 9001:2015</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="font-medium text-[#17324F]">Blueprint Prototypes</span>
                <span className="font-mono text-[#9C724A] font-medium">Dispatched in 48 hours</span>
              </li>
            </ul>

            <div className="pt-2">
              <MagneticButton className="w-full">
                <Link 
                  href="/contact" 
                  className="btn-primary w-full justify-center"
                >
                  <span>Request Custom Spec RFQ</span>
                  <ArrowUpRight className="h-4 w-4 text-[#E5C158]" />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>

        </div>

        {/* Product Marquee Ticker */}
        <div className="my-10">
          <ProductMarquee />
        </div>

        {/* ========================================================================= */}
        {/* 2. FILTER & SEARCH CONTROL BAR */}
        {/* ========================================================================= */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-[#17324F]/15 py-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all duration-120 ${
                  selectedCategory === cat.id
                    ? "bg-[#17324F] text-white font-medium shadow-xs"
                    : "bg-white border border-[#17324F]/15 text-[#17324F] hover:border-[#17324F] hover:bg-[#FBFAF7]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Real-time Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-steel-2" />
            <input
              type="text"
              placeholder="Search spring types, specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-[2px] bg-white border border-[#17324F]/15 text-xs font-mono font-medium text-[#17324F] placeholder:text-steel-2 focus:outline-none focus:border-[#17324F] shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-2 hover:text-[#17324F]"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between font-mono text-xs text-steel">
          <span>Showing <strong className="text-[#17324F] font-semibold">{filteredProducts.length}</strong> Spring Categories</span>
          {selectedCategory !== "all" && (
            <button 
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="text-[#9C724A] font-medium hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. PRODUCT CARDS GRID */}
        {/* ========================================================================= */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="mt-14 p-12 text-center bg-white rounded-[2px] border border-[#17324F]/15 max-w-lg mx-auto space-y-4">
            <div className="inline-flex p-4 rounded-[2px] bg-[#9C724A]/10 text-[#9C724A]">
              <SlidersHorizontal className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#17324F] font-display">No Spring Categories Found</h3>
            <p className="text-xs text-steel">
              We couldn&apos;t find any springs matching &quot;{searchQuery}&quot;. Try resetting your search or filter keywords.
            </p>
            <button
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="px-6 py-2 rounded-[2px] bg-[#17324F] text-white text-xs font-mono uppercase tracking-wider"
            >
              Show All Products
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. TECHNICAL MATERIALS & CAPABILITIES REFERENCE */}
        {/* ========================================================================= */}
        <section className="mt-20 rounded-[2px] border border-[#17324F]/15 bg-white p-[22px] sm:p-12 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <div>
              <div className="eyebrow">
                № 02 — MATERIAL METALLURGY & FINISHES
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#17324F] font-display">
              High-Tensile Wire Alloys & Surface Coatings
            </h2>
            <p className="text-steel text-xs sm:text-sm leading-relaxed">
              We coil precision springs from certified raw wire grades, offering custom heat treatment and protective surface finishes to withstand severe operational environments.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2px] bg-[#FBFAF7] p-6 border border-[#17324F]/10 space-y-3">
              <h3 className="font-semibold text-[#17324F] text-sm font-display">Spring Steel Alloys</h3>
              <ul className="space-y-2 text-xs text-steel font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
                  <span>High-Carbon Steel (IS 4454)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
                  <span>Music Wire (DIN 17223 Class V)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
                  <span>Chrome Silicon (55CrSi)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[2px] bg-[#FBFAF7] p-6 border border-[#17324F]/10 space-y-3">
              <h3 className="font-semibold text-[#17324F] text-sm font-display">Stainless & Non-Ferrous</h3>
              <ul className="space-y-2 text-xs text-steel font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
                  <span>Stainless Steel 302 / 304 / 316</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
                  <span>Phosphor Bronze (CuSn6)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
                  <span>Inconel & Monel Alloys</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[2px] bg-[#FBFAF7] p-6 border border-[#17324F]/10 space-y-3">
              <h3 className="font-semibold text-[#17324F] text-sm font-display">Surface Protection</h3>
              <ul className="space-y-2 text-xs text-steel font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
                  <span>Trivalent Zinc Plating (Yellow/Blue)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
                  <span>Black Oxide & Phosphating</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9C724A] shrink-0" />
                  <span>Electro-Polishing & Powder Coat</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
