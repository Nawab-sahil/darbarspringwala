"use client";

import { motion } from "framer-motion";
import { 
  Car, 
  Zap, 
  Wrench, 
  Hammer, 
  Cpu, 
  Key, 
  Lock, 
  Construction, 
  Database,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    name: "Automotive Assemblies",
    desc: "High-cycle engine springs, suspension rebound dampeners, clutch levers, and seat adjustments wound from high-tensile chrome-vanadium alloys.",
    icon: Car,
    spec: "Fatigue testing up to 10M cycles"
  },
  {
    name: "Electrical Switchgear",
    desc: "High-speed contact return springs, disconnect mechanism springs, and switch springs wound with exact force parameters for electrical switchgears.",
    icon: Zap,
    spec: "Precision torque & force output"
  },
  {
    name: "Agricultural Tools",
    desc: "Heavy-duty extension hooks, soil tiller tension springs, harvester components, and shock absorption coils made for harsh environmental conditions.",
    icon: Hammer,
    spec: "Heavy gauge coiling up to 16.0mm"
  },
  {
    name: "Industrial Valves & Pumps",
    desc: "Corrosion-resistant stainless steel compression coils designed to maintain calibrated spring rates under high-pressure liquid flow.",
    icon: Wrench,
    spec: "SS 302, 316 and special alloys"
  },
  {
    name: "Heavy Press & Tooling",
    desc: "Rectangular-wire die springs engineered to absorb high-impact loads in stamping press dies and plastic injection molds.",
    icon: Construction,
    spec: "ISO-standard color-coded ratings"
  },
  {
    name: "OEM Assemblies",
    desc: "Custom tensioners, wireforms, and retaining clips optimized for high-volume automated production lines.",
    icon: Cpu,
    spec: "Batch sorting with zero-defect gates"
  },
  {
    name: "Locks & Security Systems",
    desc: "Micro-compression and torsion springs engineered for cylinder pins, latch retractions, and high-frequency lock cycles.",
    icon: Lock,
    spec: "Micro wire diameters down to 0.2mm"
  },
  {
    name: "Hardware & Fasteners",
    desc: "Retail spring brackets, hinge return torsion pins, drawer slide springs, and consumer appliance components.",
    icon: Key,
    spec: "Zinc plating, powder coat finishes"
  }
];

export default function IndustriesPage() {
  return (
    <main className="flex-1 bg-[#f7f9fa]">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-line/50 bg-white py-16 lg:py-24">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle, #17324f 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }} 
        />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="eyebrow block">
              Application Scope
            </span>
            <h1 className="text-[clamp(34px,5vw,56px)] font-black text-[#17324F] leading-tight mt-2 font-display">
              Industries We Serve
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-steel">
              We manufacture calibrated coiling components tailored to the operational demands of diverse engineering sectors. From micro-tolerances in electronics to heavy loads in agriculture, we deliver structural reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid List */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                  className="rounded-2xl border border-line bg-surface-2/30 p-6 hover:bg-white hover:border-[#17324F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="inline-flex rounded-xl bg-white p-3 text-[#9C724A] border border-line shadow-xs group-hover:scale-105 transition-transform">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#17324F] font-display mt-5 leading-tight group-hover:text-[#9C724A] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-steel mt-3 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-line/50 pt-4 flex flex-col gap-3">
                    <span className="font-mono text-[9px] font-bold text-[#9C724A] uppercase tracking-wider">
                      {ind.spec}
                    </span>
                    <Link 
                      href="/contact" 
                      className="text-xs font-bold text-[#17324F] group-hover:text-[#9C724A] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Enquire for Industry</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* B2B Technical Consultation CTA */}
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
            <Database className="h-10 w-10 text-[#E5C158] mx-auto mb-2" />
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
              Custom Winding Configurations
            </h2>
            <p className="text-sm sm:text-base text-steel-2/90 leading-relaxed max-w-2xl mx-auto">
              Have an industry-specific application with unique environmental temperatures, chemical exposures, or high cycle fatiguing? Our design engineers can assist in coiling customized springs for your assemblies.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9C724A] to-[#825B36] hover:from-[#825B36] hover:to-[#6c4a2a] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#9C724A]/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Consult an Engineer</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
