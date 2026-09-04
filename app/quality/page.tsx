"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileDown, Settings2, ArrowRight } from "lucide-react";
import Link from "next/link";

const qcSteps = [
  {
    title: "Raw Material Intake Audit",
    desc: "Every incoming batch of spring wire is checked for coil diameter consistency, surface cracks, and cross-referenced with material test certificates (MTCs).",
    tag: "Phase 01"
  },
  {
    title: "CNC Tooling & Setup Approval",
    desc: "First-off samples from our coiling machines undergo full dimensional audits before the production run is approved for bulk winding.",
    tag: "Phase 02"
  },
  {
    title: "In-line Electronic Sorting",
    desc: "Our automated CNC machines utilize integrated sorting probes to automatically reject off-spec coils (free length variations) during coiling.",
    tag: "Phase 03"
  },
  {
    title: "Heat Treatment Auditing",
    desc: "Controlled batch heat-treatment ovens stress-relieve the springs. Ovens are temperature-charted to ensure correct carbon structural locks.",
    tag: "Phase 04"
  },
  {
    title: "Load-Deflection Testing",
    desc: "Using calibrated digital load testers, springs are compressed to specified operational heights to verify spring rates (N/mm) and force outputs.",
    tag: "Phase 05"
  },
  {
    title: "Final Audit & Rust Prevention",
    desc: "100% visual inspection, chemical passivation or rust-preventive oiling, and nested tray packing to avoid coil entanglement.",
    tag: "Phase 06"
  }
];

const equipment = [
  { name: "Digital Load Calibration Tester", use: "Determines accurate spring force at specified compression/tension lengths." },
  { name: "Optical Profile Projector", use: "Verifies precise helical pitch, leg angles, and radius geometry at 10x-50x magnification." },
  { name: "Digital Wire Hardness Testers", use: "Ensures uniform heat treatment and tempering across wire sections." },
  { name: "Laser Free-Length Controllers", use: "Provides continuous, non-contact feedback to CNC coiling heads during production." },
  { name: "Digital Micrometers (0.001mm)", use: "High-precision wire and outer diameter auditing." }
];

const standards = [
  "IS 4454 (Cold Drawn Spring Steel wire)",
  "ASTM A228 (High-tensile Music Wire)",
  "EN 10270 (Standard for Spring Steels)",
  "JIS G3521 (Hard Drawn Steel Spring wire)",
  "Stainless Steel Grades 302, 304, 316"
];

export default function QualityPage() {
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

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow">
              № 01 — ZERO DEFECT WINDING
            </div>
            <h1 className="text-[clamp(32px,4vw,52px)] font-semibold text-[#17324F] leading-tight mt-2 font-display">
              ISO 9001:2015 Quality Assurance & <em className="italic font-normal text-bronze">Testing in Jamnagar</em>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-steel max-w-xl">
              At our Jamnagar spring manufacturing facility, quality control is integrated into every CNC coiling step. We verify spring load rates, wire tolerances, and fatigue limits to deliver zero-defect industrial springs.
            </p>
            <div className="mt-8">
              <a 
                href="/products"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Capability Profile download is initialized. Mock PDF generated successfully.");
                }}
                className="btn-primary"
              >
                <FileDown className="h-4 w-4" />
                <span>Download Capability Profile PDF</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2px] border border-[#17324F]/15 p-[22px] bg-white space-y-4"
          >
            <div className="w-6 h-[1px] bg-[#9C724A]" />
            <h3 className="font-display font-medium text-[#17324F] text-lg">Material Grade Compliance</h3>
            <p className="text-xs text-steel">We wound custom springs strictly to Indian, American, and European material standards:</p>
            <ul className="space-y-2 pt-1">
              {standards.map((std, i) => (
                <li key={i} className="flex items-center gap-2 font-mono text-[11px] text-steel-2 font-medium uppercase tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9C724A] shrink-0" />
                  {std}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Testing Laboratory */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow">
              № 02 — OUR LABORATORY
            </div>
            <h2 className="text-[clamp(28px,3.2vw,42px)] font-semibold text-[#17324F] font-display mt-2">
              Equipped for Calibrated Verification
            </h2>
            <p className="mt-4 text-steel text-sm sm:text-base leading-relaxed">
              We maintain a dedicated testing laboratory equipped to verify mechanical behavior, fatigue limits, and physical geometry. Every test is logged against batch production records for B2B traceability.
            </p>
          </motion.div>

          <div className="space-y-3.5">
            {equipment.map((eq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex gap-4 p-[22px] rounded-[2px] border border-[#17324F]/15 bg-white transition-all duration-120 hover:border-[#17324F] hover:bg-[#FBFAF7]"
              >
                <div className="rounded-[2px] bg-[#17324F]/5 p-2.5 text-[#17324F] h-10 w-10 flex items-center justify-center shrink-0">
                  <Settings2 className="h-5 w-5 text-[#9C724A]" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-sm text-[#17324F]">{eq.name}</h4>
                  <p className="text-xs text-steel mt-1 leading-relaxed">{eq.use}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QC Steps */}
      <section className="py-16 sm:py-20 border-t border-line/60 bg-surface">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center"
          >
            <div className="eyebrow mx-auto">
              № 03 — WORKFLOW
            </div>
            <h2 className="text-[clamp(28px,3.2vw,42px)] font-semibold text-[#17324F] font-display mt-2">
              Quality Control Inspection Gates
            </h2>
            <p className="mt-3 text-steel text-sm leading-relaxed">
              Our springs undergo six structured QC inspection gates during the transformation from raw wire coils to finished assemblies.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {qcSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.06 }}
                className="rounded-[2px] border border-[#17324F]/15 bg-white p-[22px] transition-all duration-120 hover:border-[#17324F] hover:bg-[#FBFAF7] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-medium text-[#9C724A] uppercase tracking-widest bg-[#9C724A]/10 px-2 py-0.5 rounded-[2px]">
                      {step.tag}
                    </span>
                    <span className="font-mono text-[11px] font-medium text-[#9C724A]/60">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-6 h-[1px] bg-[#9C724A] mb-2" />
                  <h3 className="font-display font-medium text-[18px] text-[#17324F] group-hover:text-[#9C724A] transition-colors duration-120">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-steel mt-2">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Callout */}
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
            <ShieldCheck className="h-10 w-10 text-[#E5C158] mx-auto mb-2" />
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
              Request Inspection Reports
            </h2>
            <p className="text-sm sm:text-base text-steel-2/90 leading-relaxed max-w-2xl mx-auto">
              Need material certificate logs, force-displacement charts, or dimensional reports with your delivery batch? We provide complete documentation support for automotive and enterprise OEM audits.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9C724A] to-[#825B36] hover:from-[#825B36] hover:to-[#6c4a2a] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#9C724A]/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Contact Quality Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
