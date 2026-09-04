"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Settings,
  Scale,
  History,
} from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import ProductMarquee from "../components/ui/ProductMarquee";
import SpringLoadSimulator from "../components/ui/SpringLoadSimulator";
import InteractiveSpecGuide from "../components/ui/InteractiveSpecGuide";
import ProcessTimeline from "../components/ui/ProcessTimeline";
import SplitText from "../components/motion/SplitText";
import MagneticButton from "../components/motion/MagneticButton";
import CountUp from "../components/motion/CountUp";
import { products } from "../lib/products";

// 1. Trust & Heritage items
const trustItems = [
  { val: 1990, label: "ESTABLISHED", suffix: "", desc: "35+ Years Winding Heritage" },
  { val: 10, label: "CAPACITY", suffix: "M+", desc: "Annual Component Output" },
  { val: 0.2, label: "WIRE RANGE", suffix: "mm–16mm", decimals: 1, desc: "Ultra-Precision Gauge" },
  { val: 100, label: "INSPECTION", suffix: "%", desc: "DIN 2095 Grade 1 Auditing" }
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

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  // Easing curve specified in requirements
  const customEase = [0.22, 0.61, 0.36, 1] as const;

  // Mobile-tuned motion translate values (halved on mobile for smoothness)
  const catalogY = isMobile ? 16 : 32;
  const whyX = isMobile ? 12 : 24;
  const workflowX = isMobile ? -20 : -40;
  const aboutLeftX = isMobile ? -15 : -30;
  const aboutRightX = isMobile ? 15 : 30;
  const staggerDelay = isMobile ? 0.04 : 0.08;

  return (
    <main className="flex-1 bg-[#f7f9fa] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (INTERACTIVE LOAD SIMULATOR + SPLIT TEXT) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white pt-10 pb-16 lg:pt-20 lg:pb-28">
        {/* Technical Blueprint Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #17324f 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Hero Left Column: Headline with SplitText & CTAs */}
          <div className="space-y-6">
            {/* Eyebrow badge */}
            <div>
              <div className="eyebrow">
                № 01 — FAMOUS SPRING MANUFACTURER IN JAMNAGAR
              </div>
            </div>
            
            {/* Main Headline with SplitText */}
            <h1 className="text-[clamp(34px,4.8vw,60px)] font-semibold leading-[1.05] tracking-[-0.01em] text-[#17324F] font-display">
              <SplitText 
                text="Famous Spring in Jamnagar."
                stagger={0.05}
              />
              <br className="hidden sm:inline" />
              <em className="italic font-normal text-[#9C724A] sm:ml-2">
                <SplitText text="Engineered Precision." delay={0.15} stagger={0.05} />
              </em>
            </h1>
            
            {/* Sub-description with SEO keywords */}
            <p className="text-steel text-sm sm:text-lg leading-[1.65] max-w-xl">
              Darbar Springwala is the most <strong>famous spring manufacturer in Jamnagar</strong> (known locally as the top <strong>Spring Wala in Jamnagar</strong>). We produce precision compression springs, extension springs, torsion springs, and wire forms for automotive, switchgear, and heavy machinery markets across Gujarat.
            </p>

            {/* CTAs with minimum 44px tap targets */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <MagneticButton>
                <Link 
                  href="/contact" 
                  className="btn-primary min-h-[44px] min-w-[44px]"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowUpRight className="h-4 w-4 text-[#E5C158]" />
                </Link>
              </MagneticButton>
              
              <Link 
                href="/products" 
                className="btn-secondary min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                Explore Catalogue
              </Link>
            </div>

            {/* Hero Quick Key Metrics */}
            <div className="pt-6 border-t border-[#17324F]/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustItems.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block font-mono text-[9px] font-medium text-[#9C724A] uppercase tracking-widest">
                    {item.label}
                  </span>
                  <div className="font-display font-semibold text-lg text-[#17324F]">
                    <CountUp 
                      end={item.val} 
                      decimals={item.decimals || 0} 
                      suffix={item.suffix} 
                    />
                  </div>
                  <p className="text-[11px] text-steel leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Column: Interactive Spring Load Simulator Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: customEase }}
          >
            <SpringLoadSimulator initialWireDiameter={2.5} initialFreeLength={80} />
          </motion.div>

        </div>
      </section>

      {/* Marquee Ticker */}
      <ProductMarquee />

      {/* ========================================================================= */}
      {/* 2. PRECISION SPRING CATALOG (SLIDES UP y: catalogY -> 0) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-28 bg-[#f7f9fa]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: catalogY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: customEase }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
          >
            <div>
              <div className="eyebrow">
                № 02 — JAMNAGAR SPRING CATALOGUE
              </div>
              <h2 className="text-[clamp(26px,3.2vw,42px)] font-semibold text-[#17324F] mt-1 font-display">
                High-Performance Industrial Springs in Jamnagar
              </h2>
              <p className="mt-2.5 text-steel text-sm sm:text-base max-w-xl">
                Explore our core categories of precision compression springs in Jamnagar, extension springs, torsion springs, and specialty wire forms engineered for demanding applications.
              </p>
            </div>
            
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-[#9C724A] hover:text-[#17324F] transition-colors shrink-0 min-h-[44px]"
            >
              <span>View Full Catalogue ({products.length})</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.slug} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE SPEC BLUEPRINT GUIDE SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-28 border-y border-line/60 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: catalogY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: customEase }}
            className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
          >
            <div className="eyebrow mx-auto">
              № 03 — INTERACTIVE SPEC GUIDE
            </div>
            <h2 className="text-[clamp(26px,3.2vw,42px)] font-semibold text-[#17324F] mt-1 font-display">
              Engineered Specification Blueprint
            </h2>
            <p className="mt-2.5 text-steel text-sm sm:text-base">
              Select a mechanical parameter below to explore manufacturing limits, kinematic formulas, and ISO compliance standards.
            </p>
          </motion.div>

          <InteractiveSpecGuide />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ENGINEERING STRENGTHS (HEADING FADES UP, CARDS STAGGER FROM RIGHT) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-28 bg-[#f7f9fa]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: catalogY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: customEase }}
            className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
          >
            <div className="eyebrow mx-auto">
              № 04 — WHY CHOOSE US IN JAMNAGAR
            </div>
            <h2 className="text-[clamp(26px,3.2vw,42px)] font-semibold text-[#17324F] mt-1 font-display">
              Famous Spring Factory in Jamnagar, Gujarat
            </h2>
            <p className="mt-2.5 text-steel text-sm sm:text-base">
              Darbar Springwala pairs 35+ years of historical winding expertise with high-tech automated CNC coiling machinery to serve OEM manufacturers across Jamnagar and India.
            </p>
          </motion.div>

          {/* Cards Stagger in from RIGHT */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: staggerDelay,
                },
              },
            }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {whyItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: whyX },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: customEase },
                    },
                  }}
                  className="group relative rounded-[2px] border border-[#17324F]/15 bg-white p-[22px] transition-all duration-120 hover:border-[#17324F] hover:bg-[#FBFAF7] active:scale-[0.98] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex rounded-[2px] bg-surface-2 p-3 text-[#9C724A] border border-line/60 transition-colors group-hover:bg-[#17324F] group-hover:text-white">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] font-medium text-[#9C724A]/60">
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="w-6 h-[1px] bg-[#9C724A] mb-2" />
                    <h3 className="font-display font-medium text-[18px] text-[#17324F] leading-snug group-hover:text-[#9C724A] transition-colors duration-120">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-steel">
                      {item.text}
                    </p>
                  </div>
                  <span className="mt-6 inline-block font-mono text-[10px] font-medium text-steel-2 uppercase tracking-widest border-t border-[#17324F]/10 pt-3">
                    {item.tag}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. MANUFACTURING WORKFLOW TIMELINE (SCROLL-LINKED CONNECTING LINE) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-28 border-t border-line/60 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: workflowX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: customEase }}
            className="max-w-2xl mb-12 lg:mb-16"
          >
            <div className="eyebrow">
              № 05 — STANDARD WORKFLOW
            </div>
            <h2 className="text-[clamp(26px,3.2vw,42px)] font-semibold text-[#17324F] mt-1 font-display">
              From Raw Wire to Finished Component
            </h2>
            <p className="mt-2.5 text-steel text-sm sm:text-base">
              Our systematic coiling, tempering, and grinding process ensures mechanical performance limits are fully verified.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONVERGING COMPANY STORY / JAMNAGAR INDUSTRIAL HUB (LEFT & RIGHT SLIDE) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 border-t border-line/60 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-[2px] border border-[#17324F]/15 bg-[#FBFAF7] p-[18px] sm:p-8 md:p-12">
            
            {/* Header */}
            <div>
              <div className="eyebrow mb-3">
                № 06 — JAMNAGAR INDUSTRIAL HUB
              </div>
              <h2 className="text-[clamp(24px,3.2vw,42px)] font-semibold text-[#17324F] font-display leading-tight">
                Famous Spring Manufacturer & Supplier in Jamnagar, Gujarat
              </h2>
            </div>

            {/* Converging 2 Columns */}
            <div className="mt-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-center">
              
              {/* Text Block: Slides from LEFT */}
              <motion.div
                initial={{ opacity: 0, x: aboutLeftX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: customEase }}
                className="space-y-4 text-sm sm:text-base leading-relaxed text-steel"
              >
                <p>
                  Established in 1990 in Jamnagar, Gujarat, <strong>Darbar Springwala</strong> is widely recognized as the most <strong>famous spring manufacturer in Jamnagar</strong> (known across Gujarat as the top <strong>Spring Wala in Jamnagar</strong>). Operating from Jamnagar GIDC, we specialize in high-precision <strong>compression springs in Jamnagar, extension springs in Jamnagar, torsion springs in Jamnagar, wire forms, and custom spring components</strong> conforming to DIN 2095 Grade 1 and ISO 9001:2015 quality standards.
                </p>
                <p>
                  Our manufacturing facility features multi-axis CNC spring coilers, automated tempering furnaces, and digital force testing equipment capable of processing wire diameters from <strong>0.2mm to 16.0mm</strong>. Whether you search for the best <strong>spring in Jamnagar</strong> for automotive assemblies, electrical switchgear, valve springs, or custom prototypes built to CAD drawings, Darbar Springwala delivers fast turnaround times across Jamnagar, Rajkot, Ahmedabad, Gujarat, and pan-India.
                </p>
              </motion.div>

              {/* Stat Strip: Slides from RIGHT on delay */}
              <motion.div
                initial={{ opacity: 0, x: aboutRightX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: customEase }}
                className="space-y-4 bg-white border border-[#17324F]/15 p-5 sm:p-6 rounded-[2px]"
              >
                <div className="w-6 h-[1px] bg-[#9C724A]" />
                <h3 className="font-display font-medium text-lg text-[#17324F]">
                  Jamnagar Infrastructure Overview
                </h3>

                <div className="grid grid-cols-2 gap-4 border-t border-[#17324F]/10 pt-4">
                  <div>
                    <span className="block font-mono text-[10px] font-medium text-[#9C724A] uppercase tracking-widest">LOCATION</span>
                    <span className="font-medium text-[#17324F] text-xs sm:text-sm">Jamnagar GIDC, Gujarat</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] font-medium text-[#9C724A] uppercase tracking-widest">CERTIFICATION</span>
                    <span className="font-medium text-[#17324F] text-xs sm:text-sm">ISO 9001:2015 Standard</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] font-medium text-[#9C724A] uppercase tracking-widest">WIRE GAUGE</span>
                    <span className="font-medium text-[#17324F] text-xs sm:text-sm">
                      <CountUp end={0.2} decimals={1} prefix="" suffix="mm - 16.0mm" />
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] font-medium text-[#9C724A] uppercase tracking-widest">GLOBAL SUPPLY</span>
                    <span className="font-medium text-[#17324F] text-xs sm:text-sm">Pan-India & Export Ready</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="btn-secondary w-full justify-center text-xs min-h-[44px]"
                  >
                    <span>Read Full Company Heritage</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#9C724A]" />
                  </Link>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INDUSTRIES SERVED (GRID ITEMS SCALE IN FROM 0.94 -> 1) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-28 bg-[#f7f9fa]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: catalogY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: customEase }}
            className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
          >
            <div className="eyebrow mx-auto">
              № 07 — INDUSTRIES SERVED IN JAMNAGAR
            </div>
            <h2 className="text-[clamp(26px,3.2vw,42px)] font-semibold text-[#17324F] mt-1 font-display">
              Built for Industrial Applications
            </h2>
            <p className="mt-2.5 text-steel text-sm sm:text-base">
              Our components provide critical elastic properties across a diverse spectrum of mechanical sectors in Jamnagar and nationwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
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
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: index * 0.02, ease: customEase }}
                className="rounded-[2px] border border-[#17324F]/15 bg-white p-3.5 sm:p-4 text-center transition-all duration-120 hover:border-[#17324F] hover:bg-[#FBFAF7] active:scale-[0.98] flex flex-col justify-center min-h-[95px] sm:min-h-[105px]"
              >
                <div className="w-4 h-[1px] bg-[#9C724A] mx-auto mb-1.5" />
                <p className="font-display font-medium text-[#17324F] text-xs sm:text-sm leading-tight">{industry}</p>
                <span className="mt-1.5 block font-mono text-[9px] text-[#9C724A] uppercase tracking-wider font-medium">SPEC WINDING</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
