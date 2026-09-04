"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cpu, ChevronRight, ChevronDown } from "lucide-react";

interface SpecParam {
  id: string;
  name: string;
  symbol: string;
  range: string;
  desc: string;
  compliance: string;
  impact: string;
}

const SPEC_PARAMETERS: SpecParam[] = [
  {
    id: "wire-dia",
    name: "Wire Diameter",
    symbol: "d",
    range: "0.20mm — 16.00mm",
    desc: "Governs spring stiffness and peak load capacity. We process cold-drawn high-tensile wire conforming to IS 4454 & DIN 17223.",
    compliance: "ISO 9001:2015 / DIN 2095 Grade 1",
    impact: "Stiffness increases proportionally to the 4th power of wire diameter (d⁴)."
  },
  {
    id: "outer-dia",
    name: "Outer Diameter",
    symbol: "D_o",
    range: "2.00mm — 250.00mm",
    desc: "Specifies outer envelope constraints for housing, bore holes, or guide shafts during assembly insertion.",
    compliance: "IS 7906 Part 1 Tolerance",
    impact: "Controls mean diameter (D) and coil expansion under compression load."
  },
  {
    id: "free-length",
    name: "Free Length",
    symbol: "L_0",
    range: "3.00mm — 600.00mm",
    desc: "Unloaded overall height from end-to-end before force application. Verified using non-contact optical projectors.",
    compliance: "DIN 2095 Free Length Class A/B",
    impact: "Dictates initial installed preload height and total working stroke."
  },
  {
    id: "active-coils",
    name: "Active Coils",
    symbol: "n",
    range: "2.0 — 50.0 Coils",
    desc: "Number of complete helical coils that absorb energy under deflection, excluding squared or ground end coils.",
    compliance: "DIN 2097 Torsion & Compression",
    impact: "Spring rate varies inversely with the number of active coils (1/n)."
  },
  {
    id: "spring-rate",
    name: "Spring Rate",
    symbol: "k",
    range: "0.10 N/mm — 850.00 N/mm",
    desc: "Mechanical force output produced per unit of axial deflection. Verified using digital load testers.",
    compliance: "Calibrated Digital Load Cell Audit",
    impact: "Defines linear or progressive force response across working compression."
  }
];

