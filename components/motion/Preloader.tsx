"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    // Skip preloader if already loaded in this session to prevent repetitive interruptions
    const alreadyShown = sessionStorage.getItem("ds_loaded");
    if (alreadyShown) {
      setVisible(false);
      return;
    }

    // Dynamic counter from 0 to 100
    let start = 0;
    const duration = 1500; // 1.5s total loading duration
    const stepTime = Math.floor(duration / 100);

    const timer = setInterval(() => {
      start += 1;
      if (start >= 100) {
        start = 100;
        clearInterval(timer);
        
        // Wait a split second at 100%, then trigger sliding panels
        setTimeout(() => {
          setStartExit(true);
          // Complete removal after animations finish
          setTimeout(() => {
            sessionStorage.setItem("ds_loaded", "1");
            setVisible(false);
          }, 900);
        }, 150);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!startExit && (
        <div className="fixed inset-0 z-[99999] overflow-hidden pointer-events-none flex items-center justify-center">
          {/* Top Panel Door */}
          <motion.div
            key="top-door"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.85, ease: [0.85, 0, 0.15, 1] }}
            className="absolute inset-x-0 top-0 h-1/2 bg-[#0d1d2f] pointer-events-auto border-b border-white/5"
          />

          {/* Bottom Panel Door */}
          <motion.div
            key="bottom-door"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.85, ease: [0.85, 0, 0.15, 1] }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0d1d2f] pointer-events-auto border-t border-white/5"
          />

          {/* Core branding & progress content */}
          <motion.div
            key="loader-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-[100000] flex flex-col items-center justify-center text-center gap-6"
          >
            {/* SVG Compression Calibration Spring */}
            <div className="relative h-28 w-28 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-4 shadow-xl">
              {/* Vertical center axis line */}
              <div className="absolute top-2 bottom-2 left-[55px] w-[1px] bg-white/10 border-dashed" />
              
              <svg viewBox="0 0 80 160" className="w-full h-full overflow-visible">
                {/* Helical coil path, scaleY is linked directly to counter progress, compressing as count goes to 100 */}
                <motion.path
                  d="M 40,15 
                     C 70,15 70,35 40,40 
                     C 10,45 10,65 40,70 
                     C 70,75 70,95 40,100 
                     C 10,105 10,125 40,130 
                     C 70,135 70,145 40,145"
                  fill="none"
                  stroke="#b98f5e"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ 
                    scaleY: 1 - (count / 100) * 0.42, // Compresses by 42% at 100% progress
                    originY: 0
                  }}
                />
              </svg>
            </div>

            {/* Shifting brand progress tags */}
            <div className="space-y-1">
              <motion.span 
                initial={{ letterSpacing: "0.15em" }}
                animate={{ letterSpacing: "0.32em" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="block font-mono text-[13px] font-bold uppercase text-white"
              >
                Darbar Springwala
              </motion.span>
              <span className="block font-mono text-[9px] tracking-[0.2em] uppercase text-[#b98f5e]">
                Precision In Progress
              </span>
            </div>

            {/* Percentage counter */}
            <div className="font-mono text-4xl font-extrabold text-white/95 tabular-nums">
              {String(count).padStart(3, "0")}<span className="text-xs text-[#b98f5e] font-normal ml-0.5">%</span>
            </div>

            {/* Blueprint progress tracking lines */}
            <div className="w-[180px] h-[3px] bg-white/10 rounded-full overflow-hidden relative border border-white/5">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#9c724a] to-[#b98f5e]"
                style={{ width: `${count}%` }}
              />
            </div>
            <span className="font-mono text-[8px] uppercase tracking-wider text-[#89919b]">
              Calibrating Elastic Limit
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
