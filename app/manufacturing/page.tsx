"use client";

import { motion } from "framer-motion";
import { Settings, PenTool, Flame, ShieldAlert, CheckCircle, Package, ArrowUpRight, Cpu, Sparkles } from "lucide-react";
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
    <main className="flex-1 bg-surface-2">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line/50 bg-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #17324f 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />

        <div className="container relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="eyebrow">Production Capacity</p>
            <h1 className="text-[clamp(34px,5vw,56px)] font-bold text-navy leading-none mt-2">
              From Wire to Precision Component
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel max-w-xl">
              Our Jamnagar production facility pairs automatic coiling centers with automated load testing. We coil raw carbon and stainless steel wires into reliable custom spring assemblies.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Submit Design Specs
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="card-base p-6 bg-[linear-gradient(155deg,#fff_0%,#f2ede2_100%)]">
            <h3 className="font-semibold text-navy text-lg flex items-center gap-2">
              <Cpu className="h-5 w-5 text-bronze" />
              Machinery Capabilities
            </h3>
            <ul className="mt-4 space-y-3.5 text-xs text-steel">
              <li className="flex justify-between border-b border-line/60 pb-2">
                <span className="font-bold">Automatic CNC Coiling Systems</span>
                <span className="font-mono text-bronze font-bold">0.2mm - 6.0mm wire</span>
              </li>
              <li className="flex justify-between border-b border-line/60 pb-2">
                <span className="font-bold">Heavy-Duty Mechanical Winders</span>
                <span className="font-mono text-bronze font-bold">6.0mm - 16.0mm wire</span>
              </li>
              <li className="flex justify-between border-b border-line/60 pb-2">
                <span className="font-bold">Batch Tempering Ovens</span>
                <span className="font-mono text-bronze font-bold">Max 450°C heat soak</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="font-bold">Automatic Spring Grinders</span>
                <span className="font-mono text-bronze font-bold">Dual-wheel flat grinding</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Production Steps */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Manufacturing Flow</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Our Step-by-Step Winding Workflow</h2>
            <p className="mt-3 text-steel">
              Every production batch is routed through six strict manufacturing gates to ensure structural longevity and spring rate accuracy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="card-base p-6 bg-surface-2/30 hover:bg-white hover:border-navy hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="inline-flex rounded-xl bg-white p-3 text-bronze border border-line shadow-sm">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-steel-2">
                        Gate {(idx + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mt-5 leading-tight">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-steel mt-3">{step.desc}</p>
                  </div>
                  <span className="mt-6 inline-block font-mono text-[9px] font-bold text-bronze uppercase tracking-wider border-t border-line/50 pt-4">
                    {step.capabilities}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* B2B Footprint */}
      <section className="section-pad bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="container relative z-10 max-w-3xl mx-auto">
          <Settings className="h-12 w-12 text-bronze-2 mx-auto mb-4 animate-spin-slow" style={{ animationDuration: '10s' }} />
          <h2 className="text-3xl font-bold">Interested in a Factory Tour?</h2>
          <p className="mt-4 text-[#ccd5df] leading-relaxed">
            We welcome technical audit teams and procurement officers from automotive, electrical, and engineering OEMs to visit our Jamnagar factory floor and inspect our coiling systems and load verification setups.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9C724A] to-[#825B36] hover:from-[#825B36] hover:to-[#6c4a2a] text-white text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#9C724A]/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Schedule Audits / Visits
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
