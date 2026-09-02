"use client";

import { motion } from "framer-motion";
import { Settings, PenTool, Flame, ArrowUpRight, Cpu, Sparkles, Package } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Material Sourcing & Auditing",
    desc: "We verify tensile strength, wire roundness, and chemistry certificates for high-carbon steel, alloy steel, and stainless steel grades.",
    icon: PenTool,
    capabilities: "0.2mm to 16.0mm wire gauge range"
  },
  {
    title: "Precision CNC Coiling",
    desc: "Using multi-axis automatic spring forming systems, wires are coiled to exact dimensions with in-line electronic length monitoring.",
    icon: Settings,
    capabilities: "CNC high-speed automatic winding"
  },
  {
    title: "Stress Relieving & Tempering",
    desc: "Stress-relieving tempering is done in temperature-controlled batch ovens to lock spring mechanical properties and increase fatigue limits.",
    icon: Flame,
    capabilities: "Calibrated thermal processing"
  },
  {
    title: "Grinding & End Squareness",
    desc: "Compression springs are flat-end ground using automatic spring grinders to guarantee exact seating squareness.",
    icon: Settings,
    capabilities: "Flat-end grinding options"
  },
  {
    title: "Surface Finish Passivation",
    desc: "We provide corrosion-preventive surface treatments, including zinc plating, black oxiding, galvanizing, and powder coating.",
    icon: Sparkles,
    capabilities: "Diverse finishing options"
  },
  {
    title: "Automated Sorting & Packaging",
    desc: "Finished batches are sorted using laser measurement systems, coated in rust-preventive oil, and safely packed in nested trays.",
    icon: Package,
    capabilities: "Bubble nesting / custom trays"
  }
];

export default function ManufacturingPage() {
  return (
    <main className="flex-1 bg-[#f7f9fa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line/50 bg-white py-16 lg:py-24">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle, #17324f 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }} 
        />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow block">
              Production Capacity
            </span>
            <h1 className="text-[clamp(34px,5vw,56px)] font-black text-[#17324F] leading-tight mt-2 font-display">
              From Wire to Precision Component
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-steel max-w-xl">
              Our Jamnagar production facility pairs automatic coiling centers with automated load testing. We coil raw carbon and stainless steel wires into reliable custom spring assemblies.
            </p>
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9C724A] to-[#825B36] hover:from-[#825B36] hover:to-[#6c4a2a] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md shadow-[#9C724A]/20 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>Submit Design Specs</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-line p-6 bg-gradient-to-br from-white via-white to-[#f4eee4] shadow-md space-y-4"
          >
            <h3 className="font-bold text-[#17324F] text-lg font-display flex items-center gap-2">
              <Cpu className="h-5 w-5 text-[#9C724A]" />
              Machinery Capabilities
            </h3>
            <ul className="space-y-3.5 text-xs text-steel">
              <li className="flex justify-between border-b border-line/60 pb-2">
                <span className="font-bold text-[#17324F]">Automatic CNC Coiling Systems</span>
                <span className="font-mono text-[#9C724A] font-bold">0.2mm - 6.0mm wire</span>
              </li>
              <li className="flex justify-between border-b border-line/60 pb-2">
                <span className="font-bold text-[#17324F]">Heavy-Duty Mechanical Winders</span>
                <span className="font-mono text-[#9C724A] font-bold">6.0mm - 16.0mm wire</span>
              </li>
              <li className="flex justify-between border-b border-line/60 pb-2">
                <span className="font-bold text-[#17324F]">Batch Tempering Ovens</span>
                <span className="font-mono text-[#9C724A] font-bold">Max 450°C heat soak</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="font-bold text-[#17324F]">Automatic Spring Grinders</span>
                <span className="font-mono text-[#9C724A] font-bold">Dual-wheel flat grinding</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Production Steps */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center"
          >
            <span className="eyebrow">
              Manufacturing Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#17324F] font-display mt-2">
              Our Step-by-Step Winding Workflow
            </h2>
            <p className="mt-3 text-steel text-sm leading-relaxed">
              Every production batch is routed through six strict manufacturing gates to ensure structural longevity and spring rate accuracy.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                  className="rounded-2xl border border-line bg-surface-2/30 p-6 hover:bg-white hover:border-[#17324F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="inline-flex rounded-xl bg-white p-3 text-[#9C724A] border border-line shadow-xs group-hover:scale-105 transition-transform">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-steel-2">
                        Gate {(idx + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#17324F] font-display mt-5 leading-tight group-hover:text-[#9C724A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-steel mt-3 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <span className="mt-6 inline-block font-mono text-[9px] font-bold text-[#9C724A] uppercase tracking-wider border-t border-line/50 pt-4">
                    {step.capabilities}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* B2B Footprint */}
      <section className="py-16 sm:py-20 bg-[#081423] text-white text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Settings className="h-10 w-10 text-[#E5C158] mx-auto mb-2 animate-spin-slow" style={{ animationDuration: '12s' }} />
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
              Interested in a Factory Tour?
            </h2>
            <p className="text-sm sm:text-base text-steel-2/90 leading-relaxed max-w-2xl mx-auto">
              We welcome technical audit teams and procurement officers from automotive, electrical, and engineering OEMs to visit our Jamnagar factory floor and inspect our coiling systems and load verification setups.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9C724A] to-[#825B36] hover:from-[#825B36] hover:to-[#6c4a2a] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#9C724A]/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Schedule Audits / Visits</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