export default function InteractiveSpecGuide() {
  const [selectedId, setSelectedId] = useState<string>(SPEC_PARAMETERS[0].id);

  const selectedSpec = SPEC_PARAMETERS.find((s) => s.id === selectedId) || SPEC_PARAMETERS[0];

  return (
    <div>
      {/* 1. Desktop Side-by-Side Blueprint Layout (Hidden on Mobile < lg) */}
      <div className="hidden lg:grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Left Column: Parameter List */}
        <div className="space-y-3">
          {SPEC_PARAMETERS.map((spec) => {
            const isSelected = selectedId === spec.id;
            return (
              <button
                key={spec.id}
                onClick={() => setSelectedId(spec.id)}
                className={`w-full text-left p-[22px] rounded-[2px] border transition-all duration-120 relative flex items-center justify-between min-h-[52px] ${
                  isSelected
                    ? "border-[#17324F] bg-[#17324F] text-white shadow-sm"
                    : "border-[#17324F]/15 bg-white hover:border-[#17324F] hover:bg-[#FBFAF7] text-[#17324F]"
                }`}
              >
                {/* Left Accent Bar (2px bronze) */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors ${
                    isSelected ? "bg-[#9C724A]" : "bg-transparent"
                  }`}
                />

                <div className="flex items-center gap-3 pl-2">
                  <span className={`font-mono text-xs font-medium ${isSelected ? "text-[#E5C158]" : "text-[#9C724A]"}`}>
                    [{spec.symbol}]
                  </span>
                  <span className={`font-display font-medium text-base ${isSelected ? "text-white" : "text-[#17324F]"}`}>
                    {spec.name}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs font-medium ${isSelected ? "text-white/80" : "text-steel"}`}>
                    {spec.range}
                  </span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? "text-[#E5C158] translate-x-1" : "text-steel-2"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Spec Blueprint Detail Panel */}
        <div className="rounded-[2px] border border-[#17324F]/15 bg-white p-8 relative min-h-[360px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSpec.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-medium text-steel-2 uppercase tracking-widest">
                    Blueprint Parameter Detail
                  </span>
                  <span className="font-mono text-xs text-[#9C724A] font-medium bg-[#9C724A]/10 px-2.5 py-0.5 rounded-[2px]">
                    SYMBOL: {selectedSpec.symbol}
                  </span>
                </div>

                <div className="mt-4 border-l-2 border-[#9C724A] pl-4">
                  <h3 className="text-2xl font-semibold text-[#17324F] font-display">
                    {selectedSpec.name}
                  </h3>
                  <p className="text-xs font-mono text-[#9C724A] font-medium mt-1">
                    Manufacturing Limit Range: {selectedSpec.range}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-steel">
                  {selectedSpec.desc}
                </p>
              </div>

              <div className="rounded-[2px] bg-[#FBFAF7] border border-[#17324F]/10 p-4 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-medium text-[#17324F]">
                  <Cpu className="h-4 w-4 text-[#9C724A]" />
                  <span>Kinematic Impact:</span>
                </div>
                <p className="text-xs text-steel leading-relaxed">
                  {selectedSpec.impact}
                </p>
              </div>

              <div className="border-t border-[#17324F]/10 pt-4 flex items-center gap-3 text-xs">
                <ShieldCheck className="h-5 w-5 text-[#9C724A] shrink-0" />
                <div>
                  <span className="font-mono text-[11px] font-medium text-[#17324F] uppercase tracking-wider block">Quality Compliance Standard</span>
                  <span className="text-steel">{selectedSpec.compliance}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. Mobile Touch-Native Inline Accordion (< lg screens) */}
      <div className="lg:hidden space-y-3">
        {SPEC_PARAMETERS.map((spec) => {
          const isOpen = selectedId === spec.id;
          return (
            <div
              key={spec.id}
              className={`rounded-[2px] border transition-all duration-120 overflow-hidden ${
                isOpen
                  ? "border-[#17324F] bg-white shadow-sm"
                  : "border-[#17324F]/15 bg-white"
              }`}
            >
              {/* Accordion Tap Header with 44px minimum tap target */}
              <button
                onClick={() => setSelectedId(isOpen ? "" : spec.id)}
                className={`w-full text-left p-4 flex items-center justify-between min-h-[48px] active:bg-[#FBFAF7] transition-colors relative ${
                  isOpen ? "bg-[#17324F] text-white" : "text-[#17324F]"
                }`}
              >
                {/* Left 2px bronze accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors ${
                    isOpen ? "bg-[#9C724A]" : "bg-transparent"
                  }`}
                />

                <div className="flex items-center gap-2.5 pl-1">
                  <span className={`font-mono text-xs font-medium ${isOpen ? "text-[#E5C158]" : "text-[#9C724A]"}`}>
                    [{spec.symbol}]
                  </span>
                  <span className="font-display font-medium text-sm sm:text-base">
                    {spec.name}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`font-mono text-[10px] font-medium ${isOpen ? "text-white/80" : "text-steel"}`}>
                    {spec.range}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#E5C158]" : "text-steel-2"}`} />
                </div>
              </button>

              {/* Inline Expanded Detail Content powered by AnimatePresence */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-5 border-t border-[#17324F]/10 bg-[#FBFAF7] space-y-4 text-xs">
                      <div>
                        <span className="font-mono text-[10px] font-medium text-[#9C724A] uppercase tracking-wider block">
                          Limit Range: {spec.range}
                        </span>
                        <p className="mt-2 text-steel leading-relaxed">
                          {spec.desc}
                        </p>
                      </div>

                      <div className="bg-white border border-[#17324F]/10 p-3 rounded-[2px] space-y-1">
                        <div className="flex items-center gap-1.5 font-mono text-[11px] font-medium text-[#17324F]">
                          <Cpu className="h-3.5 w-3.5 text-[#9C724A]" />
                          <span>Kinematic Impact:</span>
                        </div>
                        <p className="text-steel leading-relaxed">
                          {spec.impact}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-1 border-t border-[#17324F]/10">
                        <ShieldCheck className="h-4 w-4 text-[#9C724A] shrink-0" />
                        <span className="font-mono text-[10px] text-steel font-medium">
                          {spec.compliance}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
