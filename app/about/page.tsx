"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  History, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  Boxes, 
  Settings,
  Layers
} from "lucide-react";
import Link from "next/link";

const stats = [
  { val: "35+", label: "Years of Heritage", desc: "Established in 1990" },
  { val: "10M+", label: "Springs Wound Annually", desc: "High-volume coiling capacity" },
  { val: "250+", label: "Active OEM Clients", desc: "Trusted by tier-1 manufacturers" },
  { val: "0.2mm", label: "Min Wire Capabilities", desc: "Up to 16.0mm heavy gauge" }
];

const eras = [
  {
    id: "1990",
    year: "1990",
    title: "The Workshop Foundation",
    tagline: "Manual Coiling & Local Supply",
    desc: "Established in Jamnagar, Gujarat, starting with manual hand-cranked and mechanical spring coiling systems. We served local machinery operators and agricultural pumps, validating our very first loads on manual compression scales.",
    techSpecs: [
      { name: "Max Wire Range", val: "3.0mm" },
      { name: "Primary Machinery", val: "Mechanical Hand Winders" },
      { name: "First Client Sector", val: "Agricultural Machinery" }
    ]
  },
  {
    id: "2005",
    year: "2005",
    title: "Pneumatic & Automatic Leap",
    tagline: "Expanding Auto-Component Footprint",
    desc: "Upgraded our coiling facilities to automatic mechanical winders and pneumatic stress-relief ovens. This allowed us to scale production speeds by 300% and secure high-volume supply contracts for automotive levers and brake spring subsystems.",
    techSpecs: [
      { name: "Max Wire Range", val: "6.0mm" },
      { name: "Primary Machinery", val: "Auto Mechanical Winders" },
      { name: "Production Rate", val: "Up to 120 springs/min" }
    ]
  },
  {
    id: "2018",
    year: "2018",
    title: "CNC Winding Automation",
    tagline: "Electronic Sort-Gates & Multi-Axis Coiling",
    desc: "Introduced advanced CNC multi-axis wire forming systems. Integrated electronic length-sorting gates and real-time wire-feed feed-forward diameter checking to achieve tight CPK limits requested by switchgear assemblers.",
    techSpecs: [
      { name: "Max Wire Range", val: "12.0mm" },
      { name: "Primary Machinery", val: "CNC Multi-Axis Formers" },
      { name: "Inspection System", val: "Integrated Laser Gates" }
    ]
  },
  {
    id: "Today",
    year: "Today",
    title: "OEM Partner of Choice",
    tagline: "High-Fatigue Custom Springs & Scale",
    desc: "Now supporting national engineering brands, switchgear manufacturers, and valve builders. Equipped with digital load calibration systems, high-speed grinding mills, and material certificates matching strict ASTM, IS, and JIS standard grades.",
    techSpecs: [
      { name: "Max Wire Range", val: "16.0mm" },
      { name: "Primary Machinery", val: "High-Gauge CNC Coilers" },
      { name: "Standard Compliance", val: "ISO 9001:2015" }
    ]
  }
];

const pillars = [
  {
    icon: <Boxes className="h-6 w-6" />,
    title: "Material Metallurgy",
    desc: "We wound using premium certified wire stocks including high-tensile Music Wire, Stainless Steel (302, 316), and Chrome Silicon (for heavy cycle-fatigue applications)."
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Tempering Heat Treatment",
    desc: "Every spring undergoes inline stress-relieving heat treatment in temperature-controlled conveyor ovens to eliminate winding stresses and stabilize spring dimensions."
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "End Grinding Squareness",
    desc: "For compression springs, we execute automatic dual-wheel grinding to achieve tight tolerances on flat-ends squareness, ensuring vertical load-transfer distribution."
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Digital Load Verification",
    desc: "Before packaging, spring batches are sample-tested on digital force testers to verify spring rates, initial tension, and load limits at specified compression heights."
  }
];

