"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  SlidersHorizontal, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles,
  X
} from "lucide-react";
import ProductCard from "../../components/ui/ProductCard";
import ProductMarquee from "../../components/ui/ProductMarquee";
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
    <main className="min-h-screen bg-[#f7f9fa] py-14 lg:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="max-w-4xl space-y-4"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-bronze/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-bronze shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            ISO 9001:2015 CERTIFIED PRODUCT CATALOGUE
          </div>

          <h1 className="text-[clamp(34px,4.8vw,58px)] font-black leading-[1.06] tracking-tight text-navy font-display">
            Engineering-Grade{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-bronze to-bronze-2">
              Spring Solutions
            </span>
          </h1>

          <p className="text-steel text-base sm:text-lg leading-relaxed max-w-2xl">
            Precision-coiled industrial springs and wire-formed assemblies manufactured for automotive, electrical switchgear, heavy machinery, and OEM applications.
          </p>

          {/* Quick Technical Parameter Badges */}
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono font-bold text-navy">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-line shadow-sm">
              <Cpu className="h-3.5 w-3.5 text-bronze" />
              <span>0.2mm - 16.0mm Wire Range</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-line shadow-sm">
              <Layers className="h-3.5 w-3.5 text-bronze" />
              <span>High-Fatigue Steel Alloys</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-line shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-bronze" />
              <span>DIN 2095 Grade 1 Tolerances</span>
            </div>
          </div>
        </motion.div>

        {/* Product Marquee Ticker */}
        <div className="my-10">
          <ProductMarquee />
        </div>

        {/* ========================================================================= */}
        {/* 2. FILTER & SEARCH CONTROL BAR */}
        {/* ========================================================================= */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-line/80 py-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-navy text-white shadow-md shadow-navy/20"
                    : "bg-white border border-line text-steel-2 hover:border-navy hover:text-navy"
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
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-line text-xs font-semibold text-navy placeholder:text-steel-2 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-2 hover:text-navy"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between font-mono text-xs text-steel">
          <span>Showing <strong className="text-navy font-bold">{filteredProducts.length}</strong> Spring Categories</span>
          {selectedCategory !== "all" && (
            <button 
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="text-bronze font-bold hover:underline"
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
          <div className="mt-14 p-12 text-center bg-white rounded-3xl border border-line max-w-lg mx-auto space-y-4">
            <div className="inline-flex p-4 rounded-full bg-bronze/10 text-bronze">
              <SlidersHorizontal className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-navy">No Spring Categories Found</h3>
            <p className="text-xs text-steel">
              We couldn&apos;t find any springs matching &quot;{searchQuery}&quot;. Try resetting your search or filter keywords.
            </p>
            <button
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="px-6 py-2.5 rounded-xl bg-navy text-white text-xs font-bold uppercase tracking-wider"
            >
              Show All Products
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. TECHNICAL MATERIALS & CAPABILITIES REFERENCE */}
        {/* ========================================================================= */}
        <section className="mt-20 rounded-[32px] border border-line bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-bronze">
              Material Metallurgy & Finishes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy font-display">
              High-Tensile Wire Alloys & Surface Coatings
            </h2>
            <p className="text-steel text-xs sm:text-sm leading-relaxed">
              We coil precision springs from certified raw wire grades, offering custom heat treatment and protective surface finishes to withstand severe operational environments.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-surface-2/60 p-6 border border-line/60 space-y-3">
              <h3 className="font-bold text-navy text-sm font-display">Spring Steel Alloys</h3>
              <ul className="space-y-2 text-xs text-steel font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-bronze shrink-0" />
                  <span>High-Carbon Steel (IS 4454)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-bronze shrink-0" />
                  <span>Music Wire (DIN 17223 Class V)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-bronze shrink-0" />
                  <span>Chrome Silicon (55CrSi)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-surface-2/60 p-6 border border-line/60 space-y-3">
              <h3 className="font-bold text-navy text-sm font-display">Stainless & Non-Ferrous</h3>
              <ul className="space-y-2 text-xs text-steel font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-bronze shrink-0" />
                  <span>Stainless Steel 302 / 304 / 316</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-bronze shrink-0" />
                  <span>Phosphor Bronze (CuSn6)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-bronze shrink-0" />
                  <span>Inconel & Monel Alloys</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-surface-2/60 p-6 border border-line/60 space-y-3">
              <h3 className="font-bold text-navy text-sm font-display">Surface Protection</h3>
              <ul className="space-y-2 text-xs text-steel font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-bronze shrink-0" />
                  <span>Trivalent Zinc Plating (Yellow/Blue)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-bronze shrink-0" />
                  <span>Black Oxide & Phosphating</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-bronze shrink-0" />
                  <span>Electro-Polishing & Powder Coat</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CUSTOM WINDING RFQ BANNER */}
        {/* ========================================================================= */}
        <div className="mt-16 overflow-hidden rounded-[32px] border border-line bg-gradient-to-r from-[#17324f] via-[#10243b] to-[#091728] text-white shadow-2xl relative">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
          <div className="relative z-10 px-8 py-12 md:px-16 md:py-16 grid md:grid-cols-[1.20fr_0.80fr] gap-8 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E5C158] font-bold">Custom Winding Request</span>
              <h3 className="mt-3 text-2xl sm:text-4xl font-extrabold font-display">Need a Custom Spring Specification?</h3>
              <p className="mt-3 text-sm text-[#ccd5df] leading-relaxed max-w-xl">
                We design and manufacture springs according to client-supplied blueprints, operating loads, and operating environments. Get in touch with our design team.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#9C724A] to-[#825B36] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#9C724A]/30 transition-all duration-300 hover:scale-105"
              >
                <span>Submit Blueprint RFQ</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
