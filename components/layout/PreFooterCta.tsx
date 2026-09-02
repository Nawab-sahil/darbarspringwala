"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, Cpu, Award } from "lucide-react";
import { contactInfo } from "../../lib/site";

export default function PreFooterCta() {
  return (
    <section className="relative bg-[#f7f9fa] py-16 sm:py-24 overflow-hidden border-t border-line/60">
      {/* Ambient technical dot matrix background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #17324f 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[32px] bg-[#081423] border border-[#9C724A]/30 p-8 sm:p-12 lg:p-14 text-white shadow-2xl"
        >
          {/* Ambient Gold Radial Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9C724A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#17324F]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative Animated Dashed Concentric Coil Circle Graphic */}
          <div className="absolute right-[-20px] top-[-20px] sm:right-[-30px] sm:top-[-30px] opacity-20 pointer-events-none z-0">
            <motion.svg
              width="300"
              height="300"
              viewBox="0 0 200 200"
              className="w-[240px] h-[240px] sm:w-[360px] sm:h-[360px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="100" cy="100" r="85" fill="none" stroke="#9C724A" strokeWidth="2" strokeDasharray="6 8" />
              <circle cx="100" cy="100" r="62" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 7" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#9C724A" strokeWidth="1" strokeDasharray="3 5" />
            </motion.svg>
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9C724A]/20 border border-[#9C724A]/40 text-[#E5C158] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider"
              >
                <span className="h-2 w-2 rounded-full bg-[#9C724A] animate-pulse" />
                PRECISION ENGINEERING SINCE 1990
              </motion.div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
                Ready to Elevate Your Production with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5C158] to-[#9C724A]">Custom Springs?</span>
              </h2>

              {/* Subtitle */}
              <p className="text-steel-2/90 text-xs sm:text-base leading-relaxed max-w-2xl">
                Consult directly with Jamnagar&apos;s leading industrial spring engineers. Get high-precision CAD prototyping, certified metallurgy, and custom volume manufacturing quotes within 24 hours.
              </p>

              {/* Trust Features Badges */}
              <div className="pt-2 flex flex-wrap gap-4 sm:gap-6 text-[11px] sm:text-xs text-white/80 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#9C724A]" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[#9C724A]" />
                  <span>CNC Multi-Axis Coiling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#9C724A]" />
                  <span>100% Load Tested</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4 pt-2 lg:pt-0">
              <Link
                href="/contact"
                className="group relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#9C724A] to-[#825B36] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#9C724A]/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-[#9C724A]/40 active:scale-[0.98]"
              >
                <span>REQUEST CUSTOM QUOTE</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:border-white/30"
              >
                <PhoneCall className="h-4 w-4 text-[#9C724A]" />
                <span>CALL SALES DIRECT</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