export default function AboutPage() {
  const [activeEra, setActiveEra] = useState("1990");

  const selectedEraData = eras.find((e) => e.id === activeEra) || eras[0];

  return (
    <main className="flex-1 bg-[#f7f5f1] relative">
      {/* 1. HERO SECTION WITH HOVER-EXPANDABLE BLUEPRINT SPRING */}
      <section className="relative overflow-hidden border-b border-[#e2ded4] bg-white py-24 lg:py-36">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #17324f 1.5px, transparent 1.5px),
                            linear-gradient(to right, #17324f 1px, transparent 1px),
                            linear-gradient(to bottom, #17324f 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px'
        }} />
        
        {/* Gold Light Orb */}
        <div className="absolute -left-12 top-10 h-96 w-96 rounded-full bg-[#9c724a]/5 blur-3xl pointer-events-none" />

        <div className="container relative z-10 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#9c724a]/30 bg-[#9c724a]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9c724a] mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9c724a] animate-pulse" />
                Who We Are
              </div>
              
              <h1 className="text-[clamp(36px,5.5vw,60px)] font-bold text-[#17324f] leading-[1.08] tracking-tight">
                Built on Legacy.<br />
                <span className="relative inline-block text-[#9c724a] mt-2">
                  Engineered for Performance.
                  <span className="absolute bottom-2 left-0 h-[5px] w-full bg-[#9c724a]/15 rounded-full" />
                </span>
              </h1>

              <p className="mt-8 text-md lg:text-lg leading-relaxed text-[#5b6672] max-w-2xl">
                Founded in 1990 in Jamnagar, Darbar Springwala is a specialized B2B manufacturer of custom precision springs. We combine decades of raw metallurgical craft with advanced CNC coiling automation to support critical engineering assemblies nationwide.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary flex items-center gap-2 group shadow-md shadow-[#9c724a]/10">
                  Discuss Your Design
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/products" className="btn-secondary">
                  Explore Products
                </Link>
              </div>
            </motion.div>

            {/* Graphic side: Stretching Helical Spring on Hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 }}
              className="relative hidden lg:flex flex-col items-center justify-center p-8 bg-[#f7f5f1]/50 border border-[#e2ded4] rounded-2xl aspect-square shadow-inner group overflow-hidden"
            >
              {/* Technical drawing helper specs */}
              <div className="absolute top-4 left-4 font-mono text-[9px] text-[#89919b] uppercase tracking-wider">
                Simulation: Helical Coil
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[#9c724a] uppercase font-bold">
                Hover to Compress Spring
              </div>

              {/* Stretching spring SVG */}
              <motion.div 
                className="w-20 h-48 flex items-center justify-center relative cursor-ns-resize"
              >
                {/* Axis line */}
                <div className="absolute top-0 bottom-0 left-[39px] w-[1px] bg-[#e2ded4] border-dashed" />
                
                {/* Animated coil path */}
                <svg viewBox="0 0 80 200" className="w-full h-full overflow-visible">
                  <motion.path
                    d="M 40,5 
                       C 70,5 70,25 40,30 
                       C 10,35 10,55 40,60 
                       C 70,65 70,85 40,90 
                       C 10,95 10,115 40,120 
                       C 70,125 70,145 40,150 
                       C 10,155 10,175 40,180 
                       C 70,185 70,195 40,195"
                    fill="none"
                    stroke="var(--bronze)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ 
                      scaleY: [1, 0.75, 1],
                      originY: 0.5 
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scaleY: 0.55, transition: { duration: 0.4 } }}
                  />
                </svg>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative -mt-8 z-20">
        <div className="container max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-white/90 backdrop-blur-md border border-[#e2ded4] rounded-2xl p-8 shadow-xl shadow-navy/5">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-6 border-l-2 border-[#9c724a]/30 hover:border-[#9c724a] transition-all"
              >
                <h3 className="text-4xl font-bold text-[#17324f] tracking-tight">{stat.val}</h3>
                <p className="mt-1.5 text-xs font-bold text-[#9c724a] uppercase tracking-widest">{stat.label}</p>
                <p className="mt-1 text-xs text-[#89919b]">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ERA TIMELINE */}
      <section className="section-pad bg-white">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow justify-center">Milestones</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#17324f] mt-2">A Legacy of Constant Winding Progress</h2>
            <p className="text-sm text-[#5b6672] mt-3">
              Click on each era to view historical highlights, technical specifications, and milestones.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Era Tabs Selector (Span 4) */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-[#e2ded4]">
              {eras.map((era) => (
                <button
                  key={era.id}
                  onClick={() => setActiveEra(era.id)}
                  className={`flex-1 min-w-[100px] text-left px-5 py-4 rounded-xl border transition-all duration-300 font-mono flex items-center justify-between group ${
                    activeEra === era.id 
                      ? "border-[#17324f] bg-[#0d1d2f] text-white shadow-md shadow-navy/10" 
                      : "border-[#e2ded4] bg-[#f7f5f1]/60 text-[#5b6672] hover:bg-white hover:border-[#9c724a] hover:text-[#9c724a]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider opacity-60">Era</span>
                    <span className="text-lg font-bold mt-0.5">{era.year}</span>
                  </div>
                  <History className={`h-4.5 w-4.5 transition-transform ${
                    activeEra === era.id ? "text-[#b98f5e] rotate-45" : "text-[#89919b] group-hover:rotate-12"
                  }`} />
                </button>
              ))}
            </div>

            {/* Era Details Pane (Span 8) */}
            <div className="lg:col-span-8 min-h-[380px] bg-[#f7f5f1]/40 border border-[#e2ded4] rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between">
              {/* Technical Blueprint Line Grid */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEra}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative z-10 space-y-6"
                >
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#9c724a] bg-[#9c724a]/5 border border-[#9c724a]/10 px-2.5 py-1 rounded">
                      {selectedEraData.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-[#17324f] mt-4">{selectedEraData.title}</h3>
                    <p className="mt-4 text-sm text-[#5b6672] leading-relaxed">
                      {selectedEraData.desc}
                    </p>
                  </div>

                  {/* Technical Specifications Grid */}
                  <div className="border-t border-[#e2ded4] pt-6">
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#89919b] font-bold mb-4">
                      Winding Capabilities of the Era:
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {selectedEraData.techSpecs.map((spec, sidx) => (
                        <div key={sidx} className="bg-white border border-[#e2ded4]/60 p-3.5 rounded-xl">
                          <span className="block text-[10px] font-mono text-[#89919b] uppercase">{spec.name}</span>
                          <span className="block text-sm font-bold text-[#17324f] mt-1">{spec.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-4 border-t border-[#e2ded4] relative z-10 flex justify-between items-center text-[10px] font-mono tracking-wider text-[#89919b]">
                <span>Darbar Springwala Archive</span>
                <span>• Active Segment: {selectedEraData.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ENGINEERING PILLARS */}
      <section className="section-pad border-y border-[#e2ded4] bg-[#f7f5f1]">
        <div className="container max-w-6xl">
          <div className="max-w-xl mb-16">
            <p className="eyebrow">Pillars of Precision</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#17324f] mt-2">Core Engineering Disciplines</h2>
            <p className="text-sm text-[#5b6672] mt-3">
              We apply strict mechanical standards at every stage of the coiling process to ensure load rate reliability and cycle longevity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-[#e2ded4] bg-white p-6 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-lg bg-[#9c724a]/5 border border-[#9c724a]/10 p-3 text-[#9c724a] w-12 h-12 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#17324f] leading-snug">{pillar.title}</h3>
                  <p className="text-xs leading-relaxed text-[#5b6672] mt-3">{pillar.desc}</p>
                </div>
                <div className="mt-8 border-t border-[#e2ded4]/40 pt-4 flex justify-between items-center text-[9px] uppercase font-mono tracking-wider text-[#89919b]">
                  <span>Darbar Quality Gate</span>
                  <span>• Active</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS AND STANDARDS */}
      <section className="section-pad bg-white">
        <div className="container max-w-6xl grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Accreditation</p>
            <h2 className="text-3xl font-bold text-[#17324f] mt-2">Engineered to National Standards</h2>
            <p className="mt-4 text-sm text-[#5b6672] leading-relaxed">
              Darbar Springwala springs are manufactured matching strict engineering process standards. Our shop floor works continuously under statistical quality checking systems to verify wire yield limits and cycle fatigue tolerances.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 bg-[#f7f5f1]/60 border border-[#e2ded4] p-4 rounded-xl">
                <ShieldCheck className="h-5 w-5 text-[#9c724a] shrink-0" />
                <span className="text-xs font-bold text-[#17324f]">ISO 9001:2015 Process Control</span>
              </div>
              <div className="flex items-center gap-3 bg-[#f7f5f1]/60 border border-[#e2ded4] p-4 rounded-xl">
                <Award className="h-5 w-5 text-[#9c724a] shrink-0" />
                <span className="text-xs font-bold text-[#17324f]">ASTM & IS Grade Raw Wires</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            {/* Certification Standard Detail Cards */}
            <div className="border border-[#e2ded4] bg-[#f7f5f1]/30 p-6 rounded-2xl relative overflow-hidden">
              <h4 className="text-sm font-bold text-[#17324f] uppercase tracking-wide">ASTM / IS Wire Certificates</h4>
              <p className="text-xs text-[#5b6672] mt-2 leading-relaxed">
                Winding operations are executed solely using high-grade tested wires. Each raw bundle is accompanied by verified mill inspection certificate tags specifying chemical compost and elastic limits.
              </p>
            </div>
            
            <div className="border border-[#e2ded4] bg-[#f7f5f1]/30 p-6 rounded-2xl relative overflow-hidden">
              <h4 className="text-sm font-bold text-[#17324f] uppercase tracking-wide">100% Load-Rate Calibration</h4>
              <p className="text-xs text-[#5b6672] mt-2 leading-relaxed">
                Critical load-resisting components (such as regulator valves and auto-shifter switches) are subjected to electronic compression calibration to verify exact rate tolerances (N/mm).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="section-pad bg-[#0d1d2f] text-white relative overflow-hidden">
        {/* Technical blueprint overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }} />

        <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#9c724a_0%,transparent_70%)] pointer-events-none" />

        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <Award className="h-12 w-12 text-[#b98f5e] mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Partner with an Experienced Winder</h2>
          <p className="mt-6 text-lg text-[#ccd5df] leading-relaxed">
            Need a reliable spring manufacturer that understands material stress, elastic load-rates, and cycle-fatigue? Share your specification drawing or call us to receive an immediate quotation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9C724A] to-[#825B36] hover:from-[#825B36] hover:to-[#6c4a2a] text-white text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#9C724A]/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Submit Quotation Form
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-sm font-extrabold uppercase tracking-wider backdrop-blur-md transition-all duration-300 active:scale-95"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
