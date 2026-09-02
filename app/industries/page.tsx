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
    <main className="flex-1 bg-surface-2">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-line/50 bg-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #17324f 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />

        <div className="container relative z-10">
          <p className="eyebrow font-semibold">Application Scope</p>
          <h1 className="text-[clamp(34px,5vw,56px)] font-bold text-navy leading-none mt-2">
            Industries We Serve
          </h1>
          <p className="mt-6 text-lg leading-8 text-steel max-w-2xl">
            We manufacture calibrated coiling components tailored to the operational demands of diverse engineering sectors. From micro-tolerances in electronics to heavy loads in agriculture, we deliver structural reliability.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
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
                    <div className="inline-flex rounded-xl bg-white p-3 text-bronze border border-line shadow-sm">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mt-5 leading-tight">{ind.name}</h3>
                    <p className="text-xs leading-relaxed text-steel mt-3">{ind.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-line/50 pt-4 flex flex-col gap-3">
                    <span className="font-mono text-[9px] font-bold text-bronze uppercase tracking-wider">
                      {ind.spec}
                    </span>
                    <Link 
                      href="/contact" 
                      className="text-xs font-semibold text-navy hover:text-bronze flex items-center gap-1 transition-colors group"
                    >
                      Enquire for Industry
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* B2B Technical Consultation CTA */}
      <section className="section-pad bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="container relative z-10 max-w-3xl mx-auto">
          <Database className="h-12 w-12 text-bronze-2 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Custom Winding Configurations</h2>
          <p className="mt-4 text-[#ccd5df] leading-relaxed">
            Have an industry-specific application with unique environmental temperatures, chemical exposures, or high cycle fatiguing? Our design engineers can assist in coiling customized springs for your assemblies.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9C724A] to-[#825B36] hover:from-[#825B36] hover:to-[#6c4a2a] text-white text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#9C724A]/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Consult an Engineer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
