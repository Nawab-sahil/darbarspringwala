"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  ArrowUpRight,
  ChevronRight,
  Settings,
  Scale,
  History,
  Globe,
  Award,
  SlidersHorizontal,
  CheckCircle2
} from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import ProductMarquee from "../components/ui/ProductMarquee";
import { contactInfo } from "../lib/site";
import { products } from "../lib/products";

// 1. Trust & Heritage items
const trustItems = [
  { text: "EST. 1990", desc: "Over 35 years of engineering heritage" },
  { text: "ISO-Standards Winding", desc: "Process-controlled coil execution" },
  { text: "Custom Winding CNC", desc: "Wire capabilities from 0.2mm to 16.0mm" },
  { text: "Quality Audited", desc: "100% inspection-focused workflow" }
];

// 2. Engineering strengths (Why choose us)
const whyItems = [
  {
    title: "Precision Calibration",
    text: "Advanced CNC coiling with real-time dimensional feedback loops ensures high spring rate consistency.",
    icon: Cpu,
    tag: "CNC Tolerances"
  },
  {
    title: "Tailored Engineering",
    text: "Every spring is customized to your operational environment, load constraints, and fatigue cycles.",
    icon: Settings,
    tag: "Bespoke Design"
  },
  {
    title: "Industrial Longevity",
    text: "Over three decades of manufacturing experience supplying auto, electrical, and heavy machinery markets.",
    icon: History,
    tag: "3 Decades Heritage"
  },
  {
    title: "Rigorous Inspection",
    text: "Batch load testing, profile projection measurement, and stress-relieving heat-treatment verification.",
    icon: ShieldCheck,
    tag: "100% Quality Audits"
  },
  {
    title: "Material Versatility",
    text: "Forming high-grade carbon steel, stainless steel, alloy steels, music wire, and phosphor bronze.",
    icon: Scale,
    tag: "Advanced Alloys"
  },
  {
    title: "B2B Partnership",
    text: "Rapid sampling turnaround, dedicated engineering support, and reliable logistics for wholesale supply.",
    icon: Zap,
    tag: "Enterprise Ready"
  }
];

// 3. Step-by-step manufacturing process
const processSteps = [
  {
    title: "Material Sourcing & Testing",
    desc: "Verification of wire tensile strength, grade certificate inspection, and diameter validation.",
    tag: "01. Quality Input"
  },
  {
    title: "Precision Coiling & Forming",
    desc: "Computerized CNC forming of compression coils, torsion legs, or extension end loops.",
    tag: "02. Winding"
  },
  {
    title: "Stress Relieving & Tempering",
    desc: "Controlled heat treatment to release residual winding stresses and lock spring properties.",
    tag: "03. Heat Treatment"
  },
  {
    title: "Grinding & Finishing",
    desc: "Flat-end grinding for compression springs, zinc plating, black oxiding, or powder coating.",
    tag: "04. Finishing"
  },
  {
    title: "Load & Dimensional Auditing",
    desc: "Automated verification of spring rates, free length, solid height, and coil parameters.",
    tag: "05. Verification"
  },
  {
    title: "Protective Packaging & Supply",
    desc: "Rust-preventative oil application, secure nested packing, and shipping to your production floor.",
    tag: "06. Delivery"
  }
];

