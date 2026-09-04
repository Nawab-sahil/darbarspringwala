"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Cpu, Flame, Settings, Activity, PackageCheck } from "lucide-react";

interface Step {
  num: string;
  title: string;
  tag: string;
  desc: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Material Sourcing & MTC Audit",
    tag: "IS 4454 / SS 302 Grade",
    desc: "Verification of wire diameter consistency, tensile strength, and metallurgical test certificates.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Precision CNC Coiling",
    tag: "Multi-Axis Coiling Heads",
    desc: "Automated high-speed cold coiling with real-time laser feedback for accurate free-length control.",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Stress Relieving & Tempering",
    tag: "Batch Ovens 250°C-450°C",
    desc: "Controlled heat treatment to lock carbon structure and relieve internal mechanical coiling stress.",
    icon: Flame,
  },
  {
    num: "04",
    title: "End Grinding & Finishing",
    tag: "Parallel End Face Squareness",
    desc: "Precision grinding of compression spring ends for uniform load distribution and seat squareness.",
    icon: Settings,
  },
  {
    num: "05",
    title: "Load Auditing & Verification",
    tag: "Digital Force Calibration",
    desc: "Calibrated digital testing of compression heights, spring rates (N/mm), and fatigue limits.",
    icon: Activity,
  },
  {
    num: "06",
    title: "Protective Packaging & Logistics",
    tag: "Anti-Rust Oil & Trays",
    desc: "Chemical passivation, rust-preventive coating, and tangle-proof bulk dispatch across India.",
    icon: PackageCheck,
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position within this timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  // Transform scroll progress to line width percentage for desktop & height for mobile
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-4">
      {/* 1. Desktop Horizontal Timeline (lg screens) */}
      <div className="hidden lg:block relative mb-12">
        {/* Background track line */}
        <div className="absolute top-6 left-[4%] right-[4%] h-[2px] bg-[#17324F]/15 z-0" />
        
        {/* Animated fill line */}
        <motion.div
          style={{ width: lineWidth }}
          className="absolute top-6 left-[4%] max-w-[92%] h-[2px] bg-[#9C724A] z-0 transition-all duration-75"
        />

        {/* 6 Step nodes */}
        <div className="grid grid-cols-6 gap-3 relative z-10">
          {STEPS.map((step, idx) => {
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Node Number Circle */}
                <div className="w-12 h-12 rounded-[2px] bg-white border border-[#17324F]/20 flex items-center justify-center font-mono text-xs font-medium text-[#17324F] transition-all duration-200 group-hover:border-[#17324F] group-hover:bg-[#FBFAF7] shadow-xs">
                  <span className="text-[#9C724A] font-bold">{step.num}</span>
                </div>

                <div className="mt-4 space-y-1">
                  <span className="font-mono text-[9px] text-[#9C724A] uppercase tracking-wider block font-medium">
                    {step.tag}
                  </span>
                  <h4 className="font-display font-medium text-sm text-[#17324F] leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-steel leading-relaxed line-clamp-3">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 2. Mobile Vertical Timeline (< lg screens) */}
      <div className="lg:hidden relative pl-7 space-y-5">
        {/* Background track line */}
        <div className="absolute top-3 bottom-3 left-3 w-[2px] bg-[#17324F]/15 z-0" />
        
        {/* Animated vertical fill line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute top-3 max-h-[96%] left-3 w-[2px] bg-[#9C724A] z-0 transition-all duration-75"
        />

        {STEPS.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="relative rounded-[2px] border border-[#17324F]/15 bg-white p-4 space-y-2 active:scale-[0.98] transition-transform duration-100"
            >
              {/* Step indicator pin */}
              <div className="absolute -left-[27px] top-4 w-5 h-5 rounded-[2px] bg-[#17324F] border border-[#9C724A] flex items-center justify-center font-mono text-[9px] text-white z-10">
                {step.num}
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-[9.5px] font-medium text-[#9C724A] uppercase tracking-widest bg-[#9C724A]/10 px-2 py-0.5 rounded-[2px]">
                  {step.tag}
                </span>
                <IconComponent className="h-4 w-4 text-[#9C724A]" />
              </div>

              <h4 className="font-display font-medium text-base text-[#17324F]">
                {step.title}
              </h4>
              <p className="text-xs text-steel leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
