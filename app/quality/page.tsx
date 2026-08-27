"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileDown, Settings2, Sparkles, ClipboardCheck, Ruler } from "lucide-react";
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
    <main className="flex-1 bg-surface-2">
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-line/50 bg-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #17324f 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />

        <div className="container relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <p className="eyebrow">Zero Defect Winding</p>
            <h1 className="text-[clamp(34px,5vw,56px)] font-bold text-navy leading-none mt-2">
              Quality Assurance & Testing
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel max-w-xl">
              Spring performance depends on micro-tolerances. We build quality into every coil through strict process controls, automated length monitoring, and manual verification audits.
            </p>
            <div className="mt-8">
              <a 
                href="/products" // Fallback link
                onClick={(e) => {
                  e.preventDefault();
                  alert("Capability Profile download is initialized. Mock PDF generated successfully.");
                }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <FileDown className="h-4 w-4" />
                Download Capability Profile PDF
              </a>
            </div>
          </div>
          <div className="card-base p-6 bg-[linear-gradient(155deg,#fff_0%,#f2ede2_100%)]">
            <h3 className="font-semibold text-navy text-lg">Material Grade Compliance</h3>
            <p className="text-xs text-steel mt-1">We wound custom springs strictly to Indian, American, and European material standards:</p>
            <ul className="mt-4 space-y-2">
              {standards.map((std, i) => (
                <li key={i} className="flex items-center gap-2 font-mono text-[10px] text-steel-2 uppercase tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze shrink-0" />
                  {std}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testing Equipment */}
      <section className="section-pad bg-white">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div>
            <p className="eyebrow">Our Laboratory</p>
            <h2 className="text-3xl font-bold text-navy mt-2">Equipped for Calibrated Verification</h2>
            <p className="mt-4 text-steel leading-relaxed">
              We maintain a dedicated testing laboratory equipped to verify mechanical behavior, fatigue limits, and physical geometry. Every test is logged against batch production records for B2B traceability.
            </p>
          </div>
          <div className="space-y-4">
            {equipment.map((eq, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-xl border border-line bg-surface-2/30">
                <div className="rounded-lg bg-navy/5 p-2 text-navy h-10 w-10 flex items-center justify-center shrink-0">
                  <Settings2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">{eq.name}</h4>
                  <p className="text-xs text-steel mt-1 leading-relaxed">{eq.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC Steps */}
      <section className="section-pad border-t border-line bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Workflow</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Quality Control Inspection Gates</h2>
            <p className="mt-3 text-steel">
              Our springs undergo six structured QC inspection gates during the transformation from raw wire coils to finished assemblies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {qcSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="card-base p-6 bg-white hover:border-navy transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[9px] font-bold text-bronze uppercase tracking-widest bg-bronze/5 px-2.5 py-1 rounded-md">
                    {step.tag}
                  </span>
                  <h3 className="text-lg font-bold text-navy mt-5">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-steel mt-2">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Callout */}
      <section className="section-pad bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="container relative z-10 max-w-3xl mx-auto">
          <ShieldCheck className="h-12 w-12 text-bronze-2 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Request Inspection Reports</h2>
          <p className="mt-4 text-[#ccd5df] leading-relaxed">
            Need material certificate logs, force-displacement charts, or dimensional reports with your delivery batch? We provide complete documentation support for automotive and enterprise OEM audits.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary bg-white text-navy hover:bg-bronze hover:text-white px-8 py-3">
              Contact Quality Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