// 4. Technical specifications for the interactive simulator
const specData = [
  {
    id: "wd",
    name: "Wire Diameter (d)",
    val: "0.2mm to 16.0mm",
    desc: "Governs spring rate and load capacity. We offer micro-winding up to heavy-gauge wires."
  },
  {
    id: "od",
    name: "Outer Diameter (De)",
    val: "2.0mm to 250mm",
    desc: "Ensures the spring fits perfectly inside your housing bore or over your guide rod."
  },
  {
    id: "fl",
    name: "Free Length (Lo)",
    val: "Custom to Requirement",
    desc: "The uncompressed overall length of the spring in its relaxed, unloaded state."
  },
  {
    id: "coils",
    name: "Active Coils (n)",
    val: "Calculated based on rate",
    desc: "The number of working coils that store and release mechanical energy."
  },
  {
    id: "rate",
    name: "Spring Rate (k)",
    val: "Linear / Progressive",
    desc: "The force required to compress the spring by a unit distance (N/mm)."
  }
];

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const [hoveredSpec, setHoveredSpec] = useState<string>("wd");
  const [isCompressing, setIsCompressing] = useState(false);

  return (
    <main className="flex-1 bg-[#f7f9fa] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Technical Blueprint Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #17324f 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Subtle Ambient Radial Lighting Glow */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bronze/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-bronze/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-bronze shadow-sm">
              <span className="h-2 w-2 rounded-full bg-bronze animate-pulse" />
              B2B INDUSTRIAL WINDING SOLUTIONS
            </div>
            
            {/* Main Headline */}
            <h1 className="mt-6 text-[clamp(38px,5.2vw,62px)] font-black leading-[1.06] tracking-tight text-navy font-display">
              Precision Springs.<br />
              Engineered for{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-navy via-bronze to-bronze-2">
                Peak Performance
                <span className="absolute bottom-1.5 left-0 h-[4px] w-full bg-bronze/25 rounded-full" />
              </span>.
            </h1>
            
            {/* Sub-description */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-steel max-w-xl">
              Darbar Springwala manufactures highly engineered, custom-coiled industrial springs. We specialize in high-durability solutions for automotive, electronics, electrical switchgear, and OEM machinery markets.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-navy text-white font-bold text-sm tracking-wide shadow-lg shadow-navy/20 transition-all duration-300 hover:bg-bronze hover:shadow-bronze/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request a Custom Quote</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-surface-2 border border-line/80 text-navy font-bold text-sm tracking-wide transition-all duration-300 hover:bg-white hover:border-navy hover:shadow-md"
              >
                Explore Catalogue
              </Link>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line/70 pt-8 max-w-[480px]">
              <div>
                <p className="text-3xl font-black text-navy font-display">1990</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-steel-2 font-mono">Established</p>
              </div>
              <div>
                <p className="text-3xl font-black text-navy font-display">10M+</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-steel-2 font-mono">Springs Wound</p>
              </div>
              <div>
                <p className="text-3xl font-black text-navy font-display">0.2mm</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-steel-2 font-mono">Min Wire Size</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Right: Interactive Technical Blueprint Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-bronze/15 via-navy/10 to-bronze/5 rounded-3xl blur-2xl opacity-60 z-0 pointer-events-none" />

            <div 
              className="relative z-10 rounded-[28px] border border-line/80 bg-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(23,32,43,0.1)] transition-all duration-500 hover:border-bronze/40"
              onMouseEnter={() => setIsCompressing(true)}
              onMouseLeave={() => setIsCompressing(false)}
            >
              {/* Header inside simulator */}
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-bronze">
                    Interactive CAD Blueprint
                  </span>
                  <h3 className="text-md font-extrabold text-navy font-display">
                    Compression Coil Load Simulator
                  </h3>
                </div>
                <div className={`rounded-full px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider transition-colors ${
                  isCompressing ? "bg-bronze text-white" : "bg-navy/10 text-navy"
                }`}>
                  {isCompressing ? "240 N Load Applied" : "Unloaded State"}
                </div>
              </div>

              {/* Dynamic Animated Spring SVG Box */}
              <div className="relative my-7 flex h-52 items-center justify-center bg-[#f0f4f8] rounded-2xl border border-line/60 p-4 overflow-hidden shadow-inner">
                <svg width="250" height="130" viewBox="0 0 250 130" className="overflow-visible">
                  {/* Grid background */}
                  <defs>
                    <pattern id="sim-grid" width="12" height="12" patternUnits="userSpaceOnUse">
                      <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(23,50,79,0.05)" strokeWidth="0.5" />
                    </pattern>
                    <linearGradient id="coil-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#17324f" />
                      <stop offset="50%" stopColor="#9c724a" />
                      <stop offset="100%" stopColor="#17324f" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#sim-grid)" />

                  {/* Free Length Dimension Lines */}
                  <motion.g 
                    animate={{ opacity: hoveredSpec === "fl" ? 1 : 0.4 }}
                    className="transition-opacity duration-300"
                  >
                    <line x1="20" y1="12" x2="230" y2="12" stroke="#9c724a" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="20" y1="6" x2="20" y2="18" stroke="#9c724a" strokeWidth="1.5" />
                    <line x1="230" y1="6" x2="230" y2="18" stroke="#9c724a" strokeWidth="1.5" />
                    <text x="125" y="26" textAnchor="middle" fill="#9c724a" className="font-mono text-[9px] font-bold uppercase tracking-wider">
                      {isCompressing ? "Loaded Length (L1 = 45mm)" : "Free Length (Lo = 80mm)"}
                    </text>
                  </motion.g>

                  {/* Wire Diameter Target Indicator */}
                  <motion.g 
                    animate={{ opacity: hoveredSpec === "wd" ? 1 : 0.3 }}
                    className="transition-opacity duration-300"
                  >
                    <circle cx="45" cy="65" r="12" fill="none" stroke="#9c724a" strokeWidth="1.5" />
                    <text x="45" y="98" textAnchor="middle" fill="#9c724a" className="font-mono text-[9px] font-bold">d = 4.5mm</text>
                  </motion.g>

                  {/* Dynamic Helical Coil Spring Representation */}
                  <motion.path
                    d={
                      isCompressing 
                        ? "M 45,65 C 55,25 65,105 75,65 C 85,25 95,105 105,65 C 115,25 125,105 135,65 C 145,25 155,105 165,65 C 175,25 185,105 195,65 C 205,25 215,105 225,65"
                        : "M 30,65 C 45,15 60,115 75,65 C 90,15 105,115 120,65 C 135,15 150,115 165,65 C 180,15 195,115 210,65 C 225,15 240,115 250,65"
                    }
                    fill="none"
                    stroke="url(#coil-grad)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                      d: isCompressing
                        ? "M 45,65 C 55,28 65,102 75,65 C 85,28 95,102 105,65 C 115,28 125,102 135,65 C 145,28 155,102 165,65 C 175,28 185,102 195,65 C 205,28 215,102 225,65"
                        : "M 30,65 C 45,15 60,115 75,65 C 90,15 105,115 120,65 C 135,15 150,115 165,65 C 180,15 195,115 210,65 C 225,15 240,115 250,65"
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 16 }}
                  />
                </svg>
              </div>

              {/* Live Metric Stats Bar */}
              <div className="grid grid-cols-2 gap-4 border-t border-line/60 pt-4 text-center">
                <div className="bg-surface-2/60 rounded-xl p-2.5">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-steel-2">Spring Rate (k)</span>
                  <span className="font-mono text-sm font-bold text-navy">180.5 N/mm</span>
                </div>
                <div className="bg-surface-2/60 rounded-xl p-2.5">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-steel-2">Target Tolerance</span>
                  <span className="font-mono text-sm font-bold text-bronze">DIN 2095 Grade 1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST & ACCREDITATION STRIP */}
      {/* ========================================================================= */}
      <section className="border-b border-line/60 bg-white py-10">
        <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col border-l-2 border-bronze/40 pl-5"
            >
              <p className="font-mono text-[13px] font-extrabold text-navy uppercase tracking-wider">{item.text}</p>
              <p className="mt-1 text-xs text-steel leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Infinite Product Marquee Ticker Strip */}
      <ProductMarquee />

      {/* ========================================================================= */}
      {/* 3. PRODUCTS CATALOGUE SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f7f9fa]">
        <div className="container">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-line/80 pb-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-bronze">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                MANUFACTURING SCOPE
              </div>
              <h2 className="text-[clamp(30px,4vw,44px)] font-black text-navy leading-tight mt-2 font-display">
                Precision Spring Catalog
              </h2>
              <p className="mt-3 text-steel text-sm sm:text-base max-w-xl">
                Explore our core range of custom engineered products. Each spring line is optimized for dimensional consistency and calibrated load dynamics.
              </p>
            </div>

            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-line text-navy font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 hover:border-navy hover:shadow-md shrink-0"
            >
              <span>View Entire Catalogue</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Quick Custom Order Banner */}
          <div className="mt-16 overflow-hidden rounded-[32px] border border-line bg-gradient-to-r from-[#17324f] via-[#10243b] to-[#091728] text-white shadow-2xl relative">
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
            <div className="relative z-10 px-8 py-12 md:px-16 md:py-16 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#E5C158] font-bold">Custom Blueprint Manufacturing</span>
                <h3 className="mt-3 text-2xl sm:text-4xl font-extrabold font-display">Require Custom Tolerances & Alloys?</h3>
                <p className="mt-3 text-sm text-[#ccd5df] leading-relaxed max-w-xl">
                  Whether you need a single prototype for testing or high-volume wholesale production runs, our engineers design and coil to your exact blueprint parameters.
                </p>
              </div>

              <div className="flex md:justify-end">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#9C724A] to-[#825B36] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#9C724A]/30 transition-all duration-300 hover:scale-105"
                >
                  <span>Submit Design Specs</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE SPECS BLUEPRINT GUIDE */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 border-y border-line/60 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-bronze">
              Interactive Spec Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-navy mt-2 font-display">
              Engineered Specification Blueprint
            </h2>
            <p className="mt-3 text-steel text-sm sm:text-base">
              Spring performance depends on microscopic configuration metrics. Select a parameter below to explore its role in custom spring design.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Selector Buttons */}
            <div className="space-y-3.5">
              {specData.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => setHoveredSpec(spec.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                    hoveredSpec === spec.id
                      ? "border-navy bg-[#17324f] text-white shadow-xl translate-x-2"
                      : "border-line/70 bg-surface-2/60 hover:bg-white text-navy hover:border-line"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`font-bold text-base ${hoveredSpec === spec.id ? "text-white" : "text-navy"}`}>
                      {spec.name}
                    </span>
                    <span className={`font-mono text-xs font-bold ${hoveredSpec === spec.id ? "text-[#E5C158]" : "text-bronze"}`}>
                      {spec.val}
                    </span>
                  </div>
                  
                  {hoveredSpec === spec.id && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3 text-xs leading-relaxed text-white/80 border-t border-white/10 pt-3"
                    >
                      {spec.desc}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>

            {/* Spec visual illustration panel */}
            <div className="rounded-[32px] border border-line/80 bg-[#f8fafc] p-8 shadow-xl relative min-h-[380px] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-steel-2 uppercase tracking-widest">
                  Technical Parameter Detail
                </span>
                
                <div className="mt-6 border-l-4 border-bronze pl-4">
                  <h3 className="text-2xl font-black text-navy font-display">
                    {specData.find(s => s.id === hoveredSpec)?.name}
                  </h3>
                  <p className="text-xs font-mono text-bronze font-bold mt-1">
                    Manufacturing Limits: {specData.find(s => s.id === hoveredSpec)?.val}
                  </p>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-steel">
                  {specData.find(s => s.id === hoveredSpec)?.desc}
                </p>
              </div>

              <div className="mt-8 border-t border-line/60 pt-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-bronze/10 p-3 text-bronze">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy">ISO Tolerances Guaranteed</h4>
                    <p className="text-xs text-steel mt-0.5">We maintain strict ISO standards across all configured wire dimensions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ENGINEERING STRENGTHS (WHY CHOOSE US) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f7f9fa]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-bronze">
              Engineering Strengths
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-navy mt-2 font-display">
              Built on Experience. Driven by Precision.
            </h2>
            <p className="mt-3 text-steel text-sm sm:text-base">
              Darbar Springwala pairs historical expertise with high-tech automated CNC coiling machinery to provide premium industrial components.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="group relative rounded-[28px] border border-line/70 bg-white p-7 shadow-sm hover:shadow-xl hover:border-navy transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex rounded-2xl bg-surface-2 p-3.5 text-bronze border border-line/60 transition-colors group-hover:bg-navy group-hover:text-white">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-navy leading-snug font-display">{item.title}</h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-steel">{item.text}</p>
                  </div>
                  <span className="mt-6 inline-block font-mono text-[10px] font-bold text-steel-2 uppercase tracking-widest border-t border-line/40 pt-4">
                    {item.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. MANUFACTURING WORKFLOW TIMELINE */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 border-t border-line/60 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-bronze">
              Standard Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-navy mt-2 font-display">
              From Raw Wire to Finished Component
            </h2>
            <p className="mt-3 text-steel text-sm sm:text-base">
              Our systematic coiling, tempering, and grinding process ensures mechanical performance limits are fully verified.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="relative rounded-3xl border border-line/80 bg-surface-2/50 p-7 shadow-sm hover:bg-white hover:border-bronze/40 transition-all duration-300"
              >
                <span className="absolute right-7 top-7 font-mono text-xs font-bold text-bronze">
                  {step.tag}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-navy font-display">{step.title}</h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-steel">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INDUSTRIES SERVED FOOTPRINT */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f7f9fa]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-bronze">
              Industries Served
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-navy mt-2 font-display">
              Built for Industrial Applications
            </h2>
            <p className="mt-3 text-steel text-sm sm:text-base">
              Our components provide critical elastic properties across a diverse spectrum of mechanical sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              "Automotive Assemblies",
              "Electrical Switchgear",
              "Agricultural Tools",
              "Industrial Valve Systems",
              "Heavy Press Machinery",
              "Hydraulics & Seals",
              "OEM Assemblies",
              "Construction Rigging",
              "Lock & Key Assemblies",
              "Consumer Hardware"
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="rounded-2xl border border-line bg-white p-5 text-center transition-all duration-300 hover:border-bronze hover:-translate-y-1 shadow-sm flex flex-col justify-center min-h-[115px]"
              >
                <p className="font-bold text-navy text-xs sm:text-sm">{industry}</p>
                <span className="mt-2 block font-mono text-[9px] text-bronze uppercase tracking-wider font-bold">Standard Spec Winding</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
