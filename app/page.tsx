"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  ArrowUpRight,
  ChevronRight,
  Settings,
  Scale,
  History,
  MessageSquare,
  Globe,
  Award
} from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import { contactInfo } from "../lib/site";
import { products } from "../lib/products";

// Trust badges
const trustItems = [
  { text: "EST. 1990", desc: "Over 35 years of engineering heritage" },
  { text: "ISO-Standards Winding", desc: "Process-controlled coil execution" },
  { text: "Custom Winding CNC", desc: "Wire capabilities from 0.2mm to 16.0mm" },
  { text: "Quality Audited", desc: "100% inspection-focused workflow" }
];

// Why choose us (value propositions)
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

// Step-by-step manufacturing process
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

// Technical specifications for the interactive simulator
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
    <main className="flex-1 bg-surface-2">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-line/50 bg-white py-20 lg:py-28">
        {/* Technical Blueprint Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #17324f 1px, transparent 1px), 
                            linear-gradient(to right, #17324f 0.5px, transparent 0.5px), 
                            linear-gradient(to bottom, #17324f 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px'
        }} />

        <div className="container relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-bronze/5 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-bronze">
              <span className="h-2 w-2 rounded-full bg-bronze animate-pulse" />
              B2B Industrial Winding Solutions
            </div>
            
            <h1 className="mt-6 text-[clamp(36px,5.5vw,60px)] font-bold leading-[1.05] tracking-tight text-navy">
              Precision Springs.<br />
              Engineered for <span className="relative inline-block text-bronze">
                Peak Performance
                <span className="absolute bottom-1 left-0 h-[4px] w-full bg-bronze/20" />
              </span>.
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-steel max-w-xl">
              Darbar Springwala manufactures highly engineered, custom-coiled industrial springs. We specialize in high-durability solutions for automotive, electronics, electrical switchgear, and OEM machinery markets.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary flex items-center gap-2 group shadow-lg shadow-navy/5">
                Request a Quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/products" className="btn-secondary">
                Explore Catalog
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line/60 pt-8 max-w-[480px]">
              <div>
                <p className="text-3xl font-bold text-navy">1990</p>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-steel-2">Established</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy">10M+</p>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-steel-2">Springs Wound</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy">0.2mm</p>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-steel-2">Min Wire Size</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Right: Interactive Technical Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-bronze/10 to-navy/5 rounded-3xl blur-2xl opacity-40 z-0" />

            <div 
              className="relative z-10 rounded-2xl border border-line bg-surface p-8 shadow-xl"
              onMouseEnter={() => setIsCompressing(true)}
              onMouseLeave={() => setIsCompressing(false)}
            >
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-bronze">Interactive Blueprint</span>
                  <h3 className="text-md font-semibold text-navy">Compression Coil Simulator</h3>
                </div>
                <div className="rounded-full bg-bronze/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze">
                  {isCompressing ? "Compressing" : "Unloaded"}
                </div>
              </div>

              {/* Dynamic SVG Spring */}
              <div className="relative my-8 flex h-52 items-center justify-center bg-surface-2 rounded-xl border border-line/50 p-4">
                <svg width="240" height="120" viewBox="0 0 240 120" className="overflow-visible">
                  {/* Grid overlay */}
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(23,50,79,0.03)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Dimension Lines (Outer Diameter) */}
                  <motion.g 
                    animate={{ opacity: hoveredSpec === "od" ? 1 : 0.2 }}
                    className="transition-opacity duration-300"
                  >
                    <line x1="20" y1="10" x2="220" y2="10" stroke="#9c724a" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="20" y1="5" x2="20" y2="15" stroke="#9c724a" strokeWidth="1.5" />
                    <line x1="220" y1="5" x2="220" y2="15" stroke="#9c724a" strokeWidth="1.5" />
                    <text x="120" y="24" textAnchor="middle" fill="#9c724a" className="font-mono text-[9px] font-bold uppercase tracking-wider">Free Length (Lo)</text>
                  </motion.g>

                  {/* Wire Diameter Target */}
                  <motion.g 
                    animate={{ opacity: hoveredSpec === "wd" ? 1 : 0.2 }}
                    className="transition-opacity duration-300"
                  >
                    <circle cx="40" cy="60" r="10" fill="none" stroke="#9c724a" strokeWidth="1.5" />
                    <text x="40" y="92" textAnchor="middle" fill="#9c724a" className="font-mono text-[9px] font-bold">d = 4.5mm</text>
                  </motion.g>

                  {/* Helical Coil Spring representation (SVG Path) */}
                  <motion.path
                    d={
                      isCompressing 
                        ? "M 40,60 C 50,20 60,100 70,60 C 80,20 90,100 100,60 C 110,20 120,100 130,60 C 140,20 150,100 160,60 C 170,20 180,100 190,60 C 200,20 210,100 220,60"
                        : "M 30,60 C 45,10 60,110 75,60 C 90,10 105,110 120,60 C 135,10 150,110 165,60 C 180,10 195,110 210,60 C 225,10 240,110 250,60"
                    }
                    fill="none"
                    stroke="#17324f"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                      d: isCompressing
                        ? "M 45,60 C 55,25 65,95 75,60 C 85,25 95,95 105,60 C 115,25 125,95 135,60 C 145,25 155,95 165,60 C 175,25 185,95 195,60 C 205,25 215,95 225,60"
                        : "M 30,60 C 45,10 60,110 75,60 C 90,10 105,110 120,60 C 135,10 150,110 165,60 C 180,10 195,110 210,60 C 225,10 240,110 250,60"
                    }}
                    transition={{ type: "spring", stiffness: 180, damping: 15 }}
                  />
                </svg>
              </div>

              {/* Dynamic text help prompt */}
              <p className="text-center font-mono text-[10px] uppercase tracking-wider text-steel-2">
                ← Hover box to apply compressive force (stiffness: 180 N/mm) →
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="border-b border-line/45 bg-surface py-8">
        <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center md:items-start md:text-left border-l border-line/50 pl-4"
            >
              <p className="font-mono text-[13px] font-bold text-bronze uppercase tracking-wider">{item.text}</p>
              <p className="mt-1 text-xs text-steel">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Products Section */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-line pb-8 mb-12">
            <div>
              <p className="eyebrow">Manufacturing Scope</p>
              <h2 className="text-[clamp(28px,3.8vw,42px)] font-bold text-navy leading-tight mt-2">
                Precision Spring Solutions
              </h2>
              <p className="mt-3 text-steel max-w-xl">
                Explore our core range of custom products. Each is optimized for dimensional consistency and calibrated spring dynamics.
              </p>
            </div>
            <Link href="/products" className="btn-secondary shrink-0 flex items-center gap-2 group">
              View Entire Catalogue
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Quick Custom CTA Banner */}
          <div className="mt-16 overflow-hidden rounded-2xl border border-line bg-navy text-white shadow-xl relative">
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: 'radial-gradient(circle at 80% 20%, #fff 2px, transparent 2px)',
              backgroundSize: '16px 16px'
            }} />
            <div className="relative z-10 px-8 py-12 md:px-16 md:py-16 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-bronze-2 font-semibold">Custom Manufacturing</span>
                <h3 className="mt-4 text-3xl font-bold md:text-4xl">Require Custom Tolerances?</h3>
                <p className="mt-4 text-sm text-[#ccd5df] leading-relaxed max-w-xl">
                  Whether you need a single prototype for testing or high-volume wholesale production runs, our engineers are equipped to design and coil to your exact blueprint parameters.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link href="/contact" className="btn-primary border-transparent bg-white text-navy hover:bg-bronze hover:text-white px-8 py-4 text-sm font-bold shadow-lg">
                  Submit Design Specs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Specs Explorer Section */}
      <section className="section-pad border-y border-line/60 bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Interactive Spec Guide</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Engineered Specification Blueprint</h2>
            <p className="mt-3 text-steel">
              Spring performance depends on microscopic configuration metrics. Select a parameter below to explore its role in custom spring design.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Interactive Selector list */}
            <div className="space-y-4">
              {specData.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => setHoveredSpec(spec.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    hoveredSpec === spec.id
                      ? "border-navy bg-white shadow-md translate-x-2"
                      : "border-line/60 bg-white/50 hover:bg-white"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-navy text-md">{spec.name}</span>
                    <span className="font-mono text-xs font-bold text-bronze">{spec.val}</span>
                  </div>
                  <AnimatePresence initial={false}>
                    {hoveredSpec === spec.id && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 text-xs leading-relaxed text-steel overflow-hidden"
                      >
                        {spec.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Spec visual illustration panel */}
            <div className="rounded-2xl border border-line bg-white p-8 shadow-lg relative min-h-[350px] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-steel-2 uppercase tracking-widest">Dimension Detail Map</span>
                
                <div className="mt-6 border-l-2 border-bronze pl-4">
                  <h4 className="text-xl font-bold text-navy">
                    {specData.find(s => s.id === hoveredSpec)?.name}
                  </h4>
                  <p className="text-xs font-mono text-bronze-2 mt-1">
                    Capability Limits: {specData.find(s => s.id === hoveredSpec)?.val}
                  </p>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-steel">
                  {specData.find(s => s.id === hoveredSpec)?.desc}
                </p>
              </div>

              <div className="mt-8 border-t border-line/60 pt-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-surface-2 p-2 text-bronze">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-navy">Precision Guaranteed</h5>
                    <p className="text-xs text-steel mt-0.5">We maintain strict ISO tolerances across all configured dimensions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Grid */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow font-semibold">Engineering Strengths</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Built on Experience. Driven by Precision.</h2>
            <p className="mt-3 text-steel">
              Darbar Springwala pairs historical expertise with high-tech automated machinery to provide premium industrial parts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="card-base p-6 bg-surface-2/40 hover:bg-white hover:border-navy hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex rounded-xl bg-white p-3 text-bronze border border-line shadow-sm">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-navy leading-snug">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{item.text}</p>
                  </div>
                  <span className="mt-6 inline-block font-mono text-[9px] font-bold text-steel-2 uppercase tracking-widest border-t border-line/40 pt-4">
                    {item.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Manufacturing Timeline */}
      <section className="section-pad border-t border-line/60 bg-surface">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow">Standard Workflow</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">From Raw Wire to Finished Component</h2>
            <p className="mt-3 text-steel">
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
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative rounded-2xl border border-line/70 bg-white p-6 shadow-sm"
              >
                <span className="absolute right-6 top-6 font-mono text-xs font-bold text-bronze/40">
                  {step.tag}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industry Footprint */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Industries Served</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Built for Industrial Applications</h2>
            <p className="mt-3 text-steel">
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
              <div
                key={index}
                className="rounded-xl border border-line bg-surface p-5 text-center transition-all duration-300 hover:border-bronze hover:-translate-y-1 shadow-sm flex flex-col justify-center min-h-[110px]"
              >
                <p className="font-semibold text-navy text-sm">{industry}</p>
                <span className="mt-2 block font-mono text-[9px] text-bronze uppercase tracking-wider font-bold">Standard Spec Winding</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Conversion focused Final Call-to-Action */}
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        <div className="container relative z-10 grid gap-12 lg:grid-cols-[1.20fr_0.80fr] lg:items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-bronze-2 font-bold">Consult an Engineer</span>
            <h2 className="mt-4 text-[clamp(32px,4.5vw,52px)] font-bold leading-tight">
              Ready to Discuss Your Spring Requirements?
            </h2>
            <p className="mt-6 text-md text-[#ccd5df] leading-relaxed max-w-xl">
              Connect with our team to discuss wire sizes, grade certificates, testing parameters, and sample runs. We provide official quotes within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary border-transparent bg-white text-navy hover:bg-bronze hover:text-white px-8 py-4 text-sm font-bold shadow-lg shadow-navy/20">
                Submit RFQ Form
              </Link>
              <Link 
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="btn-secondary border-white/20 text-white hover:border-white px-8 py-4 text-sm font-bold"
              >
                Call: {contactInfo.phone}
              </Link>
            </div>
          </div>

          {/* Quick contact credentials block */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-bold border-b border-white/10 pb-4">Direct Contact Points</h3>
            
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/10 p-2.5 text-bronze-2">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#9cbcdb]">Call / WhatsApp</h4>
                  <p className="mt-1 font-semibold text-md">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/10 p-2.5 text-bronze-2">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#9cbcdb]">Email Enquiries</h4>
                  <p className="mt-1 font-semibold text-md">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/10 p-2.5 text-bronze-2">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#9cbcdb]">Factory Location</h4>
                  <p className="mt-1 text-sm text-[#ccd5df] leading-snug">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
